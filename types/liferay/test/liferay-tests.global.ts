Liferay.authToken; // $ExpectType string

Liferay.Language.available; // $ExpectType string[]
Liferay.Language.get("key"); // $ExpectType string

Liferay.ThemeDisplay.isImpersonated(); // $ExpectType boolean
Liferay.ThemeDisplay.getDoAsUserIdEncoded(); // $ExpectType string
Liferay.ThemeDisplay.isSignedIn(); // $ExpectType boolean
Liferay.ThemeDisplay.getLanguageId(); // $ExpectType string
Liferay.ThemeDisplay.getPlid(); // $ExpectType string
Liferay.ThemeDisplay.getScopeGroupId(); // $ExpectType string
Liferay.ThemeDisplay.getLayoutRelativeURL(); // $ExpectType string

// $ExpectType void
Liferay.Util.openToast({
    title: "title",
    message: "message",
    type: "success",
    autoClose: 5000,
});
