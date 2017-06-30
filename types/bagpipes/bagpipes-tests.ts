import * as Bagpipes from 'bagpipes';

// test `create`
Bagpipes.create({});
Bagpipes.create({ CustomPipe: [] });
Bagpipes.create({ CustomPipe: [] }, undefined);
Bagpipes.create({ CustomPipe: [] }, {});

// test `PipeDefs` Pipe Definitions Object
const perDefsMixed: Bagpipes.PipeDefMap = {
  HelloWorld: [
    { emit: 'Hello, World!' },
    'StringTypeDef'
  ],
  xxx: 'ddd'
};
const pipesDefsEmpty: Bagpipes.PipeDefMap = {};

const pipesDefs: Bagpipes.PipeDefMap = {
  _router: {
    name: 'swagger_router',
    mockMode: false,
    mockControllersDirs: [ 'api/mocks' ],
    controllersDirs: [ 'api/controllers' ]
  },
  _swagger_validate: {
    name: 'swagger_validator',
    validateReponse: true
  },
  swagger_controllers: [
    'cors',
    'swagger_params_parser',
    'swagger_security',
    '_swagger_validate',
    'express_compatibility',
    '_router'
  ]
};

// test `Config` object
const pipesConfigA: Bagpipes.Config = {
  connectMiddlewareDirs: ['some_dir', 'ssssss']
};

const pipesConfigempty: Bagpipes.Config = { };

const pipesConfigFull: Bagpipes.Config = {
  connectMiddlewareDirs: ['test'],
  userFittingsDirs: ['test'],
  userViewsDirs: ['test']
};

const pipesConfigFullEmpty: Bagpipes.Config = {
  connectMiddlewareDirs: [],
  userFittingsDirs: [],
  userViewsDirs: []
};

let pipesA = Bagpipes.create(perDefsMixed, {
  connectMiddlewareDirs: ['some_dir', 'ssssss'],
  swaggerNodeRunner: {}
});
let pipeA = pipesA.getPipe('HelloWorld');

// log the output to standard out
pipeA.fit((context, cb) => {
  cb(null, context);
});

pipesA.play(pipeA, {});

// test cb with err
const pipesEnty = Bagpipes.create({
  HelloWorld: []
}, {});

// test fit a registered pipe and return error
const pipeErrTest = pipesEnty.pipes['any'].fit((context, cb) => {
  cb(new Error("test err"));
});
pipesEnty.play(pipeErrTest, {});

const fittingsC = ["xxxx", "aaa"].map((name) => {
  let fittingDef = {} as Bagpipes.PipeDefMap;
  fittingDef[name] = 'nothing';
  return fittingDef;
});
const bagpipesC = Bagpipes.create({ fittings: fittingsC });

// test create with array of object literals
const pipeWithObj = [{ emit: 'something' }];
const bagpipesD = Bagpipes.create({ objPipe: pipeWithObj });
bagpipesD.play(bagpipesD.getPipe('objPipe'), {});

// Test full create
const userFittingsDirs = ['./fixtures/fittings'];
const pipeWithString = ['emit'];
let contextPlain = {};
const bagpipesWithPipeAndFittings = Bagpipes.create({ myCustomPipe: pipeWithString }, { userFittingsDirs });
bagpipesWithPipeAndFittings.play(bagpipesWithPipeAndFittings.getPipe('myCustomPipe'), contextPlain);
