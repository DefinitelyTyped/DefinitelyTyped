/**
 * Created by shearerbeard on 6/28/15.
 */
///<reference path="alt.d.ts"/>
///<reference path="../es6-promise/es6-promise.d.ts" />

import Alt = require("alt");
import Promise = require("es6-promise");

//New alt instance
var alt = new Alt();

//Interfaces for our Action Types
interface TestActionsGenerate {
    notifyTest(str:string):void;
}

interface TestActionsExplicit {
    doTest(str:string):void;
    success():void;
    error():void;
    loading():void;
}

//Create abstracts to inherit ghost methods
class AbstractActions implements AltJS.ActionsClass {
    constructor( alt:AltJS.Alt){}
    actions:any;
    dispatch: ( ...payload:Array<any>) => void;
    generateActions:( ...actions:Array<string>) => void;
}

class AbstractStoreModel<S> implements AltJS.StoreModel<S> {
  bindActions:( ...actions:Array<Object>) => void;
  bindAction:( ...args:Array<any>) => void;
  bindListeners:(obj:any)=> void;
  exportPublicMethods:(config:{[key:string]:(...args:Array<any>) => any}) => any;
  exportAsync:( source:any) => void;
  waitFor:any;
  exportConfig:any;
  getState:() => S;
}

class GenerateActionsClass extends AbstractActions {
    constructor(config:AltJS.Alt) {
        this.generateActions("notifyTest");
        super(config);
    }
}

class ExplicitActionsClass extends AbstractActions {
    doTest(str:string) {
        this.dispatch(str);
    }
    success() {
        this.dispatch();
    }
    error() {
        this.dispatch();
    }
    loading() {
        this.dispatch();
    }
}

var generatedActions = alt.createActions<TestActionsGenerate>(GenerateActionsClass);
var explicitActions = alt.createActions<ExplicitActionsClass>(ExplicitActionsClass);

interface AltTestState {
    hello:string;
}

var testSource:AltJS.Source = {
    fakeLoad():AltJS.SourceModel<string> {
        return {
            remote() {
                return new Promise.Promise<string>((res:any, rej:any) => {
                    setTimeout(() => {
                        if(true) {
                            res("stuff");
                        } else {
                            rej("Things have broken");
                        }
                    }, 250)
                });
            },
            local() {
                return "local";
            },
            success: explicitActions.success,
            error: explicitActions.error,
            loading:explicitActions.loading
        };
    }
};

class TestStore extends AbstractStoreModel<AltTestState> implements AltTestState {
    hello:string = "world";
    constructor() {
        super();
        this.bindAction(generatedActions.notifyTest, this.onTest);
        this.bindActions(explicitActions);
        this.exportAsync(testSource);
        this.exportPublicMethods({
            split: this.split
        });
    }
    onTest(str:string) {
        this.hello = str;
    }

    onDoTest(str:string) {
        this.hello = str;
    }

    split():string[] {
        return this.hello.split("");
    }
}

interface ExtendedTestStore extends AltJS.AltStore<AltTestState> {
    fakeLoad():string;
    split():Array<string>;
}

var testStore = <ExtendedTestStore>alt.createStore<AltTestState>(TestStore);

function testCallback(state:AltTestState) {
    console.log(state);
}

//Listen allows a typed state callback
testStore.listen(testCallback);
testStore.unlisten(testCallback);

//State generic passes to derived store
var name:string = testStore.getState().hello;
var nameChars:Array<string> = testStore.split();

generatedActions.notifyTest("types");
explicitActions.doTest("more types");

export var result = testStore.getState();
