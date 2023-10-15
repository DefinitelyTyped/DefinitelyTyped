import { JSONSchema7 } from "json-schema";

declare const ConventionalChangelogConfigSpec: JSONSchema7;

declare namespace ConventionalChangelogConfigSpec {
    /**
     * Describes the configuration options supported by conventional-config for
     * upstream tooling.
     */
    interface Config {
        /**
         * An array of `type` objects representing the explicitly supported commit
         * message types, and whether they should show up in generated `CHANGELOG`s.
         *
         * @default
         * [
         *     { "type": "feat", "section": "Features" },
         *     { "type": "fix", "section": "Bug Fixes" },
         *     { "type": "test", "section": "Tests" },
         *     { "type": "build", "section": "Build System" },
         *     { "type": "ci", "hidden": true }
         * ]
         */
        types?: Config.Type[];

        /**
         * Boolean indicating whether or not the action being run (generating CHANGELOG,
         * recommendedBump, etc.) is being performed for a pre-major release (<1.0.0).
         *
         * This config setting will generally be set by tooling and not a user.
         *
         * @default
         * false
         */
        preMajor?: boolean;

        /**
         * A URL representing a specific commit at a hash.
         *
         * @default
         * "{{host}}/{{owner}}/{{repository}}/commit/{{hash}}"
         */
        commitUrlFormat?: string;

        /**
         * A URL representing the comparison between two git SHAs.
         *
         * @default
         * "{{host}}/{{owner}}/{{repository}}/compare/{{previousTag}}...{{currentTag}}"
         */
        compareUrlFormat?: string;

        /**
         * A URL representing the issue format (allowing a different URL format to be
         * swapped in for Gitlab, Bitbucket, etc).
         *
         * @default
         * "{{host}}/{{owner}}/{{repository}}/issues/{{id}}"
         */
        issueUrlFormat?: string;

        /**
         * A URL representing the a user's profile URL on GitHub, Gitlab, etc. This URL
         * is used for substituting @bcoe with https://github.com/bcoe in commit
         * messages.
         *
         * @default
         * "{{host}}/{{user}}"
         */
        userUrlFormat?: string;

        /**
         * A string to be used to format the auto-generated release commit message.
         *
         * @default
         * "chore(release): {{currentTag}}"
         */
        releaseCommitMessageFormat?: string;
    }

    namespace Config {
        /**
         * An object that describes a commit type's settings in the CHANGELOG.
         */
        type Type = Type.WithSection | Type.WithHidden;

        namespace Type {
            /**
             * An object that describes a commit type's settings in the CHANGELOG.
             */
            interface Base {
                /**
                 * A string used to match <type>s used in the Conventional Commits convention.
                 */
                type: string;

                /**
                 * The section where the matched commit type will display in the CHANGELOG.
                 */
                section?: string;

                /**
                 * Set to `true` to hide matched commit types in the CHANGELOG.
                 */
                hidden?: boolean;
            }

            /**
             * An object that describes a commit type's settings in the CHANGELOG.
             */
            interface WithSection extends Base {
                /**
                 * The section where the matched commit type will display in the CHANGELOG.
                 */
                section: string;
            }

            /**
             * An object that describes a commit type's settings in the CHANGELOG.
             */
            interface WithHidden extends Base {
                /**
                 * Set to `true` to hide matched commit types in the CHANGELOG.
                 */
                hidden: boolean;
            }
        }
    }
}

export = ConventionalChangelogConfigSpec;
