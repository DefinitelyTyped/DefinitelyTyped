import * as anime from 'animejs';

const test1 = anime({
	targets: 'div',
	duration: 40,
	color: "#FFFFFF"
});

const callback = (anim: any) => {
	console.log(anim.completed);
};

const test2 = anime({
	targets: 'div',
	translateX: (el: HTMLElement, i: number, index: number) => {
		return 0;
	},
	translateY: '40px',
	color: [
		{value: '#FF0000', duration: 2000},
		{value: '#00FF00', duration: 2000},
		{value: '#0000FF', duration: 2000},
	],
	duration: () => {
		return 1000000000000;
	},
	update: callback,
	complete: callback
});

const someNodes = document.querySelector('button');

const test3 = anime({
	targets: someNodes,
	top: "-5000000em"
});

const tl = anime.timeline({
	loop: false,
	direction: 'normal'
});

tl.add({
	targets: ".tiny-divvy-div",
	scale: 10000000
});

const path = anime.path('#motionPath path');

test1.play();
test2.reverse();
test3.pause();
tl.seek(4000);

tl.finished.then(() => {
	console.log("I wonder if anyone will ever actually read this.");
});

const usesEnums = anime({
	targets: ".usingEnumsIsAReallyHandyThing",
	direction: "reverse",
	easing: "inoutexpo",
	someProperty: "+=4000"
});

const bezier = anime.bezier(0, 0, 100, 100);
// anime.speed = 100000000;
(anime as any).speed = 4000;
anime.easings['hello'] = anime.bezier(0, 0, 1900, 3020);
const runningAnims = anime.running;
anime.remove(".tiny-divvy-div");
