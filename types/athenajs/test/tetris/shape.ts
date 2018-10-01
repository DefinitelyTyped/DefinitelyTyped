import { Sprite, Tile, AudioManager as AM, JSObject } from 'athenajs';
import ShapeBehavior from './shape_behavior';

interface shapeDescription {
    name: string;
    width: number;
    height: number;
    color: number;
    rotations: number[][];
}

class Shape extends Sprite {
    shapes: shapeDescription[];
    // current shape
    shape: shapeDescription;
    shapeName: string;
    // current shape rotation
    rotation: number;

    constructor(name: string, options = {}) {
        super(name, {
            imageId: 'tiles',
            easing: 'linear',
            // behavior: ShapeBehavior,
            // ...options
        });

        /**
         * Hardcoded tetris shapes. In addition to its width/height, color and
         * name, each shape contains a rotation a matrix for each rotation
         * that looks like:
         *
         *  ---
         * |J
         * |JJJ
         * |
         *  ---
         *
         * Matrix: [1, 0, 0,
         *          1, 1, 1
         *          0, 0, 0]
         *
         * Each shape contains four different rotations
         */
        this.shapes = [
            {
                name: 'I', width: 80, height: 80, color: 7, rotations: [
                    [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
                    [0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0]
                ]
            },
            {
                name: 'J', width: 60, height: 60, color: 6, rotations: [
                    [1, 0, 0, 1, 1, 1, 0, 0, 0],
                    [0, 1, 1, 0, 1, 0, 0, 1, 0],
                    [0, 0, 0, 1, 1, 1, 0, 0, 1],
                    [0, 1, 0, 0, 1, 0, 1, 1, 0]
                ]
            },
            {
                name: 'L', width: 60, height: 60, color: 5, rotations: [
                    [0, 0, 1, 1, 1, 1, 0, 0, 0],
                    [0, 1, 0, 0, 1, 0, 0, 1, 1],
                    [0, 0, 0, 1, 1, 1, 1, 0, 0],
                    [1, 1, 0, 0, 1, 0, 0, 1, 0]
                ]
            },
            {
                name: 'O', width: 80, height: 60, color: 4, rotations: [
                    [0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
                    [0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
                    [0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
                    [0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0]
                ]
            },
            {
                name: 'S', width: 60, height: 60, color: 3, rotations: [
                    [0, 1, 1, 1, 1, 0, 0, 0, 0],
                    [0, 1, 0, 0, 1, 1, 0, 0, 1],
                    [0, 0, 0, 0, 1, 1, 1, 1, 0],
                    [1, 0, 0, 1, 1, 0, 0, 1, 0]
                ]
            },
            {
                name: 'Z', width: 60, height: 60, color: 2, rotations: [
                    [1, 1, 0, 0, 1, 1, 0, 0, 0],
                    [0, 0, 1, 0, 1, 1, 0, 1, 0],
                    [0, 0, 0, 1, 1, 0, 0, 1, 1],
                    [0, 1, 0, 1, 1, 0, 1, 0, 0]
                ]
            },
            {
                name: 'T', width: 60, height: 60, color: 1, rotations: [
                    [0, 1, 0, 1, 1, 1, 0, 0, 0],
                    [0, 1, 0, 0, 1, 1, 0, 1, 0],
                    [0, 0, 0, 1, 1, 1, 0, 1, 0],
                    [0, 1, 0, 1, 1, 0, 0, 1, 0]
                ]
            }
        ];

        this.addAnimations();
        this.setShape('S', 0);
    }

    /**
     * Moves the shape at the top center of the map
     */
    moveToTop(): void {
        if (this.shape) {
            const map = this.currentMap;
            const col = Math.floor(((map.width - this.shape.width) / 2) / map.tileWidth);

            this.moveTo(col * map.tileWidth, 0);
        }
    }

    /**
     * Changes the sprite's shape and rotation
     *
     */
    setShape(name: string, rotation: number): void {
        this.shapeName = name;
        this.rotation = rotation;
        this.shape = this.shapes.find((shape) => shape.name === this.shapeName) || this.shapes[0];
        this.setAnimation(`${name}${rotation}`);
    }

    /**
     * Pick a new random shape
     */
    setRandomShape(): void {
        const shapeName = this.shapes[Math.random() * 7 | 0].name;
        const rotation = Math.random() * 4 | 0;

        console.log(`[Shape] setRandomShape() - ${shapeName}`);

        if (!this.movable) {
            this.animate('Fade', {
                duration: 200,
                startValue: 1,
                endValue: 0
            }).then(() => {
                this.setShape(shapeName, rotation);
                this.animate('Fade', {
                    duration: 200,
                    startValue: 0,
                    endValue: 1
                });
            });
        } else {
            this.setShape(shapeName, rotation);
        }
    }

    /**
     * Returns current matrix for the shape
     *
     */
    getMatrix(rotation = -1): number[] {
        return this.shape.rotations[rotation === -1 ? this.rotation : rotation];
    }

    /**
     * Move the shape on the map by a certain number of tiles, optionnaly sending an event
     * of a collision is detected
     *
     */
    snapTile(horizontal = 0, vertical = 0, notify = true, noSound = false): boolean {
        const map = this.currentMap;
        const buffer = this.getMatrix();
        const tilePos = map.getTileIndexFromPixel(this.x, this.y);
        const newX = tilePos.x + horizontal;
        const newY = tilePos.y + vertical;

        // first check there is no collision with walls
        if (!map.checkMatrixForCollision(buffer, this.shape.width, newX, newY, Tile.TYPE.WALL)) {
            this.x += horizontal * map.tileWidth;
            this.y += vertical * map.tileHeight;

            return true;
        } else {
            // if a collision was detected and vertical == 1 it means the shape reached
            // the ground: in this case we send a notification for the grid
            // and make the shape stop responding to user input or timer
            if (vertical === 1) {
                this.movable = false;
                if (notify) {
                    AM.play('ground');
                    this.notify('ground', {
                        startLine: tilePos.y,
                        numRows: this.shape.height / map.tileHeight
                    });
                }
            }
            return false;
        }
    }

    /**
     * Switches to the next shape's rotation, if no collision found onto the map
     */
    nextRotation(): void {
        let matrix: number[];
        let newRotation = this.rotation + 1;

        const map = this.currentMap;
        const tilePos = map.getTileIndexFromPixel(this.x, this.y);

        // cycles if last position reached
        if (newRotation > 3) {
            newRotation = 0;
        }

        // get current shape + position matrix
        matrix = this.getMatrix(newRotation);

        if (!map.checkMatrixForCollision(matrix, this.shape.width, tilePos.x, tilePos.y, Tile.TYPE.WALL)) {
            // change shape rotation if no collision detected
            this.setShape(this.shapeName, newRotation);
            AM.play('rotate');
        } else {
            console.log('rotation not possible');
        }
    }

    /**
     * We add a new Sprite animation for each combination of rotation + shapeType:
     * {
     *  'J0', // first rotation of the J Shape
     * ....
     *  'J3', // last rotation of the J Shape
     *  'L0', // first rotation of the L shape
     *  ...
     * }
     */
    addAnimations(): void {
        // shape sprite images start at the top of the image file
        let offsetY = 0;

        this.shapes.forEach((shape) => {
            let offsetX = 0;
            for (let i = 0; i < 4; ++i) {
                this.addAnimation(`${shape.name}${i}`, 'tiles', {
                    offsetY, offsetX, frameWidth: shape.width, frameHeight: shape.height, frameDuration: 1, numFrames: 1
                });
                offsetX += shape.width;
            }
            offsetY += shape.height;
        });
    }
}

export default Shape;
