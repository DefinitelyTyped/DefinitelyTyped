import { EUWA } from '@puzzel/euwa-wrapper';

const euwa = new EUWA(
    {
        configId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
        customerKey: '1234567',
    },
    {
        settings: {
            [EUWA.APPS.CHAT]: {
                showStarter: true,
            },
        },
    },
);

(async () => {
    if (euwa && EUWA.APPS.CHAT) {
        const chat = await euwa.getApplication(EUWA.APPS.CHAT);
        const agentsOnline = Object.keys(chat.api).length > 0;
        const { isConnected, isEnded, isMinimized } = chat.api.getState();

        if (agentsOnline && !isConnected) {
            // $ExpectType void
            chat.api.startChat();

            // Optional: update some system variables
            chat.api.updateSystemVariables({
                enteredFormName: 'Name Surname',
                enteredChatId: 'name@example.com',
                enteredFormIssue: 'I need help with my order',
                selectedQueueKey: 'q_cookies_problems',
                timeId2Map: 'cookiesQueueWorkingTime',
            });
        }
    }
})();
