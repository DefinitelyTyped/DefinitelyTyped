// Type definitions for @primer/octicons 17.5
// Project: https://github.com/primer/octicons
// Definitions by: Oscar Lee-Vermeren <https://github.com/xiBread>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
        'aria-hidden': string;
    }

    interface SVGOptions {
        /**
         * Add more CSS classes to the `<svg>` tag.
         */
        class?: string;

        /**
         * Add accessibility `aria-label` to the icon.
         */
        'aria-label'?: string;

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
        | 'accessibility'
        | 'accessibility-inset'
        | 'alert'
        | 'alert-fill'
        | 'apps'
        | 'archive'
        | 'arrow-both'
        | 'arrow-down'
        | 'arrow-left'
        | 'arrow-right'
        | 'arrow-switch'
        | 'arrow-up'
        | 'arrow-up-left'
        | 'arrow-up-right'
        | 'beaker'
        | 'bell'
        | 'bell-fill'
        | 'bell-slash'
        | 'blocked'
        | 'bold'
        | 'book'
        | 'bookmark'
        | 'bookmark-fill'
        | 'bookmark-slash'
        | 'bookmark-slash-fill'
        | 'briefcase'
        | 'broadcast'
        | 'browser'
        | 'bug'
        | 'cache'
        | 'calendar'
        | 'check'
        | 'check-circle'
        | 'check-circle-fill'
        | 'checkbox'
        | 'checklist'
        | 'chevron-down'
        | 'chevron-left'
        | 'chevron-right'
        | 'chevron-up'
        | 'circle'
        | 'circle-slash'
        | 'clock'
        | 'cloud'
        | 'cloud-offline'
        | 'code'
        | 'code-of-conduct'
        | 'code-review'
        | 'code-square'
        | 'codescan'
        | 'codescan-checkmark'
        | 'codespaces'
        | 'columns'
        | 'command-palette'
        | 'comment'
        | 'comment-discussion'
        | 'commit'
        | 'container'
        | 'copilot'
        | 'copilot-error'
        | 'copilot-warning'
        | 'copy'
        | 'cpu'
        | 'credit-card'
        | 'cross-reference'
        | 'dash'
        | 'database'
        | 'dependabot'
        | 'desktop-download'
        | 'device-camera'
        | 'device-camera-video'
        | 'device-desktop'
        | 'device-mobile'
        | 'diamond'
        | 'diff'
        | 'diff-added'
        | 'diff-ignored'
        | 'diff-modified'
        | 'diff-removed'
        | 'diff-renamed'
        | 'dot'
        | 'dot-fill'
        | 'download'
        | 'duplicate'
        | 'ellipsis'
        | 'eye'
        | 'eye-closed'
        | 'feed-discussion'
        | 'feed-forked'
        | 'feed-heart'
        | 'feed-merged'
        | 'feed-person'
        | 'feed-repo'
        | 'feed-rocket'
        | 'feed-star'
        | 'feed-tag'
        | 'feed-trophy'
        | 'file'
        | 'file-added'
        | 'file-badge'
        | 'file-binary'
        | 'file-code'
        | 'file-diff'
        | 'file-directory'
        | 'file-directory-fill'
        | 'file-directory-open-fill'
        | 'file-media'
        | 'file-moved'
        | 'file-removed'
        | 'file-submodule'
        | 'file-symlink-file'
        | 'file-zip'
        | 'filter'
        | 'flame'
        | 'fold'
        | 'fold-down'
        | 'fold-up'
        | 'gear'
        | 'gift'
        | 'git-branch'
        | 'git-commit'
        | 'git-compare'
        | 'git-merge'
        | 'git-merge-queue'
        | 'git-pull-request'
        | 'git-pull-request-closed'
        | 'git-pull-request-draft'
        | 'globe'
        | 'grabber'
        | 'graph'
        | 'hash'
        | 'heading'
        | 'heart'
        | 'heart-fill'
        | 'history'
        | 'home'
        | 'horizontal-rule'
        | 'hourglass'
        | 'hubot'
        | 'id-badge'
        | 'image'
        | 'inbox'
        | 'infinity'
        | 'info'
        | 'issue-closed'
        | 'issue-draft'
        | 'issue-opened'
        | 'issue-reopened'
        | 'italic'
        | 'iterations'
        | 'kebab-horizontal'
        | 'key'
        | 'key-asterisk'
        | 'law'
        | 'light-bulb'
        | 'link'
        | 'link-external'
        | 'list-ordered'
        | 'list-unordered'
        | 'location'
        | 'lock'
        | 'log'
        | 'logo-gist'
        | 'logo-github'
        | 'mail'
        | 'mark-github'
        | 'markdown'
        | 'megaphone'
        | 'mention'
        | 'meter'
        | 'milestone'
        | 'mirror'
        | 'moon'
        | 'mortar-board'
        | 'multi-select'
        | 'mute'
        | 'no-entry'
        | 'north-star'
        | 'note'
        | 'number'
        | 'organization'
        | 'package'
        | 'package-dependencies'
        | 'package-dependents'
        | 'paintbrush'
        | 'paper-airplane'
        | 'paperclip'
        | 'paste'
        | 'pencil'
        | 'people'
        | 'person'
        | 'person-add'
        | 'person-fill'
        | 'pin'
        | 'play'
        | 'plug'
        | 'plus'
        | 'plus-circle'
        | 'project'
        | 'pulse'
        | 'question'
        | 'quote'
        | 'reply'
        | 'repo'
        | 'repo-clone'
        | 'repo-deleted'
        | 'repo-forked'
        | 'repo-locked'
        | 'repo-pull'
        | 'repo-push'
        | 'repo-template'
        | 'report'
        | 'rocket'
        | 'rows'
        | 'rss'
        | 'ruby'
        | 'screen-full'
        | 'screen-normal'
        | 'search'
        | 'server'
        | 'share'
        | 'share-android'
        | 'shield'
        | 'shield-check'
        | 'shield-lock'
        | 'shield-slash'
        | 'shield-x'
        | 'sidebar-collapse'
        | 'sidebar-expand'
        | 'sign-in'
        | 'sign-out'
        | 'single-select'
        | 'skip'
        | 'sliders'
        | 'smiley'
        | 'sort-asc'
        | 'sort-desc'
        | 'square'
        | 'square-fill'
        | 'squirrel'
        | 'stack'
        | 'star'
        | 'star-fill'
        | 'stop'
        | 'stopwatch'
        | 'strikethrough'
        | 'sun'
        | 'sync'
        | 'tab'
        | 'tab-external'
        | 'table'
        | 'tag'
        | 'tasklist'
        | 'telescope'
        | 'telescope-fill'
        | 'terminal'
        | 'three-bars'
        | 'thumbsdown'
        | 'thumbsup'
        | 'tools'
        | 'trash'
        | 'triangle-down'
        | 'triangle-left'
        | 'triangle-right'
        | 'triangle-up'
        | 'trophy'
        | 'typography'
        | 'unfold'
        | 'unlock'
        | 'unmute'
        | 'unverified'
        | 'upload'
        | 'verified'
        | 'versions'
        | 'video'
        | 'webhook'
        | 'workflow'
        | 'x'
        | 'x-circle'
        | 'x-circle-fill'
        | 'zap';
}

declare const octicons: Record<octicons.IconName, octicons.Icon>;

export = octicons;
