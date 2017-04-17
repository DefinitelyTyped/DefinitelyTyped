/// <reference path="microevent.d.ts"/>

class ObjectThatWillHaveEvents {
  private name: string;

  constructor(name: string){
    this.name = name;
  }

public foo(): void{
    //some method
}

}

//we create new instance of ObjectThatWillHaveEvents class
var o = new ObjectThatWillHaveEvents('microevents example');

//now we use MicroEvent mixin static method that will add to
//ObjectThatWillHaveEvents instnace o MicroEvent related methods.
var oWithEventMethods = MicroEvent.mixin(o);

function exampleEventHandler(){
   alert('Example event triggred.');
}

//now we can bind some handler for event exampleEvent on this object
oWithEventMethods.bind('exampleEvent', exampleEventHandler);


//now somwhere in the code you can trigger this event
oWithEventMethods.trigger('exampleEvent')

//and on some other place you can unbind handler for this event from object
oWithEventMethods.unbind('exampleEvent', exampleEventHandler);
