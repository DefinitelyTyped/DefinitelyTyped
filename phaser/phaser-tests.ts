/// <reference path="phaser.d.ts" />

// http://www.photonstorm.com/phaser/advanced-phaser-and-typescript-projects
module Castlevania {
  export class Game extends Phaser.Game {

    constructor() {
      super(800, 600, Phaser.AUTO, 'content', null);
      this.state.add('Boot', Boot, false);
      this.state.add('Preloader', Preloader, false);
      this.state.add('MainMenu', MainMenu, false);
      this.state.add('Level1', Level1, false);

      this.state.start('Boot');
    }
  }

  export class Boot extends Phaser.State {
    preload() {
      this.load.image('preloadBar', 'assets/loader.png');
    }

    create() {
      //  Unless you specifically need to support multitouch I would recommend setting this to 1
      this.input.maxPointers = 1;

      //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
      this.stage.disableVisibilityChange = true;

      if (this.game.device.desktop) {
        //  If you have any desktop specific settings, they can go in here
        this.game.scale.pageAlignHorizontally = true;
        // original source
        // this.stage.scale.pageAlignHorizontally = true;
      }
      else {
        //  Same goes for mobile settings.
      }

      this.game.state.start('Preloader', true, false);
    }
  }

  export class Preloader extends Phaser.State {

    preloadBar: Phaser.Sprite;

    preload() {

      //  Set-up our preloader sprite
      this.preloadBar = this.add.sprite(200, 250, 'preloadBar');
      this.load.setPreloadSprite(this.preloadBar);

      //  Load our actual games assets
      this.load.image('titlepage', 'assets/titlepage.jpg');
      this.load.image('logo', 'assets/logo.png');
      this.load.audio('music', 'assets/title.mp3', true);
      this.load.spritesheet('simon', 'assets/simon.png', 58, 96, 5);
      this.load.image('level1', 'assets/level1.png');

    }

    create() {

      var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
      tween.onComplete.add(this.startMainMenu, this);

    }

    startMainMenu() {

      this.game.state.start('MainMenu', true, false);

    }
  }

  export class MainMenu extends Phaser.State {

    background: Phaser.Sprite;
    logo: Phaser.Sprite;

    create() {

      this.background = this.add.sprite(0, 0, 'titlepage');
      this.background.alpha = 0;

      this.logo = this.add.sprite(this.world.centerX, -300, 'logo');
      this.logo.anchor.setTo(0.5, 0.5);

      this.add.tween(this.background).to({ alpha: 1 }, 2000, Phaser.Easing.Bounce.InOut, true);
      this.add.tween(this.logo).to({ y: 220 }, 2000, Phaser.Easing.Elastic.Out, true, 2000);

      this.input.onDown.addOnce(this.fadeOut, this);

    }

    fadeOut() {

      this.add.tween(this.background).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
      var tween = this.add.tween(this.logo).to({ y: 800 }, 2000, Phaser.Easing.Linear.None, true);

      tween.onComplete.add(this.startGame, this);

    }

    startGame() {

      this.game.state.start('Level1', true, false);

    }

  }

  export class Level1 extends Phaser.State {

    background: Phaser.Sprite;
    music: Phaser.Sound;
    player: Castlevania.Player;

    create() {

      this.background = this.add.sprite(0, 0, 'level1');

      this.music = this.add.audio('music', 1, false);
      this.music.play();

      this.player = new Player(this.game, 130, 284);

    }

  }

  export class Player extends Phaser.Sprite {

    constructor(game: Phaser.Game, x: number, y: number) {

      super(game, x, y, 'simon', 0);

      this.anchor.setTo(0.5, 0);

      this.animations.add('walk', [0, 1, 2, 3, 4], 10, true);

      game.add.existing(this);

    }

    update() {

      this.body.velocity.x = 0;

      if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {

        this.body.velocity.x = -150;
        this.animations.play('walk');

        if (this.scale.x == 1) {
          this.scale.x = -1;
        }
      }
      else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {

        this.body.velocity.x = 150;
        this.animations.play('walk');

        if (this.scale.x == -1) {
          this.scale.x = 1;
        }
      }
      else {
        this.animations.frame = 0;
      }

    }

  }

}

window.onload = () => {

  var game = new Castlevania.Game();

};