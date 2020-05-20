import quantile from 'distributions-poisson-quantile';

const number = quantile(0);
number.toExponential();

const numberArr = quantile([0]);
numberArr.values();

const noDTypeNumberArr = quantile([0], {});
noDTypeNumberArr.values();

const int8 = quantile([0], { dtype: 'int8' });
int8.byteLength;

const uint8 = quantile([0], { dtype: 'uint8' });
uint8.byteLength;

const uint8_clamped = quantile([0], { dtype: 'uint8_clamped' });
uint8_clamped.byteLength;

const int16 = quantile([0], { dtype: 'int16' });
int16.byteLength;

const uint16 = quantile([0], { dtype: 'uint16' });
uint16.byteLength;

const int32 = quantile([0], { dtype: 'int32' });
int32.byteLength;

const uint32 = quantile([0], { dtype: 'uint32' });
uint32.byteLength;

const float32 = quantile([0], { dtype: 'float32' });
float32.byteLength;

const float64 = quantile([0], { dtype: 'float64' });
float64.byteLength;

const noOptionsFloat64 = quantile(new Float32Array(1));
noOptionsFloat64.byteLength;

const noDTypeFloat64 = quantile(new Float32Array(1), {});
noDTypeFloat64.byteLength;

const undefDTypeFloat64 = quantile(new Float32Array(1), { dtype: undefined });
undefDTypeFloat64.byteLength;

const matrixLike = {
    data: {},
    shape: {},
    offset: 0,
    strides: {},
    dtype: '',
    length: 0,
};

const matrix = quantile(matrixLike);
matrix.dtype;
matrix.ndims;
matrix.shape;
matrix.offset;
matrix.strides;
matrix.length;
matrix.nbytes;
matrix.data;
matrix.set(0, 0, 0);
matrix.iset(0, 0);
matrix.mset([0], [0], 0);
matrix.sset('', 0);
matrix.get(0, 0);
matrix.iget(0);
matrix.mget([0], [0]);
matrix.sget('');
matrix.toString();
matrix.toJSON();
