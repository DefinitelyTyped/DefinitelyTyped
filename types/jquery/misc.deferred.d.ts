// tslint:disable:jsdoc-format
// tslint:disable:max-line-length
// tslint:disable:no-irregular-whitespace

declare namespace JQuery {
    // NOTE: This is a private copy of the global Promise interface. It is used by JQuery.PromiseBase to indicate compatibility with other Promise implementations.
    //       The global Promise interface cannot be used directly as it may be modified, as in the case of @types/bluebird-global.
    /**
     * Represents the completion of an asynchronous operation
     */
    interface _Promise<T> {
        readonly [Symbol.toStringTag]: "Promise";
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
                                             onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null): _Promise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null): _Promise<T | TResult>;
    }

    // Type parameter guide
    // --------------------
    // Each type parameter represents a parameter in one of the three possible callbacks.
    //
    // The first letter indicates which position the parameter is in.
    //
    // T = A = 1st position
    // U = B = 2nd position
    // V = C = 3rd position
    // S = R = rest position
    //
    // The second letter indicates which whether it is a [R]esolve, Re[J]ect, or [N]otify value.
    //
    // The third letter indicates whether the value is returned in the [D]one filter, [F]ail filter, or [P]rogress filter.

    /**
     * This object provides a subset of the methods of the Deferred object (then, done, fail, always, pipe, progress, state and promise) to prevent users from changing the state of the Deferred.
     * @see \`{@link https://api.jquery.com/Types/#Promise }\`
     */
    interface PromiseBase<TR, TJ, TN,
        UR, UJ, UN,
        VR, VJ, VN,
        SR, SJ, SN> extends _Promise<TR>, PromiseLike<TR> {
          /**
         * Add handlers to be called when the Deferred object is either resolved or rejected.
         * @param alwaysCallback A function, or array of functions, that is called when the Deferred is resolved or rejected.
         * @param alwaysCallbacks Optional additional functions, or arrays of functions, that are called when the Deferred is resolved or rejected.
         * @see \`{@link https://api.jquery.com/deferred.always/ }\`
         * @since 1.6
         * @example ​ ````Since the jQuery.get() method returns a jqXHR object, which is derived from a Deferred object, we can attach a callback for both success and error using the deferred.always() method.
```javascript
$.get( "test.php" ).always(function() {
  alert( "$.get completed with success or error callback arguments" );
});
```
         */
        always(alwaysCallback: TypeOrArray<Deferred.CallbackBase<TR | TJ, UR | UJ, VR | VJ, SR | SJ>>,
               ...alwaysCallbacks: Array<TypeOrArray<Deferred.CallbackBase<TR | TJ, UR | UJ, VR | VJ, SR | SJ>>>): this;
        /**
         * Add handlers to be called when the Deferred object is resolved.
         * @param doneCallback A function, or array of functions, that are called when the Deferred is resolved.
         * @param doneCallbacks Optional additional functions, or arrays of functions, that are called when the Deferred is resolved.
         * @see \`{@link https://api.jquery.com/deferred.done/ }\`
         * @since 1.5
         * @example ​ ````Since the jQuery.get method returns a jqXHR object, which is derived from a Deferred object, we can attach a success callback using the .done() method.
```javascript
$.get( "test.php" ).done(function() {
  alert( "$.get succeeded" );
});
```
         * @example ​ ````Resolve a Deferred object when the user clicks a button, triggering a number of callback functions:
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>deferred.done demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button>Go</button>
<p>Ready...</p>
​
<script>
// 3 functions to call when the Deferred object is resolved
function fn1() {
  $( "p" ).append( " 1 " );
}
function fn2() {
  $( "p" ).append( " 2 " );
}
function fn3( n ) {
  $( "p" ).append( n + " 3 " + n );
}
​
// Create a deferred object
var dfd = $.Deferred();
​
// Add handlers to be called when dfd is resolved
dfd
// .done() can take any number of functions or arrays of functions
  .done( [ fn1, fn2 ], fn3, [ fn2, fn1 ] )
// We can chain done methods, too
  .done(function( n ) {
    $( "p" ).append( n + " we're done." );
  });
​
// Resolve the Deferred object when the button is clicked
$( "button" ).on( "click", function() {
  dfd.resolve( "and" );
});
</script>
​
</body>
</html>
```
         */
        done(doneCallback: TypeOrArray<Deferred.CallbackBase<TR, UR, VR, SR>>,
             ...doneCallbacks: Array<TypeOrArray<Deferred.CallbackBase<TR, UR, VR, SR>>>): this;
        /**
         * Add handlers to be called when the Deferred object is rejected.
         * @param failCallback A function, or array of functions, that are called when the Deferred is rejected.
         * @param failCallbacks Optional additional functions, or arrays of functions, that are called when the Deferred is rejected.
         * @see \`{@link https://api.jquery.com/deferred.fail/ }\`
         * @since 1.5
         * @example ​ ````Since the jQuery.get method returns a jqXHR object, which is derived from a Deferred, you can attach a success and failure callback using the deferred.done() and deferred.fail() methods.
```javascript
$.get( "test.php" )
  .done(function() {
    alert( "$.get succeeded" );
  })
  .fail(function() {
    alert( "$.get failed!" );
  });
```
         */
        fail(failCallback: TypeOrArray<Deferred.CallbackBase<TJ, UJ, VJ, SJ>>,
             ...failCallbacks: Array<TypeOrArray<Deferred.CallbackBase<TJ, UJ, VJ, SJ>>>): this;
        /**
         * Add handlers to be called when the Deferred object generates progress notifications.
         * @param progressCallback A function, or array of functions, to be called when the Deferred generates progress notifications.
         * @param progressCallbacks Optional additional functions, or arrays of functions, to be called when the Deferred generates
         *                          progress notifications.
         * @see \`{@link https://api.jquery.com/deferred.progress/ }\`
         * @since 1.7
         */
        progress(progressCallback: TypeOrArray<Deferred.CallbackBase<TN, UN, VN, SN>>,
                 ...progressCallbacks: Array<TypeOrArray<Deferred.CallbackBase<TN, UN, VN, SN>>>): this;
        /**
         * Return a Deferred's Promise object.
         * @param target Object onto which the promise methods have to be attached
         * @see \`{@link https://api.jquery.com/deferred.promise/ }\`
         * @since 1.5
         * @example ​ ````Create a Deferred and set two timer-based functions to either resolve or reject the Deferred after a random interval. Whichever one fires first &quot;wins&quot; and will call one of the callbacks. The second timeout has no effect since the Deferred is already complete (in a resolved or rejected state) from the first timeout action. Also set a timer-based progress notification function, and call a progress handler that adds &quot;working...&quot; to the document body.
```javascript
function asyncEvent() {
  var dfd = jQuery.Deferred();
​
  // Resolve after a random interval
  setTimeout(function() {
    dfd.resolve( "hurray" );
  }, Math.floor( 400 + Math.random() * 2000 ) );
​
  // Reject after a random interval
  setTimeout(function() {
    dfd.reject( "sorry" );
  }, Math.floor( 400 + Math.random() * 2000 ) );
​
  // Show a "working..." message every half-second
  setTimeout(function working() {
    if ( dfd.state() === "pending" ) {
      dfd.notify( "working... " );
      setTimeout( working, 500 );
    }
  }, 1 );
​
  // Return the Promise so caller can't change the Deferred
  return dfd.promise();
}
​
// Attach a done, fail, and progress handler for the asyncEvent
$.when( asyncEvent() ).then(
  function( status ) {
    alert( status + ", things are going well" );
  },
  function( status ) {
    alert( status + ", you fail this time" );
  },
  function( status ) {
    $( "body" ).append( status );
  }
);
```
         */
        promise<TTarget extends object>(target: TTarget): this & TTarget;
        /**
         * Return a Deferred's Promise object.
         * @see \`{@link https://api.jquery.com/deferred.promise/ }\`
         * @since 1.5
         * @example ​ ````Use the target argument to promote an existing object to a Promise:
```javascript
// Existing object
var obj = {
    hello: function( name ) {
      alert( "Hello " + name );
    }
  },
  // Create a Deferred
  defer = $.Deferred();
​
// Set object as a promise
defer.promise( obj );
​
// Resolve the deferred
defer.resolve( "John" );
​
// Use the object as a Promise
obj.done(function( name ) {
  obj.hello( name ); // Will alert "Hello John"
}).hello( "Karl" ); // Will alert "Hello Karl"
```
         */
        promise(): this;
        /**
         * Determine the current state of a Deferred object.
         * @see \`{@link https://api.jquery.com/deferred.state/ }\`
         * @since 1.7
         */
        state(): 'pending' | 'resolved' | 'rejected';

        // region pipe
        // #region pipe

        /**
         * Utility method to filter and/or chain Deferreds.
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.pipe/ }\`
         * @since 1.6
         * @since 1.7
         * @deprecated ​ Deprecated since 1.8. Use \`{@link then }\`.
         *
         * **Cause**: The `.pipe()` method on a `jQuery.Deferred` object was deprecated as of jQuery 1.8, when the `.then()` method was changed to perform the same function.
         *
         * **Solution**: In most cases it is sufficient to change all occurrences of `.pipe()` to `.then()`. Ensure that you aren't relying on context/state propagation (e.g., using `this`) or synchronous callback invocation, which were dropped from `.then()` for Promises/A+ interoperability as of jQuery 3.0.
         * @example ​ ````Filter resolve value:
```javascript
var defer = $.Deferred(),
  filtered = defer.pipe(function( value ) {
    return value * 2;
  });
​
defer.resolve( 5 );
filtered.done(function( value ) {
  alert( "Value is ( 2*5 = ) 10: " + value );
});
```
         * @example ​ ````Filter reject value:
```javascript
var defer = $.Deferred(),
  filtered = defer.pipe( null, function( value ) {
    return value * 3;
  });
​
defer.reject( 6 );
filtered.fail(function( value ) {
  alert( "Value is ( 3*6 = ) 18: " + value );
});
```
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.pipe(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        pipe<ARD = never, AJD = never, AND = never,
            BRD = never, BJD = never, BND = never,
            CRD = never, CJD = never, CND = never,
            RRD = never, RJD = never, RND = never,
            ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never,
            ARP = never, AJP = never, ANP = never,
            BRP = never, BJP = never, BNP = never,
            CRP = never, CJP = never, CNP = never,
            RRP = never, RJP = never, RNP = never>(
                doneFilter: (t: TR, u: UR, v: VR, ...s: SR[]) => PromiseBase<ARD, AJD, AND,
                    BRD, BJD, BND,
                    CRD, CJD, CND,
                    RRD, RJD, RND> | Thenable<ARD> | ARD,
                failFilter: (t: TJ, u: UJ, v: VJ, ...s: SJ[]) => PromiseBase<ARF, AJF, ANF,
                    BRF, BJF, BNF,
                    CRF, CJF, CNF,
                    RRF, RJF, RNF> | Thenable<AJF> | AJF,
                progressFilter: (t: TN, u: UN, v: VN, ...s: SN[]) => PromiseBase<ARP, AJP, ANP,
                    BRP, BJP, BNP,
                    CRP, CJP, CNP,
                    RRP, RJP, RNP> | Thenable<ANP> | ANP): PromiseBase<ARD | ARF | ARP, AJD | AJF | AJP, AND | ANF | ANP,
            BRD | BRF | BRP, BJD | BJF | BJP, BND | BNF | BNP,
            CRD | CRF | CRP, CJD | CJF | CJP, CND | CNF | CNP,
            RRD | RRF | RRP, RJD | RJF | RJP, RND | RNF | RNP>;
        /**
         * Utility method to filter and/or chain Deferreds.
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.pipe/ }\`
         * @since 1.6
         * @since 1.7
         * @deprecated ​ Deprecated since 1.8. Use \`{@link then }\`.
         *
         * **Cause**: The `.pipe()` method on a `jQuery.Deferred` object was deprecated as of jQuery 1.8, when the `.then()` method was changed to perform the same function.
         *
         * **Solution**: In most cases it is sufficient to change all occurrences of `.pipe()` to `.then()`. Ensure that you aren't relying on context/state propagation (e.g., using `this`) or synchronous callback invocation, which were dropped from `.then()` for Promises/A+ interoperability as of jQuery 3.0.
         * @example ​ ````Filter reject value:
```javascript
var defer = $.Deferred(),
  filtered = defer.pipe( null, function( value ) {
    return value * 3;
  });
​
defer.reject( 6 );
filtered.fail(function( value ) {
  alert( "Value is ( 3*6 = ) 18: " + value );
});
```
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.pipe(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        pipe<ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never,
            ARP = never, AJP = never, ANP = never,
            BRP = never, BJP = never, BNP = never,
            CRP = never, CJP = never, CNP = never,
            RRP = never, RJP = never, RNP = never>(
                doneFilter: null,
                failFilter: (t: TJ, u: UJ, v: VJ, ...s: SJ[]) => PromiseBase<ARF, AJF, ANF,
                    BRF, BJF, BNF,
                    CRF, CJF, CNF,
                    RRF, RJF, RNF> | Thenable<AJF> | AJF,
                progressFilter: (t: TN, u: UN, v: VN, ...s: SN[]) => PromiseBase<ARP, AJP, ANP,
                    BRP, BJP, BNP,
                    CRP, CJP, CNP,
                    RRP, RJP, RNP> | Thenable<ANP> | ANP): PromiseBase<ARF | ARP, AJF | AJP, ANF | ANP,
            BRF | BRP, BJF | BJP, BNF | BNP,
            CRF | CRP, CJF | CJP, CNF | CNP,
            RRF | RRP, RJF | RJP, RNF | RNP>;
        /**
         * Utility method to filter and/or chain Deferreds.
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.pipe/ }\`
         * @since 1.6
         * @since 1.7
         * @deprecated ​ Deprecated since 1.8. Use \`{@link then }\`.
         *
         * **Cause**: The `.pipe()` method on a `jQuery.Deferred` object was deprecated as of jQuery 1.8, when the `.then()` method was changed to perform the same function.
         *
         * **Solution**: In most cases it is sufficient to change all occurrences of `.pipe()` to `.then()`. Ensure that you aren't relying on context/state propagation (e.g., using `this`) or synchronous callback invocation, which were dropped from `.then()` for Promises/A+ interoperability as of jQuery 3.0.
         * @example ​ ````Filter resolve value:
```javascript
var defer = $.Deferred(),
  filtered = defer.pipe(function( value ) {
    return value * 2;
  });
​
defer.resolve( 5 );
filtered.done(function( value ) {
  alert( "Value is ( 2*5 = ) 10: " + value );
});
```
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.pipe(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        pipe<ARD = never, AJD = never, AND = never,
            BRD = never, BJD = never, BND = never,
            CRD = never, CJD = never, CND = never,
            RRD = never, RJD = never, RND = never,
            ARP = never, AJP = never, ANP = never,
            BRP = never, BJP = never, BNP = never,
            CRP = never, CJP = never, CNP = never,
            RRP = never, RJP = never, RNP = never>(
                doneFilter: (t: TR, u: UR, v: VR, ...s: SR[]) => PromiseBase<ARD, AJD, AND,
                    BRD, BJD, BND,
                    CRD, CJD, CND,
                    RRD, RJD, RND> | Thenable<ARD> | ARD,
                failFilter: null,
                progressFilter: (t: TN, u: UN, v: VN, ...s: SN[]) => PromiseBase<ARP, AJP, ANP,
                    BRP, BJP, BNP,
                    CRP, CJP, CNP,
                    RRP, RJP, RNP> | Thenable<ANP> | ANP): PromiseBase<ARD | ARP, AJD | AJP, AND | ANP,
            BRD | BRP, BJD | BJP, BND | BNP,
            CRD | CRP, CJD | CJP, CND | CNP,
            RRD | RRP, RJD | RJP, RND | RNP>;
        /**
         * Utility method to filter and/or chain Deferreds.
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.pipe/ }\`
         * @since 1.6
         * @since 1.7
         * @deprecated ​ Deprecated since 1.8. Use \`{@link then }\`.
         *
         * **Cause**: The `.pipe()` method on a `jQuery.Deferred` object was deprecated as of jQuery 1.8, when the `.then()` method was changed to perform the same function.
         *
         * **Solution**: In most cases it is sufficient to change all occurrences of `.pipe()` to `.then()`. Ensure that you aren't relying on context/state propagation (e.g., using `this`) or synchronous callback invocation, which were dropped from `.then()` for Promises/A+ interoperability as of jQuery 3.0.
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.pipe(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        pipe<ARP = never, AJP = never, ANP = never,
            BRP = never, BJP = never, BNP = never,
            CRP = never, CJP = never, CNP = never,
            RRP = never, RJP = never, RNP = never>(
                doneFilter: null,
                failFilter: null,
                progressFilter?: (t: TN, u: UN, v: VN, ...s: SN[]) => PromiseBase<ARP, AJP, ANP,
                    BRP, BJP, BNP,
                    CRP, CJP, CNP,
                    RRP, RJP, RNP> | Thenable<ANP> | ANP): PromiseBase<ARP, AJP, ANP,
            BRP, BJP, BNP,
            CRP, CJP, CNP,
            RRP, RJP, RNP>;
        /**
         * Utility method to filter and/or chain Deferreds.
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.pipe/ }\`
         * @since 1.6
         * @since 1.7
         * @deprecated ​ Deprecated since 1.8. Use \`{@link then }\`.
         *
         * **Cause**: The `.pipe()` method on a `jQuery.Deferred` object was deprecated as of jQuery 1.8, when the `.then()` method was changed to perform the same function.
         *
         * **Solution**: In most cases it is sufficient to change all occurrences of `.pipe()` to `.then()`. Ensure that you aren't relying on context/state propagation (e.g., using `this`) or synchronous callback invocation, which were dropped from `.then()` for Promises/A+ interoperability as of jQuery 3.0.
         * @example ​ ````Filter resolve value:
```javascript
var defer = $.Deferred(),
  filtered = defer.pipe(function( value ) {
    return value * 2;
  });
​
defer.resolve( 5 );
filtered.done(function( value ) {
  alert( "Value is ( 2*5 = ) 10: " + value );
});
```
         * @example ​ ````Filter reject value:
```javascript
var defer = $.Deferred(),
  filtered = defer.pipe( null, function( value ) {
    return value * 3;
  });
​
defer.reject( 6 );
filtered.fail(function( value ) {
  alert( "Value is ( 3*6 = ) 18: " + value );
});
```
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.pipe(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        pipe<ARD = never, AJD = never, AND = never,
            BRD = never, BJD = never, BND = never,
            CRD = never, CJD = never, CND = never,
            RRD = never, RJD = never, RND = never,
            ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never>(
                doneFilter: (t: TR, u: UR, v: VR, ...s: SR[]) => PromiseBase<ARD, AJD, AND,
                    BRD, BJD, BND,
                    CRD, CJD, CND,
                    RRD, RJD, RND> | Thenable<ARD> | ARD,
                failFilter: (t: TJ, u: UJ, v: VJ, ...s: SJ[]) => PromiseBase<ARF, AJF, ANF,
                    BRF, BJF, BNF,
                    CRF, CJF, CNF,
                    RRF, RJF, RNF> | Thenable<AJF> | AJF,
                progressFilter?: null): PromiseBase<ARD | ARF, AJD | AJF, AND | ANF,
            BRD | BRF, BJD | BJF, BND | BNF,
            CRD | CRF, CJD | CJF, CND | CNF,
            RRD | RRF, RJD | RJF, RND | RNF>;
        /**
         * Utility method to filter and/or chain Deferreds.
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.pipe/ }\`
         * @since 1.6
         * @since 1.7
         * @deprecated ​ Deprecated since 1.8. Use \`{@link then }\`.
         *
         * **Cause**: The `.pipe()` method on a `jQuery.Deferred` object was deprecated as of jQuery 1.8, when the `.then()` method was changed to perform the same function.
         *
         * **Solution**: In most cases it is sufficient to change all occurrences of `.pipe()` to `.then()`. Ensure that you aren't relying on context/state propagation (e.g., using `this`) or synchronous callback invocation, which were dropped from `.then()` for Promises/A+ interoperability as of jQuery 3.0.
         * @example ​ ````Filter reject value:
```javascript
var defer = $.Deferred(),
  filtered = defer.pipe( null, function( value ) {
    return value * 3;
  });
​
defer.reject( 6 );
filtered.fail(function( value ) {
  alert( "Value is ( 3*6 = ) 18: " + value );
});
```
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.pipe(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        pipe<ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never>(
                doneFilter: null,
                failFilter: (t: TJ, u: UJ, v: VJ, ...s: SJ[]) => PromiseBase<ARF, AJF, ANF,
                    BRF, BJF, BNF,
                    CRF, CJF, CNF,
                    RRF, RJF, RNF> | Thenable<AJF> | AJF,
                progressFilter?: null): PromiseBase<ARF, AJF, ANF,
            BRF, BJF, BNF,
            CRF, CJF, CNF,
            RRF, RJF, RNF>;
        /**
         * Utility method to filter and/or chain Deferreds.
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.pipe/ }\`
         * @since 1.6
         * @since 1.7
         * @deprecated ​ Deprecated since 1.8. Use \`{@link then }\`.
         *
         * **Cause**: The `.pipe()` method on a `jQuery.Deferred` object was deprecated as of jQuery 1.8, when the `.then()` method was changed to perform the same function.
         *
         * **Solution**: In most cases it is sufficient to change all occurrences of `.pipe()` to `.then()`. Ensure that you aren't relying on context/state propagation (e.g., using `this`) or synchronous callback invocation, which were dropped from `.then()` for Promises/A+ interoperability as of jQuery 3.0.
         * @example ​ ````Filter resolve value:
```javascript
var defer = $.Deferred(),
  filtered = defer.pipe(function( value ) {
    return value * 2;
  });
​
defer.resolve( 5 );
filtered.done(function( value ) {
  alert( "Value is ( 2*5 = ) 10: " + value );
});
```
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.pipe(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        pipe<ARD = never, AJD = never, AND = never,
            BRD = never, BJD = never, BND = never,
            CRD = never, CJD = never, CND = never,
            RRD = never, RJD = never, RND = never>(
                doneFilter: (t: TR, u: UR, v: VR, ...s: SR[]) => PromiseBase<ARD, AJD, AND,
                    BRD, BJD, BND,
                    CRD, CJD, CND,
                    RRD, RJD, RND> | Thenable<ARD> | ARD,
                failFilter?: null,
                progressFilter?: null): PromiseBase<ARD, AJD, AND,
            BRD, BJD, BND,
            CRD, CJD, CND,
            RRD, RJD, RND>;

        // #endregion

        // region then
        // #region then

        /**
         * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.then/ }\`
         * @since 1.8
         * @example ​ ````Since the jQuery.get method returns a jqXHR object, which is derived from a Deferred object, we can attach handlers using the .then method.
```javascript
$.get( "test.php" ).then(
  function() {
    alert( "$.get succeeded" );
  }, function() {
    alert( "$.get failed!" );
  }
);
```
         * @example ​ ````Filter the resolve value:
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>deferred.then demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button>Filter Resolve</button>
<p></p>
​
<script>
var filterResolve = function() {
  var defer = $.Deferred(),
    filtered = defer.then(function( value ) {
      return value * 2;
    });
​
  defer.resolve( 5 );
  filtered.done(function( value ) {
    $( "p" ).html( "Value is ( 2*5 = ) 10: " + value );
  });
};
​
$( "button" ).on( "click", filterResolve );
</script>
​
</body>
</html>
```
         * @example ​ ````Filter reject value:
```javascript
var defer = $.Deferred(),
  filtered = defer.then( null, function( value ) {
    return value * 3;
  });
​
defer.reject( 6 );
filtered.fail(function( value ) {
  alert( "Value is ( 3*6 = ) 18: " + value );
});
```
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.then(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        then<ARD = never, AJD = never, AND = never,
            BRD = never, BJD = never, BND = never,
            CRD = never, CJD = never, CND = never,
            RRD = never, RJD = never, RND = never,
            ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never,
            ARP = never, AJP = never, ANP = never,
            BRP = never, BJP = never, BNP = never,
            CRP = never, CJP = never, CNP = never,
            RRP = never, RJP = never, RNP = never>(
                doneFilter: (t: TR, u: UR, v: VR, ...s: SR[]) => PromiseBase<ARD, AJD, AND,
                    BRD, BJD, BND,
                    CRD, CJD, CND,
                    RRD, RJD, RND> | Thenable<ARD> | ARD,
                failFilter: (t: TJ, u: UJ, v: VJ, ...s: SJ[]) => PromiseBase<ARF, AJF, ANF,
                    BRF, BJF, BNF,
                    CRF, CJF, CNF,
                    RRF, RJF, RNF> | Thenable<ARF> | ARF,
                progressFilter: (t: TN, u: UN, v: VN, ...s: SN[]) => PromiseBase<ARP, AJP, ANP,
                    BRP, BJP, BNP,
                    CRP, CJP, CNP,
                    RRP, RJP, RNP> | Thenable<ANP> | ANP): PromiseBase<ARD | ARF | ARP, AJD | AJF | AJP, AND | ANF | ANP,
            BRD | BRF | BRP, BJD | BJF | BJP, BND | BNF | BNP,
            CRD | CRF | CRP, CJD | CJF | CJP, CND | CNF | CNP,
            RRD | RRF | RRP, RJD | RJF | RJP, RND | RNF | RNP>;
        /**
         * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.then/ }\`
         * @since 1.8
         * @example ​ ````Filter reject value:
```javascript
var defer = $.Deferred(),
  filtered = defer.then( null, function( value ) {
    return value * 3;
  });
​
defer.reject( 6 );
filtered.fail(function( value ) {
  alert( "Value is ( 3*6 = ) 18: " + value );
});
```
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.then(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        then<ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never,
            ARP = never, AJP = never, ANP = never,
            BRP = never, BJP = never, BNP = never,
            CRP = never, CJP = never, CNP = never,
            RRP = never, RJP = never, RNP = never>(
                doneFilter: null,
                failFilter: (t: TJ, u: UJ, v: VJ, ...s: SJ[]) => PromiseBase<ARF, AJF, ANF,
                    BRF, BJF, BNF,
                    CRF, CJF, CNF,
                    RRF, RJF, RNF> | Thenable<ARF> | ARF,
                progressFilter: (t: TN, u: UN, v: VN, ...s: SN[]) => PromiseBase<ARP, AJP, ANP,
                    BRP, BJP, BNP,
                    CRP, CJP, CNP,
                    RRP, RJP, RNP> | Thenable<ANP> | ANP): PromiseBase<ARF | ARP, AJF | AJP, ANF | ANP,
            BRF | BRP, BJF | BJP, BNF | BNP,
            CRF | CRP, CJF | CJP, CNF | CNP,
            RRF | RRP, RJF | RJP, RNF | RNP>;
        /**
         * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.then/ }\`
         * @since 1.8
         * @example ​ ````Filter the resolve value:
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>deferred.then demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button>Filter Resolve</button>
<p></p>
​
<script>
var filterResolve = function() {
  var defer = $.Deferred(),
    filtered = defer.then(function( value ) {
      return value * 2;
    });
​
  defer.resolve( 5 );
  filtered.done(function( value ) {
    $( "p" ).html( "Value is ( 2*5 = ) 10: " + value );
  });
};
​
$( "button" ).on( "click", filterResolve );
</script>
​
</body>
</html>
```
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.then(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        then<ARD = never, AJD = never, AND = never,
            BRD = never, BJD = never, BND = never,
            CRD = never, CJD = never, CND = never,
            RRD = never, RJD = never, RND = never,
            ARP = never, AJP = never, ANP = never,
            BRP = never, BJP = never, BNP = never,
            CRP = never, CJP = never, CNP = never,
            RRP = never, RJP = never, RNP = never>(
                doneFilter: (t: TR, u: UR, v: VR, ...s: SR[]) => PromiseBase<ARD, AJD, AND,
                    BRD, BJD, BND,
                    CRD, CJD, CND,
                    RRD, RJD, RND> | Thenable<ARD> | ARD,
                failFilter: null,
                progressFilter: (t: TN, u: UN, v: VN, ...s: SN[]) => PromiseBase<ARP, AJP, ANP,
                    BRP, BJP, BNP,
                    CRP, CJP, CNP,
                    RRP, RJP, RNP> | Thenable<ANP> | ANP): PromiseBase<ARD | ARP, AJD | AJP, AND | ANP,
            BRD | BRP, BJD | BJP, BND | BNP,
            CRD | CRP, CJD | CJP, CND | CNP,
            RRD | RRP, RJD | RJP, RND | RNP>;
        /**
         * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.then/ }\`
         * @since 1.8
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.then(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        then<ARP = never, AJP = never, ANP = never,
            BRP = never, BJP = never, BNP = never,
            CRP = never, CJP = never, CNP = never,
            RRP = never, RJP = never, RNP = never>(
                doneFilter: null,
                failFilter: null,
                progressFilter?: (t: TN, u: UN, v: VN, ...s: SN[]) => PromiseBase<ARP, AJP, ANP,
                    BRP, BJP, BNP,
                    CRP, CJP, CNP,
                    RRP, RJP, RNP> | Thenable<ANP> | ANP): PromiseBase<ARP, AJP, ANP,
            BRP, BJP, BNP,
            CRP, CJP, CNP,
            RRP, RJP, RNP>;
        /**
         * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.then/ }\`
         * @since 1.8
         * @example ​ ````Since the jQuery.get method returns a jqXHR object, which is derived from a Deferred object, we can attach handlers using the .then method.
```javascript
$.get( "test.php" ).then(
  function() {
    alert( "$.get succeeded" );
  }, function() {
    alert( "$.get failed!" );
  }
);
```
         * @example ​ ````Filter the resolve value:
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>deferred.then demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button>Filter Resolve</button>
<p></p>
​
<script>
var filterResolve = function() {
  var defer = $.Deferred(),
    filtered = defer.then(function( value ) {
      return value * 2;
    });
​
  defer.resolve( 5 );
  filtered.done(function( value ) {
    $( "p" ).html( "Value is ( 2*5 = ) 10: " + value );
  });
};
​
$( "button" ).on( "click", filterResolve );
</script>
​
</body>
</html>
```
         * @example ​ ````Filter reject value:
```javascript
var defer = $.Deferred(),
  filtered = defer.then( null, function( value ) {
    return value * 3;
  });
​
defer.reject( 6 );
filtered.fail(function( value ) {
  alert( "Value is ( 3*6 = ) 18: " + value );
});
```
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.then(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        then<ARD = never, AJD = never, AND = never,
            BRD = never, BJD = never, BND = never,
            CRD = never, CJD = never, CND = never,
            RRD = never, RJD = never, RND = never,
            ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never>(
                doneFilter: (t: TR, u: UR, v: VR, ...s: SR[]) => PromiseBase<ARD, AJD, AND,
                    BRD, BJD, BND,
                    CRD, CJD, CND,
                    RRD, RJD, RND> | Thenable<ARD> | ARD,
                failFilter: (t: TJ, u: UJ, v: VJ, ...s: SJ[]) => PromiseBase<ARF, AJF, ANF,
                    BRF, BJF, BNF,
                    CRF, CJF, CNF,
                    RRF, RJF, RNF> | Thenable<ARF> | ARF,
                progressFilter?: null): PromiseBase<ARD | ARF, AJD | AJF, AND | ANF,
            BRD | BRF, BJD | BJF, BND | BNF,
            CRD | CRF, CJD | CJF, CND | CNF,
            RRD | RRF, RJD | RJF, RND | RNF>;
        /**
         * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.then/ }\`
         * @since 1.8
         * @example ​ ````Filter reject value:
```javascript
var defer = $.Deferred(),
  filtered = defer.then( null, function( value ) {
    return value * 3;
  });
​
defer.reject( 6 );
filtered.fail(function( value ) {
  alert( "Value is ( 3*6 = ) 18: " + value );
});
```
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.then(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        then<ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never>(
                doneFilter: null,
                failFilter: (t: TJ, u: UJ, v: VJ, ...s: SJ[]) => PromiseBase<ARF, AJF, ANF,
                    BRF, BJF, BNF,
                    CRF, CJF, CNF,
                    RRF, RJF, RNF> | Thenable<ARF> | ARF,
                progressFilter?: null): PromiseBase<ARF, AJF, ANF,
            BRF, BJF, BNF,
            CRF, CJF, CNF,
            RRF, RJF, RNF>;
        /**
         * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
         * @param doneFilter An optional function that is called when the Deferred is resolved.
         * @param failFilter An optional function that is called when the Deferred is rejected.
         * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
         * @see \`{@link https://api.jquery.com/deferred.then/ }\`
         * @since 1.8
         * @example ​ ````Filter the resolve value:
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>deferred.then demo</title>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
</head>
<body>
​
<button>Filter Resolve</button>
<p></p>
​
<script>
var filterResolve = function() {
  var defer = $.Deferred(),
    filtered = defer.then(function( value ) {
      return value * 2;
    });
​
  defer.resolve( 5 );
  filtered.done(function( value ) {
    $( "p" ).html( "Value is ( 2*5 = ) 10: " + value );
  });
};
​
$( "button" ).on( "click", filterResolve );
</script>
​
</body>
</html>
```
         * @example ​ ````Chain tasks:
```javascript
var request = $.ajax( url, { dataType: "json" } ),
  chained = request.then(function( data ) {
    return $.ajax( url2, { data: { user: data.userId } } );
  });
​
chained.done(function( data ) {
  // data retrieved from url2 as provided by the first request
});
```
         */
        then<ARD = never, AJD = never, AND = never,
            BRD = never, BJD = never, BND = never,
            CRD = never, CJD = never, CND = never,
            RRD = never, RJD = never, RND = never>(
                doneFilter: (t: TR, u: UR, v: VR, ...s: SR[]) => PromiseBase<ARD, AJD, AND,
                    BRD, BJD, BND,
                    CRD, CJD, CND,
                    RRD, RJD, RND> | Thenable<ARD> | ARD,
                failFilter?: null,
                progressFilter?: null): PromiseBase<ARD, AJD, AND,
            BRD, BJD, BND,
            CRD, CJD, CND,
            RRD, RJD, RND>;

        // #endregion

        /**
         * Add handlers to be called when the Deferred object is rejected.
         * @param failFilter A function that is called when the Deferred is rejected.
         * @see \`{@link https://api.jquery.com/deferred.catch/ }\`
         * @since 3.0
         * @example ​ ````Since the jQuery.get method returns a jqXHR object, which is derived from a Deferred object, we can rejection handlers using the .catch method.
```javascript
$.get( "test.php" )
  .then( function() {
    alert( "$.get succeeded" );
  } )
  .catch( function() {
    alert( "$.get failed!" );
  } );
```
         */
        catch<ARF = never, AJF = never, ANF = never,
            BRF = never, BJF = never, BNF = never,
            CRF = never, CJF = never, CNF = never,
            RRF = never, RJF = never, RNF = never>(
                failFilter?: ((t: TJ, u: UJ, v: VJ, ...s: SJ[]) => PromiseBase<ARF, AJF, ANF,
                    BRF, BJF, BNF,
                    CRF, CJF, CNF,
                    RRF, RJF, RNF> | Thenable<ARF> | ARF) | null): PromiseBase<ARF, AJF, ANF,
            BRF, BJF, BNF,
            CRF, CJF, CNF,
            RRF, RJF, RNF>;
    }
}
