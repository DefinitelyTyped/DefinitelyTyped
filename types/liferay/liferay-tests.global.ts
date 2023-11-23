Liferay.authToken; // $ExpectType string

Liferay.Language.available; // $ExpectType string[]
Liferay.Language.get("key"); // $ExpectType string

Liferay.ThemeDisplay.isImpersonated(); // $ExpectType boolean
Liferay.ThemeDisplay.getDoAsUserIdEncoded(); // $ExpectType string
Liferay.ThemeDisplay.isSignedIn(); // $ExpectType boolean
Liferay.ThemeDisplay.getLanguageId(); // $ExpectType string
Liferay.ThemeDisplay.getDefaultLanguageId(); // $ExpectType string
Liferay.ThemeDisplay.getPlid(); // $ExpectType string
Liferay.ThemeDisplay.getScopeGroupId(); // $ExpectType string
Liferay.ThemeDisplay.getLayoutRelativeURL(); // $ExpectType string
Liferay.ThemeDisplay.getCompanyGroupId(); // $ExpectType string
Liferay.ThemeDisplay.getSiteGroupId(); // $ExpectType string
Liferay.ThemeDisplay.getCompanyId(); // $ExpectType string
Liferay.ThemeDisplay.getLayoutId(); // $ExpectType string
Liferay.ThemeDisplay.getParentLayoutId(); // $ExpectType string
Liferay.ThemeDisplay.getUserId(); // $ExpectType string
Liferay.ThemeDisplay.getUserEmailAddress(); // $ExpectType string
Liferay.ThemeDisplay.getUserName(); // $ExpectType string
Liferay.ThemeDisplay.getPathThemeRoot(); // $ExpectType string
Liferay.ThemeDisplay.getPathThemeImages(); // $ExpectType string
Liferay.ThemeDisplay.getCDNBaseURL(); // $ExpectType string

// $ExpectType void
Liferay.Util.openToast({
    title: "title",
    message: "message",
    type: "success",
    autoClose: 5000,
});

Liferay.Service("/user/get-current-user-id"); // $ExpectType Promise<unknown>
Liferay.Loader.require("some-module"); // $ExpectType void
