///<reference path="pixi.d.ts"/>
///<reference path="webgl.d.ts"/>

function PixiTests()
{

var stage = new PIXI.Stage(0xFFFFFF, true);

stage.interactive = true;

var bg = PIXI.Sprite.fromImage("BGrotate.jpg");
bg.anchor.x = 0.5;
bg.anchor.y = 0.5;

bg.position.x = 620/2;
bg.position.y = 380/2;

stage.addChild(bg);

var container = new PIXI.DisplayObjectContainer();
container.position.x = 620/2;
container.position.y = 380/2;

var bgFront = PIXI.Sprite.fromImage("SceneRotate.jpg");
bgFront.anchor.x = 0.5;
bgFront.anchor.y = 0.5;

container.addChild(bgFront);

var light2 = PIXI.Sprite.fromImage("LightRotate2.png");
light2.anchor.x = 0.5;
light2.anchor.y = 0.5;
container.addChild(light2);

var light1 = PIXI.Sprite.fromImage("LightRotate1.png");
light1.anchor.x = 0.5;
light1.anchor.y = 0.5;
container.addChild(light1);

var panda =  PIXI.Sprite.fromImage("panda.png");
panda.anchor.x = 0.5;
panda.anchor.y = 0.5;

container.addChild(panda);

stage.addChild(container);

// create a renderer instance
var renderer = PIXI.autoDetectRenderer(620, 380);

renderer.view.style.position = "absolute"
renderer.view.style.marginLeft = "-310px";
renderer.view.style.marginTop = "-190px";
renderer.view.style.top = "50%";
renderer.view.style.left = "50%";
renderer.view.style.display = "block";

// add render view to DOM
document.body.appendChild(renderer.view);

// lets create moving shape
var thing = new PIXI.Graphics();
stage.addChild(thing);
thing.position.x = 620/2;
thing.position.y = 380/2;
thing.lineStyle(0);

container.mask = thing;

var count = 0;

stage.click = stage.tap = function()
{
	if(!container.filter)
	{
		container.mask = thing;
		PIXI.runList(stage);
	}
	else
	{
		container.mask = null;
	}
}

/*
 * Add a pixi Logo!
 */
var logo = PIXI.Sprite.fromImage("../../logo_small.png")
stage.addChild(logo);

logo.anchor.x = 1;
logo.position.x = 620
logo.scale.x = logo.scale.y = 0.5;
logo.position.y = 320
logo.interactive = true;
logo.buttonMode = true;

logo.click = logo.tap = function()
{
	window.open("https://github.com/GoodBoyDigital/pixi.js", "_blank")
}

var help = new PIXI.Text("Click to turn masking on / off.", {font:"bold 12pt Arial", fill:"white"});
help.position.y = 350;
help.position.x = 10;
stage.addChild(help);

requestAnimFrame(animate);

function animate() {

	bg.rotation += 0.01;
	bgFront.rotation -= 0.01;

	light1.rotation += 0.02;
	light2.rotation += 0.01;

	panda.scale.x = 1 + Math.sin(count) * 0.04;
	panda.scale.y = 1 + Math.cos(count) * 0.04;

	count += 0.1;

	thing.clear();
	thing.lineStyle(5, 0x16f1ff, 1);
	thing.beginFill(0x8bc5ff, 0.4);
	thing.moveTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count)* 20);
	thing.lineTo(120 + Math.cos(count) * 20, -100 + Math.sin(count)* 20);
	thing.lineTo(120 + Math.sin(count) * 20, 100 + Math.cos(count)* 20);
	thing.lineTo(-120 + Math.cos(count)* 20, 100 + Math.sin(count)* 20);
	thing.lineTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count)* 20);
	thing.rotation = count * 0.1;

	renderer.render(stage);
	requestAnimFrame( animate );
}

/* 13 */

// create an new instance of a pixi stage
var stage = new PIXI.Stage(0xFFFFFF, true);

stage.setInteractive(true);

var sprite=  PIXI.Sprite.fromImage("spinObj_02.png");
//stage.addChild(sprite);
// create a renderer instance
// the 5the parameter is the anti aliasing
var renderer = PIXI.autoDetectRenderer(620, 380, null, false, true);

// set the canvas width and height to fill the screen
//renderer.view.style.width = window.innerWidth + "px";
//renderer.view.style.height = window.innerHeight + "px";
renderer.view.style.display = "block";

// add render view to DOM
document.body.appendChild(renderer.view);

var graphics = new PIXI.Graphics();


// set a fill and line style
graphics.beginFill(0xFF3300);
graphics.lineStyle(10, 0xffd900, 1);

// draw a shape
graphics.moveTo(50,50);
graphics.lineTo(250, 50);
graphics.lineTo(100, 100);
graphics.lineTo(250, 220);
graphics.lineTo(50, 220);
graphics.lineTo(50, 50);
graphics.endFill();

// set a fill and line style again
graphics.lineStyle(10, 0xFF0000, 0.8);
graphics.beginFill(0xFF700B, 1);

// draw a second shape
graphics.moveTo(210,300);
graphics.lineTo(450,320);
graphics.lineTo(570,350);
graphics.lineTo(580,20);
graphics.lineTo(330,120);
graphics.lineTo(410,200);
graphics.lineTo(210,300);
graphics.endFill();

// draw a rectangel
graphics.lineStyle(2, 0x0000FF, 1);
graphics.drawRect(50, 250, 100, 100);

// draw a circle
graphics.lineStyle(0);
graphics.beginFill(0xFFFF0B, 0.5);
graphics.drawCircle(470, 200,100);

graphics.lineStyle(20, 0x33FF00);
graphics.moveTo(30,30);
graphics.lineTo(600, 300);


stage.addChild(graphics);

// lets create moving shape
var thing = new PIXI.Graphics();
stage.addChild(thing);
thing.position.x = 620/2;
thing.position.y = 380/2;

var count = 0;

stage.click = stage.tap = function()
{
	graphics.lineStyle(Math.random() * 30, Math.random() * 0xFFFFFF, 1);
	graphics.moveTo(Math.random() * 620,Math.random() * 380);
	graphics.lineTo(Math.random() * 620,Math.random() * 380);
}

requestAnimFrame(animate);

function animate1() {

	thing.clear();

	count += 0.1;

	thing.clear();
	thing.lineStyle(30, 0xff0000, 1);
	thing.beginFill(0xffFF00, 0.5);

	thing.moveTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count)* 20);
	thing.lineTo(120 + Math.cos(count) * 20, -100 + Math.sin(count)* 20);
	thing.lineTo(120 + Math.sin(count) * 20, 100 + Math.cos(count)* 20);
	thing.lineTo(-120 + Math.cos(count)* 20, 100 + Math.sin(count)* 20);
	thing.lineTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count)* 20);

	thing.rotation = count * 0.1;
	renderer.render(stage);
	requestAnimFrame( animate );
}


// create an new instance of a pixi stage
var stage = new PIXI.Stage(0x000000);

// create a renderer instance
var renderer = PIXI.autoDetectRenderer(800, 600);

// set the canvas width and height to fill the screen
renderer.view.style.width = window.innerWidth + "px";
renderer.view.style.height = window.innerHeight + "px";
renderer.view.style.display = "block";

// add render view to DOM
document.body.appendChild(renderer.view);

// OOH! SHINY!
// create two render textures.. these dynamic textures will be used to draw the scene into itself
var renderTexture = new PIXI.RenderTexture(800, 600);
var renderTexture2 = new PIXI.RenderTexture(800, 600);
var currentTexture = renderTexture;

// create a new sprite that uses the render texture we created above
var outputSprite = new PIXI.Sprite(currentTexture);

// align the sprite
outputSprite.position.x = 800/2;
outputSprite.position.y = 600/2;
outputSprite.anchor.x = 0.5;
outputSprite.anchor.y = 0.5;

// add to stage
stage.addChild(outputSprite);

var stuffContainer = new PIXI.DisplayObjectContainer();

stuffContainer.position.x = 800/2;
stuffContainer.position.y = 600/2

stage.addChild(stuffContainer);

// create an array of image ids..
var fruits = ["spinObj_01.png", "spinObj_02.png",
	"spinObj_03.png", "spinObj_04.png",
	"spinObj_05.png", "spinObj_06.png",
	"spinObj_07.png", "spinObj_08.png"];

// create an array of items
var items = [];

// now create some items and randomly position them in the stuff container
for (var i=0; i < 20; i++)
{
	var item = PIXI.Sprite.fromImage(fruits[i % fruits.length]);
	item.position.x = Math.random() * 400 - 200;
	item.position.y = Math.random() * 400 - 200;

	item.anchor.x = 0.5;
	item.anchor.y = 0.5;

	stuffContainer.addChild(item);
	console.log("_")
	items.push(item);
};

// used for spinning!
var count = 0;


requestAnimFrame(animate);

function animate2() {

	requestAnimFrame( animate );

	for (var i=0; i < items.length; i++)
	{
		// rotate each item
		var item = items[i];
		item.rotation += 0.1;
	};

	count += 0.01;

	// swap the buffers..
	var temp = renderTexture;
	renderTexture = renderTexture2;
	renderTexture2 = temp;


	// set the new texture
	outputSprite.setTexture(renderTexture);

	// twist this up!
	stuffContainer.rotation -= 0.01
	outputSprite.scale.x = outputSprite.scale.y  = 1 + Math.sin(count) * 0.2;

	// render the stage to the texture
	// the true clears the texture before content is rendered
	renderTexture2.render(stage, new PIXI.Point(0,0), true);

	// and finally render the stage
	renderer.render(stage);
}


////



function init()
{
	var assetsToLoader = ["desyrel.fnt"];

	// create a new loader
	var loader = new PIXI.AssetLoader(assetsToLoader);

	// use callback
	loader.onComplete = onAssetsLoaded;

	//begin load

	// create an new instance of a pixi stage
	var stage = new PIXI.Stage(0x66FF99);

	loader.load();
	function onAssetsLoaded()
	{
		var bitmapFontText = new PIXI.BitmapText("bitmap fonts are\n now supported!", {font: "35px Desyrel", align: "right"});
		bitmapFontText.position.x = 620 - bitmapFontText.width - 20;
		bitmapFontText.position.y = 20;

		PIXI.runList(bitmapFontText)
		stage.addChild(bitmapFontText);


	}



	// add a shiney background..
	var background = PIXI.Sprite.fromImage("textDemoBG.jpg");
	stage.addChild(background);

	// create a renderer instance
	var renderer = PIXI.autoDetectRenderer(620, 400);
	// add the renderer view element to the DOM
	document.body.appendChild(renderer.view);

	requestAnimFrame(animate);

	// create some white text using the Snippet webfont
	var textSample = new PIXI.Text("Pixi.js can has\nmultiline text!", {font: "35px Snippet", fill: "white", align: "left"});
	textSample.position.x = 20;
	textSample.position.y = 20;

	// create a text object with a nice stroke
	var spinningText = new PIXI.Text("I'm fun!", {font: "bold 60px Podkova", fill: "#cc00ff", align: "center", stroke: "#FFFFFF", strokeThickness: 6});
	// setting the anchor point to 0.5 will center align the text... great for spinning!
	spinningText.anchor.x = spinningText.anchor.y = 0.5;
	spinningText.position.x = 620 / 2;
	spinningText.position.y = 400 / 2;

	// create a text object that will be updated..
	var countingText = new PIXI.Text("COUNT 4EVAR: 0", {font: "bold italic 60px Arvo", fill: "#3e1707", align: "center", stroke: "#a4410e", strokeThickness: 7});
	countingText.position.x = 620 / 2;
	countingText.position.y = 320;
	countingText.anchor.x = 0.5;

	stage.addChild(textSample);
	stage.addChild(spinningText);
	stage.addChild(countingText);

	var count = 0;
	var score = 0;

	function animate() {

		requestAnimFrame( animate );
		count++;
		if(count == 50)
		{
			count = 0;
			score++;
			// update the text...
			countingText.setText("COUNT 4EVAR: " + score);

		}
		// just for fun, lets rotate the text
		spinningText.rotation += 0.03;

		// render the stage
		renderer.render(stage);
	}
}


/////



// create an new instance of a pixi stage
var stage = new PIXI.Stage(0x97c56e, true);

// create a renderer instance
var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, null);

// add the renderer view element to the DOM
document.body.appendChild(renderer.view);
renderer.view.style.position = "absolute";
renderer.view.style.top = "0px";
renderer.view.style.left = "0px";
requestAnimFrame( animate );

// create a texture from an image path
var texture = PIXI.Texture.fromImage("p2.jpeg");

// create a tiling sprite..
// requires a texture, width and height
// to work in webGL the texture size must be a power of two
var tilingSprite = new PIXI.TilingSprite(texture, window.innerWidth, window.innerHeight)

var count = 0;

stage.addChild(tilingSprite);

function animate33() {

	requestAnimFrame( animate );


	count += 0.005
	tilingSprite.tileScale.x = 2 + Math.sin(count);
	tilingSprite.tileScale.y = 2 + Math.cos(count);

	tilingSprite.tilePosition.x += 1;
	tilingSprite.tilePosition.y += 1;

	// just for fun, lets rotate mr rabbit a little
	//stage.interactionManager.update();
	// render the stage
	renderer.render(stage);
}



/////


// create an new instance of a pixi stage
var stage = new PIXI.Stage(0x97c56e, true);

// create a renderer instance
var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, null);

// add the renderer view element to the DOM
document.body.appendChild(renderer.view);
renderer.view.style.position = "absolute";
renderer.view.style.top = "0px";
renderer.view.style.left = "0px";
requestAnimFrame( animate );

// create a texture from an image path
var texture = PIXI.Texture.fromImage("bunny.png");

for (var i=0; i < 10; i++)
{
	createBunny(Math.random() * window.innerWidth, Math.random() * window.innerHeight)
};


function createBunny(x, y)
{
	// create our little bunny friend..
	var bunny = new PIXI.Sprite(texture);
	//	bunny.width = 300;
	// enable the bunny to be interactive.. this will allow it to respond to mouse and touch events
	bunny.interactive = true;
	// this button mode will mean the hand cursor appears when you rollover the bunny with your mouse
	bunny.buttonMode = true;

	// center the bunnys anchor point
	bunny.anchor.x = 0.5;
	bunny.anchor.y = 0.5;
	// make it a bit bigger, so its easier to touch
	bunny.scale.x = bunny.scale.y = 3;


	// use the mousedown and touchstart
	bunny.mousedown = bunny.touchstart = function(data)
	{
		// stop the default event...
		data.originalEvent.preventDefault();

		// store a refference to the data
		// The reason for this is because of multitouch
		// we want to track the movement of this particular touch
		this.data = data;
		this.alpha = 0.9;
		this.dragging = true;
	};

	// set the events for when the mouse is released or a touch is released
	bunny.mouseup = bunny.mouseupoutside = bunny.touchend = bunny.touchendoutside = function(data)
	{
		this.alpha = 1
		this.dragging = false;
		// set the interaction data to null
		this.data = null;
	};

	// set the callbacks for when the mouse or a touch moves
	bunny.mousemove = bunny.touchmove = function(data)
	{
		if(this.dragging)
		{
			// need to get parent coords..
			var newPosition = this.data.getLocalPosition(this.parent);
			this.position.x = newPosition.x;
			this.position.y = newPosition.y;
		}
	}

	// move the sprite to its designated position
	bunny.position.x = x;
	bunny.position.y = y;

	// add it to the stage
	stage.addChild(bunny);
}

function animate44() {

	requestAnimFrame( animate );

	// just for fun, lets rotate mr rabbit a little
	//stage.interactionManager.update();
	// render the stage
	renderer.render(stage);
}



////

// create an new instance of a pixi stage
var stage = new PIXI.Stage(0x66FF99);

// create a renderer instance
var renderer = PIXI.autoDetectRenderer(400, 300, null, true);

// add the renderer view element to the DOM
document.body.appendChild(renderer.view);
renderer.view.style.position = "absolute";
renderer.view.style.top = "0px";
renderer.view.style.left = "0px";
requestAnimFrame( animate );

// create a texture from an image path
var texture = PIXI.Texture.fromImage("bunny.png");
// create a new Sprite using the texture
var bunny = new PIXI.Sprite(texture);

// center the sprites anchor point
bunny.anchor.x = 0.5;
bunny.anchor.y = 0.5;

// move the sprite t the center of the screen
bunny.position.x = 200;
bunny.position.y = 150;

stage.addChild(bunny);

function animate55() {

	requestAnimFrame( animate );

	// just for fun, lets rotate mr rabbit a little
	bunny.rotation += 0.1;

	// render the stage
	renderer.render(stage);
}



///////



// create an new instance of a pixi stage
// the second parameter is interactivity...
var interactive = true;
var stage = new PIXI.Stage(0x000000, interactive);

// create a renderer instance.
var renderer = PIXI.autoDetectRenderer(620, 400);

// add the renderer view element to the DOM
document.body.appendChild(renderer.view);

requestAnimFrame( animate );

// create a background..
var background = PIXI.Sprite.fromImage("button_test_BG.jpg");

// add background to stage..
stage.addChild(background);

// create some textures from an image path
var textureButton = PIXI.Texture.fromImage("button.png");
var textureButtonDown = PIXI.Texture.fromImage("buttonDown.png");
var textureButtonOver = PIXI.Texture.fromImage("buttonOver.png");

var buttons = [];

var buttonPositions = [175,75,
	600-145, 75,
	600/2 - 20, 400/2 + 10,
	175, 400-75,
	600-115, 400-95];


for (var i=0; i < 5; i++)
{
	var button = new PIXI.Sprite(textureButton);
	button.buttonMode = true;

	button.anchor.x = 0.5;
	button.anchor.y = 0.5;

	button.position.x = buttonPositions[i*2];
	button.position.y = buttonPositions[i*2 + 1];

	// make the button interactive..
	button.interactive = true;

	// set the mousedown and touchstart callback..
	button.mousedown = button.touchstart = function(data){

		this.isdown = true;
		this.setTexture(textureButtonDown);
		this.alpha = 1;
	}

	// set the mouseup and touchend callback..
	button.mouseup = button.touchend = button.mouseupoutside = button.touchendoutside = function(data){
		this.isdown = false;

		if(this.isOver)
		{
			this.setTexture(textureButtonOver);
		}
		else
		{
			this.setTexture(textureButton);
		}
	}

	// set the mouseover callback..
	button.mouseover = function(data){

		this.isOver = true;

		if(this.isdown)return

		this.setTexture(textureButtonOver)
	}

	// set the mouseout callback..
	button.mouseout = function(data){

		this.isOver = false;
		if(this.isdown)return
		this.setTexture(textureButton)
	}

	button.click = function(data){
		// click!
		console.log("CLICK!");
		//	alert("CLICK!")
	}

	button.tap = function(data){
		// click!
		console.log("TAP!!");
		//this.alpha = 0.5;
	}

	// add it to the stage
	stage.addChild(button);

	// add button to array
	buttons.push(button);
};

// set some silly values..

buttons[0].scale.x = 1.2;

buttons[1].scale.y = 1.2;

buttons[2].rotation = Math.PI/10;

buttons[3].scale.x = 0.8;
buttons[3].scale.y = 0.8;

buttons[4].scale.x = 0.8;
buttons[4].scale.y = 1.2;
buttons[4].rotation = Math.PI;
// var button1 =
function animate66() {

	requestAnimFrame( animate );
	// render the stage

	// do a test..

	renderer.render(stage);
}

// add a logo!
var pixiLogo = PIXI.Sprite.fromImage("pixi.png");
stage.addChild(pixiLogo);

pixiLogo.position.x = 620 - 56;
pixiLogo.position.y = 400- 32;

pixiLogo.setInteractive(true);

pixiLogo.click = pixiLogo.tap = function(){

	var win=window.open("https://github.com/GoodBoyDigital/pixi.js", '_blank');

}


//////



var w = 1024;
var h = 768;

var n = 2000;
var d = 1;
var current = 1;
var objs = 17;
var vx = 0;
var vy = 0;
var vz = 0;
var points1 = [];
var points2 = [];
var points3 = [];
var tpoint1 = [];
var tpoint2 = [];
var tpoint3 = [];
var balls = [];

function start() {

	var ballTexture = PIXI.Texture.fromImage("assets/pixel.png");

	renderer = PIXI.autoDetectRenderer(w, h);

	stage = new PIXI.Stage(0x000000);

	document.body.appendChild(renderer.view);

	makeObject(0);

	for (var i = 0; i < n; i++)
	{
		tpoint1[i] = points1[i];
		tpoint2[i] = points2[i];
		tpoint3[i] = points3[i];

		var tempBall = new PIXI.Sprite(ballTexture);
		tempBall.anchor.x = 0.5;
		tempBall.anchor.y = 0.5;
		tempBall.alpha = 0.5;
		balls[i] = tempBall;

		stage.addChild(tempBall);
	}



	setTimeout(nextObject, 5000);

	requestAnimFrame(update);

}

function nextObject () {

	current++;

	if (current > objs)
	{
		current = 0;
	}

	makeObject(current);

	setTimeout(nextObject, 8000);

}

function makeObject ( t ) {

	var xd;

	switch (t)
	{
		case 0:

			for (var i = 0; i < n; i++)
			{
				points1[i] = -50 + Math.round(Math.random() * 100);
				points2[i] = 0;
				points3[i] = 0;
			}
			break;

		case 1:

			for (var i = 0; i < n; i++)
			{
				xd = -90 + Math.round(Math.random() * 180);
				points1[i] = (Math.cos(xd) * 10) * (Math.cos(t * 360 / n) * 10);
				points2[i] = (Math.cos(xd) * 10) * (Math.sin(t * 360 / n) * 10);
				points3[i] = Math.sin(xd) * 100;
			}
			break;

		case 2:

			for (var i = 0; i < n; i++)
			{
				xd = -90 + Math.round(Math.random() * 180);
				points1[i] = (Math.cos(xd) * 10) * (Math.cos(t * 360 / n) * 10);
				points2[i] = (Math.cos(xd) * 10) * (Math.sin(t * 360 / n) * 10);
				points3[i] = Math.sin(i * 360 / n) * 100;
			}
			break;

		case 3:

			for (var i = 0; i < n; i++)
			{
				xd = -90 + Math.round(Math.random() * 180);
				points1[i] = (Math.cos(xd) * 10) * (Math.cos(xd) * 10);
				points2[i] = (Math.cos(xd) * 10) * (Math.sin(xd) * 10);
				points3[i] = Math.sin(xd) * 100;
			}
			break;

		case 4:

			for (var i = 0; i < n; i++)
			{
				xd = -90 + Math.round(Math.random() * 180);
				points1[i] = (Math.cos(xd) * 10) * (Math.cos(xd) * 10);
				points2[i] = (Math.cos(xd) * 10) * (Math.sin(xd) * 10);
				points3[i] = Math.sin(i * 360 / n) * 100;
			}
			break;

		case 5:

			for (var i = 0; i < n; i++)
			{
				xd = -90 + Math.round(Math.random() * 180);
				points1[i] = (Math.cos(xd) * 10) * (Math.cos(xd) * 10);
				points2[i] = (Math.cos(i * 360 / n) * 10) * (Math.sin(xd) * 10);
				points3[i] = Math.sin(i * 360 / n) * 100;
			}
			break;

		case 6:

			for (var i = 0; i < n; i++)
			{
				xd = -90 + Math.round(Math.random() * 180);
				points1[i] = (Math.cos(i * 360 / n) * 10) * (Math.cos(i * 360 / n) * 10);
				points2[i] = (Math.cos(i * 360 / n) * 10) * (Math.sin(xd) * 10);
				points3[i] = Math.sin(i * 360 / n) * 100;
			}
			break;

		case 7:

			for (var i = 0; i < n; i++)
			{
				xd = -90 + Math.round(Math.random() * 180);
				points1[i] = (Math.cos(i * 360 / n) * 10) * (Math.cos(i * 360 / n) * 10);
				points2[i] = (Math.cos(i * 360 / n) * 10) * (Math.sin(i * 360 / n) * 10);
				points3[i] = Math.sin(i * 360 / n) * 100;
			}
			break;

		case 8:

			for (var i = 0; i < n; i++)
			{
				xd = -90 + Math.round(Math.random() * 180);
				points1[i] = (Math.cos(xd) * 10) * (Math.cos(i * 360 / n) * 10);
				points2[i] = (Math.cos(i * 360 / n) * 10) * (Math.sin(i * 360 / n) * 10);
				points3[i] = Math.sin(xd) * 100;
			}
			break;

		case 9:

			for (var i = 0; i < n; i++)
			{
				xd = -90 + Math.round(Math.random() * 180);
				points1[i] = (Math.cos(xd) * 10) * (Math.cos(i * 360 / n) * 10);
				points2[i] = (Math.cos(i * 360 / n) * 10) * (Math.sin(xd) * 10);
				points3[i] = Math.sin(xd) * 100;
			}
			break;

		case 10:

			for (var i = 0; i < n; i++)
			{
				xd = -90 + Math.round(Math.random() * 180);
				points1[i] = (Math.cos(i * 360 / n) * 10) * (Math.cos(i * 360 / n) * 10);
				points2[i] = (Math.cos(xd) * 10) * (Math.sin(xd) * 10);
				points3[i] = Math.sin(i * 360 / n) * 100;
			}
			break;

		case 11:

			for (var i = 0; i < n; i++)
			{
				xd = -90 + Math.round(Math.random() * 180);
				points1[i] = (Math.cos(xd) * 10) * (Math.cos(i * 360 / n) * 10);
				points2[i] = (Math.sin(xd) * 10) * (Math.sin(i * 360 / n) * 10);
				points3[i] = Math.sin(xd) * 100;
			}
			break;

		case 12:

			for (var i = 0; i < n; i++)
			{
				xd = -90 + Math.round(Math.random() * 180);
				points1[i] = (Math.cos(xd) * 10) * (Math.cos(xd) * 10);
				points2[i] = (Math.sin(xd) * 10) * (Math.sin(xd) * 10);
				points3[i] = Math.sin(i * 360 / n) * 100;
			}
			break;

		case 13:

			for (var i = 0; i < n; i++)
			{
				xd = -90 + Math.round(Math.random() * 180);
				points1[i] = (Math.cos(xd) * 10) * (Math.cos(i * 360 / n) * 10);
				points2[i] = (Math.sin(i * 360 / n) * 10) * (Math.sin(xd) * 10);
				points3[i] = Math.sin(i * 360 / n) * 100;
			}
			break;

		case 14:

			for (var i = 0; i < n; i++)
			{
				xd = -90 + Math.round(Math.random() * 180);
				points1[i] = (Math.sin(xd) * 10) * (Math.cos(xd) * 10);
				points2[i] = (Math.sin(xd) * 10) * (Math.sin(i * 360 / n) * 10);
				points3[i] = Math.sin(i * 360 / n) * 100;
			}
			break;

		case 15:

			for (var i = 0; i < n; i++)
			{
				xd = -90 + Math.round(Math.random() * 180);
				points1[i] = (Math.cos(i * 360 / n) * 10) * (Math.cos(i * 360 / n) * 10);
				points2[i] = (Math.sin(i * 360 / n) * 10) * (Math.sin(xd) * 10);
				points3[i] = Math.sin(i * 360 / n) * 100;
			}
			break;

		case 16:

			for (var i = 0; i < n; i++)
			{
				xd = -90 + Math.round(Math.random() * 180);
				points1[i] = (Math.cos(xd) * 10) * (Math.cos(i * 360 / n) * 10);
				points2[i] = (Math.sin(i * 360 / n) * 10) * (Math.sin(xd) * 10);
				points3[i] = Math.sin(xd) * 100;
			}
			break;

		case 17:

			for (var i = 0; i < n; i++)
			{
				xd = -90 + Math.round(Math.random() * 180);
				points1[i] = (Math.cos(xd) * 10) * (Math.cos(xd) * 10);
				points2[i] = (Math.cos(i * 360 / n) * 10) * (Math.sin(i * 360 / n) * 10);
				points3[i] = Math.sin(i * 360 / n) * 100;
			}
			break;
	}

}



function update()
{
	var x3d, y3d, z3d, tx, ty, tz, ox;

	if (d < 250)
	{
		d++;
	}

	vx += 0.0075;
	vy += 0.0075;
	vz += 0.0075;

	for (var i = 0; i < n; i++)
	{
		if (points1[i] > tpoint1[i]) { tpoint1[i] = tpoint1[i] + 1; }
		if (points1[i] < tpoint1[i]) { tpoint1[i] = tpoint1[i] - 1; }
		if (points2[i] > tpoint2[i]) { tpoint2[i] = tpoint2[i] + 1; }
		if (points2[i] < tpoint2[i]) { tpoint2[i] = tpoint2[i] - 1; }
		if (points3[i] > tpoint3[i]) { tpoint3[i] = tpoint3[i] + 1; }
		if (points3[i] < tpoint3[i]) { tpoint3[i] = tpoint3[i] - 1; }

		x3d = tpoint1[i];
		y3d = tpoint2[i];
		z3d = tpoint3[i];

		ty = (y3d * Math.cos(vx)) - (z3d * Math.sin(vx));
		tz = (y3d * Math.sin(vx)) + (z3d * Math.cos(vx));
		tx = (x3d * Math.cos(vy)) - (tz * Math.sin(vy));
		tz = (x3d * Math.sin(vy)) + (tz * Math.cos(vy));
		ox = tx;
		tx = (tx * Math.cos(vz)) - (ty * Math.sin(vz));
		ty = (ox * Math.sin(vz)) + (ty * Math.cos(vz));

		balls[i].position.x = (512 * tx) / (d - tz) + w / 2;
		balls[i].position.y = (h/2) - (512 * ty) / (d - tz);

	}

	renderer.render(stage);

	requestAnimFrame(update);
}



///////



//	Globals, globals everywhere and not a drop to drink
var w = 1024;
var h = 768;
var starCount = 2500;
var sx = 1.0 + (Math.random() / 20);
var sy = 1.0 + (Math.random() / 20);
var slideX = w / 2;
var slideY = h / 2;
var stars = [];

function start2() {

	var ballTexture = PIXI.Texture.fromImage("assets/bubble_32x32.png");

	renderer = PIXI.autoDetectRenderer(w, h);

	stage = new PIXI.Stage(0x000000);

	document.body.appendChild(renderer.view);

	for (var i = 0; i < starCount; i++)
	{
		var tempBall = new PIXI.Sprite(ballTexture);

		tempBall.position.x = (Math.random() * w) - slideX;
		tempBall.position.y = (Math.random() * h) - slideY;
		tempBall.anchor.x = 0.5;
		tempBall.anchor.y = 0.5;

		stars.push({ sprite: tempBall, x: tempBall.position.x, y: tempBall.position.y });

		stage.addChild(tempBall);
	}

	document.getElementById('rnd').onclick = newWave;
	document.getElementById('sx').innerHTML = 'SX: ' + sx + '<br />SY: ' + sy;



	requestAnimFrame(update);

}

function newWave () {

	sx = 1.0 + (Math.random() / 20);
	sy = 1.0 + (Math.random() / 20);
	document.getElementById('sx').innerHTML = 'SX: ' + sx + '<br />SY: ' + sy;

}



function update22()
{
	for (var i = 0; i < starCount; i++)
	{
		stars[i].sprite.position.x = stars[i].x + slideX;
		stars[i].sprite.position.y = stars[i].y + slideY;
		stars[i].x = stars[i].x * sx;
		stars[i].y = stars[i].y * sy;

		if (stars[i].x > w)
		{
			stars[i].x = stars[i].x - w;
		}
		else if (stars[i].x < -w)
		{
			stars[i].x = stars[i].x + w;
		}

		if (stars[i].y > h)
		{
			stars[i].y = stars[i].y - h;
		}
		else if (stars[i].y < -h)
		{
			stars[i].y = stars[i].y + h;
		}
	}

	renderer.render(stage);

	requestAnimFrame(update);
}

}