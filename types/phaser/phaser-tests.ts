import * as Phaser from 'phaser';

export class TestScene extends Phaser.Scene {
    keys: Phaser.Input.Keyboard.CursorKeys;
    player: Phaser.GameObjects.Sprite;
    collectibles: Phaser.GameObjects.Group;
    map: Phaser.Tilemaps.Tilemap;
    collisionLayer: Phaser.Tilemaps.StaticTilemapLayer;

    constructor() {
        super({ key: 'test' });
    }

    preload(): void {
        this.load
            .spritesheet('testSpriteSheet', 'thisWouldBeAURL')
            .audio('testAudio', ['some', 'urls']);
    }

    create(): void {
        this.map = this.add.tilemap('testMap');
        this.collisionLayer = this.map.createStaticLayer('collision', 'tileSet');

        this.keys = this.input.keyboard.createCursorKeys();
        this.player = this.add.sprite(100, 50, 'testSpriteSheet');
        this.physics.world.enable(this.player);
        if (this.player.body instanceof Phaser.Physics.Arcade.Body) {
            this.player.body.allowGravity = false;
        }

        this.collectibles = this.add.group();

        this.time.addEvent({
            delay: 5000,
            callback: () => {
                const apple = this.add.sprite(Math.random(), Math.random(), 'apple');
                this.collectibles.add(apple);
            },
            loop: true
        });

        this.physics.world.addCollider(this.player, this.collisionLayer);
        this.physics.world.addCollider(this.player, this.collectibles, (player, apple) => {
            const currentScore = player.data.get('score') as number;
            player.data.set('score', currentScore + 1);
            apple.destroy();
        });
    }

    update(time: number, delta: number): void {
        const isTouchingApple = this.physics.world.collide(this.player, this.collectibles);

        if (isTouchingApple) {
            this.sound.play('ding');
        }

        if (this.keys.up && this.keys.up.isDown) {
            this.player.y -= 5;
        }
        if (this.keys.down.isDown) {
            this.player.y += 5;
        }
        if (this.keys.right.isDown) {
            this.player.flipX = false;
            this.player.x += 5;
        }
        if (this.keys.left.isDown) {
            this.player.flipX = true;
            this.player.x -= 5;
        }
    }
}

const config: GameConfig = {
    width: 480,
    height: 240,
    physics: {
        default: 'arcade',
        gravity: { x: 0, y: 500 }
    },
    scene: TestScene
};

new Phaser.Game(config);
