class Server implements App {
    private readonly usersPlaying = new Map<string, number>();
    private isShuttingDown = false;

    private readonly htmlFile: HTMLFile = new HTMLFile('start.html');
    private readonly appContent: AppContent = AppContent.overlayContent(this.htmlFile, 243, 266);

    onAppStart() {
        KnuddelsServer.getChannel()
            .getOnlineUsers(UserType.Human)
            .forEach((user: User) => {
                this.onUserJoined(user);
            });
    }

    onUserJoined(user: User) {
        const botNick = KnuddelsServer.getDefaultBotUser()
            .getNick()
            .escapeKCode();
        user.sendPrivateMessage(`Lust auf ne Runde Ziegenphobie? Mit nur _°BB>_h1 Knuddel|/appknuddel ${botNick}<°°°_ bist du dabei!`);
    }

    onUserLeft(user: User) {
        if (this.usersPlaying.get(user.getNick()) === 1) {
            KnuddelsServer.getDefaultBotUser()
                .transferKnuddel(user, new KnuddelAmount(1), {
                    displayReasonText: 'Du hast den Channel verlassen.'
                });

            this.usersPlaying.delete(user.getNick());
        }
    }

    onPrepareShutdown() {
        if (!this.isShuttingDown) {
            this.isShuttingDown = true;

            for (const key in this.usersPlaying) {
                const userId = KnuddelsServer.getUserAccess()
                    .getUserId(key);
                const user = KnuddelsServer.getUserAccess()
                    .getUserById(userId);

                    KnuddelsServer.getDefaultBotUser()
                    .transferKnuddel(user, new KnuddelAmount(1), {
                        displayReasonText: 'Die App fährt gleich herunter.'
                    });
                user.getAppContentSessions()
                    .forEach((session: AppContentSession) => {
                        session.remove();
                    });

                this.usersPlaying.delete(key);
            }
        }
    }

    onBeforeKnuddelReceived(knuddelTransfer: KnuddelTransfer) {
        const sender = knuddelTransfer.getSender();

        if (!sender.canSendAppContent(this.appContent)) {
            knuddelTransfer.reject('Sorry, mit diesem Gerät kannst du gerade nicht spielen.');
        } else if (sender.isChannelOwner() && knuddelTransfer.getKnuddelAmount()
                .asNumber() !== 1) {
            knuddelTransfer.accept();
        } else if (this.isShuttingDown) {
            knuddelTransfer.reject('Du App nimmt gerade keine neuen Spieler an.');
        } else if (this.usersPlaying.get(sender.getNick())) {
            knuddelTransfer.reject('Du spielst bereits.');
        } else if (knuddelTransfer.getKnuddelAmount().asNumber() !== 1) {
            const botNick = KnuddelsServer.getDefaultBotUser()
                .getNick()
                .escapeKCode();
            knuddelTransfer.reject(`Du musst genau _°BB>_h1 Knuddel senden|/appknuddel ${botNick}<°°°_...`);
        } else {
            knuddelTransfer.accept();
        }
    }

    onKnuddelReceived(user: User, receiver: User, knuddelAmount: KnuddelAmount) {
        if (knuddelAmount.asNumber() === 1) {
            this.usersPlaying.set(user.getNick(), 1);
            user.sendAppContent(this.appContent);
        } else {
            user.sendPrivateMessage('Vielen Dank für die Einzahlung.');
        }
    }

    onEventReceived(user: User, key: string, data: string) {
        if (key === 'selectedEntry' && this.usersPlaying.get(user.getNick()) === 1) {
            this.usersPlaying.set(user.getNick(), 2);

            setTimeout(() => {
                const doorNumber = parseInt(data[data.length - 1], 10);
                const winningDoorNumber = RandomOperations.nextInt(0, 2) + 1;
                const hasWon = winningDoorNumber === doorNumber;
                const text = hasWon
                    ? 'Richtig getippt'
                    : 'Knapp daneben';

                user.getAppContentSession(AppViewMode.Overlay)
                    .getAppContent()
                    .sendEvent('openDoor', {
                        door: doorNumber,
                        winningDoor: winningDoorNumber,
                        text,
                    });

                if (hasWon) {
                    KnuddelsServer.getDefaultBotUser()
                        .transferKnuddel(user, new KnuddelAmount(2), {
                            displayReasonText: 'Richtig getippt...'
                        });
                }

                setTimeout(() => {
                    const botNick = KnuddelsServer.getDefaultBotUser()
                        .getNick()
                        .escapeKCode();
                    user.sendPrivateMessage(`Na, Lust auf _°BB>_hnoch eine Runde|/appknuddel ${botNick}<°°°_?`);
                    user.getAppContentSessions()
                        .forEach((session: AppContentSession) => {
                            session.remove();
                        });
                    this.usersPlaying.delete(user.getNick());
                }, 4000);
            }, 1500);
        }
    }
}

declare let App: Server; // tell the compiler that "App" will be available

App = new Server();
