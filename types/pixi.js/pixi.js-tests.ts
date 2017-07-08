function basics() {
    class Basics {
        private app: PIXI.Application;

        private bunny: PIXI.Sprite;

        constructor() {
            this.app = new PIXI.Application(800, 600, { backgroundColor: 0x1099bb });
            document.body.appendChild(this.app.view);

            this.bunny = PIXI.Sprite.fromImage("required/assets/basics/bunny.png");
            this.bunny.anchor.set(0.5);
            this.bunny.x = this.app.renderer.width / 2;
            this.bunny.y = this.app.renderer.height / 2;
            this.app.stage.addChild(this.bunny);

            this.app.ticker.add((delta: number): void => {
                this.bunny.rotation += 0.1 / delta;
            });
        }
    }

    class Renderer {
        private renderer: PIXI.WebGLRenderer;
        constructor() {
            // Renderer should allow options from both WebGLRenderer and underlying SystemRenderer
            this.renderer = new PIXI.WebGLRenderer(0, 0, { backgroundColor: 0x272d37, forceFXAA: true });
        }
    }

    class Click {
        private app: PIXI.Application;

        private sprite: PIXI.Sprite;

        constructor() {
            this.app = new PIXI.Application(800, 600, { backgroundColor: 0x1099bb });
            document.body.appendChild(this.app.view);

            this.sprite = PIXI.Sprite.fromImage("../../_assets/basics/bunny.png");
            this.sprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
            this.sprite.anchor.set(0.5);
            this.sprite.x = this.app.renderer.width / 2;
            this.sprite.y = this.app.renderer.height / 2;
            this.sprite.interactive = true;
            this.sprite.buttonMode = true;
            this.sprite.on("pointerdown", (): void => {
                this.sprite.scale.x *= 1.25;
                this.sprite.scale.y *= 1.25;
            });
            this.app.stage.addChild(this.sprite);
        }
    }

    class ContainerPivot {
        private app: PIXI.Application;
        private container: PIXI.Container;

        constructor() {
            this.app = new PIXI.Application(800, 600, { backgroundColor: 0x1099bb });
            document.body.appendChild(this.app.view);

            this.container = new PIXI.Container();
            this.app.stage.addChild(this.container);

            const texture = PIXI.Texture.fromImage("../../_assets/basics/bunny.png");

            for (let i = 0; i < 25; i++) {
                const bunny = new PIXI.Sprite(texture);
                bunny.anchor.set(0.5);
                bunny.x = (i % 5) * 40;
                bunny.y = Math.floor(i / 5) * 40;
                this.container.addChild(bunny);
            }

            this.container.x = this.app.renderer.width / 2;
            this.container.y = this.app.renderer.height / 2;

            this.container.pivot.x = this.container.width / 2;
            this.container.pivot.y = this.container.height / 2;

            this.app.ticker.add((delta: number): void => {
                this.container.rotation -= 0.01 / delta;
            });
        }
    }

    class Container {
        private app: PIXI.Application;
        private container: PIXI.Container;

        constructor() {
            this.app = new PIXI.Application(800, 600, { backgroundColor: 0x1099bb });
            document.body.appendChild(this.app.view);

            this.container = new PIXI.Container();
            this.app.stage.addChild(this.container);

            const texture = PIXI.Texture.fromImage("../../_assets/basics/bunny.png");

            for (let i = 0; i < 25; i++) {
                const bunny = new PIXI.Sprite(texture);
                bunny.anchor.set(0.5);
                bunny.x = (i % 5) * 40;
                bunny.y = Math.floor(i / 5) * 40;
                this.container.addChild(bunny);
            }

            this.container.x = this.app.renderer.width / 2;
            this.container.y = this.app.renderer.height / 2;
        }
    }

    class CustomizedFilter extends PIXI.Filter {
        constructor(fragmentSource: string) {
            super(null, fragmentSource, {
                customUniform: {
                    type: "1f",
                    value: 0
                }
            });
        }
    }
    class CustomFilter {
        private app: PIXI.Application;
        private background: PIXI.Sprite;
        private filter: CustomizedFilter;

        constructor() {
            this.app = new PIXI.Application(800, 600, { backgroundColor: 0x1099bb });
            document.body.appendChild(this.app.view);

            this.background = PIXI.Sprite.fromImage("required/assets/bkg-grass.jpg");
            this.background.width = this.app.renderer.width;
            this.background.height = this.app.renderer.height;
            this.app.stage.addChild(this.background);

            this.app.stop();

            PIXI.loader.add("shader", "_assets/basics/shader.frag")
                .load((loader: PIXI.loaders.Loader, resource: any): void => {
                    this.filter = new PIXI.Filter(null, resource.shader.data);
                    this.background.filters = [this.filter];
                    this.app.start();

                    this.app.ticker.add((delta: number) => {
                        this.filter.uniforms.customUniform += 0.04 / delta;
                    });
                });
        }
    }

    class Graphics {
        private app: PIXI.Application;
        private graphics: PIXI.Graphics;

        constructor() {
            this.app = new PIXI.Application(800, 600, { antialias: true });
            document.body.appendChild(this.app.view);

            const graphics = new PIXI.Graphics();

            // set a fill and line style
            graphics.beginFill(0xFF3300);
            graphics.lineStyle(4, 0xffd900, 1);

            // draw a shape
            graphics.moveTo(50, 50);
            graphics.lineTo(250, 50);
            graphics.lineTo(100, 100);
            graphics.lineTo(50, 50);
            graphics.endFill();

            // set a fill and a line style again and draw a rectangle
            graphics.lineStyle(2, 0x0000FF, 1);
            graphics.beginFill(0xFF700B, 1);
            graphics.drawRect(50, 250, 120, 120);

            // draw a rounded rectangle
            graphics.lineStyle(2, 0xFF00FF, 1);
            graphics.beginFill(0xFF00BB, 0.25);
            graphics.drawRoundedRect(150, 450, 300, 100, 15);
            graphics.endFill();

            // draw a circle, set the lineStyle to zero so the circle doesn"t have an outline
            graphics.lineStyle(0);
            graphics.beginFill(0xFFFF0B, 0.5);
            graphics.drawCircle(470, 90, 60);
            graphics.endFill();

            this.graphics = graphics;

            this.app.stage.addChild(this.graphics);
        }
    }

    class RenderTexture {
        private app: PIXI.Application;
        private container: PIXI.Container;
        private renderTexture: PIXI.RenderTexture;
        private sprite: PIXI.Sprite;

        constructor() {
            this.app = new PIXI.Application(800, 600, { backgroundColor: 0x1099bb });
            document.body.appendChild(this.app.view);

            this.container = new PIXI.Container();
            this.app.stage.addChild(this.container);

            const texture = PIXI.Texture.fromImage("required/assets/basics/bunny.png");

            for (let i = 0; i < 25; i++) {
                const bunny = new PIXI.Sprite(texture);
                bunny.x = (i % 5) * 30;
                bunny.y = Math.floor(i / 5) * 30;
                bunny.rotation = Math.random() * (Math.PI * 2);
                this.container.addChild(bunny);
            }

            const brt = new PIXI.BaseRenderTexture(300, 300, PIXI.SCALE_MODES.LINEAR, 1);
            const rt = new PIXI.RenderTexture(brt);

            this.sprite = new PIXI.Sprite(rt);
            this.sprite.x = 450;
            this.sprite.y = 60;
            this.app.stage.addChild(this.sprite);

            this.container.x = 100;
            this.container.y = 60;

            this.app.ticker.add((delta: number) => {
                this.app.renderer.render(this.container, rt);
            });
        }
    }

    class SpriteSheet {
        private app: PIXI.Application;
        private anim: PIXI.extras.AnimatedSprite;

        constructor() {
            PIXI.loader
                .add("required/assets/basics/fighter.json")
                .load((loader: PIXI.loaders.Loader, resource: any) => {
                    const frames = [];

                    for (let i = 0; i < 30; i++) {
                        const val = i < 10 ? "0" + i : i;

                        frames.push(PIXI.Texture.fromFrame("rollSequence00" + val + ".png"));
                    }

                    this.anim = new PIXI.extras.AnimatedSprite(frames);

                    this.anim.x = this.app.renderer.width / 2;
                    this.anim.y = this.app.renderer.height / 2;
                    this.anim.anchor.set(0.5);
                    this.anim.animationSpeed = 0.5;
                    this.anim.play();

                    this.app.stage.addChild(this.anim);

                    this.app.ticker.add((deltaTime: number) => {
                        this.anim.rotation += 0.01;
                    });
                });
        }
    }

    class Text {
        private app: PIXI.Application;
        private basicText: PIXI.Text;
        private richText: PIXI.Text;

        constructor() {
            this.app = new PIXI.Application(800, 600, { backgroundColor: 0x1099bb });
            document.body.appendChild(this.app.view);

            this.basicText = new PIXI.Text("Basic text in pixi");
            this.basicText.x = 30;
            this.basicText.y = 90;
            this.app.stage.addChild(this.basicText);

            const style = new PIXI.TextStyle({
                fontFamily: "Arial",
                fontSize: 36,
                fontStyle: "italic",
                fontWeight: "bold",
                fill: ["#ffffff", "#fff0b5"],
                stroke: "#4a1850",
                strokeThickness: 5,
                dropShadow: true,
                dropShadowColor: "#000000",
                dropShadowBlur: 4,
                dropShadowAngle: Math.PI / 6,
                dropShadowDistance: 6,
                wordWrap: true,
                wordWrapWidth: 440
            });

            this.richText = new PIXI.Text("Rich text with a lot of options and across multiple lines", style);
            this.richText.x = 30;
            this.richText.y = 180;
            this.app.stage.addChild(this.richText);
        }
    }

    class TexturedMesh {
        private app: PIXI.Application;
        private count: number;
        private points: PIXI.Point[];
        private strip: PIXI.mesh.Rope;
        private graphics: PIXI.Graphics;

        constructor() {
            const ropeLength = 918 / 20;

            for (let i = 0; i < 25; i++) {
                this.points.push(new PIXI.Point(i * ropeLength, 0));
            }

            this.strip = new PIXI.mesh.Rope(PIXI.Texture.fromImage("required/assets/snake.png"), this.points);
            this.strip.x = -40;
            this.strip.y = 300;
            this.app.stage.addChild(this.strip);

            this.graphics = new PIXI.Graphics();
            this.graphics.x = this.strip.x;
            this.graphics.y = this.strip.y;
            this.app.stage.addChild(this.graphics);

            // start animating
            this.app.ticker.add((deltaTime: number) => {
                this.count += 0.1;

                // make the snake
                for (let i = 0; i < this.points.length; i++) {
                    this.points[i].y = Math.sin((i * 0.5) + this.count) * 30;
                    this.points[i].x = i * ropeLength + Math.cos((i * 0.3) + this.count) * 20;
                }
                this.renderPoints();
            });
        }

        private renderPoints(): void {
            this.graphics.clear();
            this.graphics.lineStyle(2, 0xffc2c2);
            this.graphics.moveTo(this.points[0].x, this.points[0].y);

            for (let i = 1; i < this.points.length; i++) {
                this.graphics.lineTo(this.points[i].x, this.points[i].y);
            }

            for (let i = 1; i < this.points.length; i++) {
                this.graphics.beginFill(0xff0022);
                this.graphics.drawCircle(this.points[i].x, this.points[i].y, 10);
                this.graphics.endFill();
            }
        }
    }

    class TilingSprite {
        private app: PIXI.Application;
        private tilingSprite: PIXI.extras.TilingSprite;
        private count: number;

        constructor() {
            this.app = new PIXI.Application();
            document.body.appendChild(this.app.view);

            const texture = PIXI.Texture.fromImage("required/assets/p2.jpeg");

            this.tilingSprite = new PIXI.extras.TilingSprite(
                texture,
                this.app.renderer.width,
                this.app.renderer.height
            );
            this.app.stage.addChild(this.tilingSprite);

            this.count = 0;

            this.app.ticker.add((deltaTime: number): void => {
                this.count += 0.005;

                this.tilingSprite.tileScale.x = 2 + Math.sin(this.count);
                this.tilingSprite.tileScale.y = 2 + Math.cos(this.count);
                this.tilingSprite.tilePosition.x += 1;
                this.tilingSprite.tilePosition.y += 1;
            });
        }
    }

    class Video {
        private app: PIXI.Application;
        private button: PIXI.Graphics;
        private videoSprite: PIXI.Sprite;

        constructor() {
            this.app = new PIXI.Application(800, 600, { transparent: true });
            document.body.appendChild(this.app.view);

            this.button = new PIXI.Graphics()
                .beginFill(0x0, 0.5)
                .drawRoundedRect(0, 0, 100, 100, 10)
                .endFill()
                .beginFill(0xffffff)
                .moveTo(36, 30)
                .lineTo(36, 70)
                .lineTo(70, 50);

            // Position the button
            this.button.x = (this.app.renderer.width - this.button.width) / 2;
            this.button.y = (this.app.renderer.height - this.button.height) / 2;

            // Enable interactivity on the button
            this.button.interactive = true;
            this.button.buttonMode = true;

            // Add to the stage
            this.app.stage.addChild(this.button);

            this.button.on("pointertap", (): void => {
                this.button.destroy();

                const texture = PIXI.Texture.fromVideo("required/assets/testVideo.mp4");

                this.videoSprite = new PIXI.Sprite(texture);
                this.videoSprite.width = this.app.renderer.width;
                this.videoSprite.height = this.app.renderer.height;
                this.app.stage.addChild(this.videoSprite);
            });
        }
    }
}

function demos() {
    class AlphaMask {
        private app: PIXI.Application;
        private bg: PIXI.Container;
        private cells: PIXI.Sprite;
        private mask: PIXI.Sprite;
        private target: PIXI.Point;

        constructor() {
            this.app = new PIXI.Application();
            this.app.stage.interactive = true;
            document.body.appendChild(this.app.view);

            this.bg = PIXI.Sprite.fromImage("required/assets/bkg.jpg");
            this.app.stage.addChild(this.bg);

            this.cells = PIXI.Sprite.fromImage("required/assets/cells.png");
            this.cells.scale.set(1.5);

            this.mask = PIXI.Sprite.fromImage("required/assets/flowerTop.png");
            this.mask.anchor.set(0.5);
            this.mask.x = 310;
            this.mask.y = 190;

            this.cells.mask = this.mask;

            this.app.stage.addChild(this.mask, this.cells);

            this.target = new PIXI.Point();

            this.reset();

            this.app.ticker.add((deltaTime: number): void => {
                this.mask.position.x += (this.target.x - this.mask.x) * 0.1;
                this.mask.position.y += (this.target.y - this.mask.y) * 0.1;

                if (Math.abs(this.mask.x - this.target.x) < 1) {
                    this.reset();
                }
            });
        }

        private reset(): void {
            this.target.x = Math.floor(Math.random() * 550);
            this.target.y = Math.floor(Math.random() * 300);
        }
    }

    class AnimatedSpriteDemo {
        private app: PIXI.Application;

        constructor() {
            this.app = new PIXI.Application();
            this.app.stop();
            document.body.appendChild(this.app.view);

            PIXI.loader
                .add("spritesheet", "required/assets/mc.json")
                .load((): void => {
                    const explosionTextures: PIXI.Texture[] = [];

                    for (let i = 0; i < 26; i++) {
                        const texture = PIXI.Texture.fromFrame("Explosion_Sequence_A " + (i + 1) + ".png");
                        explosionTextures.push(texture);
                    }

                    for (let i = 0; i < 50; i++) {
                        const explosion = new PIXI.extras.AnimatedSprite(explosionTextures);

                        explosion.x = Math.random() * this.app.renderer.width;
                        explosion.y = Math.random() * this.app.renderer.height;
                        explosion.anchor.set(0.5);
                        explosion.rotation = Math.random() * Math.PI;
                        explosion.scale.set(0.75 + Math.random() * 0.5);
                        explosion.gotoAndPlay(Math.random() * 27);
                        this.app.stage.addChild(explosion);
                    }

                    this.app.start();
                });
        }
    }

    class Batch {
        private app: PIXI.Application;
        private sprites: PIXI.particles.ParticleContainer;
        private maggots: Dude[];
        private dudeBounds: PIXI.Rectangle;
        private tick: number;

        constructor() {
            this.app = new PIXI.Application();
            document.body.appendChild(this.app.view);

            this.sprites = new PIXI.particles.ParticleContainer(10000, {
                scale: true,
                position: true,
                rotation: true,
                uvs: true,
                alpha: true
            });
            this.app.stage.addChild(this.sprites);

            this.maggots = [];

            const totalSprites = this.app.renderer instanceof PIXI.WebGLRenderer ? 10000 : 100;

            const dudeTexture = PIXI.Texture.fromImage("required/assets/tinyMaggot.png");

            for (let i = 0; i < totalSprites; i++) {
                const dude = new Dude(dudeTexture);
                dude.tint = Math.random() * 0xE8D4CD;
                dude.anchor.set(0.5);
                dude.scale.set(0.8 + Math.random() * 0.3);
                dude.x = Math.random() * this.app.renderer.width;
                dude.y = Math.random() * this.app.renderer.height;
                dude.direction = Math.random() * Math.PI * 2;
                dude.turningSpeed = Math.random() - 0.8;
                dude.speed = (2 + Math.random() * 2) * 0.2;
                dude.offset = Math.random() * 100;

                this.maggots.push(dude);
                this.sprites.addChild(dude);
            }

            const dudeBoundsPadding = 100;
            this.dudeBounds = new PIXI.Rectangle(
                -dudeBoundsPadding,
                -dudeBoundsPadding,
                this.app.renderer.width + dudeBoundsPadding * 2,
                this.app.renderer.height + dudeBoundsPadding * 2
            );

            this.tick = 0;

            this.app.ticker.add((): void => {
                for (const dude of this.maggots) {
                    dude.scale.y = 0.95 + Math.sin(this.tick + dude.offset) * 0.05;
                    dude.direction += dude.turningSpeed * 0.01;
                    dude.x += Math.sin(dude.direction) * (dude.speed * dude.scale.y);
                    dude.y += Math.cos(dude.direction) * (dude.speed * dude.scale.y);
                    dude.rotation = -dude.direction + Math.PI;

                    // wrap the maggots
                    if (dude.x < this.dudeBounds.x) {
                        dude.x += this.dudeBounds.width;
                    } else if (dude.x > this.dudeBounds.x + this.dudeBounds.width) {
                        dude.x -= this.dudeBounds.width;
                    }

                    if (dude.y < this.dudeBounds.y) {
                        dude.y += this.dudeBounds.height;
                    } else if (dude.y > this.dudeBounds.y + this.dudeBounds.height) {
                        dude.y -= this.dudeBounds.height;
                    }
                }

                this.tick += 0.1;
            });
        }
    }
    class Dude extends PIXI.Sprite {
        direction: number = 0;
        speed: number = 0;
        turningSpeed: number = 0;
        offset: number = 0;

        constructor(texture: PIXI.Texture) {
            super(texture);
        }
    }

    class BlendModes {
        private app: PIXI.Application;
        private background: PIXI.Sprite;
        private dudeArray: Dude[];
        private dudeBounds: PIXI.Rectangle;

        constructor() {
            this.app = new PIXI.Application();
            document.body.appendChild(this.app.view);

            this.background = PIXI.Sprite.fromImage("required/assets/BGrotate.jpg");
            this.app.stage.addChild(this.background);

            this.dudeArray = [];

            const totalDudes = 20;
            const dudeTexture = PIXI.Texture.fromImage("required/assets/flowerTop.png");

            for (let i = 0; i < totalDudes; i++) {
                const dude = new Dude(dudeTexture);
                dude.anchor.set(0.5);
                dude.scale.set(0.8 + Math.random() * 0.3);
                dude.x = Math.floor(Math.random() * this.app.renderer.width);
                dude.y = Math.floor(Math.random() * this.app.renderer.height);
                dude.blendMode = PIXI.BLEND_MODES.ADD;
                dude.direction = Math.random() * Math.PI * 2;
                dude.turningSpeed = Math.random() - 0.8;
                dude.speed = 2 + Math.random() * 2;

                this.dudeArray.push(dude);
                this.app.stage.addChild(dude);
            }

            const dudeBoundsPadding = 100;
            this.dudeBounds = new PIXI.Rectangle(
                -dudeBoundsPadding,
                -dudeBoundsPadding,
                this.app.renderer.width + dudeBoundsPadding * 2,
                this.app.renderer.height + dudeBoundsPadding * 2
            );

            this.app.ticker.add((): void => {
                for (const dude of this.dudeArray) {
                    dude.direction += dude.turningSpeed * 0.01;
                    dude.x += Math.sin(dude.direction) * dude.speed;
                    dude.y += Math.cos(dude.direction) * dude.speed;
                    dude.rotation = -dude.direction - Math.PI / 2;

                    // wrap the dudes by testing their bounds...
                    if (dude.x < this.dudeBounds.x) {
                        dude.x += this.dudeBounds.width;
                    } else if (dude.x > this.dudeBounds.x + this.dudeBounds.width) {
                        dude.x -= this.dudeBounds.width;
                    }

                    if (dude.y < this.dudeBounds.y) {
                        dude.y += this.dudeBounds.height;
                    } else if (dude.y > this.dudeBounds.y + this.dudeBounds.height) {
                        dude.y -= this.dudeBounds.height;
                    }
                }
            });
        }
    }

    class CacheAsBitmap {
        private app: PIXI.Application;
        private aliens: PIXI.Sprite[];
        private count: number;
        private alienContainer: PIXI.Container;

        constructor() {
            this.app = new PIXI.Application();
            this.app.stage.interactive = true;
            document.body.appendChild(this.app.view);

            this.app.stop();

            this.aliens = [];
            const alienFrames = [
                "eggHead.png",
                "flowerTop.png",
                "helmlok.png",
                "skully.png"
            ];

            this.count = 0;

            this.alienContainer = new PIXI.Container();
            this.alienContainer.x = 400;
            this.alienContainer.y = 300;
            this.app.stage.addChild(this.alienContainer);

            PIXI.loader
                .add("spritesheet", "required/assets/monsters.json")
                .load((): void => {
                    for (let i = 0; i < 100; i++) {
                        const frameName = alienFrames[i % 4];

                        const alien = PIXI.Sprite.fromFrame(frameName);
                        alien.tint = Math.random() * 0xFFFFFF;
                        alien.x = Math.random() * 800 - 400;
                        alien.y = Math.random() * 600 - 300;
                        alien.anchor.x = 0.5;
                        alien.anchor.y = 0.5;
                        this.aliens.push(alien);
                        this.alienContainer.addChild(alien);
                    }
                    this.app.start();

                    this.app.stage.on("pointerTap", (event: PIXI.interaction.InteractionEvent): void => {
                        this.alienContainer.cacheAsBitmap = !this.alienContainer.cacheAsBitmap;
                    });
                    this.app.ticker.add((): void => {
                        // let"s rotate the aliens a little bit
                        for (let i = 0; i < 100; i++) {
                            const alien = this.aliens[i];
                            alien.rotation += 0.1;
                        }

                        this.count += 0.01;

                        this.alienContainer.scale.x = Math.sin(this.count);
                        this.alienContainer.scale.y = Math.sin(this.count);
                        this.alienContainer.rotation += 0.01;
                    });
                });
        }
    }

    class Dragging {
        private app: PIXI.Application;
        private data: PIXI.interaction.InteractionData;
        private dragging: boolean;

        constructor() {
            this.app = new PIXI.Application(800, 600, { backgroundColor: 0x1099bb });
            document.body.appendChild(this.app.view);

            const texture = PIXI.Texture.fromImage("required/assets/bunny.png");
            texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

            for (let i = 0; i < 10; i++) {
                this.createBunny(
                    texture,
                    Math.floor(Math.random() * this.app.renderer.width),
                    Math.floor(Math.random() * this.app.renderer.height)
                );
            }
        }

        private createBunny(texture: PIXI.Texture, x: number, y: number): void {
            const bunny = new PIXI.Sprite(texture);
            bunny.interactive = true;
            bunny.buttonMode = true;
            bunny.anchor.set(0.5);
            bunny.scale.set(3);
            bunny
                .on("pointerdown", (event: PIXI.interaction.InteractionEvent): void => {
                    this.data = event.data;
                    bunny.alpha = 0.5;
                    this.dragging = true;
                })
                .on("pointerup", (event: PIXI.interaction.InteractionEvent): void => {
                    this.data = null;
                    bunny.alpha = 0.5;
                    this.dragging = false;
                })
                .on("pointerupoutside", (event: PIXI.interaction.InteractionEvent): void => {
                    this.data = null;
                    bunny.alpha = 0.5;
                    this.dragging = false;
                })
                .on("pointermove", (event: PIXI.interaction.InteractionEvent): void => {
                    if (this.dragging) {
                        const newPosition = this.data.getLocalPosition(bunny);
                        bunny.x = newPosition.x;
                        bunny.y = newPosition.y;
                    }
                });

            bunny.x = x;
            bunny.y = y;

            this.app.stage.addChild(bunny);
        }
    }

    class GraphicsDemo {
        private app: PIXI.Application;
        private graphics: PIXI.Graphics;
        private thing: PIXI.Graphics;
        private count: number;

        constructor() {
            this.app = new PIXI.Application(800, 600, { antialias: true });
            this.app.stage.interactive = true;
            document.body.appendChild(this.app.view);

            const graphics = new PIXI.Graphics();

            graphics.beginFill(0xFF3300);
            graphics.lineStyle(10, 0xffd900, 1);

            graphics.moveTo(50, 50);
            graphics.lineTo(250, 50);
            graphics.lineTo(100, 100);
            graphics.lineTo(250, 220);
            graphics.lineTo(50, 220);
            graphics.lineTo(50, 50);
            graphics.endFill();

            graphics.lineStyle(10, 0xFF0000, 0.8);
            graphics.beginFill(0xFF700B, 1);

            graphics.moveTo(210, 300);
            graphics.lineTo(450, 320);
            graphics.lineTo(570, 350);
            graphics.quadraticCurveTo(600, 0, 480, 100);
            graphics.lineTo(330, 120);
            graphics.lineTo(410, 200);
            graphics.lineTo(210, 300);
            graphics.endFill();

            graphics.lineStyle(2, 0x0000FF, 1);
            graphics.drawRect(50, 250, 100, 100);

            graphics.lineStyle(0);
            graphics.beginFill(0xFFFF0B, 0.5);
            graphics.drawCircle(470, 200, 100);
            graphics.endFill();

            graphics.lineStyle(20, 0x33FF00);
            graphics.moveTo(30, 30);
            graphics.lineTo(600, 300);

            this.graphics = graphics;

            this.app.stage.addChild(this.graphics);

            this.thing = new PIXI.Graphics();
            this.thing.x = 800 / 2;
            this.thing.y = 600 / 2;
            this.app.stage.addChild(this.thing);

            this.count = 0;

            this.app.stage.on("pointertap", (): void => {
                this.graphics.lineStyle(Math.random() * 30, Math.random() * 0xFFFFFF, 1);
                this.graphics.moveTo(Math.random() * 800, Math.random() * 600);
                this.graphics.bezierCurveTo(
                    Math.random() * 800, Math.random() * 600,
                    Math.random() * 800, Math.random() * 600,
                    Math.random() * 800, Math.random() * 600
                );
            });

            this.app.ticker.add((): void => {
                this.count += 0.1;

                this.thing.clear();
                this.thing.lineStyle(10, 0xff0000, 1);
                this.thing.beginFill(0xffFF00, 0.5);

                this.thing.moveTo(-120 + Math.sin(this.count) * 20, -100 + Math.cos(this.count) * 20);
                this.thing.lineTo(120 + Math.cos(this.count) * 20, -100 + Math.sin(this.count) * 20);
                this.thing.lineTo(120 + Math.sin(this.count) * 20, 100 + Math.cos(this.count) * 20);
                this.thing.lineTo(-120 + Math.cos(this.count) * 20, 100 + Math.sin(this.count) * 20);
                this.thing.lineTo(-120 + Math.sin(this.count) * 20, -100 + Math.cos(this.count) * 20);

                this.thing.rotation = this.count * 0.1;
            });
        }
    }

    class Interactivity {
        private app: PIXI.Application;
        private background: PIXI.Sprite;
        private buttons: PIXI.Sprite[];

        constructor() {
            this.app = new PIXI.Application();
            document.body.appendChild(this.app.view);

            const background = PIXI.Sprite.fromImage("required/assets/button_test_BG.jpg");
            background.width = this.app.renderer.width;
            background.height = this.app.renderer.height;
            this.background = background;
            this.app.stage.addChild(this.background);

            this.buttons = [];

            const buttonPositions = [
                175, 75,
                655, 75,
                410, 325,
                150, 465,
                685, 445
            ];

            const textureButton = PIXI.Texture.fromImage("../../_assets/button.png");
            const textureButtonDown = PIXI.Texture.fromImage("../../_assets/buttonDown.png");
            const textureButtonOver = PIXI.Texture.fromImage("../../_assets/buttonOver.png");

            for (let i = 0; i < 5; i++) {
                const button = new PIXI.Sprite(textureButton);
                button.anchor.set(0.5);
                button.x = buttonPositions[i * 2];
                button.y = buttonPositions[i * 2 + 1];
                button.interactive = true;
                button.buttonMode = true;

                button
                    .on("pointerdown", (): void => {
                        // blah
                    })
                    .on("pointerup", (): void => {
                        // blah
                    })
                    .on("pointerupoutside", (): void => {
                        // blah
                    })
                    .on("pointerover", (): void => {
                        // blah
                    })
                    .on("pointerout", (): void => {
                        // blah
                    });

                this.app.stage.addChild(button);
                this.buttons.push(button);
            }

            this.buttons[0].scale.set(1.2);
            this.buttons[2].rotation = Math.PI / 10;
            this.buttons[3].scale.set(0.8);
            this.buttons[4].scale.set(0.8, 1.2);
            this.buttons[4].rotation = Math.PI;
        }
    }

    class Masking {
        private app: PIXI.Application;
        private bg: PIXI.Sprite;
        private container: PIXI.Container;
        private bgFront: PIXI.Sprite;
        private light1: PIXI.Sprite;
        private light2: PIXI.Sprite;
        private panda: PIXI.Sprite;
        private thing: PIXI.Graphics;
        private count: number;
        private help: PIXI.Text;

        constructor() {
            this.app = new PIXI.Application(800, 600, { antialias: true });
            this.app.stage.interactive = true;
            document.body.appendChild(this.app.view);

            this.bg = PIXI.Sprite.fromImage("required/assets/BGrotate.jpg");
            this.bg.anchor.set(0.5);
            this.bg.x = this.app.renderer.width / 2;
            this.bg.y = this.app.renderer.height / 2;
            this.app.stage.addChild(this.bg);

            this.container = new PIXI.Container();
            this.container.x = this.app.renderer.width / 2;
            this.container.y = this.app.renderer.height / 2;
            this.app.stage.addChild(this.container);

            this.bgFront = PIXI.Sprite.fromImage("required/assets/SceneRotate.jpg");
            this.bgFront.anchor.set(0.5);

            this.light2 = PIXI.Sprite.fromImage("required/assets/LightRotate2.png");
            this.light2.anchor.set(0.5);

            this.light1 = PIXI.Sprite.fromImage("required/assets/LightRotate1.png");
            this.light1.anchor.set(0.5);

            this.panda = PIXI.Sprite.fromImage("required/assets/panda.png");
            this.panda.anchor.set(0.5);

            this.container.addChild(this.bgFront, this.light2, this.light1, this.panda);

            this.app.stage.addChild(this.container);

            this.thing = new PIXI.Graphics();
            this.app.stage.addChild(this.thing);
            this.thing.x = this.app.renderer.width / 2;
            this.thing.y = this.app.renderer.height / 2;
            this.thing.lineStyle(0);
            this.container.mask = this.thing;

            this.count = 0;

            this.app.stage.on("pointertap", (): void => {
                if (!this.container.mask) {
                    this.container.mask = this.thing;
                } else {
                    this.container.mask = null;
                }
            });

            this.app.ticker.add((): void => {
                this.bg.rotation += 0.01;
                this.bgFront.rotation -= 0.01;

                this.light1.rotation += 0.02;
                this.light2.rotation += 0.01;

                this.panda.scale.x = 1 + Math.sin(this.count) * 0.04;
                this.panda.scale.y = 1 + Math.cos(this.count) * 0.04;

                this.count += 0.1;

                this.thing.clear();

                this.thing.beginFill(0x8bc5ff, 0.4);
                this.thing.moveTo(-120 + Math.sin(this.count) * 20, -100 + Math.cos(this.count) * 20);
                this.thing.lineTo(-320 + Math.cos(this.count) * 20, 100 + Math.sin(this.count) * 20);
                this.thing.lineTo(120 + Math.cos(this.count) * 20, -100 + Math.sin(this.count) * 20);
                this.thing.lineTo(120 + Math.sin(this.count) * 20, 100 + Math.cos(this.count) * 20);
                this.thing.lineTo(-120 + Math.cos(this.count) * 20, 100 + Math.sin(this.count) * 20);
                this.thing.lineTo(-120 + Math.sin(this.count) * 20, -300 + Math.cos(this.count) * 20);
                this.thing.lineTo(-320 + Math.sin(this.count) * 20, -100 + Math.cos(this.count) * 20);
                this.thing.rotation = this.count * 0.1;
            });
        }
    }

    class RenderTextureDemo {
        private app: PIXI.Application;

        private renderTexture: PIXI.RenderTexture;
        private renderTexture2: PIXI.RenderTexture;
        private currentTexture: PIXI.RenderTexture;

        private outputSprite: PIXI.Sprite;
        private stuffContainer: PIXI.Container;

        private items: PIXI.Sprite[];

        private count: number;

        constructor() {
            this.app = new PIXI.Application();
            document.body.appendChild(this.app.view);

            this.renderTexture = PIXI.RenderTexture.create(
                this.app.renderer.width,
                this.app.renderer.height
            );
            this.renderTexture2 = PIXI.RenderTexture.create(
                this.app.renderer.width,
                this.app.renderer.height
            );
            this.currentTexture = this.renderTexture;

            this.outputSprite = new PIXI.Sprite(this.currentTexture);
            this.outputSprite.x = 400;
            this.outputSprite.y = 300;
            this.outputSprite.anchor.set(0.5);
            this.app.stage.addChild(this.outputSprite);

            this.stuffContainer = new PIXI.Container();
            this.stuffContainer.x = 400;
            this.stuffContainer.y = 300;
            this.app.stage.addChild(this.stuffContainer);

            const fruits = [
                "required/assets/spinObj_01.png",
                "required/assets/spinObj_02.png",
                "required/assets/spinObj_03.png",
                "required/assets/spinObj_04.png",
                "required/assets/spinObj_05.png",
                "required/assets/spinObj_06.png",
                "required/assets/spinObj_07.png",
                "required/assets/spinObj_08.png"
            ];

            this.items = [];

            for (let i = 0; i < 20; i++) {
                const item = PIXI.Sprite.fromImage(fruits[i % fruits.length]);
                item.x = Math.random() * 400 - 200;
                item.y = Math.random() * 400 - 200;
                item.anchor.set(0.5);
                this.stuffContainer.addChild(item);
                this.items.push(item);
            }

            this.count = 0;

            this.app.ticker.add((): void => {
                for (const item of this.items) {
                    item.rotation += 0.1;
                }

                this.count += 0.01;

                const temp = this.renderTexture;
                this.renderTexture = this.renderTexture2;
                this.renderTexture2 = temp;

                this.outputSprite.texture = this.renderTexture;

                this.stuffContainer.rotation -= 0.01;
                this.outputSprite.scale.set(1 + Math.sin(this.count) * 0.2);

                this.app.renderer.render(this.app.stage, this.renderTexture2, false);
            });
        }
    }

    class StripDemo {
        private app: PIXI.Application;
        private count: number;
        private points: PIXI.Point[];
        private strip: PIXI.mesh.Rope;
        private snakeContainer: PIXI.Container;

        constructor() {
            this.app = new PIXI.Application();
            document.body.appendChild(this.app.view);

            this.count = 0;

            const ropeLength = 918 / 20;

            this.points = [];

            for (let i = 0; i < 20; i++) {
                this.points.push(new PIXI.Point(i * ropeLength, 0));
            }

            this.strip = new PIXI.mesh.Rope(PIXI.Texture.fromImage("required/assets/snake.png"), this.points);
            this.strip.x = -459;

            this.snakeContainer = new PIXI.Container();
            this.snakeContainer.position.x = 400;
            this.snakeContainer.position.y = 300;
            this.snakeContainer.scale.set(800 / 1100);
            this.snakeContainer.addChild(this.strip);
            this.app.stage.addChild(this.snakeContainer);

            this.app.ticker.add((): void => {
                this.count += 0.1;
                for (let i = 0; i < this.points.length; i++) {
                    this.points[i].y = Math.sin((i * 0.5) + this.count) * 30;
                    this.points[i].x = i * ropeLength + Math.cos((i * 0.3) + this.count) * 20;
                }
            });
        }
    }

    class TextDemo {
        private app: PIXI.Application;
        private bitmapFontText: PIXI.extras.BitmapText;
        private background: PIXI.Sprite;
        private textSample: PIXI.Text;
        private spinningText: PIXI.Text;
        private countingText: PIXI.Text;
        private count: number;

        constructor() {
            this.app = new PIXI.Application();
            document.body.appendChild(this.app.view);

            PIXI.loader
                .add("desyrel", "required/assets/desyrel.xml")
                .load((): void => {
                    this.bitmapFontText = new PIXI.extras.BitmapText("bitmap fonts are\n now supported!", { font: "35px Desyrel", align: "right" });
                    this.bitmapFontText.x = this.app.renderer.width - this.bitmapFontText.textWidth - 20;
                    this.bitmapFontText.y = 20;
                    this.app.stage.addChild(this.bitmapFontText);
                });

            this.background = PIXI.Sprite.fromImage("required/assets/textDemoBG.jpg");
            this.background.width = this.app.renderer.width;
            this.background.height = this.app.renderer.height;
            this.app.stage.addChild(this.background);

            this.textSample = new PIXI.Text("Pixi.js can has\n multiline text!", {
                fontFamily: "Snippet",
                fontSize: 35,
                fill: "white",
                align: "left"
            });
            this.textSample.position.set(20);

            this.spinningText = new PIXI.Text("I\"m fun!", {
                fontWeight: "bold",
                fontSize: 60,
                fontFamily: "Arial",
                fill: "#cc00ff",
                align: "center",
                stroke: "#FFFFFF",
                strokeThickness: 6
            });
            this.spinningText.anchor.set(0.5);
            this.spinningText.x = this.app.renderer.width / 2;
            this.spinningText.y = this.app.renderer.height / 2;

            this.countingText = new PIXI.Text("COUNT 4Elet: 0", {
                fontWeight: "bold",
                fontStyle: "italic",
                fontSize: 60,
                fontFamily: "Arvo",
                fill: "#3e1707",
                align: "center",
                stroke: "#a4410e",
                strokeThickness: 7
            });

            this.countingText.x = this.app.renderer.width / 2;
            this.countingText.y = 500;
            this.countingText.anchor.x = 0.5;

            this.app.stage.addChild(this.textSample, this.spinningText, this.countingText);

            this.count = 0;

            this.app.ticker.add((): void => {
                this.count += 0.05;
                this.countingText.text = "COUNT 4Elet: " + Math.floor(this.count);

                this.spinningText.rotation += 0.03;
            });
        }
    }

    class TextureRotate {
        private app: PIXI.Application;
        private bol: boolean;
        private texture: PIXI.Texture;
        private secondTexture: PIXI.Texture;
        private dude: PIXI.Sprite;

        constructor() {
            this.app = new PIXI.Application();
            document.body.appendChild(this.app.view);

            this.bol = false;

            PIXI.loader.add("flowerTop", "required/assets/flowerTop.png");
            PIXI.loader.load((loader: PIXI.loaders.Loader, resources: any) => {
                this.texture = resources.flowerTop.texture;
                this.init();
            });
        }

        private init(): void {
            const textures = [this.texture];
            const D8 = PIXI.GroupD8;
            for (let rotate = 1; rotate < 16; rotate++) {
                const h = D8.isSwapWidthHeight(rotate) ? this.texture.frame.width : this.texture.frame.height;
                const w = D8.isSwapWidthHeight(rotate) ? this.texture.frame.height : this.texture.frame.width;

                const frame = this.texture.frame;
                const crop = new PIXI.Rectangle(this.texture.frame.x, this.texture.frame.y, w, h);
                const trim = crop;
                let rotatedTexture: PIXI.Texture;
                if (rotate % 2 === 0) {
                    rotatedTexture = new PIXI.Texture(this.texture.baseTexture, frame, crop, trim, rotate);
                } else {
                    rotatedTexture = new PIXI.Texture(this.texture.baseTexture, frame, crop, trim, rotate - 1);
                    rotatedTexture.rotate++;
                }
                textures.push(rotatedTexture);
            }

            const offsetX = this.app.renderer.width / 16 | 0;
            const offsetY = this.app.renderer.height / 8 | 0;
            const gridW = this.app.renderer.width / 4 | 0;
            const gridH = this.app.renderer.height / 5 | 0;

            for (let i = 0; i < 16; i++) {
                const dude = new PIXI.Sprite(textures[i < 8 ? i * 2 : (i - 8) * 2 + 1]);
                dude.scale.x = 0.5;
                dude.scale.y = 0.5;
                dude.x = offsetX + gridW * (i % 4);
                dude.y = offsetY + gridH * (i / 4 | 0);
                this.app.stage.addChild(dude);

                const text = new PIXI.Text("rotate = " + dude.texture.rotate, { fontFamily: "Courier New", fontSize: "12px", fill: "white", align: "left" });
                text.x = dude.x;
                text.y = dude.y - 20;
                this.app.stage.addChild(text);
            }
        }
    }

    class TextureSwap {
        private app: PIXI.Application;
        private bol: boolean;
        private texture: PIXI.Texture;
        private secondTexture: PIXI.Texture;
        private dude: PIXI.Sprite;

        constructor() {
            this.app = new PIXI.Application();
            document.body.appendChild(this.app.view);

            this.bol = false;

            this.texture = PIXI.Texture.fromImage("required/assets/flowerTop.png");

            this.secondTexture = PIXI.Texture.fromImage("required/assets/eggHead.png");

            this.dude = new PIXI.Sprite(this.texture);
            this.dude.anchor.set(0.5);
            this.dude.x = this.app.renderer.width / 2;
            this.dude.y = this.app.renderer.height / 2;
            this.dude.interactive = true;
            this.dude.buttonMode = true;
            this.app.stage.addChild(this.dude);

            this.dude.on("pointertap", (): void => {
                this.bol = !this.bol;
                if (this.bol) {
                    this.dude.texture = this.secondTexture;
                } else {
                    this.dude.texture = this.texture;
                }
            });

            this.app.ticker.add((): void => {
                this.dude.rotation += 0.1;
            });
        }
    }

    class Tinting {
        private app: PIXI.Application;
        private aliens: Dude[];

        constructor() {
            this.app = new PIXI.Application();
            document.body.appendChild(this.app.view);

            this.aliens = [];

            const totalDudes = 20;

            const dudeTexture = PIXI.Texture.fromImage("required/assets/eggHead.png");

            for (let i = 0; i < totalDudes; i++) {
                const dude = new Dude(dudeTexture);
                dude.anchor.set(0.5);
                dude.scale.set(0.8 + Math.random() * 0.3);
                dude.x = Math.random() * this.app.renderer.width;
                dude.y = Math.random() * this.app.renderer.height;
                dude.tint = Math.random() * 0xFFFFFF;
                dude.direction = Math.random() * Math.PI * 2;
                dude.turningSpeed = Math.random() - 0.8;
                dude.speed = 2 + Math.random() * 2;

                this.aliens.push(dude);
                this.app.stage.addChild(dude);
            }

            const dudeBoundsPadding = 100;
            const dudeBounds = new PIXI.Rectangle(-dudeBoundsPadding,
                -dudeBoundsPadding,
                this.app.renderer.width + dudeBoundsPadding * 2,
                this.app.renderer.height + dudeBoundsPadding * 2);

            this.app.ticker.add((): void => {
                for (const dude of this.aliens) {
                    dude.direction += dude.turningSpeed * 0.01;
                    dude.x += Math.sin(dude.direction) * dude.speed;
                    dude.y += Math.cos(dude.direction) * dude.speed;
                    dude.rotation = -dude.direction - Math.PI / 2;

                    if (dude.x < dudeBounds.x) {
                        dude.x += dudeBounds.width;
                    } else if (dude.x > dudeBounds.x + dudeBounds.width) {
                        dude.x -= dudeBounds.width;
                    }

                    if (dude.y < dudeBounds.y) {
                        dude.y += dudeBounds.height;
                    } else if (dude.y > dudeBounds.y + dudeBounds.height) {
                        dude.y -= dudeBounds.height;
                    }
                }
            });
        }
    }

    class TransparentBackground {
        private app: PIXI.Application;
        private bunny: PIXI.Sprite;

        constructor() {
            this.app = new PIXI.Application(800, 600, { transparent: true });
            document.body.appendChild(this.app.view);

            this.bunny = PIXI.Sprite.fromImage("required/assets/bunny.png");

            this.bunny.anchor.set(0.5);

            this.bunny.x = this.app.renderer.width / 2;
            this.bunny.y = this.app.renderer.height / 2;

            this.app.stage.addChild(this.bunny);

            this.app.ticker.add((): void => {
                this.bunny.rotation += 0.1;
            });
        }
    }
}

function filters() {
    class BlurFilter {
        private app: PIXI.Application;
        private bg: PIXI.Sprite;
        private littleDudes: PIXI.Sprite;
        private littleRobot: PIXI.Sprite;
        private blurFilter1: PIXI.filters.BlurFilter;
        private blurFilter2: PIXI.filters.BlurFilter;
        private count: number;

        constructor() {
            this.app = new PIXI.Application(800, 600);
            document.body.appendChild(this.app.view);

            this.bg = PIXI.Sprite.fromImage("required/assets/depth_blur_BG.jpg");
            this.bg.width = this.app.renderer.width;
            this.bg.height = this.app.renderer.height;
            this.app.stage.addChild(this.bg);

            this.littleDudes = PIXI.Sprite.fromImage("required/assets/depth_blur_dudes.jpg");
            this.littleDudes.x = (this.app.renderer.width / 2) - 315;
            this.littleDudes.y = 200;
            this.app.stage.addChild(this.littleDudes);

            this.littleRobot = PIXI.Sprite.fromImage("required/assets/depth_blur_moby.jpg");
            this.littleRobot.x = (this.app.renderer.width / 2) - 200;
            this.littleRobot.y = 100;
            this.app.stage.addChild(this.littleRobot);

            this.blurFilter1 = new PIXI.filters.BlurFilter();
            this.blurFilter2 = new PIXI.filters.BlurFilter();

            this.littleDudes.filters = [this.blurFilter1];
            this.littleRobot.filters = [this.blurFilter2];

            this.count = 0;

            this.app.ticker.add((): void => {
                this.count += 0.005;

                const blurAmount = Math.cos(this.count);
                const blurAmount2 = Math.sin(this.count);

                this.blurFilter1.blur = 20 * (blurAmount);
                this.blurFilter2.blur = 20 * (blurAmount2);
            });
        }
    }

    class DisplacementMap {
        private app: PIXI.Application;
        private container: PIXI.Container;
        private maggots: DisplacementMapDude[];
        private displacementSprite: PIXI.Sprite;
        private displacementFilter: PIXI.filters.DisplacementFilter;
        private ring: PIXI.Sprite;
        private bg: PIXI.Sprite;
        private count: number;

        constructor() {
            this.app = new PIXI.Application(800, 600);
            this.app.stage.interactive = true;
            document.body.appendChild(this.app.view);

            this.container = new PIXI.Container();
            this.app.stage.addChild(this.container);

            const padding = 100;
            const bounds = new PIXI.Rectangle(
                -padding,
                -padding,
                this.app.renderer.width + padding * 2,
                this.app.renderer.height + padding * 2
            );
            this.maggots = [];

            for (let i = 0; i < 20; i++) {
                const maggot = new DisplacementMapDude();
                maggot.anchor.set(0.5);
                this.container.addChild(maggot);

                maggot.direction = Math.random() * Math.PI * 2;
                maggot.speed = 1;
                maggot.turnSpeed = Math.random() - 0.8;

                maggot.position.x = Math.random() * bounds.width;
                maggot.position.y = Math.random() * bounds.height;

                maggot.scale.set(1 + Math.random() * 0.3);
                //tslint:disable-next-line:whitespace
                maggot.original = (<PIXI.Point>maggot.scale).clone();
                this.maggots.push(maggot);
            }

            this.displacementSprite = PIXI.Sprite.fromImage("required/assets/displace.png");
            const displacementFilter = new PIXI.filters.DisplacementFilter(this.displacementSprite);
            this.app.stage.addChild(this.displacementSprite);

            this.container.filters = [displacementFilter];

            displacementFilter.scale.x = 110;
            displacementFilter.scale.y = 110;

            this.ring = PIXI.Sprite.fromImage("required/assets/ring.png");
            this.ring.anchor.set(0.5);
            this.ring.visible = false;
            this.app.stage.addChild(this.ring);

            this.bg = PIXI.Sprite.fromImage("required/assets/bkg-grass.jpg");
            this.bg.width = this.app.renderer.width;
            this.bg.height = this.app.renderer.height;
            this.bg.alpha = 0.4;
            this.container.addChild(this.bg);

            this.count = 0;

            this.app.stage
                .on("mousemove", this.onPointerMove)
                .on("touchmove", this.onPointerMove);

            this.app.ticker.add((): void => {
                this.count += 0.05;

                for (const maggot of this.maggots) {
                    maggot.direction += maggot.turnSpeed * 0.01;
                    maggot.x += Math.sin(maggot.direction) * maggot.speed;
                    maggot.y += Math.cos(maggot.direction) * maggot.speed;

                    maggot.rotation = -maggot.direction - Math.PI / 2;
                    maggot.scale.x = maggot.original.x + Math.sin(this.count) * 0.2;

                    if (maggot.x < bounds.x) {
                        maggot.x += bounds.width;
                    } else if (maggot.x > bounds.x + bounds.width) {
                        maggot.x -= bounds.width;
                    }

                    if (maggot.y < bounds.y) {
                        maggot.y += bounds.height;
                    } else if (maggot.y > bounds.y + bounds.height) {
                        maggot.y -= bounds.height;
                    }
                }
            });
        }

        private onPointerMove = (eventData: PIXI.interaction.InteractionEvent): void => {
            this.ring.visible = true;
            this.displacementSprite.x = eventData.data.global.x - 100;
            this.displacementSprite.y = eventData.data.global.y - this.displacementSprite.height / 2;
            this.ring.x = eventData.data.global.x - 25;
            this.ring.y = eventData.data.global.y;
        }
    }
    class DisplacementMapDude extends PIXI.Sprite {
        direction: number = 0;
        speed: number = 0;
        turnSpeed: number = 0;
        original: PIXI.Point = new PIXI.Point();

        constructor() {
            super(PIXI.Texture.fromImage("../../_assets/maggot.png"));
        }
    }

    class Filter {
        private app: PIXI.Application;
        private bg: PIXI.Sprite;
        private filter: PIXI.filters.ColorMatrixFilter;
        private container: PIXI.Container;
        private bgFront: PIXI.Sprite;
        private light2: PIXI.Sprite;
        private light1: PIXI.Sprite;
        private panda: PIXI.Sprite;
        private count: number;
        private enabled: boolean;
        private help: PIXI.Text;

        constructor() {
            this.app = new PIXI.Application();
            this.app.stage.interactive = true;
            document.body.appendChild(this.app.view);

            this.bg = PIXI.Sprite.fromImage("required/assets/BGrotate.jpg");
            this.bg.anchor.set(0.5);
            this.bg.x = this.app.renderer.width / 2;
            this.bg.y = this.app.renderer.height / 2;

            this.filter = new PIXI.filters.ColorMatrixFilter();

            this.container = new PIXI.Container();
            this.container.position.x = this.app.renderer.width / 2;
            this.container.position.y = this.app.renderer.height / 2;
            this.app.stage.addChild(this.container);

            this.bgFront = PIXI.Sprite.fromImage("required/assets/SceneRotate.jpg");
            this.bgFront.anchor.set(0.5);
            this.container.addChild(this.bgFront);

            this.light2 = PIXI.Sprite.fromImage("required/assets/LightRotate2.png");
            this.light2.anchor.set(0.5);
            this.container.addChild(this.light2);

            this.light1 = PIXI.Sprite.fromImage("../../_assets/LightRotate1.png");
            this.light1.anchor.set(0.5);
            this.container.addChild(this.light1);

            this.panda = PIXI.Sprite.fromImage("required/assets/panda.png");
            this.panda.anchor.set(0.5);
            this.container.addChild(this.panda);

            this.app.stage.filters = [this.filter];

            this.count = 0;
            this.enabled = true;

            this.app.stage.on("pointertap", (): void => {
                this.enabled = !this.enabled;
                this.app.stage.filters = this.enabled ? [this.filter] : null;
            });

            this.help = new PIXI.Text("Click or tap to turn filters on / off.", {
                fontFamily: "Arial",
                fontSize: 12,
                fontWeight: "bold",
                fill: "white"
            });
            this.help.y = this.app.renderer.height - 25;
            this.help.x = 10;
            this.app.stage.addChild(this.help);

            this.app.ticker.add((delta: number): void => {
                this.bg.rotation += 0.01;
                this.bgFront.rotation -= 0.01;
                this.light1.rotation += 0.02;
                this.light2.rotation += 0.01;

                this.panda.scale.x = 1 + Math.sin(this.count) * 0.04;
                this.panda.scale.y = 1 + Math.cos(this.count) * 0.04;

                this.count += 0.1;

                const matrix = this.filter.matrix;

                matrix[1] = Math.sin(this.count) * 3;
                matrix[2] = Math.cos(this.count);
                matrix[3] = Math.cos(this.count) * 1.5;
                matrix[4] = Math.sin(this.count / 3) * 2;
                matrix[5] = Math.sin(this.count / 2);
                matrix[6] = Math.sin(this.count / 4);
            });
        }
    }
}
