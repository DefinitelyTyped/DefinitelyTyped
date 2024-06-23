import videojs from "video.js";
import { HlsQualitySelectorPlugin } from "videojs-hls-quality-selector";
import ConcreteButton from "videojs-hls-quality-selector/src/ConcreteButton";
import ConcreteMenuItem from "videojs-hls-quality-selector/src/ConcreteMenuItem";

declare const player: videojs.Player;
declare const plugin: HlsQualitySelectorPlugin;

const qualityButton: ConcreteButton = new ConcreteButton(player);
qualityButton.createItems(); // $ExpectType Item[]
qualityButton.createMenu(); // $ExpectType Menu

const concreteMenuItem = new ConcreteMenuItem(
    player,
    {
        label: "label",
        selected: true,
    },
    qualityButton,
    plugin,
);

concreteMenuItem.handleClick = () => {}; // $ExpectType () => void

// creation

player.hlsQualitySelector();
player.hlsQualitySelector({
    displayCurrentQuality: true,
    placementIndex: 3,
    vjsIconClass: "vjs-icon",
});
