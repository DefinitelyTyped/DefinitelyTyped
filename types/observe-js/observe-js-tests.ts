import { PathObserver, ArrayObserver, ObjectObserver, CompoundObserver, ObserverTransform } from 'observe-js';

namespace observejs {

    function Test_PathObserver() {
        var obj = { foo: { bar: 'baz' } };
        var defaultValue = 42;
        var observer = new PathObserver(obj, 'foo.bar', defaultValue);
        observer.open(function(newValue, oldValue) {
        // respond to obj.foo.bar having changed value.
        });
    }


    function Test_ArrayObserver() {
        var arr = [0, 1, 2, 4];
        var observer = new ArrayObserver(arr);
        observer.open(function(splices) {
        // respond to changes to the elements of arr.
        splices.forEach(function(splice) {
            splice.index; // the index position that the change occurred.
            splice.removed; // an array of values representing the sequence of removed elements
            splice.addedCount; // the number of elements which were inserted.
        });
        });
    }

    function Test_ObejctObserver() {
        var myObj = { id: 1, foo: 'bar' };
        var observer = new ObjectObserver(myObj);
        observer.open(function(added, removed, changed, getOldValueFn) {
        // respond to changes to the obj.
        Object.keys(added).forEach(function(property) {
            property; // a property which has been been added to obj
            added[property]; // its value
        });
        Object.keys(removed).forEach(function(property) {
            property; // a property which has been been removed from obj
            getOldValueFn(property); // its old value
        });
        Object.keys(changed).forEach(function(property) {
            property; // a property on obj which has changed value.
            changed[property]; // its value
            getOldValueFn(property); // its old value
        });
        });
    }

    function Test_CompounObserver() {
        var obj = {
            a: 1,
            b: 2,
        };

        var otherObj = { c: 3 };

        var observer = new CompoundObserver();
        observer.addPath(obj, 'a');
        observer.addObserver(new PathObserver(obj, 'b'));
        observer.addPath(otherObj, 'c');
        var logTemplate = 'The %sth value before & after:';
        observer.open(function(newValues, oldValues) {
        // Use for-in to iterate which values have changed.
        for (var i in oldValues) {
            console.log(logTemplate, i, oldValues[i], newValues[i]);
        }
        });
    }

    function Test_ObserverTransform_1() {
        var obj = { value: 10 };
        var observer = new PathObserver(obj, 'value');
        function getValue(value:any) { return value * 2 };
        function setValue(value:any) { return value / 2 };

        var transform = new ObserverTransform(observer, getValue, setValue);

        // returns 20.
        transform.open(function(newValue, oldValue) {
        console.log('new: ' + newValue + ', old: ' + oldValue);
        });

        obj.value = 20;
        transform.deliver(); // 'new: 40, old: 20'
        transform.setValue(4); // obj.value === 2;
    }

    function Test_ObserverTransform_2() {
        var obj = { a: 1, b: 2, c: 3 };
        var observer = new CompoundObserver();
        observer.addPath(obj, 'a');
        observer.addPath(obj, 'b');
        observer.addPath(obj, 'c');
        var transform = new ObserverTransform(observer, function(values) {
        var value = 0;
        for (var i = 0; i < values.length; i++)
            value += values[i]
        return value;
        });

        // returns 6.
        transform.open(function(newValue, oldValue) {
        console.log('new: ' + newValue + ', old: ' + oldValue);
        });

        obj.a = 2;
        obj.c = 10;
        transform.deliver(); // 'new: 14, old: 6'
    }

}
