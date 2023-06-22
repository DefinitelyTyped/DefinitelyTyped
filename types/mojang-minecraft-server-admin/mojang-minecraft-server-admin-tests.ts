import * as mc from 'mojang-minecraft';

const overworld = mc.world.getDimension('overworld');

export async function getPlayerProfile(log: (message: string, status?: number) => void, targetLocation: mc.Location) {
    const serverUrl = mcsa.variables.get('serverEndpoint');

    const req = new mcnet.HttpRequest(serverUrl + 'getPlayerProfile');

    req.body = JSON.stringify({
        playerId: 'johndoe',
    });

    req.method = mcnet.HttpRequestMethod.POST;
    req.headers = [
        new mcnet.HttpHeader('Content-Type', 'application/json'),
        new mcnet.HttpHeader('auth', mcsa.secrets.get('authtoken')),
    ];

    const response: any = await mcnet.http.request(req);
}

export default class SampleManager {
    tickCount = 0;

    _availableFuncs: {
        [name: string]: Array<(log: (message: string, status?: number) => void, location: mc.Location) => void>;
    };

    pendingFuncs: Array<{
        name: string;
        func: (log: (message: string, status?: number) => void, location: mc.Location) => void;
        location: mc.Location;
    }> = [];

    gameplayLogger(message: string, status?: number) {
        if (status !== undefined && status > 0) {
            message = 'SUCCESS: ' + message;
        } else if (status !== undefined && status < 0) {
            message = 'FAIL: ' + message;
        }

        this.say(message);
    }
    say(message: string) {
        mc.world.getDimension('overworld').runCommand('say ' + message);
    }

    newChatMessage(chatEvent: mc.ChatEvent) {
        const message = chatEvent.message.toLowerCase();

        if (message.startsWith('howto') && chatEvent.sender) {
            const nearbyBlock = chatEvent.sender.getBlockFromViewVector();
            if (!nearbyBlock) {
                this.gameplayLogger('Please look at the block where you want me to run this.');
                return;
            }

            const nearbyBlockLoc = nearbyBlock.location;
            const nearbyLoc = new mc.Location(nearbyBlockLoc.x, nearbyBlockLoc.y + 1, nearbyBlockLoc.z);

            const sampleId = message.substring(5).trim();

            if (sampleId.length < 2) {
                let availableFuncStr = 'Here is my list of available samples:';

                for (const sampleFuncKey in this._availableFuncs) {
                    availableFuncStr += ' ' + sampleFuncKey;
                }

                this.say(availableFuncStr);
            } else {
                for (const sampleFuncKey in this._availableFuncs) {
                    if (sampleFuncKey.toLowerCase() === sampleId) {
                        const sampleFunc = this._availableFuncs[sampleFuncKey];

                        this.runSample(sampleFuncKey + this.tickCount, sampleFunc, nearbyLoc);

                        return;
                    }
                }

                this.say(`I couldn't find the sample '${sampleId}"'`);
            }
        }
    }

    runSample(
        sampleId: string,
        snippetFunctions: Array<(log: (message: string, status?: number) => void, location: mc.Location) => void>,
        targetLocation: mc.Location,
    ) {
        for (let i = snippetFunctions.length - 1; i >= 0; i--) {
            this.pendingFuncs.push({ name: sampleId, func: snippetFunctions[i], location: targetLocation });
        }
    }

    worldTick() {
        if (this.tickCount % 10 === 0) {
            if (this.pendingFuncs.length > 0) {
                const funcSet = this.pendingFuncs.pop();

                if (funcSet) {
                    funcSet.func(this.gameplayLogger, funcSet.location);
                }
            }
        }

        this.tickCount++;
    }

    constructor() {
        this._availableFuncs = {};

        this.gameplayLogger = this.gameplayLogger.bind(this);

        mc.world.events.tick.subscribe(this.worldTick.bind(this));
        mc.world.events.chat.subscribe(this.newChatMessage.bind(this));
    }

    registerSamples(sampleSet: {
        [name: string]: Array<(log: (message: string, status?: number) => void, location: mc.Location) => void>;
    }) {
        for (const sampleKey in sampleSet) {
            if (sampleKey.length > 1 && sampleSet[sampleKey]) {
                this._availableFuncs[sampleKey] = sampleSet[sampleKey];
            }
        }
    }
}

import * as mcsa from 'mojang-minecraft-server-admin';
import * as mcnet from 'mojang-net';

const mojangServerAdminTestFuncs: {
    [name: string]: Array<(log: (message: string, status?: number) => void, location: mc.Location) => void>;
} = {
    getPlayerProfile: [getPlayerProfile],
};

export function register(sampleManager: SampleManager) {
    sampleManager.registerSamples(mojangServerAdminTestFuncs);
}
