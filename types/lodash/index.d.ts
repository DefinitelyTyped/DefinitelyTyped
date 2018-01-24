// Type definitions for Lo-Dash 4.14
// Project: http://lodash.com/
// Definitions by: Brian Zengel <https://github.com/bczengel>,
//                 Ilya Mochalov <https://github.com/chrootsu>,
//                 Stepan Mikhaylyuk <https://github.com/stepancar>,
//                 Eric L Anderson <https://github.com/ericanderson>,
//                 AJ Richardson <https://github.com/aj-r>,
//                 Junyoung Clare Jang <https://github.com/ailrun>,
//                 e-cloud <https://github.com/e-cloud>,
//                 Georgii Dolzhykov <https://github.com/thorn0>,
//                 Jack Moore <https://github.com/jtmthf>,
//                 Dominique Rau <https://github.com/DomiR>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

// common
/// <reference path="./common/common.d.ts" />

// array
/// <reference path="./array/chunk.d.ts" />
/// <reference path="./array/compact.d.ts" />
/// <reference path="./array/concat.d.ts" />
/// <reference path="./array/difference.d.ts" />
/// <reference path="./array/differenceBy.d.ts" />
/// <reference path="./array/differenceWith.d.ts" />
/// <reference path="./array/drop.d.ts" />
/// <reference path="./array/dropRight.d.ts" />
/// <reference path="./array/dropRightWhile.d.ts" />
/// <reference path="./array/dropWhile.d.ts" />
/// <reference path="./array/fill.d.ts" />
/// <reference path="./array/findIndex.d.ts" />
/// <reference path="./array/findLastIndex.d.ts" />
/// <reference path="./array/first.d.ts" />
/// <reference path="./array/flatten.d.ts" />
/// <reference path="./array/flattenDeep.d.ts" />
/// <reference path="./array/flattenDepth.d.ts" />
/// <reference path="./array/fromPairs.d.ts" />
/// <reference path="./array/head.d.ts" />
/// <reference path="./array/indexOf.d.ts" />
/// <reference path="./array/initial.d.ts" />
/// <reference path="./array/intersection.d.ts" />
/// <reference path="./array/intersectionBy.d.ts" />
/// <reference path="./array/intersectionWith.d.ts" />
/// <reference path="./array/join.d.ts" />
/// <reference path="./array/last.d.ts" />
/// <reference path="./array/lastIndexOf.d.ts" />
/// <reference path="./array/nth.d.ts" />
/// <reference path="./array/pull.d.ts" />
/// <reference path="./array/pullAll.d.ts" />
/// <reference path="./array/pullAllBy.d.ts" />
/// <reference path="./array/pullAllWith.d.ts" />
/// <reference path="./array/pullAt.d.ts" />
/// <reference path="./array/remove.d.ts" />
/// <reference path="./array/reverse.d.ts" />
/// <reference path="./array/slice.d.ts" />
/// <reference path="./array/sortedIndex.d.ts" />
/// <reference path="./array/sortedIndexBy.d.ts" />
/// <reference path="./array/sortedIndexOf.d.ts" />
/// <reference path="./array/sortedLastIndex.d.ts" />
/// <reference path="./array/sortedLastIndexBy.d.ts" />
/// <reference path="./array/sortedLastIndexOf.d.ts" />
/// <reference path="./array/sortedUniq.d.ts" />
/// <reference path="./array/sortedUniqBy.d.ts" />
/// <reference path="./array/tail.d.ts" />
/// <reference path="./array/take.d.ts" />
/// <reference path="./array/takeRight.d.ts" />
/// <reference path="./array/takeRightWhile.d.ts" />
/// <reference path="./array/takeWhile.d.ts" />
/// <reference path="./array/union.d.ts" />
/// <reference path="./array/unionBy.d.ts" />
/// <reference path="./array/unionWith.d.ts" />
/// <reference path="./array/uniq.d.ts" />
/// <reference path="./array/uniqBy.d.ts" />
/// <reference path="./array/uniqWith.d.ts" />
/// <reference path="./array/unzip.d.ts" />
/// <reference path="./array/unzipWith.d.ts" />
/// <reference path="./array/without.d.ts" />
/// <reference path="./array/xor.d.ts" />
/// <reference path="./array/xorBy.d.ts" />
/// <reference path="./array/xorWith.d.ts" />
/// <reference path="./array/zip.d.ts" />
/// <reference path="./array/zipObject.d.ts" />
/// <reference path="./array/zipObjectDeep.d.ts" />
/// <reference path="./array/zipWith.d.ts" />

// collection
/// <reference path="./collection/countBy.d.ts" />
/// <reference path="./collection/each.d.ts" />
/// <reference path="./collection/eachRight.d.ts" />
/// <reference path="./collection/every.d.ts" />
/// <reference path="./collection/filter.d.ts" />
/// <reference path="./collection/find.d.ts" />
/// <reference path="./collection/findLast.d.ts" />
/// <reference path="./collection/flatMap.d.ts" />
/// <reference path="./collection/flatMapDeep.d.ts" />
/// <reference path="./collection/flatMapDepth.d.ts" />
/// <reference path="./collection/forEach.d.ts" />
/// <reference path="./collection/forEachRight.d.ts" />
/// <reference path="./collection/groupBy.d.ts" />
/// <reference path="./collection/includes.d.ts" />
/// <reference path="./collection/invokeMap.d.ts" />
/// <reference path="./collection/keyBy.d.ts" />
/// <reference path="./collection/map.d.ts" />
/// <reference path="./collection/orderBy.d.ts" />
/// <reference path="./collection/partition.d.ts" />
/// <reference path="./collection/reduce.d.ts" />
/// <reference path="./collection/reduceRight.d.ts" />
/// <reference path="./collection/reject.d.ts" />
/// <reference path="./collection/sample.d.ts" />
/// <reference path="./collection/sampleSize.d.ts" />
/// <reference path="./collection/shuffle.d.ts" />
/// <reference path="./collection/size.d.ts" />
/// <reference path="./collection/some.d.ts" />
/// <reference path="./collection/sortBy.d.ts" />

// date
/// <reference path="./date/now.d.ts" />

// function
/// <reference path="./function/after.d.ts" />
/// <reference path="./function/ary.d.ts" />
/// <reference path="./function/before.d.ts" />
/// <reference path="./function/bind.d.ts" />
/// <reference path="./function/bindKey.d.ts" />
/// <reference path="./function/curry.d.ts" />
/// <reference path="./function/curryRight.d.ts" />
/// <reference path="./function/debounce.d.ts" />
/// <reference path="./function/defer.d.ts" />
/// <reference path="./function/delay.d.ts" />
/// <reference path="./function/flip.d.ts" />
/// <reference path="./function/memoize.d.ts" />
/// <reference path="./function/negate.d.ts" />
/// <reference path="./function/once.d.ts" />
/// <reference path="./function/overArgs.d.ts" />
/// <reference path="./function/partial.d.ts" />
/// <reference path="./function/partialRight.d.ts" />
/// <reference path="./function/rearg.d.ts" />
/// <reference path="./function/rest.d.ts" />
/// <reference path="./function/spread.d.ts" />
/// <reference path="./function/throttle.d.ts" />
/// <reference path="./function/unary.d.ts" />
/// <reference path="./function/wrap.d.ts" />

// lang
/// <reference path="./lang/castArray.d.ts" />
/// <reference path="./lang/clone.d.ts" />
/// <reference path="./lang/cloneDeep.d.ts" />
/// <reference path="./lang/cloneDeepWith.d.ts" />
/// <reference path="./lang/cloneWith.d.ts" />
/// <reference path="./lang/conformsTo.d.ts" />
/// <reference path="./lang/eq.d.ts" />
/// <reference path="./lang/gt.d.ts" />
/// <reference path="./lang/gte.d.ts" />
/// <reference path="./lang/isArguments.d.ts" />
/// <reference path="./lang/isArray.d.ts" />
/// <reference path="./lang/isArrayBuffer.d.ts" />
/// <reference path="./lang/isArrayLike.d.ts" />
/// <reference path="./lang/isArrayLikeObject.d.ts" />
/// <reference path="./lang/isBoolean.d.ts" />
/// <reference path="./lang/isBuffer.d.ts" />
/// <reference path="./lang/isDate.d.ts" />
/// <reference path="./lang/isElement.d.ts" />
/// <reference path="./lang/isEmpty.d.ts" />
/// <reference path="./lang/isEqual.d.ts" />
/// <reference path="./lang/isEqualWith.d.ts" />
/// <reference path="./lang/isError.d.ts" />
/// <reference path="./lang/isFinite.d.ts" />
/// <reference path="./lang/isFunction.d.ts" />
/// <reference path="./lang/isInteger.d.ts" />
/// <reference path="./lang/isLength.d.ts" />
/// <reference path="./lang/isMap.d.ts" />
/// <reference path="./lang/isMatch.d.ts" />
/// <reference path="./lang/isMatchWith.d.ts" />
/// <reference path="./lang/isNaN.d.ts" />
/// <reference path="./lang/isNative.d.ts" />
/// <reference path="./lang/isNil.d.ts" />
/// <reference path="./lang/isNull.d.ts" />
/// <reference path="./lang/isNumber.d.ts" />
/// <reference path="./lang/isObject.d.ts" />
/// <reference path="./lang/isObjectLike.d.ts" />
/// <reference path="./lang/isPlainObject.d.ts" />
/// <reference path="./lang/isRegExp.d.ts" />
/// <reference path="./lang/isSafeInteger.d.ts" />
/// <reference path="./lang/isSet.d.ts" />
/// <reference path="./lang/isString.d.ts" />
/// <reference path="./lang/isSymbol.d.ts" />
/// <reference path="./lang/isTypedArray.d.ts" />
/// <reference path="./lang/isUndefined.d.ts" />
/// <reference path="./lang/isWeakMap.d.ts" />
/// <reference path="./lang/isWeakSet.d.ts" />
/// <reference path="./lang/lt.d.ts" />
/// <reference path="./lang/lte.d.ts" />
/// <reference path="./lang/toArray.d.ts" />
/// <reference path="./lang/toFinite.d.ts" />
/// <reference path="./lang/toInteger.d.ts" />
/// <reference path="./lang/toLength.d.ts" />
/// <reference path="./lang/toNumber.d.ts" />
/// <reference path="./lang/toPlainObject.d.ts" />
/// <reference path="./lang/toSafeInteger.d.ts" />
/// <reference path="./lang/toString.d.ts" />

// math
/// <reference path="./math/add.d.ts" />
/// <reference path="./math/ceil.d.ts" />
/// <reference path="./math/divide.d.ts" />
/// <reference path="./math/floor.d.ts" />
/// <reference path="./math/max.d.ts" />
/// <reference path="./math/maxBy.d.ts" />
/// <reference path="./math/mean.d.ts" />
/// <reference path="./math/meanBy.d.ts" />
/// <reference path="./math/min.d.ts" />
/// <reference path="./math/minBy.d.ts" />
/// <reference path="./math/multiply.d.ts" />
/// <reference path="./math/round.d.ts" />
/// <reference path="./math/subtract.d.ts" />
/// <reference path="./math/sum.d.ts" />
/// <reference path="./math/sumBy.d.ts" />

// number
/// <reference path="./number/clamp.d.ts" />
/// <reference path="./number/inRange.d.ts" />
/// <reference path="./number/random.d.ts" />

// object
/// <reference path="./object/assign.d.ts" />
/// <reference path="./object/assignIn.d.ts" />
/// <reference path="./object/assignInWith.d.ts" />
/// <reference path="./object/assignWith.d.ts" />
/// <reference path="./object/at.d.ts" />
/// <reference path="./object/create.d.ts" />
/// <reference path="./object/defaults.d.ts" />
/// <reference path="./object/defaultsDeep.d.ts" />
/// <reference path="./object/entries.d.ts" />
/// <reference path="./object/entriesIn.d.ts" />
/// <reference path="./object/extend.d.ts" />
/// <reference path="./object/extendWith.d.ts" />
/// <reference path="./object/findKey.d.ts" />
/// <reference path="./object/findLastKey.d.ts" />
/// <reference path="./object/forIn.d.ts" />
/// <reference path="./object/forInRight.d.ts" />
/// <reference path="./object/forOwn.d.ts" />
/// <reference path="./object/forOwnRight.d.ts" />
/// <reference path="./object/functions.d.ts" />
/// <reference path="./object/functionsIn.d.ts" />
/// <reference path="./object/get.d.ts" />
/// <reference path="./object/has.d.ts" />
/// <reference path="./object/hasIn.d.ts" />
/// <reference path="./object/invert.d.ts" />
/// <reference path="./object/invertBy.d.ts" />
/// <reference path="./object/invoke.d.ts" />
/// <reference path="./object/keys.d.ts" />
/// <reference path="./object/keysIn.d.ts" />
/// <reference path="./object/mapKeys.d.ts" />
/// <reference path="./object/mapValues.d.ts" />
/// <reference path="./object/merge.d.ts" />
/// <reference path="./object/mergeWith.d.ts" />
/// <reference path="./object/omit.d.ts" />
/// <reference path="./object/omitBy.d.ts" />
/// <reference path="./object/pick.d.ts" />
/// <reference path="./object/pickBy.d.ts" />
/// <reference path="./object/result.d.ts" />
/// <reference path="./object/set.d.ts" />
/// <reference path="./object/setWith.d.ts" />
/// <reference path="./object/toPairs.d.ts" />
/// <reference path="./object/toPairsIn.d.ts" />
/// <reference path="./object/transform.d.ts" />
/// <reference path="./object/unset.d.ts" />
/// <reference path="./object/update.d.ts" />
/// <reference path="./object/updateWith.d.ts" />
/// <reference path="./object/values.d.ts" />
/// <reference path="./object/valuesIn.d.ts" />

// _
/// <reference path="./seq/chain.d.ts" />
/// <reference path="./seq/tap.d.ts" />
/// <reference path="./seq/thru.d.ts" />
/// <reference path="./seq/prototype.at.d.ts" />
/// <reference path="./seq/prototype.chain.d.ts" />
/// <reference path="./seq/prototype.commit.d.ts" />
/// <reference path="./seq/prototype.plant.d.ts" />
/// <reference path="./seq/prototype.reverse.d.ts" />
/// <reference path="./seq/prototype.toJSON.d.ts" />
/// <reference path="./seq/prototype.toString.d.ts" />
/// <reference path="./seq/prototype.value.d.ts" />
/// <reference path="./seq/prototype.valueOf.d.ts" />

// string
/// <reference path="./string/camelCase.d.ts" />
/// <reference path="./string/capitalize.d.ts" />
/// <reference path="./string/deburr.d.ts" />
/// <reference path="./string/endsWith.d.ts" />
/// <reference path="./string/escape.d.ts" />
/// <reference path="./string/escapeRegExp.d.ts" />
/// <reference path="./string/kebabCase.d.ts" />
/// <reference path="./string/lowerCase.d.ts" />
/// <reference path="./string/lowerFirst.d.ts" />
/// <reference path="./string/pad.d.ts" />
/// <reference path="./string/padEnd.d.ts" />
/// <reference path="./string/padStart.d.ts" />
/// <reference path="./string/parseInt.d.ts" />
/// <reference path="./string/repeat.d.ts" />
/// <reference path="./string/replace.d.ts" />
/// <reference path="./string/snakeCase.d.ts" />
/// <reference path="./string/split.d.ts" />
/// <reference path="./string/startCase.d.ts" />
/// <reference path="./string/startsWith.d.ts" />
/// <reference path="./string/template.d.ts" />
/// <reference path="./string/toLower.d.ts" />
/// <reference path="./string/toUpper.d.ts" />
/// <reference path="./string/trim.d.ts" />
/// <reference path="./string/trimEnd.d.ts" />
/// <reference path="./string/trimStart.d.ts" />
/// <reference path="./string/truncate.d.ts" />
/// <reference path="./string/unescape.d.ts" />
/// <reference path="./string/upperCase.d.ts" />
/// <reference path="./string/upperFirst.d.ts" />
/// <reference path="./string/words.d.ts" />

// util
/// <reference path="./util/attempt.d.ts" />
/// <reference path="./util/bindAll.d.ts" />
/// <reference path="./util/cond.d.ts" />
/// <reference path="./util/conforms.d.ts" />
/// <reference path="./util/constant.d.ts" />
/// <reference path="./util/defaultTo.d.ts" />
/// <reference path="./util/flow.d.ts" />
/// <reference path="./util/flowRight.d.ts" />
/// <reference path="./util/identity.d.ts" />
/// <reference path="./util/iteratee.d.ts" />
/// <reference path="./util/matches.d.ts" />
/// <reference path="./util/matchesProperty.d.ts" />
/// <reference path="./util/method.d.ts" />
/// <reference path="./util/methodOf.d.ts" />
/// <reference path="./util/mixin.d.ts" />
/// <reference path="./util/noConflict.d.ts" />
/// <reference path="./util/noop.d.ts" />
/// <reference path="./util/nthArg.d.ts" />
/// <reference path="./util/over.d.ts" />
/// <reference path="./util/overEvery.d.ts" />
/// <reference path="./util/overSome.d.ts" />
/// <reference path="./util/property.d.ts" />
/// <reference path="./util/propertyOf.d.ts" />
/// <reference path="./util/range.d.ts" />
/// <reference path="./util/rangeRight.d.ts" />
/// <reference path="./util/runInContext.d.ts" />
/// <reference path="./util/stubArray.d.ts" />
/// <reference path="./util/stubFalse.d.ts" />
/// <reference path="./util/stubObject.d.ts" />
/// <reference path="./util/stubString.d.ts" />
/// <reference path="./util/stubTrue.d.ts" />
/// <reference path="./util/times.d.ts" />
/// <reference path="./util/toPath.d.ts" />
/// <reference path="./util/uniqueId.d.ts" />

export = _;
export as namespace _;

// Backward compatibility with --target es5
declare global {
    // tslint:disable-next-line:no-empty-interface
    interface Set<T> { }
    // tslint:disable-next-line:no-empty-interface
    interface Map<K, V> { }
    // tslint:disable-next-line:no-empty-interface
    interface WeakSet<T> { }
    // tslint:disable-next-line:no-empty-interface
    interface WeakMap<K extends object, V> { }
}
