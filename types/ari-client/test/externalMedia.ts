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

    destroy() {
        return this.bridge.destroy();
    }

    async addChannel(channel: Channel) {
        await this.bridge.addChannel({ channel: channel.id });

        // check if we actually want to snoop
        if (config.get('rtpServer.host')) {
            // create the bridge that'll link the snooping channel & externalMedia channels
            const snoopBridge = this.ariClient.Bridge();
            const externalMediaChannel = this.ariClient.Channel();
            let externalMediaUdpSourcePort: number;
            const callerName = channel.caller.name || 'Unknown';
            const app: string = config.get('ari.appName');
            const format: string = config.get('rtpServer.format');

            await snoopBridge.create({ type: 'mixing', name: `${channel.id}-snooping-bridge` });
            this.logger.info('created a bridge for the snoop & externalMedia');

            const snoopOptions = {
                app,
                appArgs: 'snooping',
                channelId: channel.id,
                snoopId: channel.id + '_snoop',
                spy: 'in',
            };

            // create the external Media channel
            const snoopChannelRes = await this.ariClient.channels.snoopChannelWithId(snoopOptions);
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
                    callerName,
                    channelId: channel.id,
                });
            });

            const externalMediaOptions = {
                app,
                external_host: `${config.get('rtpServer.host')}:${config.get('rtpServer.port')}`,
                format,
            };

            const externalMediaRes = await externalMediaChannel.externalMedia(externalMediaOptions);

            // set the externalMediaSourcePort
            externalMediaUdpSourcePort = externalMediaRes.channelvars
                ? externalMediaRes.channelvars.UNICASTRTP_LOCAL_PORT
                : undefined;

            this.emit('newStream', {
                roomName: channel.dialplan.exten,
                port: externalMediaUdpSourcePort,
                callerName,
                channelId: channel.id,
            });

            this.logger.info('created an externalMedia channel');
        }
    }
}
