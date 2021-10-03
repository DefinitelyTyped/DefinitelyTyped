// Type definitions for @primer/octicons 16.0.0
// Project: https://github.com/primer/octicons
// Definitions by: Bread <https://github.com/vBread>
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

    interface IconHeights {
        readonly 16: IconHeight<16>;
        readonly 24?: IconHeight<24>;
    }

    interface IconHeight<N extends 16 | 24> {
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
        width: string;
        height: string;
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
        | 'alert'
        | 'archive'
        | 'arrow-both'
        | 'arrow-down'
        | 'arrow-left'
        | 'arrow-right'
        | 'arrow-switch'
        | 'arrow-up'
        | 'beaker'
        | 'bell'
        | 'bell-fill'
        | 'bell-slash'
        | 'blocked'
        | 'bold'
        | 'book'
        | 'bookmark'
        | 'bookmark-slash'
        | 'briefcase'
        | 'broadcast'
        | 'browser'
        | 'bug'
        | 'calendar'
        | 'check'
        | 'check-circle'
        | 'check-circle-fill'
        | 'checklist'
        | 'chevron-down'
        | 'chevron-left'
        | 'chevron-right'
        | 'chevron-up'
        | 'circle'
        | 'circle-slash'
        | 'clock'
        | 'code'
        | 'code-review'
        | 'code-square'
        | 'codescan'
        | 'codescan-checkmark'
        | 'codespaces'
        | 'columns'
        | 'comment'
        | 'comment-discussion'
        | 'container'
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
        | 'eye-slash'
        | 'file'
        | 'file-badge'
        | 'file-binary'
        | 'file-code'
        | 'file-diff'
        | 'file-directory'
        | 'file-submodule'
        | 'file-symlink-file'
        | 'file-zip'
        | 'filter'
        | 'fire'
        | 'fold'
        | 'fold-down'
        | 'fold-up'
        | 'gear'
        | 'gift'
        | 'git-branch'
        | 'git-commit'
        | 'git-compare'
        | 'git-merge'
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
        | 'repo-forked'
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
        | 'shield-x'
        | 'sidebar-collapse'
        | 'sidebar-expand'
        | 'sign-in'
        | 'sign-out'
        | 'single-select'
        | 'skip'
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
        | 'typography'
        | 'unfold'
        | 'unlock'
        | 'unmute'
        | 'unverified'
        | 'upload'
        | 'verified'
        | 'versions'
        | 'video'
        | 'workflow'
        | 'x'
        | 'x-circle'
        | 'x-circle-fill'
        | 'zap';
}

declare const octicons: Record<octicons.IconName, octicons.Icon>;

export = octicons;

