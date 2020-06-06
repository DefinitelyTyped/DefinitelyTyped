import * as oracleSp from 'oracle-sp-types';

const storeProcedure = new oracleSp.StoreProcedureDb('SP_FOO', [1,"Foo"])

const execution = storeProcedure.executeSp();
