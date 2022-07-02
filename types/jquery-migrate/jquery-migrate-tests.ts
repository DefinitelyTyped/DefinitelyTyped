// $ExpectType string[]
jQuery.migrateWarnings;
jQuery.migrateWarnings.length;
jQuery.migrateDeduplicateWarnings = true;
jQuery.migrateMute = false;
jQuery.migrateTrace = true;
// $ExpectType void
jQuery.migrateReset();
// $ExpectType string
jQuery.migrateVersion;
jQuery.UNSAFE_restoreLegacyHtmlPrefilter(); // $ExpectType void
