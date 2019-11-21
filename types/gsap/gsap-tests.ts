import { TweenLite, TweenMax } from 'gsap';

const callbackWithoutParams = () => {
    console.log('I Have No Parameters.');
};

const callbackWithParams = (...args: any[]) => {
    console.log('I Have Parameters.');
    console.log(args);
};


const tweenLiteExample = TweenLite
    .to(document.getElementById('some-div'), 1, {
        width: '200px',
        height: '200px',
        x: '100px',
        y: '200px',
        onComplete: callbackWithoutParams
    })
    .seek(0.5);

const tweenMaxExample = TweenMax
  .to(document.getElementById('some-div'), 1, {
    width: '200px',
    height: '200px',
    x: '100px',
    y: '200px',
    onComplete: callbackWithParams,
    onCompleteParams: ['foo', 'bar']
  })
  .seek(0.5);
