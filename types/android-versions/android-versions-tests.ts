import android = require("android-versions");

android.get(23); // $ExpectType AndroidVersion | null

android.BASE; // $ExpectType AndroidVersion
android.R; // $ExpectType AndroidVersion
android.VERSIONS; // $ExpectType Record<VersionCode, AndroidVersion>

// $ExpectType AndroidVersion[] | null
android.getAll(version => {
    return version.ndk > 5 && version.api < 15;
});

// $ExpectType AndroidVersion
android.get(version => {
    return version.ndk > 5 && version.api < 15;
})!;
