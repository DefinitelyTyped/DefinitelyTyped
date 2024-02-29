// Microsoft Teams tests
// Project: https://github.com/OfficeDev/microsoft-teams-library-js

/**
 * Sample code for TypeChecking
 * [Not an example]
 */
(() => {
    microsoftTeams.getContext(context => {
        const {
            appIconPosition,
            appSessionId,
            channelId,
            channelName,
            channelRelativeUrl,
            channelType,
            chatId,
            defaultOneNoteSectionId,
            entityId,
            frameContext,
            groupId,
            hostClientType,
            hostTeamGroupId,
            hostTeamTenantId,
            isCallingAllowed,
            isFullScreen,
            isMultiWindow,
            isPSTNCallingAllowed,
            isTeamArchived,
            locale,
            loginHint,
            meetingId,
            osLocaleInfo,
            parentMessageId,
            ringId,
            sessionId,
            sharepoint,
            sourceOrigin,
            subEntityId,
            teamId,
            teamName,
            teamSiteDomain,
            teamSitePath,
            teamSiteUrl,
            teamTemplateId,
            teamType,
            tenantSKU,
            theme,
            tid,
            upn,
            userClickTime,
            userFileOpenPreference,
            userLicenseType,
            userObjectId,
            userPrincipalName,
            userTeamRole,
        } = context;
        context.isFullScreen = true;
    });

    microsoftTeams.settings.getSettings(settings => {
        const { contentUrl, entityId } = settings;
    });

    microsoftTeams.initialize();

    microsoftTeams.navigateCrossDomain("https://bing.com");

    microsoftTeams.registerOnThemeChangeHandler(theme => {
        microsoftTeams.shareDeepLink({
            subEntityId: "",
            subEntityLabel: theme,
            subEntityWebUrl: "",
        });
    });

    microsoftTeams.authentication.authenticate({
        failureCallback: () => {},
        height: 200,
        width: 200,
        url: "",
        successCallback: done => {},
    });

    microsoftTeams.getTabInstances(tabInfo => {
        const tabInstances: microsoftTeams.TabInstance[] = tabInfo.teamTabs;
    });

    microsoftTeams.getMruTabInstances(tabInfo => {
        const tabInstances: microsoftTeams.TabInstance[] = tabInfo.teamTabs;
    });
})();
