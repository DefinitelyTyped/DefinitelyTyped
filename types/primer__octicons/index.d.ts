declare namespace octicons {
    interface Icon {
        /**
         * Returns the string of the symbol name, same as the key for that icon.
         */
        readonly symbol: string;

        /**
         * Returns an array of keywords for the icon.
         */
        readonly keywords: string[];

        /**
         * The `heights` property allows you to access all the SVGs for an icon
         * using the natural height of the SVG.
         */
        readonly heights: IconHeights;

        /**
         * Returns a string of the `<svg>` tag.
         *
         * @param options An optional object used to add CSS class names,
         * accessibility options, and sizes.
         */
        toSVG(options?: SVGOptions): string;
    }

    type IconSize = 12 | 16 | 24 | 48 | 96;

    type IconHeights = { readonly [K in IconSize]?: IconHeight<K> };

    interface IconHeight<N extends IconSize> {
        /**
         * Returns the icon's true width, based on the SVG view box width.
         *
         * Note, this doesn't change if you scale it up with size options, it
         * only is the natural width of the icon.
         */
        readonly width: N;

        /**
         * Returns the string representation of the path of the icon.
         */
        readonly path: string;

        /**
         * This is an object of all the attributes that will be added to the output tag.
         */
        readonly options: IconAttributes;
    }

    interface IconAttributes {
        version: string;
        width: number;
        height: number;
        viewBox: string;
        class: string;
        "aria-hidden": string;
    }

    interface SVGOptions {
        /**
         * Add more CSS classes to the `<svg>` tag.
         */
        class?: string;

        /**
         * Add accessibility `aria-label` to the icon.
         */
        "aria-label"?: string;

        /**
         * Size the SVG icon larger using `width` and `height` independently or
         * together. `.toSVG()` will automatically choose the best SVG to render
         * based on the width or height passed in.
         */
        width?: number;

        /**
         * Size the SVG icon larger using `width` and `height` independently or
         * together. `.toSVG()` will automatically choose the best SVG to render
         * based on the width or height passed in.
         */
        height?: number;
    }

    type IconName =
        | "accessibility"
        | "accessibility-inset"
        | "agent"
        | "ai-model"
        | "alert"
        | "alert-fill"
        | "apps"
        | "archive"
        | "arrow-both"
        | "arrow-down"
        | "arrow-down-left"
        | "arrow-down-right"
        | "arrow-left"
        | "arrow-right"
        | "arrow-switch"
        | "arrow-up"
        | "arrow-up-left"
        | "arrow-up-right"
        | "beaker"
        | "bell"
        | "bell-fill"
        | "bell-slash"
        | "blocked"
        | "bold"
        | "book"
        | "bookmark"
        | "bookmark-fill"
        | "bookmark-filled"
        | "bookmark-slash"
        | "bookmark-slash-fill"
        | "boolean-off"
        | "boolean-on"
        | "briefcase"
        | "broadcast"
        | "browser"
        | "bug"
        | "cache"
        | "calendar"
        | "check"
        | "check-circle"
        | "check-circle-fill"
        | "checkbox"
        | "checkbox-fill"
        | "checklist"
        | "chevron-down"
        | "chevron-left"
        | "chevron-right"
        | "chevron-up"
        | "circle"
        | "circle-slash"
        | "clock"
        | "clock-fill"
        | "cloud"
        | "cloud-offline"
        | "code"
        | "code-of-conduct"
        | "code-review"
        | "code-square"
        | "codescan"
        | "codescan-checkmark"
        | "codespaces"
        | "columns"
        | "command-palette"
        | "comment"
        | "comment-ai"
        | "comment-discussion"
        | "compose"
        | "container"
        | "copilot"
        | "copilot-error"
        | "copilot-warning"
        | "copy"
        | "cpu"
        | "credit-card"
        | "cross-reference"
        | "crosshairs"
        | "dash"
        | "database"
        | "dependabot"
        | "desktop-download"
        | "device-camera"
        | "device-camera-video"
        | "device-desktop"
        | "device-mobile"
        | "devices"
        | "diamond"
        | "dice"
        | "diff"
        | "diff-added"
        | "diff-ignored"
        | "diff-modified"
        | "diff-removed"
        | "diff-renamed"
        | "discussion-closed"
        | "discussion-duplicate"
        | "discussion-outdated"
        | "dot"
        | "dot-fill"
        | "download"
        | "duplicate"
        | "ellipsis"
        | "exclamation"
        | "eye"
        | "eye-closed"
        | "feed-discussion"
        | "feed-forked"
        | "feed-heart"
        | "feed-issue-closed"
        | "feed-issue-draft"
        | "feed-issue-open"
        | "feed-issue-reopen"
        | "feed-merged"
        | "feed-person"
        | "feed-plus"
        | "feed-public"
        | "feed-pull-request-closed"
        | "feed-pull-request-draft"
        | "feed-pull-request-open"
        | "feed-repo"
        | "feed-rocket"
        | "feed-star"
        | "feed-tag"
        | "feed-trophy"
        | "file"
        | "file-added"
        | "file-badge"
        | "file-binary"
        | "file-check"
        | "file-code"
        | "file-diff"
        | "file-directory"
        | "file-directory-fill"
        | "file-directory-open-fill"
        | "file-directory-symlink"
        | "file-media"
        | "file-moved"
        | "file-removed"
        | "file-submodule"
        | "file-symlink-file"
        | "file-zip"
        | "filter"
        | "filter-remove"
        | "fiscal-host"
        | "flame"
        | "flowchart"
        | "focus-center"
        | "fold"
        | "fold-down"
        | "fold-up"
        | "gear"
        | "gift"
        | "git-branch"
        | "git-branch-check"
        | "git-commit"
        | "git-compare"
        | "git-merge"
        | "git-merge-queue"
        | "git-pull-request"
        | "git-pull-request-closed"
        | "git-pull-request-draft"
        | "globe"
        | "goal"
        | "grabber"
        | "graph"
        | "graph-bar-horizontal"
        | "graph-bar-vertical"
        | "hash"
        | "heading"
        | "heart"
        | "heart-fill"
        | "history"
        | "home"
        | "home-fill"
        | "horizontal-rule"
        | "hourglass"
        | "hubot"
        | "id-badge"
        | "image"
        | "inbox"
        | "inbox-fill"
        | "infinity"
        | "info"
        | "issue-closed"
        | "issue-draft"
        | "issue-opened"
        | "issue-reopened"
        | "issue-tracked-by"
        | "issue-tracks"
        | "italic"
        | "iterations"
        | "kebab-horizontal"
        | "key"
        | "key-asterisk"
        | "law"
        | "light-bulb"
        | "link"
        | "link-external"
        | "list-ordered"
        | "list-unordered"
        | "location"
        | "lock"
        | "log"
        | "logo-gist"
        | "logo-github"
        | "loop"
        | "mail"
        | "mark-github"
        | "markdown"
        | "maximize"
        | "mcp"
        | "megaphone"
        | "mention"
        | "meter"
        | "milestone"
        | "minimize"
        | "mirror"
        | "moon"
        | "mortar-board"
        | "move-to-bottom"
        | "move-to-end"
        | "move-to-start"
        | "move-to-top"
        | "multi-select"
        | "mute"
        | "no-entry"
        | "no-entry-fill"
        | "node"
        | "north-star"
        | "note"
        | "number"
        | "organization"
        | "package"
        | "package-dependencies"
        | "package-dependents"
        | "paintbrush"
        | "paper-airplane"
        | "paperclip"
        | "passkey-fill"
        | "paste"
        | "pause"
        | "pencil"
        | "pencil-ai"
        | "people"
        | "person"
        | "person-add"
        | "person-fill"
        | "pin"
        | "pin-slash"
        | "pivot-column"
        | "play"
        | "plug"
        | "plus"
        | "plus-circle"
        | "project"
        | "project-roadmap"
        | "project-symlink"
        | "project-template"
        | "pulse"
        | "question"
        | "quote"
        | "read"
        | "redo"
        | "rel-file-path"
        | "reply"
        | "repo"
        | "repo-clone"
        | "repo-delete"
        | "repo-deleted"
        | "repo-forked"
        | "repo-locked"
        | "repo-pull"
        | "repo-push"
        | "repo-template"
        | "report"
        | "rocket"
        | "rows"
        | "rss"
        | "ruby"
        | "screen-full"
        | "screen-normal"
        | "search"
        | "server"
        | "share"
        | "share-android"
        | "shield"
        | "shield-check"
        | "shield-lock"
        | "shield-slash"
        | "shield-x"
        | "sidebar-collapse"
        | "sidebar-expand"
        | "sign-in"
        | "sign-out"
        | "single-select"
        | "skip"
        | "skip-fill"
        | "sliders"
        | "smiley"
        | "smiley-frown"
        | "smiley-frustrated"
        | "smiley-grin"
        | "smiley-neutral"
        | "sort-asc"
        | "sort-desc"
        | "space"
        | "spacing-large"
        | "spacing-medium"
        | "spacing-small"
        | "sparkle"
        | "sparkle-fill"
        | "sparkles-fill"
        | "split-view"
        | "sponsor-tiers"
        | "square"
        | "square-circle"
        | "square-fill"
        | "squirrel"
        | "stack"
        | "star"
        | "star-fill"
        | "stop"
        | "stopwatch"
        | "strikethrough"
        | "sun"
        | "sync"
        | "tab"
        | "tab-external"
        | "table"
        | "tag"
        | "tasklist"
        | "telescope"
        | "telescope-fill"
        | "terminal"
        | "three-bars"
        | "thumbsdown"
        | "thumbsup"
        | "tools"
        | "tracked-by-closed-completed"
        | "tracked-by-closed-not-planned"
        | "trash"
        | "triangle-down"
        | "triangle-left"
        | "triangle-right"
        | "triangle-up"
        | "trophy"
        | "typography"
        | "undo"
        | "unfold"
        | "unlink"
        | "unlock"
        | "unmute"
        | "unread"
        | "unverified"
        | "unwrap"
        | "upload"
        | "verified"
        | "versions"
        | "video"
        | "vscode"
        | "webhook"
        | "workflow"
        | "wrap"
        | "x"
        | "x-circle"
        | "x-circle-fill"
        | "zap"
        | "zoom-in"
        | "zoom-out";
}

declare const octicons: Record<octicons.IconName, octicons.Icon>;

export = octicons;
