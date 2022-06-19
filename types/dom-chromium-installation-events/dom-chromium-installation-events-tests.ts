const handleBeforeInstallPrompt = (event: BeforeInstallPromptEvent) => {
    // $ExpectType BeforeInstallPromptEventPlatform[]
    const platforms = event.platforms;
    // $ExpectType Promise<void>
    const promptResult = event.prompt();
    // $ExpectType Promise<PromptResponseObject>
    const userChoiceResult = event.userChoice;
};

window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

window.onbeforeinstallprompt = handleBeforeInstallPrompt;

window.onappinstalled = () => {};
