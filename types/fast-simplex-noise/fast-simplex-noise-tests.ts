
import FastSimplexNoise = require('fast-simplex-noise')

var defaultNoiseGen: FastSimplexNoise = new FastSimplexNoise()
var emptyOptionsNoiseGen: FastSimplexNoise = new FastSimplexNoise({})

var noiseGen: FastSimplexNoise = new FastSimplexNoise({
  amplitude: 1,
  frequency: 0.01,
  max: 255,
  min: 0,
  octaves: 8,
  persistence: 0.5,
  random: Math.random
})

var values: number[] = []

values.push(noiseGen.cylindrical2D(5, 1, 1))
values.push(noiseGen.cylindrical3D(5, 1, 1, 1))
values.push(noiseGen.in2D(1, 1))
values.push(noiseGen.in3D(1, 1, 1))
values.push(noiseGen.in4D(1, 1, 1, 1))
values.push(noiseGen.raw2D(1, 1))
values.push(noiseGen.raw3D(1, 1, 1))
values.push(noiseGen.raw4D(1, 1, 1, 1))
values.push(noiseGen.spherical2D(5, 1, 1))
values.push(noiseGen.spherical3D(5, 1, 1, 1))
