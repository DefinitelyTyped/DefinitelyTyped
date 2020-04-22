import { Client, Channel, Bridge } from 'ari-client';
import { EventEmitter } from 'events';
import Pino from 'pino';
import config from 'config';

// TypeScript version of https://github.com/nimbleape/dana-tsg-ari-bridge/blob/master/lib/Bridge.js

export default class TsgBridge extends EventEmitter {
    logger: Pino.Logger;
    ariClient: Client;
    bridge: Bridge;

    constructor(ariClient: Client, exten: string, log: any) {
        super();
        this.logger = log.child({ bridgeName: exten });
        this.ariClient = ariClient;
    }

    async create() {
        this.bridge = this.ariClient.Bridge();
        await this.bridge.create({ type: 'video_sfu,mixing' });
        this.bridge.on('ChannelLeftBridge', event => {
            this.logger.info(event, 'Channel left bridge');
            if (event.bridge.channels.length === 0) {
                this.emit('empty');
            }
        });
        return this.bridge;
    }

    async destroy() {
        let destroyed = await this.bridge.destroy();
        return destroyed;
    }

    async addChannel(channel: Channel) {
        await this.bridge.addChannel({ channel: channel.id });

        //check if we actually want to snoop
        if (config.get('rtpServer.host')) {
            //create the bridge that'll link the snooping channel & externalMedia channels
            let snoopBridge = this.ariClient.Bridge();
            let externalMediaChannel = this.ariClient.Channel();
            let externalMediaUdpSourcePort: number;
            let callerName = channel.caller.name || 'Unknown';

            let bridgeRes = await snoopBridge.create({ type: 'mixing', name: `${channel.id}-snooping-bridge` });
            this.logger.info('created a bridge for the snoop & externalMedia');

            let snoopOptions = {
                app: <string>config.get('ari.appName'),
                appArgs: 'snooping',
                channelId: channel.id,
                snoopId: channel.id + '_snoop',
                spy: 'in',
            };

            //create the external Media channel
            let snoopChannelRes = await this.ariClient.channels.snoopChannelWithId(snoopOptions);
            this.logger.info('created a snooping channel');

            snoopBridge.addChannel({ channel: snoopChannelRes.id });
            snoopChannelRes.on('StasisEnd', () => {
                this.logger.info('snoop channel ended');
                externalMediaChannel.hangup();
            });

            externalMediaChannel.on('StasisStart', (event, channel) => {
                this.logger.info(event, 'got a stasisStart event on the externalMediaChannel');
                snoopBridge.addChannel({ channel: channel.id });
            });

            externalMediaChannel.on('StasisEnd', () => {
                this.logger.info('external media channel ended');
                snoopBridge.destroy();
                this.emit('streamEnded', {
                    roomName: channel.dialplan.exten,
                    port: externalMediaUdpSourcePort,
                    callerName: callerName,
                    channelId: channel.id,
                });
            });

            let externalMediaOptions = {
                app: <string>config.get('ari.appName'),
                external_host: `${config.get('rtpServer.host')}:${config.get('rtpServer.port')}`,
                format: <string>config.get('rtpServer.format'),
            };

            let externalMediaRes = await externalMediaChannel.externalMedia(externalMediaOptions);

            //set the externalMediaSourcePort
            externalMediaUdpSourcePort = externalMediaRes.channelvars?.UNICASTRTP_LOCAL_PORT;

            this.emit('newStream', {
                roomName: channel.dialplan.exten,
                port: externalMediaUdpSourcePort,
                callerName: callerName,
                channelId: channel.id,
            });

            this.logger.info('created an externalMedia channel');
        }
    }
}
