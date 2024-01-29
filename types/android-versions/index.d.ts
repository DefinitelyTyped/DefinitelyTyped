/**
 * A module to get Android versions by API level, NDK level, semantic version, or version name.
 *
 * Versions are referenced from here:
 * {@link https://source.android.com/source/build-numbers.html#platform-code-names-versions-api-levels-and-ndk-releases}
 * {@link https://github.com/android/platform_frameworks_base/blob/master/core/java/android/os/Build.java}
 *
 * The version for "Current Development Build" ("CUR_DEVELOPMENT") is not included.
 */

declare namespace android {
    interface AndroidVersion {
        api: number;
        ndk: number;
        semver: string;
        name: string;
        versionCode: string;
    }
    type VersionCode =
        | "BASE"
        | "BASE_1_1"
        | "CUPCAKE"
        | "DONUT"
        | "ECLAIR"
        | "ECLAIR_0_1"
        | "ECLAIR_MR1"
        | "FROYO"
        | "GINGERBREAD"
        | "GINGERBREAD_MR1"
        | "HONEYCOMB"
        | "HONEYCOMB_MR1"
        | "HONEYCOMB_MR2"
        | "ICE_CREAM_SANDWICH"
        | "ICE_CREAM_SANDWICH_MR1"
        | "JELLY_BEAN"
        | "JELLY_BEAN_MR1"
        | "JELLY_BEAN_MR2"
        | "KITKAT"
        | "KITKAT_WATCH"
        | "LOLLIPOP"
        | "LOLLIPOP_MR1"
        | "M"
        | "N"
        | "N_MR1"
        | "O"
        | "O_MR1"
        | "P"
        | "Q"
        | "R"
        | "S"
        | "S_V2"
        | "TIRAMISU";

    type MapVersionSupport = {
        [K in VersionCode]: AndroidVersion;
    };
}

declare const android: {
    VERSIONS: Record<android.VersionCode, android.AndroidVersion>;
    /**
     * Retrieve a single Android version.
     * @param arg - The value or predicate to use to retrieve values.
     * @return An object representing the version found or null if none found.
     */
    get: (
        arg:
            | {
                toString(): string;
            }
            | ((version: android.AndroidVersion) => boolean),
    ) => android.AndroidVersion | null;
    /**
     *  Retrieve all Android versions that meet the criteria of the argument.
     * @param arg - The value or predicate to use to retrieve values.
     * @return An object representing the version found or null if none found.
     */
    getAll: (
        arg:
            | {
                toString(): string;
            }
            | ((version: android.AndroidVersion) => boolean),
    ) => android.AndroidVersion[] | null;
} & android.MapVersionSupport;

export = android;
