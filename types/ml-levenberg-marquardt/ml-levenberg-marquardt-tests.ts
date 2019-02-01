import LM from 'ml-levenberg-marquardt';

function sinFunction([a, b]: number[]) {
  return (t: number) => a * Math.sin(b * t);
}

const data = {
  x: [
    0, Math.PI / 2, Math.PI, Math.PI * 3 / 2
  ],
  y: [
    0, 1, 0, -1
  ]
};

const initialValues = [ 2, 4 ];

const options = {
  damping: 1.5,
  initialValues,
  gradientDifference: 10e-2,
  maxIterations: 100,
  errorTolerance: 10e-3
};

const fittedParams = LM(data, sinFunction, options);

// this doesn't make sense but it uses fittedParams...
if (fittedParams.iterations < 10) {
    fittedParams.parameterValues[0] += fittedParams.parameterError;
}
