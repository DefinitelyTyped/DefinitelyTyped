// Microsoft Teams tests
// Project: https://github.com/OfficeDev/microsoft-teams-library-js

/**
 * Sample code for TypeChecking
 * [Not an example]
 */
(() => {
  microsoftTeams.getContext(context => {
    const { upn, channelId } = context;
  });

  microsoftTeams.settings.getSettings(settings => {
    const { contentUrl, entityId } = settings;
  });

  microsoftTeams.initialize();

  microsoftTeams.navigateCrossDomain('https://bing.com');

  microsoftTeams.registerOnThemeChangeHandler(theme => {
    microsoftTeams.shareDeepLink({
      subEntityId: '',
      subEntityLabel: theme,
      subEntityWebUrl: ''
    });
  });

  microsoftTeams.authentication.authenticate({
    failureCallback: () => { },
    height: 200,
    width: 200,
    url: '',
    successCallback: done => { }
  });
})();
