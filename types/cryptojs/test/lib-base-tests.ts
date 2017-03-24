/// <reference types="yui" />


YUI.add('lib-base-test', function (Y) {
    var C = CryptoJS;

    Y.Test.Runner.add(new Y.Test.Case({
        name: 'Base',

        setUp: function () {
            this.data = {};

            this.data.overrides = {
                init: function (arg: Object) {
                    this.initFired = true;
                    this.initArg = arg;
                },

                toString: function () {
                }
            };

            this.data.mixins = {
                mixinMethod: function () {
                }
            };

            this.data.Obj = C.lib.Base.extend(this.data.overrides);

            this.data.Obj.mixIn(this.data.mixins);

            this.data.obj = this.data.Obj.create('argValue');

            this.data.objClone = this.data.obj.clone();
        },

        testExtendInheritance: function () {
            Y.Assert.areEqual(C.lib.Base.extend, this.data.Obj.extend);
            Y.Assert.isFalse(this.data.Obj.hasOwnProperty('extend'));
        },

        testExtendSuper: function () {
            Y.Assert.areEqual(C.lib.Base, this.data.Obj.$super);
        },

        testExtendOverrideInit: function () {
            Y.Assert.areEqual(this.data.overrides.init, this.data.Obj.init);
            Y.Assert.isTrue(this.data.Obj.hasOwnProperty('init'));
        },

        testExtendOverrideToString: function () {
            Y.Assert.areEqual(this.data.overrides.toString, this.data.Obj.toString);
            Y.Assert.isTrue(this.data.Obj.hasOwnProperty('toString'));
        },

        testCreateInheritanceFromBase: function () {
            Y.Assert.areEqual(C.lib.Base.extend, this.data.obj.extend);
            Y.Assert.isFalse(this.data.obj.hasOwnProperty('extend'));
        },

        testCreateSuper: function () {
            Y.Assert.areEqual(this.data.Obj, this.data.obj.$super);
        },

        testCreateInit: function () {
            Y.Assert.isTrue(this.data.obj.initFired);
            Y.Assert.areEqual('argValue', this.data.obj.initArg);
        },

        testMixIn: function () {
            Y.Assert.areEqual(this.data.mixins.mixinMethod, this.data.Obj.mixinMethod);
            Y.Assert.isTrue(this.data.Obj.hasOwnProperty('mixinMethod'));
        },

        testCloneDistinct: function () {
            Y.Assert.areNotEqual(this.data.obj, this.data.objClone);
        },

        testCloneCopy: function () {
            Y.Assert.areEqual(this.data.obj.initArg, this.data.objClone.initArg);
        },

        testCloneIndependent: function () {
            this.data.obj.initArg = 'newValue';

            Y.Assert.areNotEqual(this.data.obj.initArg, this.data.objClone.initArg);
        }
    }));
}, '$Rev$');
