import { Localization } from "expo-localization";

Localization.getLocalizationAsync().then(localization => localization.locale);
Localization.locale;
