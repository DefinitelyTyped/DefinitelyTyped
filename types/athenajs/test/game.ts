import { Game, Scene } from 'athenajs';

let myScene: Scene = new Scene();
let sound: boolean;

const game: Game = new Game({
    name: 'myGame',
    showFps: true,
    width: 320,
    height: 200,
    debug: true,
    scene: myScene,
    target: 'body',
    sound: true
});

game.setScene(myScene);
game.toggleSound(false);
game.toggleTileInspector(true);
game.toggleFullscreen();
game.togglePause();
myScene = game.scene;
sound = game.sound;
