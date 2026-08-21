# Twitch Embebbed Player Definitions Usage Notes

## Overview

This is the type definitions for the new Twitch interactive embedded video player.
The player is to be called by importing the library as a global:

`<script src= "https://player.twitch.tv/js/embed/v1.js"></script>`

This then exposes the `Twitch` global. The types for which have been defined here.

The player can be initialized by creating a new Player instance:

```ts
new Twitch.Player('div-id', {
    width: 100,
    height: 100,
    parent: ['yourUrl.com']
})

The `div-id` should match with an existing div's ID to contain the player.

width and height can be either a number or a string and are required parameters.

parent is another required parameter and must be your domain name.

In order to control the player several methods are exposed by the `Player` class.

In order to use player events, the `addEventListener` method must be used. Where the first parameter is exposed as a _public static_ value from the `Player` prototype.

```ts
player.addEventListener(Twitch.Player.PLAYBACK_BLOCKED, () => {})
```

The official docs can be found [here](https://dev.twitch.tv/docs/embed/video-and-clips/).
