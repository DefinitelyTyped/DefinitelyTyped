import fit = require('canvas-fit');

const canvas = document.createElement('canvas');
window.addEventListener('resize', fit(canvas), false);
window.addEventListener('resize', fit(canvas, window), false);
window.addEventListener('resize', fit(canvas, window, '20%'), false);
window.addEventListener('resize', fit(canvas, window, 20.5), false);

const resize = fit(canvas, window);
resize.scale = window.devicePixelRatio;
resize.parent = document.body;
resize.parent = () => {
    return [window.innerWidth - 300, window.innerHeight];
};
