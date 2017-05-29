import signals = require("signals");
// lifted from https://github.com/millermedeiros/js-signals/wiki/Examples
interface TestObject {
  started: signals.Signal;
  stopped: signals.Signal;
}

namespace Signals.Tests {
  //store local reference for brevity
  var Signal = signals.Signal;

  //custom object that dispatch signals
  var myObject: TestObject = {
    started : new Signal(), //past tense is the recommended signal naming convention
    stopped : new Signal()
  };

  //single listener
  function onStarted(param1:string, param2:string){
    alert(param1 + param2);
  }

  myObject.started.add(onStarted); //add listener
  myObject.started.dispatch('foo', 'bar'); //dispatch signal passing custom parameters
  myObject.started.remove(onStarted); //remove a single listener

  //multiple listeners
  function onStopped(){
    alert('stopped');
  }
  function onStopped2(){
    alert('stopped listener 2');
  }
  myObject.stopped.add(onStopped);
  myObject.stopped.add(onStopped2);
  myObject.stopped.dispatch();
  myObject.stopped.removeAll(); //remove all listeners of the `stopped` signal

  //multiple dispatches
  var i = 0;
  myObject.started.add(function(){
    i += 1;
    alert(i);
  });
  myObject.started.dispatch(); //will alert 1
  myObject.started.dispatch(); //will alert 2

  //multiple dispatches + addOnce()
  var i = 0;
  myObject.started.addOnce(function(){
    i += 1;
    alert(i);
  });
  myObject.started.dispatch(); //will alert 1
  myObject.started.dispatch(); //nothing happens

  //enable/disable signal
  var i = 0;
  myObject.started.add(function(){
    i += 1;
    alert(i);
  });
  myObject.started.dispatch(); //will alert 1
  myObject.started.active = false;
  myObject.started.dispatch(); //nothing happens
  myObject.started.active = true;
  myObject.started.dispatch(); //will alert 2

  //Stop/Halt Propagation (method 1)
  myObject.started.add(function(){
    myObject.started.halt(); //prevent next listeners on the queue from being executed
  });
  myObject.started.add(function(){
    alert('second listener'); //won't be called since first listener stops propagation
  });
  myObject.started.dispatch();

  //Stop/Halt Propagation (method 2)
  myObject.started.add(function(){
    return false; //if handler returns `false` will also stop propagation
  });
  myObject.started.add(function(){
    alert('second listener'); //won't be called since first listener stops propagation
  });
  myObject.started.dispatch();

  //Set execution context of the listener handler
  var foo = 'bar';
  var obj = {
    foo : 10
  };

  function handler1(){
    alert(this.foo);
  }

  function handler2(){
    alert(this.foo);
  }

  //note that you cannot add the same handler twice to the same signal without removing it first
  myObject.started.add(handler1); //default execution context
  myObject.started.add(handler2, obj); //set a different execution context
  myObject.started.dispatch(); //first handler will alert "bar", second will alert "10".
}

namespace Signals.AdvancedTests {
  //store local reference for brevity
  var Signal = signals.Signal;

  //custom object that dispatch signals
  var myObject: TestObject = {
    started : new Signal(), //past tense is the recommended signal naming convention
    stopped : new Signal()
  };

  //Set listener priority/order (v0.5.3+)
  var handler1 = function(){
    alert('foo');
  };
  var handler2 = function(){
    alert('bar');
  };
  myObject.started.add(handler1); //default priority is 0
  myObject.started.add(handler2, null, 2); //setting priority to 2 will make `handler2` execute before `handler1`
  myObject.started.dispatch(); //will alert "bar" than "foo"

  //Enable/Disable a single SignalBinding
  var handler1 = function(){
    alert('foo bar');
  };
  var handler2 = function(){
    alert('lorem ipsum');
  };
  var binding1 = myObject.started.add(handler1); //methods `add()` and `addOnce()` returns a SignalBinding object
  myObject.started.add(handler2);
  myObject.started.dispatch(); //will alert "foo bar" than "lorem ipsum"
  binding1.active = false; //disable a single binding
  myObject.started.dispatch(); //will alert "lorem ipsum"
  binding1.active = true;
  myObject.started.dispatch(); //will alert "foo bar" than "lorem ipsum"

  //Manually execute a signal handler
  var handler = function(){
    alert('foo bar');
  };
  var binding: signals.SignalBinding = myObject.started.add(handler); //methods `add()` and `addOnce()` returns a SignalBinding object
  binding.execute(); //will alert "foo bar"

  //Retrieve anonymous listener
  var binding:signals.SignalBinding = myObject.started.add(function(){
    alert('foo bar');
  });

  // note: in the original docs, this is handler, but that collides with handler above because these are in one giant scope
  // perhaps these are best split into functions for readability
  var anonymousHandler = binding.getListener(); //reference to the anonymous function

  //Remove / Detach anonymous listener
  var binding:signals.SignalBinding = myObject.started.add(function(){
    alert('foo bar');
  });
  myObject.started.dispatch(); //will alert "foo bar"
  binding.detach();
  alert(binding.isBound()); //will alert `false`
  myObject.started.dispatch(); //nothing happens

  //Check if binding will execute only once
  var binding1:signals.SignalBinding = myObject.started.add(function(){
    alert('foo bar');
  });
  var binding2:signals.SignalBinding = myObject.started.addOnce(function(){
    alert('foo bar');
  });
  alert(binding1.isOnce()); //alert "false"
  alert(binding2.isOnce()); //alert "true"

  //Change listener execution context on-the-fly
  var foo = 'bar';
  var obj = {
    foo : "it's over 9000!"
  };
  var binding:signals.SignalBinding = myObject.started.add(function(){
    alert(this.foo);
  });
  myObject.started.dispatch(); //will alert "bar"
  binding.context = obj;
  myObject.started.dispatch(); //will alert "it's over 9000!"

  //Add default parameters to Signal dispatch (v0.6.3+)
  var binding:signals.SignalBinding = myObject.started.add(function(a:string, b:string, c:string){
    alert(a +' '+ b +' '+ c);
  });
  binding.params = ['lorem', 'ipsum']; //set default parameters of the binding
  myObject.started.dispatch('dolor'); //will alert "lorem ipsum dolor"

  //Check if Signal has specific listener (v0.7.0+)
  function onStart(a:string){
    console.log(a);
  }
  myObject.started.add(onStart);
  myObject.started.has(onStart); // true

  //Memorize previously dispatched values / forget values (v0.7.0+)
  myObject.started.memorize = true; // default is false
  myObject.started.dispatch('foo');

  // add()/addOnce() will automatically fire listener if signal was dispatched before
  // will log "foo" since it keeps record of previously dispatched values
  myObject.started.addOnce(console.log, console);

  // dispatching a new value will overwrite the "memory"
  myObject.started.dispatch('lorem');
  // will log "lorem"
  myObject.started.addOnce(console.log, console);

  myObject.started.forget(); // forget previously dispatched values (reset signal state)
  myObject.started.addOnce(console.log, console); // won't log till next dispatch (since it "forgot")
  myObject.started.dispatch('bar'); // log "bar"
}
