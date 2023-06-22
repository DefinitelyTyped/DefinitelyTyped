import * as mc from 'mojang-minecraft';

const overworld = mc.world.getDimension('overworld');

export async function showActionForm(log: (message: string, status?: number) => void, targetLocation: mc.Location) {
    const players = mc.world.getPlayers();

    const playerList = Array.from(players);

    if (playerList.length >= 1) {
        const form = new mcui.ActionFormData()
            .title('Test Title')
            .body('Body text here!')
            .button('btn 1')
            .button('btn 2')
            .button('btn 3')
            .button('btn 4')
            .button('btn 5');

        const result = await form.show(playerList[0]);

        if (result.isCanceled) {
            log('Player exited out of the dialog.');
        } else {
            log('Your result was: ' + result.selection);
        }
    }
}

export function showFavoriteMonth(log: (message: string, status?: number) => void, targetLocation: mc.Location) {
    const players = mc.world.getPlayers();

    const playerList = Array.from(players);

    if (playerList.length >= 1) {
        const form = new mcui.ActionFormData()
            .title('Months')
            .body('Choose your favorite month!')
            .button('January')
            .button('February')
            .button('March')
            .button('April')
            .button('May');

        form.show(playerList[0]).then((response: mcui.ActionFormResponse) => {
            if (response.selection === 3) {
                log('I like April too!');
            }
        });
    }
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

import * as mcui from 'mojang-minecraft-ui';

const mojangMinecraftUIFuncs: {
    [name: string]: Array<(log: (message: string, status?: number) => void, location: mc.Location) => void>;
} = {
    showActionForm: [showActionForm],
    showFavoriteMonth: [showFavoriteMonth],
};

export function register(sampleManager: SampleManager) {
    sampleManager.registerSamples(mojangMinecraftUIFuncs);
}
