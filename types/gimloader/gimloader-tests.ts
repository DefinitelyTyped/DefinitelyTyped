GL; // $ExpectType typeof Api
api; // $ExpectType Api

new GL(); // $ExpectType Api

api.React; // $ExpectType typeof React
api.UI; // $ExpectType Readonly<ScopedUIApi>
api.hotkeys; // $ExpectType Readonly<ScopedHotkeysApi>
api.libs; // $ExpectType Readonly<LibsApi>
api.net; // $ExpectType Readonly<ScopedNetApi>
api.patcher; // $ExpectType Readonly<ScopedPatcherApi>
api.plugins; // $ExpectType Readonly<PluginsApi>
api.rewriter; // $ExpectType Readonly<ScopedRewriterApi>
api.storage; // $ExpectType Readonly<ScopedStorageApi>

GL.React; // $ExpectType typeof React
GL.UI; // $ExpectType Readonly<UIApi>
GL.hotkeys; // $ExpectType Readonly<HotkeysApi>
GL.libs; // $ExpectType Readonly<LibsApi>
GL.net; // $ExpectType Readonly<NetApi>
GL.patcher; // $ExpectType Readonly<PatcherApi>
GL.plugins; // $ExpectType Readonly<PluginsApi>
GL.rewriter; // $ExpectType Readonly<RewriterApi>
GL.storage; // $ExpectType Readonly<StorageApi>

// @ts-expect-error
GL.onStop;
// @ts-expect-error
GL.openSettingsMenu;
// @ts-expect-error
api.onStop();
// @ts-expect-error
api.openSettingsMenu();

api.UI.showModal(document.createElement("div"), {
    buttons: [
        { text: "Ok", onClick: () => {} },
        { text: "Ok", onClick: () => true },
    ],
});

api.patcher.before({}, "foo", () => {});
api.patcher.before({}, "foo", () => true);
GL.net.gamemode; // $ExpectType string
api.net.gamemode; // $ExpectType string
api.net.onLoad((type, gamemode) => {});

GL.stores.phaser; // $ExpectType Phaser
window.stores.phaser; // $ExpectType Phaser
let worldManagerInstance!: Gimloader.Stores.WorldManager;
worldManagerInstance; // $ExpectType WorldManager

api.stores.me.movementSpeed; // $ExpectType number
api.stores.loading.percentageAssetsLoaded; // $ExpectType number
api.stores.worldOptions.terrainOptions[0].name; // $ExpectType string

api.stores.phaser.scene.add; // $ExpectType GameObjectFactory
api.stores.phaser.mainCharacter.input; // $ExpectType CharacterInput
api.stores.phaser.mainCharacter.physics.getBody().rigidBody.translation(); // $ExpectType Vector

const { actionManager, characterManager, inputManager, tileManager, worldManager } = api.stores.phaser.scene;
actionManager; // $ExpectType ActionManager
characterManager; // $ExpectType CharacterManager
inputManager; // $ExpectType InputManager
tileManager; // $ExpectType TileManager
worldManager; // $ExpectType WorldManager

let character = characterManager.characters.get("...")!; // $ExpectType Character
character.setIsMain(true);
inputManager.getMouseWorldXY(); // $ExpectType Vector
tileManager.layerManager.getActualLayerDepth("..."); // $ExpectType number
let device = worldManager.devices.getDeviceById("...")!; // $ExpectType Device
device.colliders.list; // $ExpectType ColliderEntry[]
device.colliders.list[0].options.r1; // $ExpectType number | undefined
device.state; // $ExpectType Record<string, any>
worldManager.physics.bodies.staticBodies; // $ExpectType Set<string>
worldManager.devices.interactives.findClosestInteractiveDevice([], 0, 0); // $ExpectType Device | undefined
worldManager.inGameTerrainBuilder.clearPreviewLayer();
