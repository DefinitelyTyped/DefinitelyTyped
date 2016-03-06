/// <reference path="../pixi.js/pixi.js.d.ts" />
/// <reference path="pixi-spine.d.ts" />

module Spine {

    export class Dragon {

        private renderer: PIXI.CanvasRenderer | PIXI.WebGLRenderer;

        private stage: PIXI.Container;

        private dragon: PIXI.spine.Spine;

        constructor() {

            this.renderer = PIXI.autoDetectRenderer(800, 600, { backgroundColor: 0x1099bb });
            document.body.appendChild(this.renderer.view);

            // create the root of the scene graph
            this.stage = new PIXI.Container();

            PIXI.loader.add('dragon', '../../_assets/spine/dragon.json').load(this.onAssetsLoaded);

        }

        private onAssetsLoaded = (loader: PIXI.loaders.Loader, res: any): void => {

            //initiate the spine animation
            this.dragon = new PIXI.spine.Spine(res.dragon.spineData);
            this.dragon.skeleton.setToSetupPose();
            this.dragon.update(0);
            this.dragon.autoUpdate = false;

            //create a container for the spin animation and add the animation to it
            var dragonCage: PIXI.Container = new PIXI.Container();
            dragonCage.addChild(this.dragon);

            // measure the spine animation and position it inside its container to align it to the origin
            var localRect: PIXI.Rectangle = this.dragon.getLocalBounds();
            this.dragon.position.set(-localRect.x, -localRect.y);

            // now we can scale, position and rotate the container as any other display object
            var scale = Math.min((this.renderer.width * 0.7) / dragonCage.width, (this.renderer.height * 0.7) / dragonCage.height);
            dragonCage.scale.set(scale, scale);
            dragonCage.position.set((this.renderer.width - dragonCage.width) * 0.5, (this.renderer.height - dragonCage.height) * 0.5);

            // add the container to the stage
            this.stage.addChild(dragonCage);

            // once position and scaled, set the animation to play
            this.dragon.state.setAnimationByName(0, 'flying', true);

            this.animate();

        }

        private animate = (): void => {

            requestAnimationFrame(this.animate);

            // update the spine animation, only needed if dragon.autoupdate is set to false
            this.dragon.update(0.01666666666667); // HARDCODED FRAMERATE!

            this.renderer.render(this.stage);

        }

    }

}

module Spine {

    export class Goblin {

        private renderer: PIXI.CanvasRenderer | PIXI.WebGLRenderer;

        private stage: PIXI.Container;

        private goblin: PIXI.spine.Spine;

        constructor() {

            this.renderer = PIXI.autoDetectRenderer(800, 600, { backgroundColor: 0x1099bb });
            document.body.appendChild(this.renderer.view);

            // create the root of the scene graph
            this.stage = new PIXI.Container();
            this.stage.interactive = true;

            PIXI.loader.add('goblins', '../../_assets/spine/goblins.json').load(this.onAssetsLoaded);

        }

        private onAssetsLoaded = (loader: PIXI.loaders.Loader, res: any): void => {

            //initiate the spine animation
            this.goblin = new PIXI.spine.Spine(res.goblins.spineData);
            this.goblin.skeleton.setSkinByName('goblin');
            this.goblin.skeleton.setSlotsToSetupPose();

            this.goblin.position.x = 400;
            this.goblin.position.y = 600;
            this.goblin.scale.set(1.5);

            this.goblin.state.setAnimationByName(0, 'walk', true);

            this.stage.addChild(this.goblin);

            this.stage.on('click', () => {

                // change current skin
                var currentSkinName = this.goblin.skeleton.skin.name;
                var newSkinName = (currentSkinName === 'goblin' ? 'goblingirl' : 'goblin');
                this.goblin.skeleton.setSkinByName(newSkinName);
                this.goblin.skeleton.setSlotsToSetupPose();

            });

            this.animate();

        }

        private animate = (): void => {

            requestAnimationFrame(this.animate);

            this.renderer.render(this.stage);

        }

    }

}

module Spine {

    export class Pixie {

        private renderer: PIXI.CanvasRenderer | PIXI.WebGLRenderer;

        private stage: PIXI.Container;

        private pixie: PIXI.spine.Spine;

        private position: number;
        private background: PIXI.Sprite;
        private background2: PIXI.Sprite;
        private foreground: PIXI.Sprite;
        private foreground2: PIXI.Sprite;

        constructor() {

            this.renderer = PIXI.autoDetectRenderer(800, 600, { backgroundColor: 0x1099bb });
            document.body.appendChild(this.renderer.view);

            // create the root of the scene graph
            this.stage = new PIXI.Container();
            this.stage.interactive = true;

            PIXI.loader.add('pixie', '../../_assets/spine/pixie.json').load(this.onAssetsLoaded);

        }

        private onAssetsLoaded = (loader: PIXI.loaders.Loader, res: any): void => {

            this.background = PIXI.Sprite.fromImage('../../_assets/spine/iP4_BGtile.jpg');
            this.background2 = PIXI.Sprite.fromImage('../../_assets/spine/iP4_BGtile.jpg');
            this.stage.addChild(this.background);
            this.stage.addChild(this.background2);

            this.foreground = PIXI.Sprite.fromImage('../../_assets/spine/iP4_ground.png');
            this.foreground2 = PIXI.Sprite.fromImage('../../_assets/spine/iP4_ground.png');
            this.stage.addChild(this.foreground);
            this.stage.addChild(this.foreground2);
            this.foreground.position.y = this.foreground2.position.y = 640 - this.foreground2.height;

            this.pixie = new PIXI.spine.Spine(res.pixie.spineData);

            var scale = 0.3;

            this.pixie.position.x = 1024 / 3;
            this.pixie.position.y = 500;

            this.pixie.scale.x = this.pixie.scale.y = scale;

            this.stage.addChild(this.pixie);

            this.pixie.stateData.setMixByName('running', 'jump', 0.2);
            this.pixie.stateData.setMixByName('jump', 'running', 0.4);

            this.pixie.state.setAnimationByName(0, 'running', true);

            this.stage.on('mousedown', this.onTouchStart);
            this.stage.on('touchstart', this.onTouchStart);

            this.animate();

        }

        private onTouchStart = (): void => {

            this.pixie.state.setAnimationByName(0, 'jump', false);
            this.pixie.state.addAnimationByName(0, 'running', true, 0);

        }

        private animate = (): void => {

            this.position += 10;

            this.background.position.x = -(this.position * 0.6);
            this.background.position.x %= 1286 * 2;
            if (this.background.position.x < 0) {
                this.background.position.x += 1286 * 2;
            }
            this.background.position.x -= 1286;

            this.background2.position.x = -(this.position * 0.6) + 1286;
            this.background2.position.x %= 1286 * 2;
            if (this.background2.position.x < 0) {
                this.background2.position.x += 1286 * 2;
            }
            this.background2.position.x -= 1286;

            this.foreground.position.x = -this.position;
            this.foreground.position.x %= 1286 * 2;
            if (this.foreground.position.x < 0) {
                this.foreground.position.x += 1286 * 2;
            }
            this.foreground.position.x -= 1286;

            this.foreground2.position.x = -this.position + 1286;
            this.foreground2.position.x %= 1286 * 2;
            if (this.foreground2.position.x < 0) {
                this.foreground2.position.x += 1286 * 2;
            }
            this.foreground2.position.x -= 1286;

            requestAnimationFrame(this.animate);

            this.renderer.render(this.stage);

        }

    }

    module Spine {

        export class SpineBoy {

            private renderer: PIXI.CanvasRenderer | PIXI.WebGLRenderer;

            private stage: PIXI.Container;

            private spineboy: PIXI.spine.Spine;

            constructor() {

                this.renderer = PIXI.autoDetectRenderer(800, 600, { backgroundColor: 0x1099bb });
                document.body.appendChild(this.renderer.view);

                // create the root of the scene graph
                this.stage = new PIXI.Container();
                this.stage.interactive = true;

                PIXI.loader.add('spineboy', '../../_assets/spine/spineboy.json').load(this.onAssetsLoaded);

            }

            private onAssetsLoaded = (loader: PIXI.loaders.Loader, res: any): void => {

                //initiate the spine animation
                this.spineboy = new PIXI.spine.Spine(res.spineboy.spineData);
                this.spineboy.position.x = this.renderer.width / 2;
                this.spineboy.position.y = this.renderer.height;
                this.spineboy.scale.set(1.5);

                // set up the mixes!
                this.spineboy.stateData.setMixByName('walk', 'jump', 0.2);
                this.spineboy.stateData.setMixByName('jump', 'walk', 0.4);

                // play animation
                this.spineboy.state.setAnimationByName(0, 'walk', true);

                this.stage.addChild(this.spineboy);


                this.stage.on('click', () => {

                    this.spineboy.state.setAnimationByName(0, 'jump', false);
                    this.spineboy.state.addAnimationByName(0, 'walk', true, 0);

                });

                this.animate();

            }

            private animate = (): void => {

                requestAnimationFrame(this.animate);

                this.renderer.render(this.stage);

            }

        }

    }

}