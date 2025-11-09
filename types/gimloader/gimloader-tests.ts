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

api.settings.something;
api.settings.somethingElse;
api.settings.something = 123;
api.settings.something = "abc";
api.settings.something = {};
api.settings.listen("someSetting", (val: any) => {});
api.settings.create([
    {
        type: "group",
        title: "Group",
        settings: [
            {
                type: "toggle",
                id: "toggle1",
                title: "A Toggle",
                description: "Some Toggle",
            },
        ],
    },
    {
        type: "color",
        id: "color1",
        title: "A Color",
        rgba: true,
        default: "rgba(255, 0, 0, 1)",
        onChange: (val: string) => {},
    },
    {
        type: "dropdown",
        id: "dropdown1",
        options: [
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
        ],
        title: "A Dropdown",
        default: "option1",
        onChange: (value: string) => {},
    },
    {
        type: "multiselect",
        id: "multiselect1",
        options: [
            { label: "Option A", value: "optionA" },
            { label: "Option B", value: "optionB" },
            { label: "Option C", value: "optionC" },
        ],
        title: "A Multiselect",
        default: ["optionA", "optionC"],
        onChange: (value: string[]) => {},
    },
    {
        type: "number",
        id: "number1",
        title: "A Number",
        min: 5,
        max: 10,
        step: 2,
        onChange: (value: number) => {},
    },
    {
        type: "radio",
        id: "radio1",
        options: [
            { label: "Option A", value: "optionA" },
            { label: "Option B", value: "optionB" },
            { label: "Option C", value: "optionC" },
        ],
        title: "A Radio",
        default: "optionB",
        description: "Pick one",
        onChange: (value: string) => {},
    },
    {
        type: "slider",
        id: "slider1",
        title: "A Slider",
        min: 5,
        max: 500,
        step: 2,
        formatter: (v: number) => v + "s",
        ticks: [5, 100, 300, 400, 500],
        onChange: (value: number) => {},
    },
    {
        type: "text",
        id: "text1",
        title: "A Text",
        placeholder: "Type",
        maxLength: 50,
        onChange: (value: string) => {},
    },
    {
        type: "toggle",
        id: "toggle2",
        title: "Another Toggle",
        default: true,
        onChange: (value: boolean) => {},
    },
    {
        type: "custom",
        id: "custom1",
        title: "Custom Setting",
        default: 50,
        render: (container: HTMLElement, value: any, update: (value: any) => void) => {
            container.innerText = `Value is ${value}`;
            container.onclick = () => update(value + 1);
        },
        onChange: (value: any) => {},
    },
    {
        type: "customsection",
        id: "customsection1",
        default: 50,
        render: (container: HTMLElement, value: any, update: (value: any) => void) => {
            container.innerText = `Value is ${value}`;
            container.onclick = () => update(value + 1);
        },
        onChange: (value: any) => {},
    },
]);
