/// <reference path="../jasmine/jasmine.d.ts" />
/// <reference path="automapper-ts.d.ts" />

var globalScope = this;

declare module jasmine {
  interface Matchers {
    toEqualData(data: any): boolean;
    fail(message: string): boolean;
  }
}

declare function expect(): jasmine.Matchers;

module AutoMapperJs {
    describe('AutoMapper', () => {
        beforeEach(() => {
            jasmine.addMatchers(ExtendJasmine.addCustomMatchers());

            // clear mappings (please, don't try this at home!)
            for (var key in (<any>automapper)._mappings) {
                if (!(<any>automapper)._mappings.hasOwnProperty(key)) {
                    continue;
                }
                delete (<any>automapper)._mappings[key];
            }
        });

        it('should validate mapping using strictMode set to \'true\' (with valid mappings)', () => {
            // arrange
            automapper.createMap(AssertConfigPropertiesProp, AssertConfigPropertiesProp);

            // act and assert
            automapper.assertConfigurationIsValid(true);
        });

        it('should set strictMode to \'true\' when no value is provided and validate (with valid mappings)', () => {
            // arrange
            automapper.createMap(AssertConfigPropertiesProp, AssertConfigPropertiesProp);

            // act and assert
            automapper.assertConfigurationIsValid();
        });

        it('should validate mapping using strictMode set to \'false\'', () => {
            // arrange
            automapper.createMap(AssertConfigPropertiesProp, AssertConfigPropertiesProp);
            automapper.createMap('AssertMappingConfigUntestableA', 'AssertMappingConfigUntestableB');

            // act and assert
            automapper.assertConfigurationIsValid(false);
        });

        it('should fail when validating mappings using strictMode set to \'true\' (with unvalidatable mappings)', () => {
            // arrange
            automapper.createMap(AssertConfigPropertiesProp, AssertConfigPropertiesProp);
            automapper.createMap('AssertMappingConfigUntestableA', 'AssertMappingConfigUntestableB');

            // act
            try {
                automapper.assertConfigurationIsValid(true);
            } catch (e) {
                // assert
                var errorMessage: string = e.message;
                var dekeyedErrorMessage =
                    errorMessage.substr(0, errorMessage.indexOf('\'') + 1) +
                    errorMessage.substr(errorMessage.lastIndexOf('\''));

                expect(dekeyedErrorMessage).toEqual(`Mapping '' cannot be validated, since mapping.sourceType or mapping.destinationType are unspecified.`);
                return;
            }

            // assert
            expect(null).fail('Expected error was not raised.');
        });

        it('should fail when auto mapping a property which does not exist on destination', () => {
            // arrange
            var srcType = AssertConfigPropertiesProp;
            var dstType = AssertConfigPropertiesProp2;

            var srcName = AutoMapperHelper.getClassName(srcType);
            var dstName = AutoMapperHelper.getClassName(dstType);

            automapper.createMap(srcType, dstType);

            try {
                // act
                automapper.assertConfigurationIsValid(true);
            } catch (e) {
                // assert
                expect(e.message).toEqual(`Mapping '${srcName}=>${dstName}' is invalid: Source member 'prop' is configured to be mapped, ` +
                                          `but does not exist on destination type (source: '${srcName}', destination: '${dstName}').`);
                return;
            }

            // assert
            expect(null).fail('Expected error was not raised.');
        });

        it('should succeed when mapping objects with ignored properties not existing on the other side', () => {
            // arrange
            var srcType = AssertConfigPropertiesProp;
            var dstType = AssertConfigPropertiesProp2;

            var srcName = AutoMapperHelper.getClassName(srcType);
            var dstName = AutoMapperHelper.getClassName(dstType);

            automapper
                .createMap(srcType, dstType)
                .forSourceMember('prop', (opts: ISourceMemberConfigurationOptions) => { opts.ignore(); })
                .forMember('prop2', (opts: IMemberConfigurationOptions) => { opts.ignore(); });

            // act and assert
            automapper.assertConfigurationIsValid(true);
        });

        it('should fail when auto mapping a property which does not exist on source', () => {
            // arrange
            var srcType = AssertConfigPropertiesProp;
            var dstType = AssertConfigPropertiesPropProp2;

            var srcName = AutoMapperHelper.getClassName(srcType);
            var dstName = AutoMapperHelper.getClassName(dstType);

            automapper.createMap(srcType, dstType);

            try {
                // act
                automapper.assertConfigurationIsValid(true);
            } catch (e) {
                // assert
                expect(e.message).toEqual(`Mapping '${srcName}=>${dstName}' is invalid: Destination member 'prop2' does not exist on source type (source: '${srcName}', destination: '${dstName}').`);
                return;
            }

            // assert
            expect(null).fail('Expected error was not raised.');
        });

        it('should fail when providing configuration for a property which does not exist on destination', () => {
            // arrange
            var srcType = AssertConfigPropertiesProp;
            var dstType = AssertConfigPropertiesPropProp2;

            var srcName = AutoMapperHelper.getClassName(srcType);
            var dstName = AutoMapperHelper.getClassName(dstType);

            automapper
                .createMap(srcType, dstType)
                .forMember('prop3', (opts: IMemberConfigurationOptions) => { opts.ignore(); });

            try {
                // act
                automapper.assertConfigurationIsValid(true);
            } catch (e) {
                // assert
                expect(e.message).toEqual(`Mapping '${srcName}=>${dstName}' is invalid: Destination member 'prop3' is configured, but does not exist on destination type (source: '${srcName}', destination: '${dstName}').`);
                return;
            }

            // assert
            expect(null).fail('Expected error was not raised.');
        });

        it('should fail when providing configuration for a property which does not exist on source', () => {
            // arrange
            var srcType = AssertConfigPropertiesProp;
            var dstType = AssertConfigPropertiesPropProp2;

            var srcName = AutoMapperHelper.getClassName(srcType);
            var dstName = AutoMapperHelper.getClassName(dstType);

            automapper
                .createMap(srcType, dstType)
                .forSourceMember('prop2', (opts: ISourceMemberConfigurationOptions) => { opts.ignore(); });

            try {
                // act
                automapper.assertConfigurationIsValid(true);
            } catch (e) {
                // assert
                expect(e.message).toEqual(`Mapping '${srcName}=>${dstName}' is invalid: Source member 'prop2' is configured, but does not exist on source type (source: '${srcName}', destination: '${dstName}').`);
                return;
            }

            // assert
            expect(null).fail('Expected error was not raised.');
        });
    });

    describe('AutoMapper (asynchronous mapping)', () => {
        beforeEach(() => {
            jasmine.addMatchers(ExtendJasmine.addCustomMatchers());
        });

        it('should be able to map asynchronous using forMember', (done) => {
            // arrange
            var objFrom = { prop: 'prop' };

            var fromKey = 'async-forMember-';
            var toKey = 'valid-1';

            // act
            automapper
                .createMap(fromKey, toKey)
                .forMember('prop', (opts: IMemberConfigurationOptions, cb: IMemberCallback) => {
                    var func = (o: IMemberConfigurationOptions, c: IMemberCallback) => {
                        c(o.intermediatePropertyValue + ' (async)');
                    };

                    // do something asynchronous
                    setTimeout((): void => {
                        func(opts, cb);
                    }, 10);
                })
                .forMember('prop', (opts: IMemberConfigurationOptions) => {
                    return opts.intermediatePropertyValue + ' (sync)';
                });

            automapper.mapAsync(fromKey, toKey, objFrom, (result: any) => {
                // assert
                expect(result.prop).toEqual(objFrom.prop + ' (async)' + ' (sync)');
                done();
            });
        });

        it('should be able to map asynchronous using forMember in combination with a constant value', (done: () => void) => {
            // arrange
            var objFrom = { prop: 'prop' };

            var fromKey = 'async-forMember-';
            var toKey = 'valid-2';

            // act
            automapper
                .createMap(fromKey, toKey)
                .forMember('prop', (opts: IMemberConfigurationOptions, cb: IMemberCallback) => {
                    var func = (o: IMemberConfigurationOptions, c: IMemberCallback) => {
                        c(o.intermediatePropertyValue + ' (async)');
                    };

                    // do something asynchronous
                    setTimeout((): void => {
                        func(opts, cb);
                    }, 10);
                })
                .forMember('prop', 'Async With Constant Value');

            automapper.mapAsync(fromKey, toKey, objFrom, (result: any) => {
                // assert
                expect(result.prop).toEqual('Async With Constant Value');
                done();
            });
        });

        it('should be able to map asynchronous using an asynchronous forMember in combination with a synchronous forMember mapping', (done: () => void) => {
            // arrange
            var objFrom = { prop1: 'prop1', prop2: 'prop2' };

            var fromKey = 'async-forMember-';
            var toKey = 'valid-3';

            // act
            automapper
                .createMap(fromKey, toKey)
                .forMember('prop1', (opts: IMemberConfigurationOptions, cb: IMemberCallback) => {
                    var func = (o: IMemberConfigurationOptions, c: IMemberCallback) => {
                        c(o.intermediatePropertyValue + ' (async)');
                    };

                    // do something asynchronous
                    setTimeout((): void => {
                        func(opts, cb);
                    }, 10);
                })
                .forMember('prop2', (opts: IMemberConfigurationOptions): any => opts.intermediatePropertyValue);

            automapper.mapAsync(fromKey, toKey, objFrom, (result: any) => {
                // assert
                expect(result.prop1).toEqual(objFrom.prop1 + ' (async)');
                expect(result.prop2).toEqual(objFrom.prop2);
                done();
            });
        });

        it('should fail when mapping an asynchronous mapping using synchronous map function', () => {
            // arrange
            var objFrom = { prop: 'prop' };

            var fromKey = 'async-forMember-';
            var toKey = 'invalid-1';

            automapper
                .createMap(fromKey, toKey)
                .forMember('prop', (opts: IMemberConfigurationOptions, cb: IMemberCallback) => {
                    var func = (o: IMemberConfigurationOptions, c: IMemberCallback) => {
                        c(o.intermediatePropertyValue + ' (async)');
                    }

                    // do something asynchronous
                    setTimeout((): void => {
                        func(opts, cb);
                    }, 10);
                })
                .forMember('prop', (opts: IMemberConfigurationOptions) => {
                    return opts.intermediatePropertyValue + ' (sync)';
                });

            // act
            try {
                var objB = automapper.map(fromKey, toKey, objFrom);
            } catch (e) {
                // assert
                expect(e.message).toEqual('Impossible to use asynchronous mapping using automapper.map(); use automapper.mapAsync() instead.');
                return;
            }

            // assert
            expect(null).fail('Expected error was not raised.');
        });

        it('should be able to map asynchronous using forSourceMember', (done: () => void) => {
            // arrange
            var objFrom = { prop: 'prop' };

            var fromKey = 'async-forSourceMember-';
            var toKey = 'valid-1';

            automapper
                .createMap(fromKey, toKey)
                .forSourceMember('prop', (opts: ISourceMemberConfigurationOptions, cb: IMemberCallback) => {
                    var func = (o: ISourceMemberConfigurationOptions, c: IMemberCallback) => {
                        c('AsyncValue');
                    };

                    // do something asynchronous
                    setTimeout((): void => {
                        func(opts, cb);
                    }, 10);
                });

            // act
            automapper.mapAsync(fromKey, toKey, objFrom, (result: any) => {
                // assert
                expect(result.prop).toEqual('AsyncValue');
                done();
            });
        });

        it('should be able to use convertUsing to map an object with a custom asynchronous type resolver function', (done: () => void) => {
            var objA = { propA: 'propA' };

            var fromKey = '{D1534A0F-6120-475E-B7E2-BF2489C58571}';
            var toKey = '{1896FF99-1A28-4FE6-800B-072D5616B02D}';

            automapper
                .createMap(fromKey, toKey)
                .convertUsing((opts: IResolutionContext, cb: IMapCallback): void => {
                    var func = (o: IResolutionContext, c: IMapCallback) => {
                        var res = { propA: o.sourceValue.propA + ' (custom async mapped with resolution context)' };
                        c(res);
                    };

                    // do something asynchronous
                    setTimeout((): void => {
                        func(opts, cb);
                    }, 10);
                });

            // act
            automapper.mapAsync(fromKey, toKey, objA, (result: any) => {
                // assert
                expect(result.propA).toEqual(objA.propA + ' (custom async mapped with resolution context)');
                done();
            });
        });

        it('should asynchronously map an array', (done: () => void) => {
            // arrange
            var arrA = [{ prop1: 'From A', prop2: 'From A too' }];

            var fromKey = '{60D9DGH6-DSEC-48GF-9BAC-0805FCAF91B7}';
            var toKey = '{AC6D5B97-9AE3-BERT-ZB60-AZFEDZXE541A}';

            automapper.createMap(fromKey, toKey)
                .forMember('prop1', (opts: IMemberConfigurationOptions, cb: IMemberCallback) => {
                    var func = (o: IMemberConfigurationOptions, c: IMemberCallback) => {
                        c(o.intermediatePropertyValue);
                    };

                    // do something asynchronous
                    setTimeout((): void => {
                        func(opts, cb);
                    }, 10);
                });
            // act
            var arrB = automapper.mapAsync(fromKey, toKey, arrA, (result: any) => {
                // assert
                expect(result).toEqualData(arrA);
                done();
            });
        });
    });

    describe('AutoMapper', () => {
        beforeEach(() => {
            jasmine.addMatchers(ExtendJasmine.addCustomMatchers());
        });

        it('should have a global automapper object', () => {
            expect(automapper).not.toBeUndefined();
            expect(automapper).not.toBeNull();

            expect(automapper.createMap).not.toBeUndefined();
            expect(automapper.createMap).not.toBeNull();
            expect(typeof automapper.createMap === 'function').toBeTruthy();

            expect(automapper.map).not.toBeUndefined();
            expect(automapper.map).not.toBeNull();
            expect(typeof automapper.map === 'function').toBeTruthy();
        });

        it('should return the Singleton instance when instantiating the Singleton directly', () => {
            // arrange
            var caught = false;

            // act
            var mapper = new AutoMapper();
            expect(automapper).toBe(mapper);
        });

        it('should use created mapping profile', () => {
            // arrange
            var fromKey = '{5700E351-8D88-4327-A216-3CC94A308EDF}';
            var toKey = '{BB33A261-3CA9-48FC-85E6-2C269F73728D}';

            automapper.createMap(fromKey, toKey);

            // act
            automapper.map(fromKey, toKey, {});

            // assert
        });

        it('should fail when using a non-existing mapping profile', () => {
            // arrange
            var caught = false;

            var fromKey = '{5AEFD48C-4472-41E7-BA7E-0977A864E116}';
            var toKey = '{568DCA5E-477E-4739-86B2-38BB237B8EF8}';

            // act
            try {
                automapper.map(fromKey, toKey, {});
            } catch (e) {
                caught = true;

                // assert
                expect(e.message).toEqual('Could not find map object with a source of ' + fromKey + ' and a destination of ' + toKey);
            }

            if (!caught) {
                // assert
                expect().fail('Using a non-existing mapping profile should result in an error.');
            }
        });

        it('should be able to use forAllMemberMappings', () => {
            // arrange
            var fromKey = '{5700E351-8D88-4327-A216-3CCBHJ808EDF}';
            var toKey = '{BB33A261-3CA9-48FC-85E6-2C269FDFT28D}';

            var source = { prop1: 'prop1', prop2: 'prop2' };
            var suffix = ' [forAllMembers]';

            automapper.createMap(fromKey, toKey)
                      .forMember('prop1', (opts: IMemberConfigurationOptions): any => opts.intermediatePropertyValue)
                      .forMember('prop2', (opts: IMemberConfigurationOptions): any => opts.intermediatePropertyValue)
                      .forAllMembers((destinationObject: any,
                                      destinationPropertyName: string,
                                      value: any): void => {
                                          destinationObject[destinationPropertyName] = value + suffix;
                                      });

            // act
            var destination = automapper.map(fromKey, toKey, source);

            // assert
            expect(destination.prop1).toEqual(source.prop1 + suffix);
            expect(destination.prop2).toEqual(source.prop2 + suffix);
        });

        it('should be able to use forAllMemberMappings when automapping', () => {
            // arrange
            var fromKey = '{5700E351-8D88-4327-A216-3CCBHJ808EDF}';
            var toKey = '{BB33A261-3CA9-48FC-85E6-2C269FDFT28D}';

            var source = { prop1: 'prop1', prop2: 'prop2' };
            var suffix = ' [forAllMembers]';

            automapper.createMap(fromKey, toKey)
                      .forAllMembers((destinationObject: any,
                                      destinationPropertyName: string,
                                      value: any): void => {
                                          destinationObject[destinationPropertyName] = value + suffix;
                                      });

            // act
            var destination = automapper.map(fromKey, toKey, source);

            // assert
            expect(destination.prop1).toEqual(source.prop1 + suffix);
            expect(destination.prop2).toEqual(source.prop2 + suffix);
        });

        it('should accept multiple forMember calls for the same destination property and overwrite with the last one specified', () => {
            //arrange
            var objA = { prop1: 'From A', prop2: 'From A too' };

            var fromKey = '{7AC4134B-ECC1-464B-B144-5B9D8F5B568E}';
            var toKey = '{2BDE907C-1CE6-4CC5-A601-9A94CC665837}';

            automapper
                .createMap(fromKey, toKey)
                .forMember('prop1', (opts: IMemberConfigurationOptions) => { opts.mapFrom('prop2'); })
                .forMember('prop1', (opts: IMemberConfigurationOptions) => { opts.ignore(); });

            // act
            var objB = automapper.map(fromKey, toKey, objA);

            // assert
            expect(objB).toEqualData({ prop2: objA.prop2 });
        });

        it('should be able to ignore a source property using the forSourceMember function', () => {
            // arrange
            var objA = { prop1: 'From A', prop2: 'From A too' };

            var fromKey = '{AD88481E-597B-4C1B-967B-3D700B8BAB0F}';
            var toKey = '{2A6714C4-784E-47D3-BBF4-6205834EC8D5}';

            automapper
                .createMap(fromKey, toKey)
                .forSourceMember('prop1', (opts: ISourceMemberConfigurationOptions) => { opts.ignore(); });

            // act
            var objB = automapper.map(fromKey, toKey, objA);

            // assert
            expect(objB).toEqualData({ prop2: 'From A too' });
        });

        it('should be able to custom map a source property using the forSourceMember function', () => {
            // arrange
            var objA = { prop1: 'From A', prop2: 'From A too' };

            var fromKey = '{AD88481E-597B-4C1B-967B-3D700B8BAB0F}';
            var toKey = '{2A6714C4-784E-47D3-BBF4-6205834EC8D5}';

            automapper
                .createMap(fromKey, toKey)
                .forSourceMember('prop1', (opts: ISourceMemberConfigurationOptions) => { return 'Yeah!'; });

            // act
            var objB = automapper.map(fromKey, toKey, objA);

            // assert
            expect(objB).toEqualData({ prop1: 'Yeah!', prop2: 'From A too' });
        });

        it('should be able to ignore a source property already specified (by forMember) using the forSourceMember function', () => {
            // arrange
            var objA = { prop1: 'From A', prop2: 'From A too' };

            var fromKey = '{AD88481E-597B-4C1B-967B-3D701B8CAB0A}';
            var toKey = '{2A6714C4-784E-47D3-BBF4-620583DEC86A}';

            automapper
                .createMap(fromKey, toKey)
                .forMember('prop1', 12)
                .forSourceMember('prop1', (opts: ISourceMemberConfigurationOptions) => { opts.ignore(); });

            // act
            var objB = automapper.map(fromKey, toKey, objA);

            // assert
            expect(objB).toEqualData({ prop2: 'From A too' });
        });

        it('should fail when forSourceMember is used with anything else than a function', () => {
            // arrange
            var caught = false;

            var fromKey = '{5EE20DF9-84B3-4A6A-8C5D-37AEDC44BE87}';
            var toKey = '{986C959D-2E2E-41FA-9857-8EF519467AEB}';

            try {
                // act
                automapper
                    .createMap(fromKey, toKey)
                    .forSourceMember('prop1', <any>12);
            } catch (e) {
                // assert
                caught = true;
                expect(e.message).toEqual('Configuration of forSourceMember has to be a function with one (sync) or two (async) options parameters.');
            }

            if (!caught) {
                // assert
                expect().fail('Using anything else than a function with forSourceMember should result in an error.');
            }
        });

        it('should be able to use forMember to map a source property to a destination property with a different name', () => {
            //arrange
            var objA = { prop1: 'From A', prop2: 'From A too' };

            var fromKey = '{7AC4134B-ECC1-464B-B144-5B9D8F5B568E}';
            var toKey = '{2BDE907C-1CE6-4CC5-A601-9A94CC665837}';

            automapper
                .createMap(fromKey, toKey)
                .forMember('prop', (opts: IMemberConfigurationOptions) => { opts.mapFrom('prop2'); });

            // act
            var objB = automapper.map(fromKey, toKey, objA);

            // assert
            expect(objB).toEqualData({ prop1: objA.prop1, prop: objA.prop2 });
        });

        it('should use forAllMembers function for each mapped destination property when specified', () => {
            // arrange
            var objA = { prop1: 'From A', prop2: 'From A too' };

            var fromKey = '{C4056539-FA86-4398-A10B-C41D3A791F26}';
            var toKey = '{01C64E8D-CDB5-4307-9011-0C7F1E70D115}';

            var forAllMembersSpy = jasmine.createSpy('forAllMembersSpy').and.callFake((destinationObject: any, destinationProperty: string, value: any) => {
                destinationObject[destinationProperty] = value;
            });

            automapper
                .createMap(fromKey, toKey)
                .forAllMembers(forAllMembersSpy);

            // act
            var objB = automapper.map(fromKey, toKey, objA);

            // assert
            expect(forAllMembersSpy).toHaveBeenCalled();
            expect(forAllMembersSpy.calls.count()).toBe(Object.keys(objB).length);
        });

        it('should be able to use forMember with a constant value', () => {
            // arrange
            var objA = { prop: 1 };

            var fromKey = '{54E67626-B877-4824-82E6-01E9F411B78F}';
            var toKey = '{2D7FDB88-97E9-45EF-A111-C9CC9C188227}';

            var constantResult = 2;

            automapper
                .createMap(fromKey, toKey)
                .forMember('prop', constantResult);

            // act
            var objB = automapper.map(fromKey, toKey, objA);

            // assert
            expect(objB.prop).toBe(constantResult);
        });

        it('should be able to use forMember with a function returning a constant value', () => {
            // arrange
            var objA = { prop: 1 };

            var fromKey = '{74C12B56-1DD1-4EA0-A640-D1F814971124}';
            var toKey = '{BBC617B8-26C8-42A0-A204-45CC77073355}';

            var constantResult = 3;

            automapper
                .createMap(fromKey, toKey)
                .forMember('prop', () => { return constantResult; });

            // act
            var objB = automapper.map(fromKey, toKey, objA);

            // assert
            expect(objB.prop).toBe(constantResult);
        });

        it('should be able to use forMember with a function using the source object', () => {
            // arrange
            var objA = { prop: { subProp: { value: 1 } } };

            var fromKey = '{54E67626-B877-4824-82E6-01E9F411B78F}';
            var toKey = '{2D7FDB88-97E9-45EF-A111-C9CC9C188227}';

            automapper
                .createMap(fromKey, toKey)
                .forMember('prop', (opts: IMemberConfigurationOptions) => { return opts.sourceObject[opts.sourcePropertyName].subProp.value * 2; });

            // act
            var objB = automapper.map(fromKey, toKey, objA);

            // assert
            expect(objB.prop).toBe(objA.prop.subProp.value * 2);
        });

        it('should be able to use forMember to ignore a property', () => {
            // arrange
            var objA = { prop: 1 };

            var fromKey = '{76D26B33-888A-4DF7-ABDA-E5B99E944272}';
            var toKey = '{18192391-85FF-4729-9A08-5954FCFE3954}';

            automapper
                .createMap(fromKey, toKey)
                .forMember('prop', (opts: IMemberConfigurationOptions) => { opts.ignore(); });

            // act
            var objB = automapper.map(fromKey, toKey, objA);

            // assert
            expect(objB.hasOwnProperty('prop')).not.toBeTruthy();
        });

        it('should be able to use forMember to map a source property to a destination property with a different name', () => {
            // arrange
            var objA = { propDiff: 1 };

            var fromKey = '{A317A36A-AD92-4346-A015-AE06FC862DB4}';
            var toKey = '{03B05E43-3028-44FD-909F-652E2DA5E607}';

            automapper
                .createMap(fromKey, toKey)
                .forMember('prop', (opts: IMemberConfigurationOptions) => { opts.mapFrom('propDiff'); });

            // act
            var objB = automapper.map(fromKey, toKey, objA);

            // assert
            expect(objB.prop).toEqual(objA.propDiff);
        });

        it('should be able to use stack forMember calls to map a source property to a destination property using multiple mapping steps', () => {
            // arrange
            var birthdayString = '2000-01-01T00:00:00.000Z';
            var objA = { birthdayString: birthdayString };

            var fromKey = '{564F1F57-FD4F-413C-A9D3-4B1C1333A20B}';
            var toKey = '{F9F45923-2D13-4EF1-9685-4883AD1D2F98}';

            automapper
                .createMap(fromKey, toKey)
                .forMember('birthday', (opts: IMemberConfigurationOptions) => { opts.mapFrom('birthdayString'); })
                .forMember('birthday', (opts: IMemberConfigurationOptions) => { return new Date(opts.intermediatePropertyValue); });

            // act
            var objB = automapper.map(fromKey, toKey, objA);

            // assert
            expect(objB.birthday instanceof Date).toBeTruthy();
            expect(objB.birthday.toISOString()).toEqual('2000-01-01T00:00:00.000Z');
        });

        it('should be able to use stack forMember calls to map a source property to a destination property using multiple mapping steps in any order', () => {
            // arrange
            var birthdayString = '2000-01-01T00:00:00.000Z';
            var objA = { birthdayString: birthdayString };

            var fromKey = '{1609A9B5-6083-448B-8FD6-51DAD106B63D}';
            var toKey = '{47AF7D2D-A848-4C5B-904F-39402E2DCDD5}';

            automapper
                .createMap(fromKey, toKey)
                .forMember('birthday', (opts: IMemberConfigurationOptions) => { return new Date(opts.intermediatePropertyValue); })
                .forMember('birthday', (opts: IMemberConfigurationOptions) => { opts.mapFrom('birthdayString'); });

            // act
            var objB = automapper.map(fromKey, toKey, objA);

            // assert
            expect(objB.birthday instanceof Date).toBeTruthy();
            expect(objB.birthday.toISOString()).toEqual('2000-01-01T00:00:00.000Z');
        });

        it('should not map properties that are not an object\'s own properties', () => {
            var objA = new ClassA();
            objA.propA = 'propA';

            var fromKey = '{A317A36A-AD92-4346-A015-AE06FC862DB4}';
            var toKey = '{03B05E43-3028-44FD-909F-652E2DA5E607}';

            automapper
                .createMap(fromKey, toKey);

            // act
            var objB = automapper.map(fromKey, toKey, objA);

            // assert
            expect(objB.propA).toEqual(objA.propA);
        });

        it('should be able to use convertUsing to map an object with a custom type resolver function', () => {
            var objA = { propA: 'propA' };

            var fromKey = '{D1534A0F-6120-475E-B7E2-BF2489C58571}';
            var toKey = '{1896FF99-1A28-4FE6-800B-072D5616B02D}';

            automapper
                .createMap(fromKey, toKey)
                .convertUsing(function(resolutionContext: IResolutionContext): any {
                    return { propA: resolutionContext.sourceValue.propA + ' (custom mapped with resolution context)' };
                });

            // act
            var objB = automapper.map(fromKey, toKey, objA);

            // assert
            expect(objB.propA).toEqual(objA.propA + ' (custom mapped with resolution context)');
        });

        it('should be able to use convertUsing to map an object with a custom type resolver class', () => {
            // arrange
            var objA = { propA: 'propA' };

            var fromKey = '{6E7F5757-1E55-4B55-BB86-44FF5B33DE2F}';
            var toKey = '{8521AE41-C3AF-4FCD-B7C7-A915C037D69E}';

            automapper
                .createMap(fromKey, toKey)
                .convertUsing(CustomTypeConverterDefinition);

            // act
            var objB = automapper.map(fromKey, toKey, objA);

            // assert
            expect(objB.propA).toEqual(objA.propA + ' (convertUsing with a class definition)');
        });

        it('should be able to use convertUsing to map an object with a custom type resolver instance', () => {
            // arrange
            // NOTE BL The CustomTypeConverter class definition is defined at the bottom, since TypeScript
            //         does not allow classes to be defined inline.

            var objA = { propA: 'propA' };

            var fromKey = '{BDF3758C-B38E-4343-95B6-AE0F80C8B9C4}';
            var toKey = '{13DD7AE1-4177-4A80-933B-B60A55859E50}';

            automapper
                .createMap(fromKey, toKey)
                .convertUsing(new CustomTypeConverterInstance());

            // act
            var objB = automapper.map(fromKey, toKey, objA);

            // assert
            expect(objB.propA).toEqual(objA.propA + ' (convertUsing with a class instance)');
        });

        it('should fail when directly using the type converter base class', () => {
            // arrange
            var caught = false;
            var objA = { propA: 'propA' };

            var fromKey = 'should fail when directly using ';
            var toKey = 'the type converter base class';

            automapper
                .createMap(fromKey, toKey)
                .convertUsing(TypeConverter);

            try {
                // act
                var objB = automapper.map(fromKey, toKey, objA);
            } catch (e) {
                // assert
                caught = true;
                expect(e.message).toEqual('The TypeConverter.convert method is abstract. Use a TypeConverter extension class instead.');
            }

            if (!caught) {
                // assert
                expect().fail('Using the type converter base class directly should fail.');
            }
        });

        it('should fail when convertUsing is used with a function not having exactly one (resolutionContext) parameter.', () => {
            // arrange
            var caught = false;

            var fromKey = '{1EF9AC11-BAA1-48DB-9C96-9DFC40E33BCA}';
            var toKey = '{C4DA81D3-9072-4140-BFA7-431C35C01F54}';

            try {
                // act
                automapper
                    .createMap(fromKey, toKey)
                    .convertUsing(() => {
                        return {};
                    });

                //var objB = automapper.map(fromKey, toKey, objA);
            } catch (e) {
                // assert
                caught = true;
                expect(e.message).toEqual('The value provided for typeConverterClassOrFunction is invalid. ' +
                                          'Error: The function provided does not provide exactly one (resolutionContext) parameter.');
            }

            if (!caught) {
                // assert
                expect().fail('Using anything else than a function with forSourceMember should result in an error.');
            }
        });

        it('should be able to use convertToType to map a source object to a destination object which is an instance of a given class', () => {
            //arrange
            var objA = { ApiProperty: 'From A' };


            var fromKey = '{7AC4134B-ECC1-464B-B144-5C9D8F5B5A7E}';
            var toKey = '{2BDE907C-1CE6-4CC5-A601-9A94CA6C4737}';

            automapper
                .createMap(fromKey, toKey)
                .forMember('property', (opts: IMemberConfigurationOptions) => { opts.mapFrom('ApiProperty'); })
                .convertToType(DemoToBusinessType);

            // act
            var objB = automapper.map(fromKey, toKey, objA);

            // assert
            expect(objB instanceof DemoToBusinessType).toBeTruthy();
            expect(objB.property).toEqual(objA.ApiProperty);
        });

        it('should be able to use a condition to map or ignore a property', () => {
            // arrange
            var objA = { prop: 1, prop2: 2 };

            var fromKey = '{76D23B33-888A-4DF7-BEBE-E5B99E944272}';
            var toKey = '{18192191-85FE-4729-A980-5954FCFE3954}';

            automapper
                .createMap(fromKey, toKey)
                .forMember('prop', (opts: IMemberConfigurationOptions) => { opts.condition((sourceObject: any) => sourceObject.prop === 0); })
                .forMember('prop2', (opts: IMemberConfigurationOptions) => { opts.condition((sourceObject: any) => sourceObject.prop2 === 2); });

            // act
            var objB = automapper.map(fromKey, toKey, objA);

            // assert
            expect(objB.hasOwnProperty('prop')).not.toBeTruthy();
            expect(objB.hasOwnProperty('prop2')).toBeTruthy();
        });

        it('should be able to ignore all unmapped members using the ignoreAllNonExisting function', () => {
            // arrange
            var objA = {
                propA: 'Prop A',
                propB: 'Prop B',
                propC: 'Prop C',
                propD: 'Prop D'
            };

            var fromKey = '{AD88481E-597B-4C1C-9A7B-3D70DB8BCB0F}';
            var toKey = '{2A6614C4-784E-47D3-BBF4-6205834EA8D1}';

            automapper
                .createMap(fromKey, toKey)
                .forMember('propA', (opts: IMemberConfigurationOptions) => opts.mapFrom('propA'))
                .ignoreAllNonExisting();

            // act
            var objB = automapper.map(fromKey, toKey, objA);

            // assert
            expect(objB).toEqualData({ propA: 'Prop A' });
        });

        it('should be able to create a map and use it using class types', () => {
           // arrange
           var objA = new ClassA();
           objA.propA = 'Value';

           // act 
           automapper.createMap(ClassA, ClassB);
           var objB = automapper.map(ClassA, ClassB, objA);

            // assert
            expect(objB instanceof ClassB).toBeTruthy();
            expect(objB).toEqualData({ propA: 'Value' });
        });

        it('should throw an error when creating a map using class types and specifying a conflicting destination type', () => {
            // arrange
            var caught = false;

            // act
            try {
                automapper
                    .createMap(ClassA, ClassB)
                    .convertToType(ClassC);
            } catch (e) {
                caught = true;
                // assert
                expect(e.message).toEqual('Destination type class can only be set once.');
            }

            if (!caught) {
                // assert
                expect(null).fail('AutoMapper should throw an error when creating a map using class types and specifying a conflicting destination type.');
            }
        });

        it('should be able to use forMember to map a nested source property to a destination property', () => {
            //arrange
            var objA = { prop1: { propProp1: 'From A' }, prop2: 'From A too' };

            var fromKey = '{7AC4134B-ECC1-464B-B144-5B9D8F5B568E}';
            var toKey = '{2BDE907C-1CE6-4CC5-A601-9A94CC665837}';

            automapper
                .createMap(fromKey, toKey)
                .forMember('propFromNestedSource', (opts: IMemberConfigurationOptions) => { opts.mapFrom('prop1.propProp1'); });

            // act
            var objB = automapper.map(fromKey, toKey, objA);

            // assert
            expect(objB).toEqualData({ prop2: objA.prop2, propFromNestedSource: objA.prop1.propProp1 });
        });

        it('should be able to stack forMember calls when mapping a nested source property to a destination property', () => {
            //arrange
            var objA = { prop1: { propProp1: 'From A' }, prop2: 'From A too' };
            var addition = ' - sure works!';

            var fromKey = '{7AC4134B-ECC1-464B-B144-5B99CF5B558E}';
            var toKey = '{2BDE907C-1CE6-4CC5-56A1-9A94CC6658C7}';

            automapper
                .createMap(fromKey, toKey)
                .forMember('propFromNestedSource', (opts: IMemberConfigurationOptions) => { opts.mapFrom('prop1.propProp1'); })
                .forMember('propFromNestedSource', (opts: IMemberConfigurationOptions) => { return opts.intermediatePropertyValue + addition; });

            // act
            var objB = automapper.map(fromKey, toKey, objA);

            // assert
            expect(objB).toEqualData({ prop2: objA.prop2, propFromNestedSource: objA.prop1.propProp1 + addition });
        });

        it('should be able to stack forMember calls when mapping a nested source property to a destination property in any order', () => {
            //arrange
            var objA = { prop1: { propProp1: 'From A' }, prop2: 'From A too' };
            var addition = ' - sure works!';

            var fromKey = '{7AC4134B-ECD1-46EB-B14A-5B9D8F5B5F8E}';
            var toKey = '{BBD6907C-ACE6-4FC8-A60D-1A943C66D83F}';

            automapper
                .createMap(fromKey, toKey)
                .forMember('propFromNestedSource', (opts: IMemberConfigurationOptions) => { return opts.intermediatePropertyValue + addition; })
                .forMember('propFromNestedSource', (opts: IMemberConfigurationOptions) => { opts.mapFrom('prop1.propProp1'); });

            // act
            var objB = automapper.map(fromKey, toKey, objA);

            // assert
            expect(objB).toEqualData({ prop2: objA.prop2, propFromNestedSource: objA.prop1.propProp1 + addition });
        });

        it('should be able to stack forMember mapFrom calls when mapping a nested source property to a destination property', () => {
            //arrange
            var objA = { prop1: { propProp1: 'From A', propProp2: { propProp2Prop: 'From A' } }, prop2: 'From A too' };
            var addition = ' - sure works!';

            var fromKey = '{7AC4134B-ECD1-46EB-B14A-5B9D8F5B5F8E}';
            var toKey = '{BBD6907C-ACE6-4FC8-A60D-1A943C66D83F}';

            automapper
                .createMap(fromKey, toKey)
                .forMember('propFromNestedSource', (opts: IMemberConfigurationOptions) => { return opts.intermediatePropertyValue + addition; })
                .forMember('propFromNestedSource', (opts: IMemberConfigurationOptions) => { opts.mapFrom('prop1.propProp2.propProp2Prop'); })
                .forMember('propFromNestedSource', (opts: IMemberConfigurationOptions) => { opts.mapFrom('prop1.propProp1'); });

            // act
            var objB = automapper.map(fromKey, toKey, objA);

            // assert
            expect(objB).toEqualData({ prop2: objA.prop2, propFromNestedSource: objA.prop1.propProp1 + addition });
        });

        it('should be able to use forMember to map to a nested destination', () => {
            //arrange
            var objA = { prop1: { propProp1: 'From A', propProp2: { propProp2Prop: 'From A' } }, prop2: 'From A too' };
            var addition = ' - sure works!';

            var fromKey = '{7AC4134B-ECD1-46EB-B14A-5B9D8F5B5F8E}';
            var toKey = '{BBD6907C-ACE6-4FC8-A60D-1A943C66D83F}';

            automapper
                .createMap(fromKey, toKey)
                .forMember('nested.property', (opts: IMemberConfigurationOptions) => { return opts.intermediatePropertyValue + addition; })
                .forMember('nested.property', (opts: IMemberConfigurationOptions) => { opts.mapFrom('prop1.propProp2.propProp2Prop'); })
                .forMember('nested.property', (opts: IMemberConfigurationOptions) => { opts.mapFrom('prop1.propProp1'); });

            // act
            var objB = automapper.map(fromKey, toKey, objA);

            // assert
            expect(objB).toEqualData({ prop2: objA.prop2, nested: { property: objA.prop1.propProp1 + addition }});
        });

        it('should be able to use mapFrom to switch properties and ignore a property as well', () => {
            // arrange
            var objA = { prop1: 'From A', prop2: 'From A too', prop3: 'Also from A (really)' };

            var fromKey = 'should be able to use mapFrom to switch ';
            var toKey = 'properties and ignore a property as well';

            // act
            automapper
                .createMap(fromKey, toKey)
                .forMember('prop1', (opts: IMemberConfigurationOptions) => { opts.mapFrom('prop2'); })
                .forMember('prop2', (opts: IMemberConfigurationOptions) => { opts.mapFrom('prop1'); })
                .forSourceMember('prop3', (opts: ISourceMemberConfigurationOptions) => { opts.ignore(); });

            var objB = automapper.map(fromKey, toKey, objA);

            // assert
            expect(objB).toEqualData({ prop1: objA.prop2, prop2: objA.prop1 });
        });

        it('should be able to create a new property using a constant value', () => {
            // arrange
            var objA = { };

            var fromKey = 'should be able to create a new property ';
            var toKey = 'using a constant value';

            // act
            automapper
                .createMap(fromKey, toKey)
                .forMember('prop4', (opts: IMemberConfigurationOptions) => { return 12; });

            var objB = automapper.map(fromKey, toKey, objA);

            // assert
            expect(objB).toEqualData({ prop4: 12 });
        });

        it('should just return source object when no properties are created using null source object', () => {
            // arrange
            var objA: any = null;

            var fromKey = 'should just return source object when no ';
            var toKey = 'properties created using null source object';

            // act
            automapper
                .createMap(fromKey, toKey);

            var objB = automapper.map(fromKey, toKey, objA);

            // assert
            expect(objB).toBeNull();
        });

        it('should be able to create a new property using a constant value (null source object)', () => {
            // arrange
            var objA: any = null;

            var fromKey = 'should be able to create a new property ';
            var toKey = 'using a constant value (null source object)';

            // act
            automapper
                .createMap(fromKey, toKey)
                .forMember('prop4', (opts: IMemberConfigurationOptions) => { return 12; });

            var objB = automapper.map(fromKey, toKey, objA);

            // assert
            expect(objB).toEqualData({ prop4: 12 });
        });
    });

    it('should map a source object with empty nested objects', () => {
        // arrange
        var src: any = {
            homeAddress: null /*{
                address1: '200 Main St', 
                address2: '200 Main St', 
                city: 'Los Angeles',
                state: 'CA',
                zip: '90000'
            }*/,
            businessAddress: {
                address1: '200 Main St', 
                // address2: '200 Main St', 
                city: 'Los Angeles',
                state: 'CA',
                zip: '90000'
            }
        };

        var fromKey = '{60E9DC56-D6E1-48FF-9BAC-0805FCAF91B7}';
        var toKey = '{AC6D5A97-9AEF-42C7-BD60-A5F3D17E541A}';

        automapper
            .createMap(fromKey, toKey)
            // .forMember('homeAddress.address1', (opts: IMemberConfigurationOptions) => { opts.mapFrom('homeAddress.address1'); })
            .forMember('homeAddress.address2', (opts: IMemberConfigurationOptions) => { opts.mapFrom('homeAddress.address2'); })
            // .forMember('homeAddress.city', (opts: IMemberConfigurationOptions) => { opts.mapFrom('homeAddress.city'); })
            // .forMember('homeAddress.state', (opts: IMemberConfigurationOptions) => { opts.mapFrom('homeAddress.state'); })
            // .forMember('homeAddress.zip', (opts: IMemberConfigurationOptions) => { opts.mapFrom('homeAddress.zip'); })

            .forMember('businessAddress.address1', (opts: IMemberConfigurationOptions) => { opts.mapFrom('businessAddress.address1'); })
            .forMember('businessAddress.address2', (opts: IMemberConfigurationOptions) => <any>null)
            .forMember('businessAddress.city', (opts: IMemberConfigurationOptions) => { opts.mapFrom('businessAddress.city'); })
            .forMember('businessAddress.state', (opts: IMemberConfigurationOptions) => { opts.mapFrom('businessAddress.state'); })
            .forMember('businessAddress.zip', (opts: IMemberConfigurationOptions) => { opts.mapFrom('businessAddress.zip'); })
            ;

        // act
        var dst = automapper.map(fromKey, toKey, src);

        // assert
        expect(dst).not.toBeNull();

        expect(dst.homeAddress).toBeNull();
        
        expect(dst.businessAddress.address1).toBe(src.businessAddress.address1);
        expect(dst.businessAddress.address2).toBeUndefined();
        expect(dst.businessAddress.city).toBe(src.businessAddress.city);
        expect(dst.businessAddress.state).toBe(src.businessAddress.state);
        expect(dst.businessAddress.zip).toBe(src.businessAddress.zip);
    });

    describe('AutoMapper - Currying support', () => {
        beforeEach(() => {
            jasmine.addMatchers(ExtendJasmine.addCustomMatchers());
        });

        it('should be able to use currying when calling createMap', () => {
            // arrange
            var fromKey = '{808D9D7F-AA89-4D07-917E-A528F055EE64}';
            var toKey1 = '{B364C0A0-9E24-4424-A569-A4C14101947C}';
            var toKey2 = '{1055CA5A-4FC4-44CB-B4D8-B004F43D8840}';

            var source = { prop: 'Value' };

            // act
            var mapFromKeyCurry = automapper.createMap(fromKey);

            mapFromKeyCurry(toKey1)
                .forSourceMember('prop', (opts: ISourceMemberConfigurationOptions) => { opts.ignore(); });

            mapFromKeyCurry(toKey2);

            var result1 = automapper.map(fromKey, toKey1, source);
            var result2 = automapper.map(fromKey, toKey2, source);

            // assert
            expect(typeof mapFromKeyCurry === 'function').toBeTruthy();
            expect(result1.prop).toBeUndefined();
            expect(result2.prop).toEqual(source.prop);
        });

        it('should be able to use currying (one parameter) when calling map', () => {
            // arrange
            var fromKey = 'should be able to use currying (one parameter)';
            var toKey1 = 'when calling map (1)';
            var toKey2 = 'when calling map (2)';

            var source = { prop: 'Value' };

            // act
            var createMapFromKeyCurry = automapper.createMap(fromKey);

            createMapFromKeyCurry(toKey1)
                .forSourceMember('prop', (opts: ISourceMemberConfigurationOptions) => { opts.ignore(); });

            createMapFromKeyCurry(toKey2);

            var result1MapCurry = automapper.map(fromKey);
            var result2MapCurry = automapper.map(fromKey);

            var result1 = result1MapCurry(toKey1, source);
            var result2 = result2MapCurry(toKey2, source);

            // assert
            expect(typeof createMapFromKeyCurry === 'function').toBeTruthy();
            expect(typeof result1MapCurry === 'function').toBeTruthy();
            expect(typeof result2MapCurry === 'function').toBeTruthy();

            expect(result1.prop).toBeUndefined();
            expect(result2.prop).toEqual(source.prop);
        });

        it('should be able to use currying when calling map', () => {
            // arrange
            var fromKey = '{FC18523B-5A7C-4193-B938-B6AA2EABB37A}';
            var toKey1 = '{609202F4-15F7-4512-9178-CFAF073800E1}';
            var toKey2 = '{85096AE2-92FB-43D7-8FC3-EC14DDC1DFDD}';

            var source = { prop: 'Value' };

            // act
            var createMapFromKeyCurry = automapper.createMap(fromKey);

            createMapFromKeyCurry(toKey1)
                .forSourceMember('prop', (opts: ISourceMemberConfigurationOptions) => { opts.ignore(); });

            createMapFromKeyCurry(toKey2);

            var result1MapCurry = automapper.map(fromKey, toKey1);
            var result2MapCurry = automapper.map(fromKey, toKey2);

            var result1 = result1MapCurry(source);
            var result2 = result2MapCurry(source);

            // assert
            expect(typeof createMapFromKeyCurry === 'function').toBeTruthy();
            expect(typeof result1MapCurry === 'function').toBeTruthy();
            expect(typeof result2MapCurry === 'function').toBeTruthy();

            expect(result1.prop).toBeUndefined();
            expect(result2.prop).toEqual(source.prop);
        });

        it('should be able to use currying when calling mapAsync', (done: () => void) => {
            // arrange
            var fromKey = '{1CA8523C-5A7C-4193-B938-B6AA2EABB37A}';
            var toKey1 = '{409212FD-15E7-4512-9178-CFAF073800EG}';
            var toKey2 = '{85096AE2-92FA-43N7-8FA3-EC14DDC1DFDE}';

            var source = { prop: 'Value' };

            // act
            var createMapFromKeyCurry = automapper.createMap(fromKey);

            createMapFromKeyCurry(toKey1)
                .forSourceMember('prop', (opts: ISourceMemberConfigurationOptions, cb: IMemberCallback) => { cb('Constant Value 1'); });

            createMapFromKeyCurry(toKey2)
                .forMember('prop', (opts: IMemberConfigurationOptions, cb: IMemberCallback) => { cb('Constant Value 2'); });

            var result1MapCurry = automapper.mapAsync(fromKey, toKey1);
            var result2MapCurry = automapper.mapAsync(fromKey, toKey2);

            // assert
            expect(typeof createMapFromKeyCurry === 'function').toBeTruthy();
            expect(typeof result1MapCurry === 'function').toBeTruthy();
            expect(typeof result2MapCurry === 'function').toBeTruthy();

            var resCount = 0;
            var result1 = result1MapCurry(source, (result: any) => {
                // assert
                expect(result.prop).toEqual('Constant Value 1');
                if (++resCount === 2) {
                    done();
                }
            });

            var result2 = result2MapCurry(source, (result: any) => {
                // assert
                expect(result.prop).toEqual('Constant Value 2');
                if (++resCount === 2) {
                    done();
                }
            });
        });

        it('should be able to use currying when calling mapAsync with one parameter', (done: () => void) => {
            // arrange
            var fromKey = '{1CA8523C-5AVC-4193-BS38-B6AA2EABB37A}';
            var toKey = '{409212FD-1527-4512-9178-CFAG073800EG}';

            var source = { prop: 'Value' };

            // act
            automapper.createMap(fromKey, toKey)
                .forSourceMember('prop', (opts: ISourceMemberConfigurationOptions, cb: IMemberCallback) => { cb('Constant Value'); });

            var mapAsyncCurry = automapper.mapAsync(fromKey);

            // assert
            expect(typeof mapAsyncCurry === 'function').toBeTruthy();

            var result = mapAsyncCurry(toKey, source, (result: any) => {
                // assert
                expect(result.prop).toEqual('Constant Value');
                done();
            });
        });

        it('should be able to use currying when calling mapAsync with two parameters', (done: () => void) => {
            // arrange
            var fromKey = '{1CA852SC-5AVC-4193-BS38-B6AA2KABB3LA}';
            var toKey = '{409212FD-1Q27-45G2-9178-CFAG073800EG}';

            var source = { prop: 'Value' };

            // act
            automapper.createMap(fromKey, toKey)
                .forMember('prop', (opts: IMemberConfigurationOptions, cb: IMemberCallback) => { cb('Constant Value'); });

            var mapAsyncCurry = automapper.mapAsync(fromKey, toKey);

            // assert
            expect(typeof mapAsyncCurry === 'function').toBeTruthy();

            var result = mapAsyncCurry(source, (result: any) => {
                // assert
                expect(result.prop).toEqual('Constant Value');
                done();
            });
        });

        it('should be able to use currying when calling mapAsync with three parameters', (done: () => void) => {
            // NOTE BL 20151214 I wonder why anyone would like calling this one? Maybe this one will be removed in
            //                  the future. Please get in touch if you need this one to stay in place...

            // arrange
            var fromKey = '{1CA852SC-5AVC-ZZ93-BS38-B6AA2KABB3LA}';
            var toKey = '{409212FD-1Q27-45G2-91BB-CFAG0738WCEG}';

            var source = { prop: 'Value' };

            // act
            automapper.createMap(fromKey, toKey)
                .forMember('prop', (opts: IMemberConfigurationOptions, cb: IMemberCallback) => { cb('Constant Value'); });

            var mapAsyncCurry = automapper.mapAsync(fromKey, toKey, source);

            // assert
            expect(typeof mapAsyncCurry === 'function').toBeTruthy();

            var result = mapAsyncCurry((result: any) => {
                // assert
                expect(result.prop).toEqual('Constant Value');
                done();
            });
        });

        it('should fail when calling mapAsync without parameters', () => {
            // arrange

            // act
            try {
                var mapAsyncCurry = (<any>automapper).mapAsync();
            } catch (e) {
                // assert
                expect(e.message).toEqual('The mapAsync function expects between 1 and 4 parameters, you provided 0.');
                return;
            }

            // assert
            expect(null).fail('Expected error was not raised.');
        });

        it('should fail when calling mapAsync with > 4 parameters', () => {
            // arrange

            // act
            try {
                var mapAsyncCurry = (<any>automapper).mapAsync(undefined, undefined, undefined, undefined, undefined);
            } catch (e) {
                // assert
                expect(e.message).toEqual('The mapAsync function expects between 1 and 4 parameters, you provided 5.');
                return;
            }

            // assert
            expect(null).fail('Expected error was not raised.');
        });


        it('should fail when specifying < 2 parameters to the asynchronous map function', () => {
            // arrange

            // act
            try {
                (<any>new AsyncAutoMapper()).map(undefined);
            } catch (e) {
                // assert
                expect(e.message).toEqual('The AsyncAutoMapper.map function expects between 2 and 5 parameters, you provided 1.');
                return;
            }

            // assert
            expect(null).fail('Expected error was not raised.');
        });

        it('should fail when specifying > 5 parameters to the asynchronous map function', () => {
            // arrange

            // act
            try {
                (<any>new AsyncAutoMapper()).map(undefined, undefined, undefined, undefined, undefined, undefined);
            } catch (e) {
                // assert
                expect(e.message).toEqual('The AsyncAutoMapper.map function expects between 2 and 5 parameters, you provided 6.');
                return;
            }

            // assert
            expect(null).fail('Expected error was not raised.');
        });
    });

    describe('AutoMapper.initialize', () => {
        beforeEach(() => {
            jasmine.addMatchers(ExtendJasmine.addCustomMatchers());
        });

        it('should use created mapping profile', () => {
            // arrange
            var fromKey = '{5700E351-8D88-A327-A216-3CC94A308EDE}';
            var toKey = '{BB33A261-3CA9-A8FC-85E6-2C269F73728C}';

            automapper.initialize((config: IConfiguration) => {
                config.createMap(fromKey, toKey);
            });

            // act
            automapper.map(fromKey, toKey, {});

            // assert
        });

        it('should be able to use a naming convention to convert Pascal case to camel case', () => {
            automapper.initialize((config: IConfiguration) => {
                config.addProfile(new PascalCaseToCamelCaseMappingProfile());
            });

            const sourceKey = 'PascalCase';
            const destinationKey = 'CamelCase';

            const sourceObject = { FullName: 'John Doe' };

            automapper
                .createMap(sourceKey, destinationKey)
                .withProfile('PascalCaseToCamelCase');

            var result = automapper.map(sourceKey, destinationKey, sourceObject);

            expect(result).toEqualData({ fullName: 'John Doe' });
        });

        it('should be able to use a naming convention to convert camelCase to PascalCase', () => {
            automapper.initialize((config: IConfiguration) => {
                config.addProfile(new CamelCaseToPascalCaseMappingProfile());
            });

            const sourceKey = 'CamelCase2';
            const destinationKey = 'PascalCase2';

            const sourceObject = { fullName: 'John Doe' };

            automapper
                .createMap(sourceKey, destinationKey)
                .withProfile('CamelCaseToPascalCase');

            var result = automapper.map(sourceKey, destinationKey, sourceObject);

            expect(result).toEqualData({ FullName: 'John Doe' });
        });

        it('should be able to use forMember besides using a profile', () => {
            automapper.initialize((config: IConfiguration) => {
                config.addProfile(new CamelCaseToPascalCaseMappingProfile());
            });

            const sourceKey = 'CamelCase';
            const destinationKey = 'PascalCase';

            const sourceObject = { fullName: 'John Doe', age: 20 };

            automapper
                .createMap(sourceKey, destinationKey)
                .forMember('theAge', (opts: IMemberConfigurationOptions) => opts.mapFrom('age'))
                .withProfile('CamelCaseToPascalCase');

            var result = automapper.map(sourceKey, destinationKey, sourceObject);

            expect(result).toEqualData({ FullName: 'John Doe', theAge: sourceObject.age });
        });

        it('should use profile when only profile properties are specified', () => {
            automapper.initialize((config: IConfiguration) => {
                config.addProfile(new ValidatedAgeMappingProfile2());
            });

            const sourceKey = '{918D9D7F-AA89-4D07-917E-A528F07EEF42}';
            const destinationKey = '{908D9D6F-BA89-4D17-915E-A528E988EE64}';

            const sourceObject = { fullName: 'John Doe', proclaimedAge: 21, ageOnId: 15 };

            automapper
                .createMap(sourceKey, destinationKey)
                .withProfile('ValidatedAgeMappingProfile2');

            var result = automapper.map(sourceKey, destinationKey, sourceObject);

            expect(result).toEqualData({ fullName: 'John Doe', age: sourceObject.ageOnId });
            expect(result instanceof Person).toBeTruthy();
            expect(result instanceof BeerBuyingYoungster).not.toBeTruthy();
        });

        it('should fail when using a non-existimg profile', () => {
            // arrange
            var caught = false;
            var profileName = 'Non-existing profile';
            const sourceKey = 'should fail when using ';
            const destinationKey = 'a non-existimg profile';
            const sourceObject = { };

            // act
            try {
                automapper
                    .createMap(sourceKey, destinationKey)
                    .withProfile(profileName);
                var result = automapper.map(sourceKey, destinationKey, sourceObject);
            } catch (e) {
                caught = true;

                // assert
                expect(e.message).toEqual('Could not find profile with profile name \'' + profileName + '\'.');
            }

            if (!caught) {
                // assert
                expect().fail('Using a non-existing mapping profile should result in an error.');
            }
        });

        it('should merge forMember calls when specifying the same destination property normally and using profile', () => {
            automapper.initialize((config: IConfiguration) => {
                config.addProfile(new ValidatedAgeMappingProfile());
            });

            const sourceKey = '{808D9D7F-AA89-4D07-917E-A528F078E642}';
            const destinationKey = '{808D9D6F-BA89-4D17-915E-A528E178EE64}';

            const sourceObject = { fullName: 'John Doe', proclaimedAge: 21, ageOnId: 15 };

            automapper
                .createMap(sourceKey, destinationKey)
                .forMember('ageOnId', (opts: IMemberConfigurationOptions) => opts.ignore())
                .forMember('age', (opts: IMemberConfigurationOptions) => opts.mapFrom('proclaimedAge'))
                .convertToType(BeerBuyingYoungster)
                .withProfile('ValidatedAgeMappingProfile');

            var result = automapper.map(sourceKey, destinationKey, sourceObject);

            expect(result).toEqualData({ fullName: 'John Doe', age: sourceObject.ageOnId });
            expect(result instanceof Person).toBeTruthy();
            expect(result instanceof BeerBuyingYoungster).not.toBeTruthy();
        });

        it('should be able to use currying when calling initialize(cfg => cfg.createMap)', () => {
            // arrange
            var fromKey = '{808D9D7F-AA89-4D07-917E-A528F078EE64}';
            var toKey1 = '{B364C0A0-9E24-4424-A569-A4C14102147C}';
            var toKey2 = '{1055CA5A-4FC4-44CA-B4D8-B004F43D4440}';

            var source = { prop: 'Value' };

            // act
            var mapFromKeyCurry: (destinationKey: string) => ICreateMapFluentFunctions;

            automapper.initialize((config: IConfiguration) => {
                mapFromKeyCurry = config.createMap(fromKey);

                mapFromKeyCurry(toKey1)
                    .forSourceMember('prop', (opts: ISourceMemberConfigurationOptions) => { opts.ignore(); });

                mapFromKeyCurry(toKey2);
            });

            var result1 = automapper.map(fromKey, toKey1, source);
            var result2 = automapper.map(fromKey, toKey2, source);

            // assert
            expect(typeof mapFromKeyCurry === 'function').toBeTruthy();
            expect(result1.prop).toBeUndefined();
            expect(result2.prop).toEqual(source.prop);
        });

    });

    describe('AutoMapper', () => {
        beforeEach(() => {
            jasmine.addMatchers(ExtendJasmine.addCustomMatchers());
        });

        it('should auto map matching properties', () => {
            // arrange
            var objA = { prop1: 'From A', prop2: 'From A too' };

            var fromKey = '{7F5AF9AC-2E9E-4676-8BE1-3E72866B11E8}';
            var toKey = '{8089EBDC-3BBB-4988-95F2-683CC1AD23A3}';

            automapper.createMap(fromKey, toKey);

            // act
            var objB = automapper.map(fromKey, toKey, objA);

            // assert
            expect(objB).toEqualData(objA);
        });

        it('should map an array', () => {
            // arrange
            var arrA = [{ prop1: 'From A', prop2: 'From A too' }];

            var fromKey = '{60D9DB56-D6E1-48FF-9BAC-0805FCAF91B7}';
            var toKey = '{AC6D5B97-9AE3-4267-BD60-A5FED17E541A}';

            automapper.createMap(fromKey, toKey);

            // act
            var arrB = automapper.map(fromKey, toKey, arrA);

            // assert
            expect(arrB).toEqualData(arrA);
        });

        it('should map an array and handle empty items', () => {
            // arrange
            var arrA = [{ prop1: 'From A', prop2: 'From A too' }, undefined];

            var fromKey = '{60D9DB56-D6E1-48FF-9BAC-0805FCAF91B7}';
            var toKey = '{AC6D5B97-9AE3-4267-BD60-A5FED17E541A}';

            automapper.createMap(fromKey, toKey);

            // act
            var arrB = automapper.map(fromKey, toKey, arrA);

            // assert
            expect(arrB).toEqualData(arrA);
        });
    });

    /** AutoMapper helper functions */
    class AutoMapperHelper {
        public static getClassName(classType: new() => any): string {
            if (classType && (<any>classType).name) {
                return (<any>classType).name;
            }
            // source: http://stackoverflow.com/a/13914278/702357
            if (classType && classType.constructor) {
                let className = classType.toString();
                if (className) {
                    // classType.toString() is "function classType (...) { ... }"
                    let matchParts = className.match(/function\s*(\w+)/);
                    if (matchParts && matchParts.length === 2) {
                        return matchParts[1];
                    }
                }

                // for browsers which have name property in the constructor
                // of the object, such as chrome
                if ((<any>classType.constructor).name) {
                    return (<any>classType.constructor).name;
                }

                if (classType.constructor.toString()) {
                    var str = classType.constructor.toString();

                    if (str.charAt(0) === '[') {
                        // executed if the return of object.constructor.toString() is "[object objectClass]"
                        var arr = str.match(/\[\w+\s*(\w+)\]/);
                    } else {
                        // executed if the return of object.constructor.toString() is "function objectClass () {}"
                        // (IE and Firefox)
                        var arr = str.match(/function\s*(\w+)/);
                    }

                    if (arr && arr.length === 2) {
                        return arr[1];
                    }
                }
            }

            throw new Error(`Unable to extract class name from type '${classType}'`);
        }
    }

    class AssertConfigPropertiesProp {
        prop: string = undefined; // TODO Wiki: properties are only available when initialized: http://stackoverflow.com/a/20534039/702357
    }

    class AssertConfigPropertiesProp2 {
        prop2: string = undefined;
    }

    class AssertConfigPropertiesPropProp2 {
        prop: string = undefined;
        prop2: string = undefined;
    }

    class ClassA {
        public propA: string;
    }

    class ClassB {
        public propA: string;
    }

    class ClassC {
        public propA: string;
    }

    class DemoToBusinessType {
    }

    class CustomTypeConverterInstance extends TypeConverter {
        public convert(resolutionContext: IResolutionContext): any {
            return { propA: resolutionContext.sourceValue.propA + ' (convertUsing with a class instance)' };
        }
    }

    class CustomTypeConverterDefinition extends TypeConverter {
        public convert(resolutionContext: IResolutionContext): any {
            return { propA: resolutionContext.sourceValue.propA + ' (convertUsing with a class definition)' };
        }
    }

    class PascalCaseToCamelCaseMappingProfile extends Profile {
        public sourceMemberNamingConvention: INamingConvention;
        public destinationMemberNamingConvention: INamingConvention;

        public profileName = 'PascalCaseToCamelCase';

        public configure() {
            this.sourceMemberNamingConvention = new PascalCaseNamingConvention();
            this.destinationMemberNamingConvention = new CamelCaseNamingConvention();

            super.createMap('a', 'b');
        }
    }

    class CamelCaseToPascalCaseMappingProfile extends Profile {
        public sourceMemberNamingConvention: INamingConvention;
        public destinationMemberNamingConvention: INamingConvention;

        public profileName = 'CamelCaseToPascalCase';

        public configure() {
            this.sourceMemberNamingConvention = new CamelCaseNamingConvention();
            this.destinationMemberNamingConvention = new PascalCaseNamingConvention();
        }
    }

    class ValidatedAgeMappingProfile extends Profile {
        public profileName = 'ValidatedAgeMappingProfile';

        public configure() {
            const sourceKey = '{808D9D7F-AA89-4D07-917E-A528F078E642}';
            const destinationKey = '{808D9D6F-BA89-4D17-915E-A528E178EE64}';

            this.createMap(sourceKey, destinationKey)
                .forMember('proclaimedAge', (opts: IMemberConfigurationOptions) => opts.ignore())
                .forMember('age', (opts: IMemberConfigurationOptions) => opts.mapFrom('ageOnId'))
                .convertToType(Person);
        }
    }

    class ValidatedAgeMappingProfile2 extends Profile {
        public profileName = 'ValidatedAgeMappingProfile2';

        public configure() {
            const sourceKey = '{918D9D7F-AA89-4D07-917E-A528F07EEF42}';
            const destinationKey = '{908D9D6F-BA89-4D17-915E-A528E988EE64}';

            this.createMap(sourceKey, destinationKey)
                .forMember('proclaimedAge', (opts: IMemberConfigurationOptions) => opts.ignore())
                .forMember('age', (opts: IMemberConfigurationOptions) => opts.mapFrom('ageOnId'))
                .convertToType(Person);
        }
    }

    class Person {
        fullName: string;
        age: number;
    }

    class BeerBuyingYoungster extends Person {
    }
    class ExtendJasmine {
        public static addCustomMatchers(): jasmine.CustomMatcherFactories {
            var customMatchers: jasmine.CustomMatcherFactories = {
                /** toEqualData compares to data objects using property matching */
                toEqualData: (util: jasmine.MatchersUtil, customEqualityTesters: Array<jasmine.CustomEqualityTester>): any => {
                    return {
                        compare: function (actual: any, expected: any): jasmine.CustomMatcherResult {
                            var pass = ExtendJasmine.equalsData(actual, expected);
                            return {
                                pass: pass,
                                message: pass
                                    ? 'Data sets do equal. Congratulations ;) !'
                                    : 'Data sets do not equal: expected "' + JSON.stringify(expected) + '", actual "' + JSON.stringify(actual) + '".'
                            };
                        }
                    };
                },
                "fail": (util: jasmine.MatchersUtil, customEqualityTesters: Array<jasmine.CustomEqualityTester>): any => {
                    return {
                        compare: function (actual: any, message: string): jasmine.CustomMatcherResult {
                            return {
                                pass: false,
                                message: message || 'Jasmine test failed. Please provide a fix.'
                            };
                        }
                    }
                }
            };
            return customMatchers;        
        }

        public static equalsData(actual: any, expected: any): boolean {
            var toClass = {}.toString;

            // check array.
            var actualType = toClass.call(actual);
            var expectedType = toClass.call(expected);

            if (actualType === '[object Array]') {
                // check both are arrays
                if (expectedType !== '[object Array]') {
                    return false;
                }

                // check both have same length
                if (expected.length !== actual.length) {
                    return false;
                }

                for (var i = 0; i < actual.length; i++) {
                    // check each item in the array
                    if (!ExtendJasmine.equalsData(actual[i], expected[i]))
                        return false;
                }
            }
            else if (actualType === '[object Object]') {
                // check both are objects
                if (expectedType !== '[object Object]') {
                    return false;
                }

                // check each property in the object
                for (var propertyName in expected) {
                    if (!expected.hasOwnProperty(propertyName)) {
                        continue;
                    }

                    if (!actual.hasOwnProperty(propertyName)) {
                        return false;
                    }

                    if (!ExtendJasmine.equalsData(actual[propertyName], expected[propertyName]))
                        return false;
                }
            } else {
                var actualIsUndefined = typeof actual === 'undefined';
                var expectedIsUndefined = typeof expected === 'undefined';
                if (actualIsUndefined !== expectedIsUndefined) {
                    return false;
                }

                return actual === expected;
            }

            return true;
        }
    }
}