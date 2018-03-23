declare const FBInstant: FBInstant;

export class FBInstantTest {
    winStreak: number;

    init() {
        FBInstant.initializeAsync().then(() => {
            FBInstant.setLoadingProgress(100);
            FBInstant.startGameAsync().then(() => {
                this.startGame();
            });
        });
    }

    startGame() {
        const contextId = FBInstant.context.getID();
        const contextType = FBInstant.context.getType();

        const playerName = FBInstant.player.getName();
        const playerPic = FBInstant.player.getPhoto();
        const playerId = FBInstant.player.getID();
    }

    saveState() {
        FBInstant.player.setDataAsync({
            score: this.winStreak
        });
    }

    getState() {
        FBInstant.player.getDataAsync(['score'])
            .then((data) => {
                if (typeof data['score'] !== 'undefined') {
                    this.winStreak = +data['score'];
                }
            });
    }

    update() {
        FBInstant.updateAsync({
            action: 'CUSTOM',
            cta: 'Play',
            image: '',
            text: {
                default: 'Edgar played their move',
                localizations: {
                    en_US: 'Edgar played their move',
                    es_LA: '\u00A1Edgar jug\u00F3 su jugada!'
                }
            },
            template: 'play_turn',
            data: { myReplayData: '...' },
            strategy: 'IMMEDIATE',
            notification: 'NO_PUSH'
        }).then(() => {
            // closes the game after the update is posted.
            FBInstant.quit();
        });
    }
}
