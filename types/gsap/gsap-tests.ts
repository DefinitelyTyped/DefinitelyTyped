import { TweenLite, TweenMax } from 'gsap';

const tweenLiteExample = TweenLite
    .to(document.getElementById('some-div'), 1, {
        width: '200px',
        height: '200px',
        x: '100px',
        y: '200px'
    })
    .seek(0.5);

const tweenMaxExample = TweenMax
  .to(document.getElementById('some-div'), 1, {
    width: '200px',
    height: '200px',
    x: '100px',
    y: '200px'
  })
  .seek(0.5);
