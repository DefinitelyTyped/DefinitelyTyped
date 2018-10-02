import { Game } from 'athenajs';
import Grid from './grid';

const tetris = new Game({
    name: 'athena-tetris',
    showFps: true,
    debug: true,
    width: 800,
    height: 600,
    scene: new Grid()
});
