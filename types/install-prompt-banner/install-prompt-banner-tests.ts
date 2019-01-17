import InstallPrompt from 'install-prompt-banner';
// initial installPromptBanner
const installPromptBanner = new InstallPrompt();

// add 1 count when user do some interactive
installPromptBanner.addCount();

// check if prompt should popup
installPromptBanner.checkPrompt();

installPromptBanner = new InstallPrompt({
  promptKey: 'custom-localstorage-key',
  minumumPrompt: 5
});
