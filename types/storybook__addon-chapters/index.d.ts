// Type definitions for @storybook/addon-chapters 0.6.3
// Project: https://github.com/storybooks/storybook, https://github.com/storybooks/storybook/tree/master/addons/chapters
// Definitions by: Ian Ker-Seymer <https://github.com/ianks>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

declare module "@storybook/react" {
    interface Story {
        addChapter: (name: string, cb: (chapter: Story) => Story): Story
    }
}
