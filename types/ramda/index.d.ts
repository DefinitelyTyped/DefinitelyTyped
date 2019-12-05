// Type definitions for ramda 0.26
// Project: https://github.com/donnut/typescript-ramda, https://ramdajs.com
// Definitions by: Scott O'Malley <https://github.com/TheHandsomeCoder>
//                 Erwin Poeze <https://github.com/donnut>
//                 Matt DeKrey <https://github.com/mdekrey>
//                 Matt Dziuban <https://github.com/mrdziuban>
//                 Stephen King <https://github.com/sbking>
//                 Alejandro Fernandez Haro <https://github.com/afharo>
//                 Vítor Castro <https://github.com/teves-castro>
//                 Jordan Quagliatini <https://github.com/1M0reBug>
//                 Simon Højberg <https://github.com/hojberg>
//                 Samson Keung <https://github.com/samsonkeung>
//                 Angelo Ocana <https://github.com/angeloocana>
//                 Rayner Pupo <https://github.com/raynerd>
//                 Nikita Moshensky <https://github.com/moshensky>
//                 Ethan Resnick <https://github.com/ethanresnick>
//                 Jack Leigh <https://github.com/leighman>
//                 Tomas Szabo <https://github.com/deftomat>
//                 Maciek Blim <https://github.com/blimusiek>
//                 Marcin Biernat <https://github.com/biern>
//                 Rayhaneh Banyassady <https://github.com/rayhaneh>
//                 Ryan McCuaig <https://github.com/rgm>
//                 Drew Wyatt <https://github.com/drewwyatt>
//                 John Ottenlips <https://github.com/jottenlips>
//                 Nitesh Phadatare <https://github.com/minitesh>
//                 Krantisinh Deshmukh <https://github.com/krantisinh>
//                 Pierre-Antoine Mills <https://github.com/pirix-gh>
//                 Brekk Bockrath <https://github.com/brekk>
//                 Aram Kharazyan <https://github.com/nemo108>
//                 Jituan Lin <https://github.com/jituanlin>
//                 Philippe Mills <https://github.com/Philippe-mills>
//                 Saul Mirone <https://github.com/Saul-Mirone>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

/// <reference path="./es/add.d.ts" />
/// <reference path="./es/addIndex.d.ts" />
/// <reference path="./es/adjust.d.ts" />
/// <reference path="./es/all.d.ts" />
/// <reference path="./es/allPass.d.ts" />
/// <reference path="./es/always.d.ts" />
/// <reference path="./es/and.d.ts" />
/// <reference path="./es/any.d.ts" />
/// <reference path="./es/anyPass.d.ts" />
/// <reference path="./es/ap.d.ts" />
/// <reference path="./es/aperture.d.ts" />
/// <reference path="./es/append.d.ts" />
/// <reference path="./es/apply.d.ts" />
/// <reference path="./es/applySpec.d.ts" />
/// <reference path="./es/applyTo.d.ts" />
/// <reference path="./es/ascend.d.ts" />
/// <reference path="./es/assoc.d.ts" />
/// <reference path="./es/assocPath.d.ts" />
/// <reference path="./es/binary.d.ts" />
/// <reference path="./es/bind.d.ts" />
/// <reference path="./es/both.d.ts" />
/// <reference path="./es/call.d.ts" />
/// <reference path="./es/chain.d.ts" />
/// <reference path="./es/clamp.d.ts" />
/// <reference path="./es/clone.d.ts" />
/// <reference path="./es/comparator.d.ts" />
/// <reference path="./es/complement.d.ts" />
/// <reference path="./es/compose.d.ts" />
/// <reference path="./es/composeK.d.ts" />
/// <reference path="./es/composeP.d.ts" />
/// <reference path="./es/composeWith.d.ts" />
/// <reference path="./es/concat.d.ts" />
/// <reference path="./es/cond.d.ts" />
/// <reference path="./es/construct.d.ts" />
/// <reference path="./es/constructN.d.ts" />
/// <reference path="./es/contains.d.ts" />
/// <reference path="./es/converge.d.ts" />
/// <reference path="./es/countBy.d.ts" />
/// <reference path="./es/curry.d.ts" />
/// <reference path="./es/curryN.d.ts" />
/// <reference path="./es/dec.d.ts" />
/// <reference path="./es/defaultTo.d.ts" />
/// <reference path="./es/descend.d.ts" />
/// <reference path="./es/difference.d.ts" />
/// <reference path="./es/differenceWith.d.ts" />
/// <reference path="./es/dissoc.d.ts" />
/// <reference path="./es/dissocPath.d.ts" />
/// <reference path="./es/divide.d.ts" />
/// <reference path="./es/drop.d.ts" />
/// <reference path="./es/dropLast.d.ts" />
/// <reference path="./es/dropLastWhile.d.ts" />
/// <reference path="./es/dropRepeats.d.ts" />
/// <reference path="./es/dropRepeatsWith.d.ts" />
/// <reference path="./es/either.d.ts" />
/// <reference path="./es/empty.d.ts" />
/// <reference path="./es/endsWith.d.ts" />
/// <reference path="./es/eqBy.d.ts" />
/// <reference path="./es/eqProps.d.ts" />
/// <reference path="./es/equals.d.ts" />
/// <reference path="./es/evolve.d.ts" />
/// <reference path="./es/F.d.ts" />
/// <reference path="./es/filter.d.ts" />
/// <reference path="./es/find.d.ts" />
/// <reference path="./es/findIndex.d.ts" />
/// <reference path="./es/findLast.d.ts" />
/// <reference path="./es/findLastIndex.d.ts" />
/// <reference path="./es/flatten.d.ts" />
/// <reference path="./es/flip.d.ts" />
/// <reference path="./es/forEach.d.ts" />
/// <reference path="./es/forEachObjIndexed.d.ts" />
/// <reference path="./es/fromPairs.d.ts" />
/// <reference path="./es/groupBy.d.ts" />
/// <reference path="./es/groupWith.d.ts" />
/// <reference path="./es/gt.d.ts" />
/// <reference path="./es/gte.d.ts" />
/// <reference path="./es/has.d.ts" />
/// <reference path="./es/hasIn.d.ts" />
/// <reference path="./es/hasPath.d.ts" />
/// <reference path="./es/head.d.ts" />
/// <reference path="./es/identical.d.ts" />
/// <reference path="./es/identity.d.ts" />
/// <reference path="./es/ifElse.d.ts" />
/// <reference path="./es/inc.d.ts" />
/// <reference path="./es/indexBy.d.ts" />
/// <reference path="./es/indexOf.d.ts" />
/// <reference path="./es/init.d.ts" />
/// <reference path="./es/innerJoin.d.ts" />
/// <reference path="./es/insertAll.d.ts" />
/// <reference path="./es/insert.d.ts" />
/// <reference path="./es/intersection.d.ts" />
/// <reference path="./es/intersectionWith.d.ts" />
/// <reference path="./es/intersperse.d.ts" />
/// <reference path="./es/into.d.ts" />
/// <reference path="./es/invert.d.ts" />
/// <reference path="./es/invertObj.d.ts" />
/// <reference path="./es/invoker.d.ts" />
/// <reference path="./es/is.d.ts" />
/// <reference path="./es/isEmpty.d.ts" />
/// <reference path="./es/isNil.d.ts" />
/// <reference path="./es/join.d.ts" />
/// <reference path="./es/juxt.d.ts" />
/// <reference path="./es/keys.d.ts" />
/// <reference path="./es/keysIn.d.ts" />
/// <reference path="./es/last.d.ts" />
/// <reference path="./es/lastIndexOf.d.ts" />
/// <reference path="./es/length.d.ts" />
/// <reference path="./es/lens.d.ts" />
/// <reference path="./es/lensIndex.d.ts" />
/// <reference path="./es/lensPath.d.ts" />
/// <reference path="./es/lensProp.d.ts" />
/// <reference path="./es/lift.d.ts" />
/// <reference path="./es/lt.d.ts" />
/// <reference path="./es/lte.d.ts" />
/// <reference path="./es/mapAccum.d.ts" />
/// <reference path="./es/mapAccumRight.d.ts" />
/// <reference path="./es/map.d.ts" />
/// <reference path="./es/mapObjIndexed.d.ts" />
/// <reference path="./es/match.d.ts" />
/// <reference path="./es/mathMod.d.ts" />
/// <reference path="./es/maxBy.d.ts" />
/// <reference path="./es/max.d.ts" />
/// <reference path="./es/mean.d.ts" />
/// <reference path="./es/median.d.ts" />
/// <reference path="./es/memoizeWith.d.ts" />
/// <reference path="./es/mergeAll.d.ts" />
/// <reference path="./es/mergeDeepLeft.d.ts" />
/// <reference path="./es/mergeDeepRight.d.ts" />
/// <reference path="./es/mergeDeepWith.d.ts" />
/// <reference path="./es/mergeDeepWithKey.d.ts" />
/// <reference path="./es/mergeLeft.d.ts" />
/// <reference path="./es/mergeRight.d.ts" />
/// <reference path="./es/merge.d.ts" />
/// <reference path="./es/mergeWith.d.ts" />
/// <reference path="./es/mergeWithKey.d.ts" />
/// <reference path="./es/minBy.d.ts" />
/// <reference path="./es/min.d.ts" />
/// <reference path="./es/modulo.d.ts" />
/// <reference path="./es/move.d.ts" />
/// <reference path="./es/multiply.d.ts" />
/// <reference path="./es/nAry.d.ts" />
/// <reference path="./es/negate.d.ts" />
/// <reference path="./es/none.d.ts" />
/// <reference path="./es/not.d.ts" />
/// <reference path="./es/nthArg.d.ts" />
/// <reference path="./es/nth.d.ts" />
/// <reference path="./es/o.d.ts" />
/// <reference path="./es/objOf.d.ts" />
/// <reference path="./es/of.d.ts" />
/// <reference path="./es/omit.d.ts" />
/// <reference path="./es/once.d.ts" />
/// <reference path="./es/or.d.ts" />
/// <reference path="./es/over.d.ts" />
/// <reference path="./es/otherwise.d.ts" />
/// <reference path="./es/pair.d.ts" />
/// <reference path="./es/partial.d.ts" />
/// <reference path="./es/partialRight.d.ts" />
/// <reference path="./es/partition.d.ts" />
/// <reference path="./es/path.d.ts" />
/// <reference path="./es/pathEq.d.ts" />
/// <reference path="./es/pathOr.d.ts" />
/// <reference path="./es/pathSatisfies.d.ts" />
/// <reference path="./es/pickAll.d.ts" />
/// <reference path="./es/pickBy.d.ts" />
/// <reference path="./es/pick.d.ts" />
/// <reference path="./es/pipe.d.ts" />
/// <reference path="./es/pipeK.d.ts" />
/// <reference path="./es/pipeP.d.ts" />
/// <reference path="./es/pipeWith.d.ts" />
/// <reference path="./es/pluck.d.ts" />
/// <reference path="./es/prepend.d.ts" />
/// <reference path="./es/product.d.ts" />
/// <reference path="./es/project.d.ts" />
/// <reference path="./es/prop.d.ts" />
/// <reference path="./es/propEq.d.ts" />
/// <reference path="./es/propIs.d.ts" />
/// <reference path="./es/propOr.d.ts" />
/// <reference path="./es/propSatisfies.d.ts" />
/// <reference path="./es/props.d.ts" />
/// <reference path="./es/range.d.ts" />
/// <reference path="./es/reduceBy.d.ts" />
/// <reference path="./es/reduced.d.ts" />
/// <reference path="./es/reduce.d.ts" />
/// <reference path="./es/reduceRight.d.ts" />
/// <reference path="./es/reduceWhile.d.ts" />
/// <reference path="./es/reject.d.ts" />
/// <reference path="./es/remove.d.ts" />
/// <reference path="./es/repeat.d.ts" />
/// <reference path="./es/replace.d.ts" />
/// <reference path="./es/reverse.d.ts" />
/// <reference path="./es/scan.d.ts" />
/// <reference path="./es/set.d.ts" />
/// <reference path="./es/slice.d.ts" />
/// <reference path="./es/sortBy.d.ts" />
/// <reference path="./es/sort.d.ts" />
/// <reference path="./es/sortWith.d.ts" />
/// <reference path="./es/splitAt.d.ts" />
/// <reference path="./es/split.d.ts" />
/// <reference path="./es/splitEvery.d.ts" />
/// <reference path="./es/splitWhen.d.ts" />
/// <reference path="./es/startsWith.d.ts" />
/// <reference path="./es/subtract.d.ts" />
/// <reference path="./es/sum.d.ts" />
/// <reference path="./es/symmetricDifference.d.ts" />
/// <reference path="./es/symmetricDifferenceWith.d.ts" />
/// <reference path="./es/tail.d.ts" />
/// <reference path="./es/take.d.ts" />
/// <reference path="./es/takeLast.d.ts" />
/// <reference path="./es/takeLastWhile.d.ts" />
/// <reference path="./es/takeWhile.d.ts" />
/// <reference path="./es/tap.d.ts" />
/// <reference path="./es/T.d.ts" />
/// <reference path="./es/test.d.ts" />
/// <reference path="./es/then.d.ts" />
/// <reference path="./es/thunkify.d.ts" />
/// <reference path="./es/times.d.ts" />
/// <reference path="./es/toLower.d.ts" />
/// <reference path="./es/toPairs.d.ts" />
/// <reference path="./es/toPairsIn.d.ts" />
/// <reference path="./es/toString.d.ts" />
/// <reference path="./es/toUpper.d.ts" />
/// <reference path="./es/transduce.d.ts" />
/// <reference path="./es/transpose.d.ts" />
/// <reference path="./es/traverse.d.ts" />
/// <reference path="./es/trim.d.ts" />
/// <reference path="./es/tryCatch.d.ts" />
/// <reference path="./es/type.d.ts" />
/// <reference path="./es/unapply.d.ts" />
/// <reference path="./es/unary.d.ts" />
/// <reference path="./es/uncurryN.d.ts" />
/// <reference path="./es/unfold.d.ts" />
/// <reference path="./es/union.d.ts" />
/// <reference path="./es/unionWith.d.ts" />
/// <reference path="./es/uniqBy.d.ts" />
/// <reference path="./es/uniq.d.ts" />
/// <reference path="./es/uniqWith.d.ts" />
/// <reference path="./es/unless.d.ts" />
/// <reference path="./es/unnest.d.ts" />
/// <reference path="./es/until.d.ts" />
/// <reference path="./es/update.d.ts" />
/// <reference path="./es/useWith.d.ts" />
/// <reference path="./es/values.d.ts" />
/// <reference path="./es/valuesIn.d.ts" />
/// <reference path="./es/view.d.ts" />
/// <reference path="./es/when.d.ts" />
/// <reference path="./es/where.d.ts" />
/// <reference path="./es/whereEq.d.ts" />
/// <reference path="./es/without.d.ts" />
/// <reference path="./es/xprod.d.ts" />
/// <reference path="./es/zip.d.ts" />
/// <reference path="./es/zipObj.d.ts" />
/// <reference path="./es/zipWith.d.ts" />
/// <reference path="./es/includes.d.ts" />

/// <reference path="./src/add.d.ts" />
/// <reference path="./src/addIndex.d.ts" />
/// <reference path="./src/adjust.d.ts" />
/// <reference path="./src/all.d.ts" />
/// <reference path="./src/allPass.d.ts" />
/// <reference path="./src/always.d.ts" />
/// <reference path="./src/and.d.ts" />
/// <reference path="./src/any.d.ts" />
/// <reference path="./src/anyPass.d.ts" />
/// <reference path="./src/ap.d.ts" />
/// <reference path="./src/aperture.d.ts" />
/// <reference path="./src/append.d.ts" />
/// <reference path="./src/apply.d.ts" />
/// <reference path="./src/applySpec.d.ts" />
/// <reference path="./src/applyTo.d.ts" />
/// <reference path="./src/ascend.d.ts" />
/// <reference path="./src/assoc.d.ts" />
/// <reference path="./src/assocPath.d.ts" />
/// <reference path="./src/binary.d.ts" />
/// <reference path="./src/bind.d.ts" />
/// <reference path="./src/both.d.ts" />
/// <reference path="./src/call.d.ts" />
/// <reference path="./src/chain.d.ts" />
/// <reference path="./src/clamp.d.ts" />
/// <reference path="./src/clone.d.ts" />
/// <reference path="./src/comparator.d.ts" />
/// <reference path="./src/complement.d.ts" />
/// <reference path="./src/compose.d.ts" />
/// <reference path="./src/composeK.d.ts" />
/// <reference path="./src/composeP.d.ts" />
/// <reference path="./src/composeWith.d.ts" />
/// <reference path="./src/concat.d.ts" />
/// <reference path="./src/cond.d.ts" />
/// <reference path="./src/construct.d.ts" />
/// <reference path="./src/constructN.d.ts" />
/// <reference path="./src/contains.d.ts" />
/// <reference path="./src/converge.d.ts" />
/// <reference path="./src/countBy.d.ts" />
/// <reference path="./src/curry.d.ts" />
/// <reference path="./src/curryN.d.ts" />
/// <reference path="./src/dec.d.ts" />
/// <reference path="./src/defaultTo.d.ts" />
/// <reference path="./src/descend.d.ts" />
/// <reference path="./src/difference.d.ts" />
/// <reference path="./src/differenceWith.d.ts" />
/// <reference path="./src/dissoc.d.ts" />
/// <reference path="./src/dissocPath.d.ts" />
/// <reference path="./src/divide.d.ts" />
/// <reference path="./src/drop.d.ts" />
/// <reference path="./src/dropLast.d.ts" />
/// <reference path="./src/dropLastWhile.d.ts" />
/// <reference path="./src/dropRepeats.d.ts" />
/// <reference path="./src/dropRepeatsWith.d.ts" />
/// <reference path="./src/either.d.ts" />
/// <reference path="./src/empty.d.ts" />
/// <reference path="./src/endsWith.d.ts" />
/// <reference path="./src/eqBy.d.ts" />
/// <reference path="./src/eqProps.d.ts" />
/// <reference path="./src/equals.d.ts" />
/// <reference path="./src/evolve.d.ts" />
/// <reference path="./src/F.d.ts" />
/// <reference path="./src/filter.d.ts" />
/// <reference path="./src/find.d.ts" />
/// <reference path="./src/findIndex.d.ts" />
/// <reference path="./src/findLast.d.ts" />
/// <reference path="./src/findLastIndex.d.ts" />
/// <reference path="./src/flatten.d.ts" />
/// <reference path="./src/flip.d.ts" />
/// <reference path="./src/forEach.d.ts" />
/// <reference path="./src/forEachObjIndexed.d.ts" />
/// <reference path="./src/fromPairs.d.ts" />
/// <reference path="./src/groupBy.d.ts" />
/// <reference path="./src/groupWith.d.ts" />
/// <reference path="./src/gt.d.ts" />
/// <reference path="./src/gte.d.ts" />
/// <reference path="./src/has.d.ts" />
/// <reference path="./src/hasIn.d.ts" />
/// <reference path="./src/hasPath.d.ts" />
/// <reference path="./src/head.d.ts" />
/// <reference path="./src/identical.d.ts" />
/// <reference path="./src/identity.d.ts" />
/// <reference path="./src/ifElse.d.ts" />
/// <reference path="./src/inc.d.ts" />
/// <reference path="./src/indexBy.d.ts" />
/// <reference path="./src/indexOf.d.ts" />
/// <reference path="./src/init.d.ts" />
/// <reference path="./src/innerJoin.d.ts" />
/// <reference path="./src/insertAll.d.ts" />
/// <reference path="./src/insert.d.ts" />
/// <reference path="./src/intersection.d.ts" />
/// <reference path="./src/intersectionWith.d.ts" />
/// <reference path="./src/intersperse.d.ts" />
/// <reference path="./src/into.d.ts" />
/// <reference path="./src/invert.d.ts" />
/// <reference path="./src/invertObj.d.ts" />
/// <reference path="./src/invoker.d.ts" />
/// <reference path="./src/is.d.ts" />
/// <reference path="./src/isEmpty.d.ts" />
/// <reference path="./src/isNil.d.ts" />
/// <reference path="./src/join.d.ts" />
/// <reference path="./src/juxt.d.ts" />
/// <reference path="./src/keys.d.ts" />
/// <reference path="./src/keysIn.d.ts" />
/// <reference path="./src/last.d.ts" />
/// <reference path="./src/lastIndexOf.d.ts" />
/// <reference path="./src/length.d.ts" />
/// <reference path="./src/lens.d.ts" />
/// <reference path="./src/lensIndex.d.ts" />
/// <reference path="./src/lensPath.d.ts" />
/// <reference path="./src/lensProp.d.ts" />
/// <reference path="./src/lift.d.ts" />
/// <reference path="./src/lt.d.ts" />
/// <reference path="./src/lte.d.ts" />
/// <reference path="./src/mapAccum.d.ts" />
/// <reference path="./src/mapAccumRight.d.ts" />
/// <reference path="./src/map.d.ts" />
/// <reference path="./src/mapObjIndexed.d.ts" />
/// <reference path="./src/match.d.ts" />
/// <reference path="./src/mathMod.d.ts" />
/// <reference path="./src/maxBy.d.ts" />
/// <reference path="./src/max.d.ts" />
/// <reference path="./src/mean.d.ts" />
/// <reference path="./src/median.d.ts" />
/// <reference path="./src/memoizeWith.d.ts" />
/// <reference path="./src/mergeAll.d.ts" />
/// <reference path="./src/mergeDeepLeft.d.ts" />
/// <reference path="./src/mergeDeepRight.d.ts" />
/// <reference path="./src/mergeDeepWith.d.ts" />
/// <reference path="./src/mergeDeepWithKey.d.ts" />
/// <reference path="./src/mergeLeft.d.ts" />
/// <reference path="./src/mergeRight.d.ts" />
/// <reference path="./src/merge.d.ts" />
/// <reference path="./src/mergeWith.d.ts" />
/// <reference path="./src/mergeWithKey.d.ts" />
/// <reference path="./src/minBy.d.ts" />
/// <reference path="./src/min.d.ts" />
/// <reference path="./src/modulo.d.ts" />
/// <reference path="./src/move.d.ts" />
/// <reference path="./src/multiply.d.ts" />
/// <reference path="./src/nAry.d.ts" />
/// <reference path="./src/negate.d.ts" />
/// <reference path="./src/none.d.ts" />
/// <reference path="./src/not.d.ts" />
/// <reference path="./src/nthArg.d.ts" />
/// <reference path="./src/nth.d.ts" />
/// <reference path="./src/o.d.ts" />
/// <reference path="./src/objOf.d.ts" />
/// <reference path="./src/of.d.ts" />
/// <reference path="./src/omit.d.ts" />
/// <reference path="./src/once.d.ts" />
/// <reference path="./src/or.d.ts" />
/// <reference path="./src/over.d.ts" />
/// <reference path="./src/otherwise.d.ts" />
/// <reference path="./src/pair.d.ts" />
/// <reference path="./src/partial.d.ts" />
/// <reference path="./src/partialRight.d.ts" />
/// <reference path="./src/partition.d.ts" />
/// <reference path="./src/path.d.ts" />
/// <reference path="./src/pathEq.d.ts" />
/// <reference path="./src/pathOr.d.ts" />
/// <reference path="./src/pathSatisfies.d.ts" />
/// <reference path="./src/pickAll.d.ts" />
/// <reference path="./src/pickBy.d.ts" />
/// <reference path="./src/pick.d.ts" />
/// <reference path="./src/pipe.d.ts" />
/// <reference path="./src/pipeK.d.ts" />
/// <reference path="./src/pipeP.d.ts" />
/// <reference path="./src/pipeWith.d.ts" />
/// <reference path="./src/pluck.d.ts" />
/// <reference path="./src/prepend.d.ts" />
/// <reference path="./src/product.d.ts" />
/// <reference path="./src/project.d.ts" />
/// <reference path="./src/prop.d.ts" />
/// <reference path="./src/propEq.d.ts" />
/// <reference path="./src/propIs.d.ts" />
/// <reference path="./src/propOr.d.ts" />
/// <reference path="./src/propSatisfies.d.ts" />
/// <reference path="./src/props.d.ts" />
/// <reference path="./src/range.d.ts" />
/// <reference path="./src/reduceBy.d.ts" />
/// <reference path="./src/reduced.d.ts" />
/// <reference path="./src/reduce.d.ts" />
/// <reference path="./src/reduceRight.d.ts" />
/// <reference path="./src/reduceWhile.d.ts" />
/// <reference path="./src/reject.d.ts" />
/// <reference path="./src/remove.d.ts" />
/// <reference path="./src/repeat.d.ts" />
/// <reference path="./src/replace.d.ts" />
/// <reference path="./src/reverse.d.ts" />
/// <reference path="./src/scan.d.ts" />
/// <reference path="./src/set.d.ts" />
/// <reference path="./src/slice.d.ts" />
/// <reference path="./src/sortBy.d.ts" />
/// <reference path="./src/sort.d.ts" />
/// <reference path="./src/sortWith.d.ts" />
/// <reference path="./src/splitAt.d.ts" />
/// <reference path="./src/split.d.ts" />
/// <reference path="./src/splitEvery.d.ts" />
/// <reference path="./src/splitWhen.d.ts" />
/// <reference path="./src/startsWith.d.ts" />
/// <reference path="./src/subtract.d.ts" />
/// <reference path="./src/sum.d.ts" />
/// <reference path="./src/symmetricDifference.d.ts" />
/// <reference path="./src/symmetricDifferenceWith.d.ts" />
/// <reference path="./src/tail.d.ts" />
/// <reference path="./src/take.d.ts" />
/// <reference path="./src/takeLast.d.ts" />
/// <reference path="./src/takeLastWhile.d.ts" />
/// <reference path="./src/takeWhile.d.ts" />
/// <reference path="./src/tap.d.ts" />
/// <reference path="./src/T.d.ts" />
/// <reference path="./src/test.d.ts" />
/// <reference path="./src/then.d.ts" />
/// <reference path="./src/thunkify.d.ts" />
/// <reference path="./src/times.d.ts" />
/// <reference path="./src/toLower.d.ts" />
/// <reference path="./src/toPairs.d.ts" />
/// <reference path="./src/toPairsIn.d.ts" />
/// <reference path="./src/toString.d.ts" />
/// <reference path="./src/toUpper.d.ts" />
/// <reference path="./src/transduce.d.ts" />
/// <reference path="./src/transpose.d.ts" />
/// <reference path="./src/traverse.d.ts" />
/// <reference path="./src/trim.d.ts" />
/// <reference path="./src/tryCatch.d.ts" />
/// <reference path="./src/type.d.ts" />
/// <reference path="./src/unapply.d.ts" />
/// <reference path="./src/unary.d.ts" />
/// <reference path="./src/uncurryN.d.ts" />
/// <reference path="./src/unfold.d.ts" />
/// <reference path="./src/union.d.ts" />
/// <reference path="./src/unionWith.d.ts" />
/// <reference path="./src/uniqBy.d.ts" />
/// <reference path="./src/uniq.d.ts" />
/// <reference path="./src/uniqWith.d.ts" />
/// <reference path="./src/unless.d.ts" />
/// <reference path="./src/unnest.d.ts" />
/// <reference path="./src/until.d.ts" />
/// <reference path="./src/update.d.ts" />
/// <reference path="./src/useWith.d.ts" />
/// <reference path="./src/values.d.ts" />
/// <reference path="./src/valuesIn.d.ts" />
/// <reference path="./src/view.d.ts" />
/// <reference path="./src/when.d.ts" />
/// <reference path="./src/where.d.ts" />
/// <reference path="./src/whereEq.d.ts" />
/// <reference path="./src/without.d.ts" />
/// <reference path="./src/xprod.d.ts" />
/// <reference path="./src/zip.d.ts" />
/// <reference path="./src/zipObj.d.ts" />
/// <reference path="./src/zipWith.d.ts" />
/// <reference path="./src/includes.d.ts" />

import * as _ from "ts-toolbelt";
import {
    Arity0Fn,
    Arity1Fn,
    Arity2Fn,
    AssocPartialOne,
    ComposeWithFns,
    Dictionary,
    Evolvable,
    Evolve,
    Evolver,
    Filter,
    Functor,
    KeyValuePair,
    Lens,
    Merge,
    MergeAll,
    ObjPred,
    Ord,
    Path,
    Placeholder,
    Pred,
    PipeWithFns,
    Reduced,
    SafePred,
    ValueOfRecord,
} from "./tools";

export * from './tools';

/**
 * Placeholder. When used with functions like curry, or op, the second argument is applied to the second
 * position, and it returns a function waiting for its first argument.
 */
export const __: Placeholder; /* This is used in examples throughout the docs, but I it only seems to be directly explained here: https://ramdajs.com/0.9/docs/#op */

/**
 * Adds two numbers (or strings). Equivalent to a + b but curried.
 */
export function add(a: number, b: number): number;
export function add(a: string, b: string): string;
export function add(a: number): (b: number) => number;
export function add(a: string): (b: string) => string;

/**
 * Creates a new list iteration function from an existing one by adding two new parameters to its callback
 * function: the current index, and the entire list.
 */
export function addIndex<T, U>(fn: (f: (item: T) => U, list: readonly T[]) => U[]): _.F.Curry<(a: (item: T, idx: number, list?: T[]) => U, b: readonly T[]) => U[]>;
/* Special case for forEach */
export function addIndex<T>(fn: (f: (item: T) => void, list: readonly T[]) => T[]): _.F.Curry<(a: (item: T, idx: number, list?: T[]) => void, b: readonly T[]) => T[]>;
/* Special case for reduce */
export function addIndex<T, U>(fn: (f: (acc: U, item: T) => U, aci: U, list: readonly T[]) => U): _.F.Curry<(a: (acc: U, item: T, idx: number, list?: T[]) => U, b: U, c: readonly T[]) => U>;

/**
 * Applies a function to the value at the given index of an array, returning a new copy of the array with the
 * element at the given index replaced with the result of the function application.
 */
export function adjust<T>(index: number, fn: (a: T) => T, list: readonly T[]): T[];
export function adjust<T>(index: number, fn: (a: T) => T): (list: readonly T[]) => T[];

/**
 * Returns true if all elements of the list match the predicate, false if there are any that don't.
 */
export function all<T>(fn: (a: T) => boolean, list: readonly T[]): boolean;
export function all<T>(fn: (a: T) => boolean): (list: readonly T[]) => boolean;

/**
 * Given a list of predicates, returns a new predicate that will be true exactly when all of them are.
 */
export function allPass(preds: readonly Pred[]): Pred;

/**
 * Returns a function that always returns the given value.
 */
export function always<T>(val: T): () => T;

/**
 * A function that returns the first argument if it's falsy otherwise the second argument. Note that this is
 * NOT short-circuited, meaning that if expressions are passed they are both evaluated.
 */
export function and<T extends { and?: ((...a: readonly any[]) => any); } | number | boolean | string | null>(fn1: T, val2: any): boolean;
export function and<T extends { and?: ((...a: readonly any[]) => any); } | number | boolean | string | null>(fn1: T): (val2: any) => boolean;

/**
 * Returns true if at least one of elements of the list match the predicate, false otherwise.
 */
export function any<T>(fn: (a: T) => boolean, list: readonly T[]): boolean;
export function any<T>(fn: (a: T) => boolean): (list: readonly T[]) => boolean;

/**
 * Given a list of predicates returns a new predicate that will be true exactly when any one of them is.
 */
export function anyPass<T>(preds: Array<SafePred<T>>): SafePred<T>;

/**
 * ap applies a list of functions to a list of values.
 */
export function ap<T, U>(fns: Array<((a: T) => U)>, vs: readonly T[]): U[];
export function ap<T, U>(fns: Array<((a: T) => U)>): (vs: readonly T[]) => U[];
export function ap<X0, X1, R>(
    fn: (x1: X1, x0: X0) => R,
    fn1: (x1: X1) => X0
): (x1: X1) => R;

/**
 * Returns a new list, composed of n-tuples of consecutive elements If n is greater than the length of the list,
 * an empty list is returned.
 */
export function aperture<T>(n: 1, list: readonly T[]): Array<[T]>;
export function aperture<T>(n: 2, list: readonly T[]): Array<[T, T]>;
export function aperture<T>(n: 3, list: readonly T[]): Array<[T, T, T]>;
export function aperture<T>(n: 4, list: readonly T[]): Array<[T, T, T, T]>;
export function aperture<T>(n: 5, list: readonly T[]): Array<[T, T, T, T, T]>;
export function aperture<T>(n: 6, list: readonly T[]): Array<[T, T, T, T, T, T]>;
export function aperture<T>(n: 7, list: readonly T[]): Array<[T, T, T, T, T, T, T]>;
export function aperture<T>(n: 8, list: readonly T[]): Array<[T, T, T, T, T, T, T, T]>;
export function aperture<T>(n: 9, list: readonly T[]): Array<[T, T, T, T, T, T, T, T, T]>;
export function aperture<T>(n: 10, list: readonly T[]): Array<[T, T, T, T, T, T, T, T, T, T]>;
export function aperture<T>(n: number, list: readonly T[]): T[][];
export function aperture(n: number): <T>(list: readonly T[]) => T[][];

/**
 * Returns a new list containing the contents of the given list, followed by the given element.
 */
export function append<T>(el: T, list: readonly T[]): T[];
export function append<T>(el: T): <T>(list: readonly T[]) => T[];

/**
 * Applies function fn to the argument list args. This is useful for creating a fixed-arity function from
 * a variadic function. fn should be a bound function if context is significant.
 */
export function apply<T, U, TResult>(fn: (arg0: T, ...args: readonly T[]) => TResult, args: readonly U[]): TResult;
export function apply<T, TResult>(fn: (arg0: T, ...args: readonly T[]) => TResult): <U>(args: readonly U[]) => TResult;

/**
 * Given a spec object recursively mapping properties to functions, creates a function producing an object
 * of the same structure, by mapping each property to the result of calling its associated function with
 * the supplied arguments.
 */
export function applySpec<Obj extends Record<string, (...args: readonly any[]) => any>>(
    obj: Obj
): (
    ...args: Parameters<ValueOfRecord<Obj>>
) => { [Key in keyof Obj]: ReturnType<Obj[Key]> };
export function applySpec<T>(obj: any): (...args: readonly any[]) => T;

/**
 * Takes a value and applies a function to it.
 * This function is also known as the thrush combinator.
 */
export function applyTo<T, U>(el: T, fn: (t: T) => U): U;
export function applyTo<T>(el: T): <U>(fn: (t: T) => U) => U;

/**
 * Makes an ascending comparator function out of a function that returns a value that can be compared with < and >.
 */
export function ascend<T>(fn: (obj: T) => any, a: T, b: T): number;
export function ascend<T>(fn: (obj: T) => any): (a: T, b: T) => number;

/**
 * Makes a shallow clone of an object, setting or overriding the specified property with the given value.
 */
export function assoc<T, U>(__: Placeholder, val: T, obj: U): <K extends string>(prop: K) => Record<K, T> & U;
export function assoc<U, K extends string>(prop: K, __: Placeholder, obj: U): <T>(val: T) => Record<K, T> & U;
export function assoc<T, U, K extends string>(prop: K, val: T, obj: U): Record<K, T> & U;
export function assoc<T, K extends string>(prop: K, val: T): <U>(obj: U) => Record<K, T> & U;
export function assoc<K extends string>(prop: K): AssocPartialOne<K>;

/**
 * Makes a shallow clone of an object, setting or overriding the nodes required to create the given path, and
 * placing the specific value at the tail end of that path.
 */
export function assocPath<T, U>(__: Placeholder, val: T, obj: U): (path: Path) => U;
export function assocPath<T, U>(path: Path, __: Placeholder, obj: U): (val: T) => U;
export function assocPath<T, U>(path: Path, val: T, obj: U): U;
export function assocPath<T, U>(path: Path, val: T): (obj: U) => U;
export function assocPath<T, U>(path: Path): _.F.Curry<(a: T, b: U) => U>;

/**
 * Wraps a function of any arity (including nullary) in a function that accepts exactly 2
 * parameters. Any extraneous parameters will not be passed to the supplied function.
 */
export function binary(fn: (...args: readonly any[]) => any): (...a: readonly any[]) => any;

/**
 * Creates a function that is bound to a context. Note: R.bind does not provide the additional argument-binding
 * capabilities of Function.prototype.bind.
 */
export function bind<T>(fn: (...args: readonly any[]) => any, thisObj: T): (...args: readonly any[]) => any;

/**
 * A function wrapping calls to the two functions in an && operation, returning the result of the first function
 * if it is false-y and the result of the second function otherwise. Note that this is short-circuited, meaning
 * that the second function will not be invoked if the first returns a false-y value.
 */
export function both(pred1: Pred, pred2: Pred): Pred;
export function both(pred1: Pred): (pred2: Pred) => Pred;

/**
 * Returns the result of calling its first argument with the remaining arguments. This is occasionally useful
 * as a converging function for R.converge: the left branch can produce a function while the right branch
 * produces a value to be passed to that function as an argument.
 */
export function call(fn: (...args: readonly any[]) => (...args: readonly any[]) => any, ...args: readonly any[]): any;

/**
 * `chain` maps a function over a list and concatenates the results.
 * This implementation is compatible with the Fantasy-land Chain spec
 */
export function chain<T, U>(fn: (n: T) => U[], list: readonly T[]): U[];
export function chain<T, U>(fn: (n: T) => U[]): (list: readonly T[]) => U[];
export function chain<X0, X1, R>(fn: (x0: X0, x1: X1) => R, fn1: (x1: X1) => X0): (x1: X1) => R;

/**
 * Restricts a number to be within a range.
 * Also works for other ordered types such as Strings and Date
 */
export function clamp<T>(min: T, max: T, value: T): T;
export function clamp<T>(min: T, max: T): (value: T) => T;
export function clamp<T>(min: T): (max: T, value: T) => T;
export function clamp<T>(min: T): (max: T) => (value: T) => T;

/**
 * Creates a deep copy of the value which may contain (nested) Arrays and Objects, Numbers, Strings, Booleans and Dates.
 */
export function clone<T>(value: T): T;
export function clone<T>(value: readonly T[]): T[];

/**
 * Makes a comparator function out of a function that reports whether the first element is less than the second.
 */
// comparator(pred: (a: any, b: any) => boolean): (x: number, y: number) => number;
export function comparator<T>(pred: (a: T, b: T) => boolean): (x: T, y: T) => number;

/**
 * Takes a function f and returns a function g such that:
 * - applying g to zero or more arguments will give true if applying the same arguments to f gives
 *   a logical false value; and
 * - applying g to zero or more arguments will give false if applying the same arguments to f gives
 *   a logical true value.
 */
export function complement(pred: (...args: readonly any[]) => boolean): (...args: readonly any[]) => boolean;

/**
 * Performs right-to-left function composition. The rightmost function may have any arity; the remaining
 * functions must be unary.
 */
// generic rest parameters in TS 3.0 allows writing a single variant for any number of Vx
// compose<V extends any[], T1>(fn0: (...args: V) => T1): (...args: V) => T1;
// compose<V extends any[], T1, T2>(fn1: (x: T1) => T2, fn0: (...args: V) => T1): (...args: V) => T2;
// but requiring TS>=3.0 sounds like a breaking change, so just leaving a comment for the future
// tslint:disable:max-line-length
export function compose<T1>(fn0: () => T1): () => T1;
export function compose<V0, T1>(fn0: (x0: V0) => T1): (x0: V0) => T1;
export function compose<V0, V1, T1>(fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T1;
export function compose<V0, V1, V2, T1>(fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T1;

export function compose<T1, T2>(fn1: (x: T1) => T2, fn0: () => T1): () => T2;
export function compose<V0, T1, T2>(fn1: (x: T1) => T2, fn0: (x0: V0) => T1): (x0: V0) => T2;
export function compose<V0, V1, T1, T2>(fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T2;
export function compose<V0, V1, V2, T1, T2>(fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T2;

export function compose<T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: () => T1): () => T3;
export function compose<V0, T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x: V0) => T1): (x: V0) => T3;
export function compose<V0, V1, T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T3;
export function compose<V0, V1, V2, T1, T2, T3>(fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T3;

export function compose<T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: () => T1): () => T4;
export function compose<V0, T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x: V0) => T1): (x: V0) => T4;
export function compose<V0, V1, T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T4;
export function compose<V0, V1, V2, T1, T2, T3, T4>(fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T4;

export function compose<T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: () => T1): () => T5;
export function compose<V0, T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x: V0) => T1): (x: V0) => T5;
export function compose<V0, V1, T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T5;
export function compose<V0, V1, V2, T1, T2, T3, T4, T5>(fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T5;

export function compose<T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: () => T1): () => T6;
export function compose<V0, T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x: V0) => T1): (x: V0) => T6;
export function compose<V0, V1, T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T6;
export function compose<V0, V1, V2, T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T6;
// tslint:enable:max-line-length

/**
 * Returns the right-to-left Kleisli composition of the provided functions, each of which must return a value of a type supported by chain.
 * The typings only support arrays for now.
 * All functions must be unary.
 * R.composeK(h, g, f) is equivalent to R.compose(R.chain(h), R.chain(g), f).
 *
 * @deprecated since 0.26 in favor of composeWith(chain)
 */
// tslint:disable:max-line-length
export function composeK<V0, T1>(fn0: (x0: V0) => T1[]): (x0: V0) => T1[];
export function composeK<V0, T1, T2>(fn1: (x: T1) => T2[], fn0: (x0: V0) => T1[]): (x0: V0) => T2[];
export function composeK<V0, T1, T2, T3>(fn2: (x: T2) => T3[], fn1: (x: T1) => T2[], fn0: (x: V0) => T1[]): (x: V0) => T3[];
export function composeK<V0, T1, T2, T3, T4>(fn3: (x: T3) => T4[], fn2: (x: T2) => T3[], fn1: (x: T1) => T2[], fn0: (x: V0) => T1[]): (x: V0) => T4[];
export function composeK<V0, T1, T2, T3, T4, T5>(fn4: (x: T4) => T5[], fn3: (x: T3) => T4[], fn2: (x: T2) => T3[], fn1: (x: T1) => T2[], fn0: (x: V0) => T1[]): (x: V0) => T5[];
export function composeK<V0, T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => T6[], fn4: (x: T4) => T5[], fn3: (x: T3) => T4[], fn2: (x: T2) => T3[], fn1: (x: T1) => T2[], fn0: (x: V0) => T1[]): (x: V0) => T6[];
// tslint:enable:max-line-length

/**
 * Performs right-to-left composition of one or more Promise-returning functions.
 * All functions must be unary.
 *
 * @deprecated since 0.26 in favor of composeWith(then)
 */
// tslint:disable:max-line-length
export function composeP<V0, T1>(fn0: (x0: V0) => Promise<T1>): (x0: V0) => Promise<T1>;
export function composeP<V0, T1, T2>(fn1: (x: T1) => Promise<T2>, fn0: (x0: V0) => Promise<T1>): (x0: V0) => Promise<T2>;
export function composeP<V0, T1, T2, T3>(fn2: (x: T2) => Promise<T3>, fn1: (x: T1) => Promise<T2>, fn0: (x: V0) => Promise<T1>): (x: V0) => Promise<T3>;
export function composeP<V0, T1, T2, T3, T4>(fn3: (x: T3) => Promise<T4>, fn2: (x: T2) => Promise<T3>, fn1: (x: T1) => Promise<T2>, fn0: (x: V0) => Promise<T1>): (x: V0) => Promise<T4>;
export function composeP<V0, T1, T2, T3, T4, T5>(fn4: (x: T4) => Promise<T5>, fn3: (x: T3) => Promise<T4>, fn2: (x: T2) => Promise<T3>, fn1: (x: T1) => Promise<T2>, fn0: (x: V0) => Promise<T1>): (x: V0) => Promise<T5>;
export function composeP<V0, T1, T2, T3, T4, T5, T6>(fn5: (x: T5) => Promise<T6>, fn4: (x: T4) => Promise<T5>, fn3: (x: T3) => Promise<T4>, fn2: (x: T2) => Promise<T3>, fn1: (x: T1) => Promise<T2>, fn0: (x: V0) => Promise<T1>): (x: V0) => Promise<T6>;
// tslint:enable:max-line-length

/**
 * Performs right-to-left function composition using transforming function.
 * With the current typings, all functions must be unary.
 */
export function composeWith<V0, T>(composer: (a: any) => any, fns: ComposeWithFns<V0, T>): (x0: V0) => T;
export function composeWith(composer: (a: any) => any): <V0, T>(fns: ComposeWithFns<V0, T>) => (x: V0) => T;

/**
 * Returns a new list consisting of the elements of the first list followed by the elements
 * of the second.
 */
export function concat<T>(placeholder: Placeholder): (list2: readonly T[], list1: readonly T[]) => T[];
export function concat<T>(placeholder: Placeholder, list2: readonly T[]): (list1: readonly T[]) => T[];
export function concat<T>(list1: readonly T[], list2: readonly T[]): T[];
export function concat<T>(list1: readonly T[]): (list2: readonly T[]) => T[];
export function concat(list1: string, list2: string): string;
export function concat(list1: string): (list2: string) => string;

/**
 * Returns a function, fn, which encapsulates if/else-if/else logic. R.cond takes a list of [predicate, transform] pairs.
 * All of the arguments to fn are applied to each of the predicates in turn until one returns a "truthy" value, at which
 * point fn returns the result of applying its arguments to the corresponding transformer. If none of the predicates
 * matches, fn returns undefined.
 */
export function cond(fns: Array<[Pred, (...a: readonly any[]) => any]>): (...a: readonly any[]) => any;
export function cond<A, B>(fns: Array<[SafePred<A>, (...a: readonly A[]) => B]>): (...a: readonly A[]) => B;

/**
 * Wraps a constructor function inside a curried function that can be called with the same arguments and returns the same type.
 */
export function construct<A extends any[], T>(constructor: { new(...a: A): T } | ((...a: A) => T)): (...a: A) => T;

/**
 * Wraps a constructor function inside a curried function that can be called with the same arguments and returns the same type.
 * The arity of the function returned is specified to allow using variadic constructor functions.
 */
export function constructN<A extends any[], T>(n: number, constructor: { new(...a: A): T } | ((...a: A) => T)): (...a: Partial<A>) => T;

/**
 * Returns `true` if the specified item is somewhere in the list, `false` otherwise.
 * Equivalent to `indexOf(a)(list) > -1`. Uses strict (`===`) equality checking.
 *
 * @deprecated since 0.26 in favor of includes
 */
export function contains(__: Placeholder, list: string): (a: string) => boolean;
export function contains<T>(__: Placeholder, list: readonly T[]): (a: T) => boolean;
export function contains(__: Placeholder): (list: string, a: string) => boolean;
export function contains<T>(__: Placeholder): (list: readonly T[], a: T) => boolean;
export function contains(a: string, list: string): boolean;
export function contains<T>(a: T, list: readonly T[]): boolean;
export function contains(a: string): (list: string) => boolean;
export function contains<T>(a: T): (list: readonly T[]) => boolean;

/**
 * Accepts a converging function and a list of branching functions and returns a new
 * function. When invoked, this new function is applied to some arguments, each branching
 * function is applied to those same arguments. The results of each branching function
 * are passed as arguments to the converging function to produce the return value.
 */
export function converge(after: ((...a: readonly any[]) => any), fns: Array<((...a: readonly any[]) => any)>): (...a: readonly any[]) => any;

/**
 * Counts the elements of a list according to how many match each value
 * of a key generated by the supplied function. Returns an object
 * mapping the keys produced by `fn` to the number of occurrences in
 * the list. Note that all keys are coerced to strings because of how
 * JavaScript objects work.
 */
export function countBy<T>(fn: (a: T) => string | number, list: readonly T[]): { [index: string]: number };
export function countBy<T>(fn: (a: T) => string | number): (list: readonly T[]) => { [index: string]: number };

/**
 * Returns a curried equivalent of the provided function. The curried function has two unusual capabilities.
 * First, its arguments needn't be provided one at a time.
 */
export function curry<F extends (...args: any) => any>(f: F): _.F.Curry<F>;

/**
 * Returns a curried equivalent of the provided function, with the specified arity. The curried function has
 * two unusual capabilities. First, its arguments needn't be provided one at a time.
 */
export function curryN(length: number, fn: (...args: readonly any[]) => any): (...a: readonly any[]) => any;

/**
 * Decrements its argument.
 */
export function dec(n: number): number;

/**
 * Returns the second argument if it is not null or undefined. If it is null or undefined, the
 * first (default) argument is returned.
 */
export function defaultTo<T, U>(a: T, b: U | null | undefined): T | U;
export function defaultTo<T>(a: T): <U>(b: U | null | undefined) => T | U;

/**
 * Makes a descending comparator function out of a function that returns a value that can be compared with < and >.
 */
export function descend<T>(fn: (obj: T) => any, a: T, b: T): number;
export function descend<T>(fn: (obj: T) => any): (a: T, b: T) => number;

/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not contained in the second list.
 */
export function difference<T>(list1: readonly T[], list2: readonly T[]): T[];
export function difference<T>(list1: readonly T[]): (list2: readonly T[]) => T[];

/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not contained in the second list.
 * Duplication is determined according to the value returned by applying the supplied predicate to two list
 * elements.
 */
export function differenceWith<T1, T2>(pred: (a: T1, b: T2) => boolean, list1: readonly T1[], list2: readonly T2[]): T1[];
export function differenceWith<T1, T2>(pred: (a: T1, b: T2) => boolean): (list1: readonly T1[], list2: readonly T2[]) => T1[];
export function differenceWith<T1, T2>(pred: (a: T1, b: T2) => boolean, list1: readonly T1[]): (list2: readonly T2[]) => T1[];

/*
    * Returns a new object that does not contain a prop property.
    */
// It seems impossible to infer the return type, so this may to be specified explicitely
export function dissoc<T>(prop: string, obj: any): T;
export function dissoc(prop: string): <U>(obj: any) => U;

/**
 * Makes a shallow clone of an object, omitting the property at the given path.
 */
export function dissocPath<T>(path: Path, obj: any): T;
export function dissocPath<T>(path: Path): (obj: any) => T;

/**
 * Divides two numbers. Equivalent to a / b.
 */
export function divide(__: Placeholder, b: number): (a: number) => number;
export function divide(__: Placeholder): (b: number, a: number) => number;
export function divide(a: number, b: number): number;
export function divide(a: number): (b: number) => number;

/**
 * Returns a new list containing all but the first n elements of the given list.
 */
export function drop<T>(n: number, xs: readonly T[]): T[];
export function drop(n: number, xs: string): string;
export function drop<T>(n: number): {
    (xs: string): string;
    (xs: readonly T[]): T[];
};

/**
 * Returns a list containing all but the last n elements of the given list.
 */
export function dropLast<T>(n: number, xs: readonly T[]): T[];
export function dropLast(n: number, xs: string): string;
export function dropLast<T>(n: number): {
    (xs: readonly T[]): T[];
    (xs: string): string;
};

/**
 * Returns a new list containing all but last then elements of a given list, passing each value from the
 * right to the supplied predicate function, skipping elements while the predicate function returns true.
 */
export function dropLastWhile<T>(fn: (a: T) => boolean, list: readonly T[]): T[];
export function dropLastWhile<T>(fn: (a: T) => boolean): (list: readonly T[]) => T[];

/**
 * Returns a new list without any consecutively repeating elements. R.equals is used to determine equality.
 */
export function dropRepeats<T>(list: readonly T[]): T[];

/**
 * Returns a new list without any consecutively repeating elements.
 * Equality is determined by applying the supplied predicate to each pair of consecutive elements.
 * The first element in a series of equal elements will be preserved.
 */
export function dropRepeatsWith<T>(predicate: (left: T, right: T) => boolean, list: readonly T[]): T[];
export function dropRepeatsWith<T>(predicate: (left: T, right: T) => boolean): (list: readonly T[]) => T[];

/**
 * Returns a new list containing the last n elements of a given list, passing each value to the supplied
 * predicate function, skipping elements while the predicate function returns true.
 */
export function dropWhile<T>(fn: (a: T) => boolean, list: readonly T[]): T[];
export function dropWhile<T>(fn: (a: T) => boolean): (list: readonly T[]) => T[];

/**
 * A function wrapping calls to the two functions in an || operation, returning the result of the first
 * function if it is truth-y and the result of the second function otherwise. Note that this is
 * short-circuited, meaning that the second function will not be invoked if the first returns a truth-y value.
 */
export function either(pred1: Pred, pred2: Pred): Pred;
export function either(pred1: Pred): (pred2: Pred) => Pred;

/**
 * Returns the empty value of its argument's type. Ramda defines the empty value of Array ([]), Object ({}),
 * String (''), and Arguments. Other types are supported if they define <Type>.empty and/or <Type>.prototype.empty.
 * Dispatches to the empty method of the first argument, if present.
 */
export function empty<T>(x: T): T;

/**
 * Checks if a list ends with the provided values
 */
export function endsWith(a: string, list: string): boolean;
export function endsWith(a: string): (list: string) => boolean;
export function endsWith<T>(a: T | readonly T[], list: readonly T[]): boolean;
export function endsWith<T>(a: T | readonly T[]): (list: readonly T[]) => boolean;

/**
 * Takes a function and two values in its domain and returns true if the values map to the same value in the
 * codomain; false otherwise.
 */
export function eqBy<T, U = T>(fn: (a: T) => U, a: T, b: T): boolean;
export function eqBy<T, U = T>(fn: (a: T) => U, a: T): (b: T) => boolean;
export function eqBy<T, U = T>(fn: (a: T) => U): _.F.Curry<(a: T, b: T) => boolean>;

/**
 * Reports whether two functions have the same value for the specified property.
 */
export function eqProps<T, U>(prop: string, obj1: T, obj2: U): boolean;
export function eqProps<P extends string>(prop: P): <T, U>(obj1: Record<P, T>, obj2: Record<P, U>) => boolean;
export function eqProps<T>(prop: string, obj1: T): <U>(obj2: U) => boolean;

/**
 * Returns true if its arguments are equivalent, false otherwise. Dispatches to an equals method if present.
 * Handles cyclical data structures.
 */
export function equals<T>(a: T, b: T): boolean;
export function equals<T>(a: T): (b: T) => boolean;

/**
 * Creates a new object by evolving a shallow copy of object, according to the transformation functions.
 */
export function evolve<E extends Evolver, V extends Evolvable<E>>(transformations: E, obj: V): Evolve<V, E>;
export function evolve<E extends Evolver>(transformations: E): <V extends Evolvable<E>>(obj: V) => Evolve<V, E>;

/*
* A function that always returns false. Any passed in parameters are ignored.
*/
export function F(): boolean;

/**
 * Returns a new list containing only those items that match a given predicate function. The predicate function is passed one argument: (value).
 */
export const filter: Filter;

/**
 * Returns the first element of the list which matches the predicate, or `undefined` if no
 * element matches.
 */
export function find<T>(fn: (a: T) => boolean, list: readonly T[]): T | undefined;
export function find<T>(fn: (a: T) => boolean): (list: readonly T[]) => T | undefined;

/**
 * Returns the index of the first element of the list which matches the predicate, or `-1`
 * if no element matches.
 */
export function findIndex<T>(fn: (a: T) => boolean, list: readonly T[]): number;
export function findIndex<T>(fn: (a: T) => boolean): (list: readonly T[]) => number;

/**
 * Returns the last element of the list which matches the predicate, or `undefined` if no
 * element matches.
 */
export function findLast<T>(fn: (a: T) => boolean, list: readonly T[]): T | undefined;
export function findLast<T>(fn: (a: T) => boolean): (list: readonly T[]) => T | undefined;

/**
 * Returns the index of the last element of the list which matches the predicate, or
 * `-1` if no element matches.
 */
export function findLastIndex<T>(fn: (a: T) => boolean, list: readonly T[]): number;
export function findLastIndex<T>(fn: (a: T) => boolean): (list: readonly T[]) => number;

/**
 * Returns a new list by pulling every item out of it (and all its sub-arrays) and putting
 * them in a new array, depth-first.
 */
export function flatten<T extends readonly any[]>(list: T): _.T.Flatten<T>;

/**
 * Returns a new function much like the supplied one, except that the first two arguments'
 * order is reversed.
 */
export function flip<T, U, TResult>(fn: (arg0: T, arg1: U) => TResult): (arg1: U, arg0?: T) => TResult;
export function flip<F extends (...args: any) => any, P extends _.F.Parameters<F>>(fn: F): _.F.Curry<(...args: _.T.Merge<[P[1], P[0]], P>) => _.F.Return<F>>;

/**
 * Iterate over an input list, calling a provided function fn for each element in the list.
 */
export function forEach<T>(fn: (x: T) => void, list: readonly T[]): T[];
export function forEach<T>(fn: (x: T) => void): (list: readonly T[]) => T[];
export function forEach<T>(fn: (x: T) => void, list: readonly T[]): T[];
export function forEach<T>(fn: (x: T) => void): (list: readonly T[]) => T[];

/**
 * Iterate over an input object, calling a provided function fn for each key and value in the object.
 */
export function forEachObjIndexed<T>(fn: (value: T[keyof T], key: keyof T, obj: T) => void, obj: T): T;
export function forEachObjIndexed<T>(fn: (value: T[keyof T], key: keyof T, obj: T) => void): (obj: T) => T;

/**
 * Creates a new object out of a list key-value pairs.
 */
export function fromPairs<V>(pairs: Array<KeyValuePair<string, V>>): { [index: string]: V };
export function fromPairs<V>(pairs: Array<KeyValuePair<number, V>>): { [index: number]: V };

/**
 * Splits a list into sublists stored in an object, based on the result of
 * calling a String-returning function
 * on each element, and grouping the results according to values returned.
 */
export function groupBy<T>(fn: (a: T) => string, list: readonly T[]): { [index: string]: T[] };
export function groupBy<T>(fn: (a: T) => string): (list: readonly T[]) => { [index: string]: T[] };

/**
 * Takes a list and returns a list of lists where each sublist's elements are all "equal" according to the provided equality function
 */
export function groupWith<T>(fn: (x: T, y: T) => boolean): (list: readonly T[]) => T[][];
export function groupWith<T>(fn: (x: T, y: T) => boolean, list: readonly T[]): T[][];
export function groupWith<T>(fn: (x: T, y: T) => boolean, list: string): string[];

/**
 * Returns true if the first parameter is greater than the second.
 */
export function gt(__: Placeholder, b: number): (a: number) => boolean;
export function gt(__: Placeholder): (b: number, a: number) => boolean;
export function gt(a: number, b: number): boolean;
export function gt(a: number): (b: number) => boolean;

/**
 * Returns true if the first parameter is greater than or equal to the second.
 */
export function gte(__: Placeholder, b: number): (a: number) => boolean;
export function gte(__: Placeholder): (b: number, a: number) => boolean;
export function gte(a: number, b: number): boolean;
export function gte(a: number): (b: number) => boolean;

/**
 * Returns whether or not an object has an own property with the specified name.
 */
export function has<T>(__: Placeholder, obj: T): (s: string) => boolean;
export function has<T>(__: Placeholder): (obj: T, s: string) => boolean;
export function has<T>(s: string, obj: T): boolean;
export function has(s: string): <T>(obj: T) => boolean;

/**
 * Returns whether or not an object or its prototype chain has a property with the specified name
 */
export function hasIn<T>(s: string, obj: T): boolean;
export function hasIn(s: string): <T>(obj: T) => boolean;

/**
 * Returns whether or not a path exists in an object. Only the object's own properties are checked.
 */
export function hasPath<T>(list: readonly string[], obj: T): boolean;
export function hasPath(list: readonly string[]): <T>(obj: T) => boolean;

/**
 * Returns the first element in a list.
 * In some libraries this function is named `first`.
 */
export function head(str: string): string;
export function head(list: readonly []): undefined;
export function head<T extends any>(list: readonly T[]): T | undefined;

/**
 * Returns true if its arguments are identical, false otherwise. Values are identical if they reference the
 * same memory. NaN is identical to NaN; 0 and -0 are not identical.
 */
export function identical<T>(a: T, b: T): boolean;
export function identical<T>(a: T): (b: T) => boolean;

/**
 * A function that does nothing but return the parameter supplied to it. Good as a default
 * or placeholder function.
 */
export function identity<T>(a: T): T;

/**
 * Creates a function that will process either the onTrue or the onFalse function depending upon the result
 * of the condition predicate.
 */
export function ifElse(fn: Pred, onTrue: Arity1Fn, onFalse: Arity1Fn): Arity1Fn;
export function ifElse(fn: Pred, onTrue: Arity2Fn, onFalse: Arity2Fn): Arity2Fn;

/**
 * Increments its argument.
 */
export function inc(n: number): number;

/**
 * Given a target, this function checks a list for the target and returns a boolean.
 * Given a string, this function checks for the string in another string or list and returns
 * a boolean.
 */
export function includes(s: string, list: readonly string[] | string): boolean;
export function includes(s: string): (list: readonly string[] | string)  => boolean;
export function includes<T>(target: T, list: readonly T[]): boolean;
export function includes<T>(target: T): (list: readonly T[]) => boolean;

/**
 * Given a function that generates a key, turns a list of objects into an object indexing the objects
 * by the given key.
 */
export function indexBy<T>(fn: (a: T) => string, list: readonly T[]): { [key: string]: T };
export function indexBy<T>(fn: (a: T) => string): (list: readonly T[]) => { [key: string]: T };

/**
 * Returns the position of the first occurrence of an item in an array
 * (by strict equality),
 * or -1 if the item is not included in the array.
 */
export function indexOf<T>(target: T, list: readonly T[]): number;
export function indexOf<T>(target: T): (list: readonly T[]) => number;

/**
 * Returns all but the last element of a list or string.
 */
export function init<T>(list: readonly T[]): T[];
export function init(list: string): string;

/**
 * Takes a predicate `pred`, a list `xs`, and a list `ys`, and returns a list
 * `xs'` comprising each of the elements of `xs` which is equal to one or more
 * elements of `ys` according to `pred`.
 *
 * `pred` must be a binary function expecting an element from each list.
 *
 * `xs`, `ys`, and `xs'` are treated as sets, semantically, so ordering should
 * not be significant, but since `xs'` is ordered the implementation guarantees
 * that its values are in the same order as they appear in `xs`. Duplicates are
 * not removed, so `xs'` may contain duplicates if `xs` contains duplicates.
 */

export function innerJoin<T1, T2>(pred: (a: T1, b: T2) => boolean, list1: readonly T1[], list2: readonly T2[]): T1[];
export function innerJoin<T1, T2>(pred: (a: T1, b: T2) => boolean): (list1: readonly T1[], list2: readonly T2[]) => T1[];
export function innerJoin<T1, T2>(pred: (a: T1, b: T2) => boolean, list1: readonly T1[]): (list2: readonly T2[]) => T1[];

/**
 * Inserts the supplied element into the list, at index index. Note that
 * this is not destructive: it returns a copy of the list with the changes.
 */
export function insert<T>(index: number, elt: T, list: readonly T[]): T[];
export function insert<T>(index: number, elt: T): (list: readonly T[]) => T[];
export function insert(index: number): <T>(elt: T, list: readonly T[]) => T[];

/**
 * Inserts the sub-list into the list, at index `index`.  _Note  that this
 * is not destructive_: it returns a copy of the list with the changes.
 */
export function insertAll<T>(index: number, elts: readonly T[], list: readonly T[]): T[];
export function insertAll<T>(index: number, elts: readonly T[]): (list: readonly T[]) => T[];
export function insertAll(index: number): <T>(elts: readonly T[], list: readonly T[]) => T[];

/**
 * Combines two lists into a set (i.e. no duplicates) composed of those elements common to both lists.
 */
export function intersection<T>(list1: readonly T[], list2: readonly T[]): T[];
export function intersection<T>(list1: readonly T[]): (list2: readonly T[]) => T[];

/**
 * Combines two lists into a set (i.e. no duplicates) composed of those
 * elements common to both lists.  Duplication is determined according
 * to the value returned by applying the supplied predicate to two list
 * elements.
 */
export function intersectionWith<T>(pred: (a: T, b: T) => boolean, list1: readonly T[], list2: readonly T[]): T[];

/**
 * Creates a new list with the separator interposed between elements.
 */
export function intersperse<T>(separator: T, list: readonly T[]): T[];
export function intersperse<T>(separator: T): (list: readonly T[]) => T[];

/**
 * Transforms the items of the list with the transducer and appends the transformed items to the accumulator
 * using an appropriate iterator function based on the accumulator type.
 */
export function into<T>(acc: any, xf: (...a: readonly any[]) => any, list: readonly T[]): T[];
export function into(acc: any, xf: (...a: readonly any[]) => any): <T>(list: readonly T[]) => T[];
export function into(acc: any): <T>(xf: (...a: readonly any[]) => any, list: readonly T[]) => T[];

/**
 * Same as R.invertObj, however this accounts for objects with duplicate values by putting the values into an array.
 */
export function invert<T>(obj: T): { [index: string]: string[] };

/**
 * Returns a new object with the keys of the given object as values, and the values of the given object as keys.
 */
export function invertObj(obj: { [index: string]: string } | { [index: number]: string }): { [index: string]: string };

/**
 * Turns a named method with a specified arity into a function that can be called directly
 * supplied with arguments and a target object.
 *
 * The returned function is curried and accepts `arity + 1` parameters where the final
 * parameter is the target object.
 */
export function invoker(arity: number, method: string): (...a: readonly any[]) => any;

/**
 * See if an object (`val`) is an instance of the supplied constructor.
 * This function will check up the inheritance chain, if any.
 */
export function is(ctor: any, val: any): boolean;
export function is(ctor: any): (val: any) => boolean;

/**
 * Reports whether the list has zero elements.
 */
export function isEmpty(value: any): boolean;

/**
 * Checks if the input value is null or undefined.
 */
export function isNil(value: any): value is null | undefined;

/**
 * Returns a string made by inserting the `separator` between each
 * element and concatenating all the elements into a single string.
 */
export function join(x: string, xs: readonly any[]): string;
export function join(x: string): (xs: readonly any[]) => string;

/**
 * Applies a list of functions to a list of values.
 */
export function juxt<A extends any[], R1, R2>(fns: [(...a: A) => R1, (...a: A) => R2]): (...a: A) => [R1, R2];
export function juxt<A extends any[], R1, R2, R3>(fns: [(...a: A) => R1, (...a: A) => R2, (...a: A) => R3]): (...a: A) => [R1, R2, R3];
export function juxt<A extends any[], R1, R2, R3, R4>(fns: [(...a: A) => R1, (...a: A) => R2, (...a: A) => R3, (...a: A) => R4]): (...a: A) => [R1, R2, R3, R4];
export function juxt<A extends any[], R1, R2, R3, R4, R5>(fns: [(...a: A) => R1, (...a: A) => R2, (...a: A) => R3, (...a: A) => R4, (...a: A) => R5]): (...a: A) => [R1, R2, R3, R4, R5];
export function juxt<A extends any[], U>(fns: Array<(...args: A) => U>): (...args: A) => U[];

/**
 * Returns a list containing the names of all the enumerable own
 * properties of the supplied object.
 */
export function keys<T extends object>(x: T): Array<keyof T>;
export function keys<T>(x: T): string[];

/**
 * Returns a list containing the names of all the
 * properties of the supplied object, including prototype properties.
 */
export function keysIn<T>(obj: T): string[];

/**
 * Returns the last element from a list.
 */
export function last(str: string): string;
export function last(list: readonly []): undefined;
export function last<T extends any>(list: readonly T[]): T | undefined;

/**
 * Returns the position of the last occurrence of an item (by strict equality) in
 * an array, or -1 if the item is not included in the array.
 */
export function lastIndexOf<T>(target: T, list: readonly T[]): number;

/**
 * Returns the number of elements in the array by returning list.length.
 */
export function length<T>(list: readonly T[]): number;

/**
 * Returns a lens for the given getter and setter functions. The getter
 * "gets" the value of the focus; the setter "sets" the value of the focus.
 * The setter should not mutate the data structure.
 */
export function lens<T, U, V>(getter: (s: T) => U, setter: (a: U, s: T) => V): Lens;

/**
 * Creates a lens that will focus on index n of the source array.
 */
export function lensIndex(n: number): Lens;

/**
 * Returns a lens whose focus is the specified path.
 * See also view, set, over.
 */
export function lensPath(path: Path): Lens;

/**
 * lensProp creates a lens that will focus on property k of the source object.
 */
export function lensProp(str: string): {
    <T, U>(obj: T): U;
    set<T, U, V>(val: T, obj: U): V;
    /*map<T>(fn: (...a: readonly any[]) => any, obj: T): T*/
};

/**
 * "lifts" a function of arity > 1 so that it may "map over" a list, Function or other object that satisfies
 * the FantasyLand Apply spec.
 */
export function lift(fn: ((...a: readonly any[]) => any), ...args: readonly any[]): any;

/**
 * "lifts" a function to be the specified arity, so that it may "map over" that many lists, Functions or other
 * objects that satisfy the FantasyLand Apply spec.
 */
export function liftN(n: number, fn: ((...a: readonly any[]) => any), ...args: readonly any[]): any;

/**
 * Returns true if the first parameter is less than the second.
 */
export function lt(__: Placeholder, b: number): (a: number) => boolean;
export function lt(__: Placeholder): (b: number, a: number) => boolean;
export function lt(a: number, b: number): boolean;
export function lt(a: number): (b: number) => boolean;

/**
 * Returns true if the first parameter is less than or equal to the second.
 */
export function lte(__: Placeholder, b: number): (a: number) => boolean;
export function lte(__: Placeholder): (b: number, a: number) => boolean;
export function lte(a: number, b: number): boolean;
export function lte(a: number): (b: number) => boolean;

/**
 * Returns a new list, constructed by applying the supplied function to every element of the supplied list.
 */
export function map<T, U>(fn: (x: T) => U, list: readonly T[]): U[];
export function map<T, U>(fn: (x: T) => U): (list: readonly T[]) => U[];
export function map<T, U>(fn: (x: T[keyof T & keyof U]) => U[keyof T & keyof U], list: T): U;
export function map<T, U>(fn: (x: T[keyof T & keyof U]) => U[keyof T & keyof U]): (list: T) => U;
export function map<T, U>(fn: (x: T) => U, obj: Functor<T>): Functor<U>; // used in functors
export function map<T, U>(fn: (x: T) => U): (obj: Functor<T>) => Functor<U>; // used in functors

/**
 * The mapAccum function behaves like a combination of map and reduce.
 */
export function mapAccum<T, U, TResult>(fn: (acc: U, value: T) => [U, TResult], acc: U, list: readonly T[]): [U, TResult[]];
export function mapAccum<T, U, TResult>(fn: (acc: U, value: T) => [U, TResult]): (acc: U, list: readonly T[]) => [U, TResult[]];
export function mapAccum<T, U, TResult>(fn: (acc: U, value: T) => [U, TResult], acc: U): (list: readonly T[]) => [U, TResult[]];

/**
 * The mapAccumRight function behaves like a combination of map and reduce.
 */
export function mapAccumRight<T, U, TResult>(fn: (acc: U, value: T) => [U, TResult], acc: U, list: readonly T[]): [U, TResult[]];
export function mapAccumRight<T, U, TResult>(fn: (acc: U, value: T) => [U, TResult]): (acc: U, list: readonly T[]) => [U, TResult[]];
export function mapAccumRight<T, U, TResult>(fn: (acc: U, value: T) => [U, TResult], acc: U): (list: readonly T[]) => [U, TResult[]];

/**
 * Like mapObj, but but passes additional arguments to the predicate function.
 */
export function mapObjIndexed<T, TResult, TKey extends string>(
    fn: (value: T, key: TKey, obj?: Record<TKey, T>) => TResult,
    obj: Record<TKey, T>
): Record<TKey, TResult>;
export function mapObjIndexed<T, TResult, TKey extends string>(
    fn: (value: T, key: TKey, obj?: Record<TKey, T>) => TResult
): (obj: Record<TKey, T>) =>  Record<TKey, TResult>;
export function mapObjIndexed<T, TResult>(
    fn: (value: T, key: string, obj?: {
        [key: string]: T
    }) => TResult,
    obj: {
        [key: string]: T
    }
): {
    [key: string]: TResult
};
export function mapObjIndexed<T, TResult>(fn: (value: T, key: string, obj?: any) => TResult, obj: any): { [index: string]: TResult };
export function mapObjIndexed<T, TResult>(fn: (value: T, key: string, obj?: any) => TResult): (obj: any) => { [index: string]: TResult };

/**
 * Tests a regular expression agains a String
 */
export function match(regexp: RegExp, str: string): string[];
export function match(regexp: RegExp): (str: string) => string[];

/**
 * mathMod behaves like the modulo operator should mathematically, unlike the `%`
 * operator (and by extension, R.modulo). So while "-17 % 5" is -2,
 * mathMod(-17, 5) is 3. mathMod requires Integer arguments, and returns NaN
 * when the modulus is zero or negative.
 */
export function mathMod(__: Placeholder, b: number): (a: number) => number;
export function mathMod(__: Placeholder): (b: number, a: number) => number;
export function mathMod(a: number, b: number): number;
export function mathMod(a: number): (b: number) => number;

/**
 * Returns the larger of its two arguments.
 */
export function max<T extends Ord>(a: T, b: T): T;
export function max<T extends Ord>(a: T): (b: T) => T;

/**
 * Takes a function and two values, and returns whichever value produces
 * the larger result when passed to the provided function.
 */
export function maxBy<T>(keyFn: (a: T) => Ord, a: T, b: T): T;
export function maxBy<T>(keyFn: (a: T) => Ord, a: T): (b: T) => T;
export function maxBy<T>(keyFn: (a: T) => Ord): _.F.Curry<(a: T, b: T) => T>;

/**
 * Returns the mean of the given list of numbers.
 */
export function mean(list: readonly number[]): number;

/**
 * Returns the median of the given list of numbers.
 */
export function median(list: readonly number[]): number;

/**
 * Creates a new function that, when invoked, caches the result of calling fn for a given argument set and returns the result.
 * Subsequent calls to the memoized fn with the same argument set will not result in an additional call to fn; instead, the cached result for that set of arguments will be returned.
 */
export function memoizeWith<T extends (...args: readonly any[]) => any>(keyFn: (...v: Parameters<T>) => string, fn: T): T;

/**
 * Create a new object with the own properties of a
 * merged with the own properties of object b.
 * This function will *not* mutate passed-in objects.
 *
 * @deprecated since 0.26 in favor of mergeRight
 */
export function merge<O2 extends object>(__: Placeholder, b: O2): <O1 extends object>(a: O1) => Merge<O2, O1, 'flat'>;
export function merge(__: Placeholder): <O1 extends object, O2 extends object>(b: O2, a: O1) => Merge<O2, O1, 'flat'>;
export function merge<O1 extends object, O2 extends object>(a: O1, b: O2): Merge<O2, O1, 'flat'>;
export function merge<O1 extends object>(a: O1): <O2 extends object>(b: O2) => Merge<O2, O1, 'flat'>;

/**
 * Merges a list of objects together into one object.
 */
export function mergeAll<Os extends readonly object[]>(list: Os): MergeAll<Os>;
/**
 * Creates a new object with the own properties of the first object merged with the own properties of the second object.
 * If a key exists in both objects:
 * and both values are objects, the two values will be recursively merged
 * otherwise the value from the first object will be used.
 */
export function mergeDeepLeft<O1 extends object, O2 extends object>(o1: O1, o2: O2): Merge<O1, O2, 'deep'>;
export function mergeDeepLeft<O1 extends object>(o1: O1): <O2 extends object>(o2: O2) => Merge<O1, O2, 'deep'>;

/**
 * Creates a new object with the own properties of the first object merged with the own properties of the second object.
 * If a key exists in both objects:
 * and both values are objects, the two values will be recursively merged
 * otherwise the value from the second object will be used.
 */
export function mergeDeepRight<O1 extends object, O2 extends object>(o1: O1, o2: O2): Merge<O2, O1, 'deep'>;
export function mergeDeepRight<O1 extends object>(a: O1): <O2 extends object>(o2: O2) => Merge<O2, O1, 'deep'>;

/**
 * Creates a new object with the own properties of the two provided objects. If a key exists in both objects:
 * and both associated values are also objects then the values will be recursively merged.
 * otherwise the provided function is applied to associated values using the resulting value as the new value
 * associated with the key. If a key only exists in one object, the value will be associated with the key of the resulting object.
 */
export function mergeDeepWith<T1, T2>(fn: (x: any, z: any) => any, a: T1, b: T2): any;
export function mergeDeepWith<T1, T2>(fn: (x: any, z: any) => any, a: T1): (b: T2) => any;
export function mergeDeepWith<T1, T2>(fn: (x: any, z: any) => any): (a: T1, b: T2) => any;

/**
 * Creates a new object with the own properties of the two provided objects. If a key exists in both objects:
 * and both associated values are also objects then the values will be recursively merged.
 * otherwise the provided function is applied to the key and associated values using the resulting value as
 * the new value associated with the key. If a key only exists in one object, the value will be associated with
 * the key of the resulting object.
 */
export function mergeDeepWithKey<T1, T2>(fn: (k: string, x: any, z: any) => any, a: T1, b: T2): any;
export function mergeDeepWithKey<T1, T2>(fn: (k: string, x: any, z: any) => any, a: T1): (b: T2) => any;
export function mergeDeepWithKey<T1, T2>(fn: (k: string, x: any, z: any) => any): (a: T1, b: T2) => any;

/**
 * Create a new object with the own properties of the first object merged with the own properties of the second object.
 * If a key exists in both objects, the value from the first object will be used.
 */
export function mergeLeft<O1 extends object, O2 extends object>(a: O1, b: O2): Merge<O1, O2, 'flat'>;
export function mergeLeft<O1 extends object>(a: O1): <O2 extends object>(b: O2) => Merge<O1, O2, 'flat'>;

/**
 * Create a new object with the own properties of the first object merged with the own properties of the second object.
 * If a key exists in both objects, the value from the second object will be used.
 */
export function mergeRight<O1 extends object, O2 extends object>(a: O1, b: O2): Merge<O2, O1, 'flat'>;
export function mergeRight<O1 extends object>(a: O1): <O2 extends object>(b: O2) => Merge<O2, O1, 'flat'>;

/**
 * Creates a new object with the own properties of the two provided objects. If a key exists in both objects,
 * the provided function is applied to the values associated with the key in each object, with the result being used as
 * the value associated with the key in the returned object. The key will be excluded from the returned object if the
 * resulting value is undefined.
 */
export function mergeWith<U, V>(fn: (x: any, z: any) => any, a: U, b: V): any;
export function mergeWith<U>(fn: (x: any, z: any) => any, a: U): <V>(b: V) => any;
export function mergeWith(fn: (x: any, z: any) => any): <U, V>(a: U, b: V) => any;

/**
 * Creates a new object with the own properties of the two provided objects. If a key exists in both objects,
 * the provided function is applied to the key and the values associated with the key in each object, with the
 * result being used as the value associated with the key in the returned object. The key will be excluded from
 * the returned object if the resulting value is undefined.
 */
export function mergeWithKey<U, V>(fn: (str: string, x: any, z: any) => any, a: U, b: V): any;
export function mergeWithKey<U>(fn: (str: string, x: any, z: any) => any, a: U): <V>(b: V) => any;
export function mergeWithKey(fn: (str: string, x: any, z: any) => any): <U, V>(a: U, b: V) => any;

/**
 * Returns the smaller of its two arguments.
 */
export function min<T extends Ord>(a: T, b: T): T;
export function min<T extends Ord>(a: T): (b: T) => T;

/**
 * Takes a function and two values, and returns whichever value produces
 * the smaller result when passed to the provided function.
 */
export function minBy<T>(keyFn: (a: T) => Ord, a: T, b: T): T;
export function minBy<T>(keyFn: (a: T) => Ord, a: T): (b: T) => T;
export function minBy<T>(keyFn: (a: T) => Ord): _.F.Curry<(a: T, b: T) => T>;

/**
 * Divides the second parameter by the first and returns the remainder.
 * The flipped version (`moduloBy`) may be more useful curried.
 * Note that this functions preserves the JavaScript-style behavior for
 * modulo. For mathematical modulo see `mathMod`
 */
export function modulo(__: Placeholder, b: number): (a: number) => number;
export function modulo(__: Placeholder): (b: number, a: number) => number;
export function modulo(a: number, b: number): number;
export function modulo(a: number): (b: number) => number;

/**
 * Multiplies two numbers. Equivalent to a * b but curried.
 */
export function multiply(a: number, b: number): number;
export function multiply(a: number): (b: number) => number;

/**
 * Moves an item, at index `from`, to index `to`, in a `list` of elements.
 * A new list will be created containing the new elements order.
 */
export function move<T>(from: number, to: number, list: readonly T[]): T[];
export function move(from: number, to: number): <T>(list: readonly T[]) => T[];
export function move(from: number): {
    <T>(to: number, list: readonly T[]): T[];
    (to: number): <T>(list: readonly T[]) => T[];
};

/**
 * Wraps a function of any arity (including nullary) in a function that accepts exactly n parameters.
 * Any extraneous parameters will not be passed to the supplied function.
 */
export function nAry(n: number, fn: (...arg: readonly any[]) => any): (...a: readonly any[]) => any;
export function nAry(n: number): (fn: (...arg: readonly any[]) => any) => (...a: readonly any[]) => any;

/**
 * Negates its argument.
 */
export function negate(n: number): number;

/**
 * Returns true if no elements of the list match the predicate, false otherwise.
 */
export function none<T>(fn: (a: T) => boolean, list: readonly T[]): boolean;
export function none<T>(fn: (a: T) => boolean): (list: readonly T[]) => boolean;

/**
 * A function wrapping a call to the given function in a `!` operation.  It will return `true` when the
 * underlying function would return a false-y value, and `false` when it would return a truth-y one.
 */
export function not(value: any): boolean;

/**
 * Returns the nth element in a list.
 */
export function nth<T>(n: number, list: readonly T[]): T | undefined;
export function nth(n: number): <T>(list: readonly T[]) => T | undefined;

/**
 * Returns a function which returns its nth argument.
 */
export function nthArg(n: number): (...a: readonly any[]) => any;

/**
 * o is a curried composition function that returns a unary function. Like compose, o performs right-to-left function composition.
 * Unlike compose, the rightmost function passed to o will be invoked with only one argument.
 * Also, unlike compose, o is limited to accepting only 2 unary functions.
 * The name o was chosen because of its similarity to the mathematical composition operator ∘.
 */
export function o<T1, T2, R>(f: (x: T2) => R, g: (x: T1) => T2, v: T1): R;
export function o<T1, T2, R>(f: (x: T2) => R, g: (x: T1) => T2): (v: T1) => R;
export function o<T2, R>(
    f: (x: T2) => R,
): {
    <T1>(g: (x: T1) => T2, v: T1): R;
    <T1>(g: (x: T1) => T2): (v: T1) => R;
};

/**
 * Creates an object containing a single key:value pair.
 */
export function objOf<T, K extends string>(key: K, value: T): Record<K, T>;
export function objOf<K extends string>(key: K): <T>(value: T) => Record<K, T>;

/**
 * Returns a singleton array containing the value provided.
 */
export function of<T>(x: T): T[];

/**
 * Returns a partial copy of an object omitting the keys specified.
 */
export function omit<T, K extends string>(names: readonly K[], obj: T): Omit<T, K>;
export function omit<K extends string>(names: readonly K[]): <T>(obj: T) => Omit<T, K>;

/**
 * Accepts a function fn and returns a function that guards invocation of fn such that fn can only ever be
 * called once, no matter how many times the returned function is invoked. The first value calculated is
 * returned in subsequent invocations.
 */
export function once(fn: (...a: readonly any[]) => any): (...a: readonly any[]) => any;
export function once<T>(fn: (...a: readonly any[]) => T): (...a: readonly any[]) => T;

/**
 * A function that returns the first truthy of two arguments otherwise the last argument. Note that this is
 * NOT short-circuited, meaning that if expressions are passed they are both evaluated.
 * Dispatches to the or method of the first argument if applicable.
 */
export function or<T, U>(a: T, b: U): T | U;
export function or<T>(a: T): <U>(b: U) => T | U;
export function or<T extends { or?: ((...a: readonly any[]) => any); }, U>(fn1: T, val2: U): T | U;
export function or<T extends { or?: ((...a: readonly any[]) => any); }>(fn1: T): <U>(val2: U) => T | U;

/**
 * Returns the result of applying the onFailure function to the value inside a failed promise.
 * This is useful for handling rejected promises inside function compositions.
 */
export function otherwise<A, B>(onError: (error: any) => B | Promise<B>, promise: Promise<A>): Promise<B>;
export function otherwise<A, B>(onError: (error: any) => B | Promise<B>): (promise: Promise<A>) => Promise<B>;

/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the given value.
 */
export function over<T>(lens: Lens, fn: Arity1Fn, value: T): T;
export function over<T>(lens: Lens, fn: Arity1Fn, value: readonly T[]): T[];
export function over(lens: Lens, fn: Arity1Fn): <T>(value: T) => T;
export function over(lens: Lens, fn: Arity1Fn): <T>(value: readonly T[]) => T[];
export function over(lens: Lens): <T>(fn: Arity1Fn, value: T) => T;
export function over(lens: Lens): <T>(fn: Arity1Fn, value: readonly T[]) => T[];

/**
 * Takes two arguments, fst and snd, and returns [fst, snd].
 */
export function pair<F, S>(fst: F, snd: S): [F, S];

/**
 * Takes a function `f` and a list of arguments, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the arguments
 * provided initially followed by the arguments provided to `g`.
 */
export function partial<V0, V1, T>(fn: (x0: V0, x1: V1) => T, args: [V0]): (x1: V1) => T;

export function partial<V0, V1, V2, T>(fn: (x0: V0, x1: V1, x2: V2) => T, args: [V0, V1]): (x2: V2) => T;
export function partial<V0, V1, V2, T>(fn: (x0: V0, x1: V1, x2: V2) => T, args: [V0]): (x1: V1, x2: V2) => T;

export function partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, args: [V0, V1, V2]): (x2: V3) => T;
export function partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, args: [V0, V1]): (x2: V2, x3: V3) => T;
export function partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, args: [V0]): (x1: V1, x2: V2, x3: V3) => T;

export function partial<T>(fn: (...a: readonly any[]) => T, args: readonly any[]): (...a: readonly any[]) => T;

/**
 * Takes a function `f` and a list of arguments, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the arguments
 * provided to `g` followed by the arguments provided initially.
 */
export function partialRight<V0, V1, T>(fn: (x0: V0, x1: V1) => T, args: [V1]): (x1: V0) => T;

export function partialRight<V0, V1, V2, T>(fn: (x0: V0, x1: V1, x2: V2) => T, args: [V1, V2]): (x2: V0) => T;
export function partialRight<V0, V1, V2, T>(fn: (x0: V0, x1: V1, x2: V2) => T, args: [V2]): (x1: V0, x2: V1) => T;

export function partialRight<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, args: [V1, V2, V3]): (x0: V0) => T;
export function partialRight<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, args: [V2, V3]): (x0: V0, x1: V1) => T;
export function partialRight<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, args: [V3]): (x0: V0, x1: V1, x2: V2) => T;

export function partialRight<T>(fn: (...a: readonly any[]) => T, args: readonly any[]): (...a: readonly any[]) => T;

/**
 * Takes a predicate and a list and returns the pair of lists of elements
 * which do and do not satisfy the predicate, respectively.
 */
export function partition(fn: (a: string) => boolean, list: readonly string[]): [string[], string[]];
export function partition<T>(fn: (a: T) => boolean, list: readonly T[]): [T[], T[]];
export function partition<T>(fn: (a: T) => boolean): (list: readonly T[]) => [T[], T[]];
export function partition(fn: (a: string) => boolean): (list: readonly string[]) => [string[], string[]];

/**
 * Retrieve the value at a given path.
 */
export function path<T>(path: Path, obj: any): T | undefined;
export function path<T>(path: Path): (obj: any) => T | undefined;

/**
 * Determines whether a nested path on an object has a specific value,
 * in `R.equals` terms. Most likely used to filter a list.
 */
export function pathEq(path: Path, val: any, obj: any): boolean;
export function pathEq(path: Path, val: any): (obj: any) => boolean;
export function pathEq(path: Path): _.F.Curry<(a: any, b: any) => boolean>;

/**
 * If the given, non-null object has a value at the given path, returns the value at that path.
 * Otherwise returns the provided default value.
 */
export function pathOr<T>(defaultValue: T, path: Path, obj: any): T;
export function pathOr<T>(defaultValue: T, path: Path): (obj: any) => T;
export function pathOr<T>(defaultValue: T): _.F.Curry<(a: Path, b: any) => T>;

/**
 * Returns true if the specified object property at given path satisfies the given predicate; false otherwise.
 */
export function pathSatisfies<T, U>(pred: (val: T) => boolean, path: Path, obj: U): boolean;
export function pathSatisfies<T, U>(pred: (val: T) => boolean, path: Path): (obj: U) => boolean;
export function pathSatisfies<T, U>(pred: (val: T) => boolean): _.F.Curry<(a: Path, b: U) => boolean>;

/**
 * Returns a partial copy of an object containing only the keys specified.  If the key does not exist, the
 * property is ignored.
 */
export function pick<T, K extends string>(names: readonly K[], obj: T): Pick<T, Exclude<keyof T, Exclude<keyof T, K>>>;
export function pick<K extends string>(names: readonly K[]): <T>(obj: T) => Pick<T, Exclude<keyof T, Exclude<keyof T, K>>>;

/**
 * Similar to `pick` except that this one includes a `key: undefined` pair for properties that don't exist.
 */
export function pickAll<T, U>(names: readonly string[], obj: T): U;
export function pickAll(names: readonly string[]): <T, U>(obj: T) => U;

/**
 * Returns a partial copy of an object containing only the keys that satisfy the supplied predicate.
 */
export function pickBy<T, U>(pred: ObjPred, obj: T): U;
export function pickBy(pred: ObjPred): <T, U>(obj: T) => U;

/**
 * Creates a new function that runs each of the functions supplied as parameters in turn,
 * passing the return value of each function invocation to the next function invocation,
 * beginning with whatever arguments were passed to the initial invocation.
 */
// tslint:disable:max-line-length
export function pipe<T1>(fn0: () => T1): () => T1;
export function pipe<V0, T1>(fn0: (x0: V0) => T1): (x0: V0) => T1;
export function pipe<V0, V1, T1>(fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T1;
export function pipe<V0, V1, V2, T1>(fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T1;

export function pipe<T1, T2>(fn0: () => T1, fn1: (x: T1) => T2): () => T2;
export function pipe<V0, T1, T2>(fn0: (x0: V0) => T1, fn1: (x: T1) => T2): (x0: V0) => T2;
export function pipe<V0, V1, T1, T2>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2): (x0: V0, x1: V1) => T2;
export function pipe<V0, V1, V2, T1, T2>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2): (x0: V0, x1: V1, x2: V2) => T2;

export function pipe<T1, T2, T3>(fn0: () => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): () => T3;
export function pipe<V0, T1, T2, T3>(fn0: (x: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): (x: V0) => T3;
export function pipe<V0, V1, T1, T2, T3>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): (x0: V0, x1: V1) => T3;
export function pipe<V0, V1, V2, T1, T2, T3>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): (x0: V0, x1: V1, x2: V2) => T3;

export function pipe<T1, T2, T3, T4>(fn0: () => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4): () => T4;
export function pipe<V0, T1, T2, T3, T4>(fn0: (x: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4): (x: V0) => T4;
export function pipe<V0, V1, T1, T2, T3, T4>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4): (x0: V0, x1: V1) => T4;
export function pipe<V0, V1, V2, T1, T2, T3, T4>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4): (x0: V0, x1: V1, x2: V2) => T4;

export function pipe<T1, T2, T3, T4, T5>(fn0: () => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5): () => T5;
export function pipe<V0, T1, T2, T3, T4, T5>(fn0: (x: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5): (x: V0) => T5;
export function pipe<V0, V1, T1, T2, T3, T4, T5>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5): (x0: V0, x1: V1) => T5;
export function pipe<V0, V1, V2, T1, T2, T3, T4, T5>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5): (x0: V0, x1: V1, x2: V2) => T5;

export function pipe<T1, T2, T3, T4, T5, T6>(fn0: () => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6): () => T6;
export function pipe<V0, T1, T2, T3, T4, T5, T6>(fn0: (x: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6): (x: V0) => T6;
export function pipe<V0, V1, T1, T2, T3, T4, T5, T6>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6): (x0: V0, x1: V1) => T6;
export function pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6): (x0: V0, x1: V1, x2: V2) => T6;

export function pipe<T1, T2, T3, T4, T5, T6, T7>(fn0: () => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn: (x: T6) => T7): () => T7;
export function pipe<V0, T1, T2, T3, T4, T5, T6, T7>(fn0: (x: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn: (x: T6) => T7): (x: V0) => T7;
export function pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7): (x0: V0, x1: V1) => T7;
export function pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7): (x0: V0, x1: V1, x2: V2) => T7;

export function pipe<T1, T2, T3, T4, T5, T6, T7, T8>(fn0: () => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7, fn: (x: T7) => T8): () => T8;
export function pipe<V0, T1, T2, T3, T4, T5, T6, T7, T8>(fn0: (x: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7, fn: (x: T7) => T8): (x: V0) => T8;
export function pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7, fn7: (x: T7) => T8): (x0: V0, x1: V1) => T8;
export function pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7, fn7: (x: T7) => T8): (x0: V0, x1: V1, x2: V2) => T8;

export function pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn0: () => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7, fn7: (x: T7) => T8, fn8: (x: T8) => T9): () => T9;
export function pipe<V0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn0: (x0: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7, fn7: (x: T7) => T8, fn8: (x: T8) => T9): (x0: V0) => T9;
export function pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7, fn7: (x: T7) => T8, fn8: (x: T8) => T9): (x0: V0, x1: V1) => T9;
export function pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7, fn7: (x: T7) => T8, fn8: (x: T8) => T9): (x0: V0, x1: V1, x2: V2) => T9;

export function pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(fn0: () => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7, fn7: (x: T7) => T8, fn8: (x: T8) => T9, fn9: (x: T9) => T10): () => T10;
export function pipe<V0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(fn0: (x0: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7, fn7: (x: T7) => T8, fn8: (x: T8) => T9, fn9: (x: T9) => T10): (x0: V0) => T10;
export function pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7, fn7: (x: T7) => T8, fn8: (x: T8) => T9, fn9: (x: T9) => T10): (x0: V0, x1: V1) => T10;
export function pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7, fn7: (x: T7) => T8, fn8: (x: T8) => T9, fn9: (x: T9) => T10): (x0: V0, x1: V1, x2: V2) => T10;
// tslint:enable:max-line-length

/**
 * Returns the left-to-right Kleisli composition of the provided functions, each of which must return a value of a type supported by chain.
 * The typings currently support arrays only as return values.
 * All functions need to be unary.
 * R.pipeK(f, g, h) is equivalent to R.pipe(f, R.chain(g), R.chain(h)).
 *
 * @deprecated since 0.26 in favor of pipeWith(chain)
 */
// tslint:disable:max-line-length
export function pipeK<V0, T1>(fn0: (x0: V0) => T1[]): (x0: V0) => T1[];
export function pipeK<V0, T1, T2>(fn0: (x0: V0) => T1[], fn1: (x: T1) => T2[]): (x0: V0) => T2[];
export function pipeK<V0, T1, T2, T3>(fn0: (x: V0) => T1[], fn1: (x: T1) => T2[], fn2: (x: T2) => T3[]): (x: V0) => T3[];
export function pipeK<V0, T1, T2, T3, T4>(fn0: (x: V0) => T1[], fn1: (x: T1) => T2[], fn2: (x: T2) => T3[], fn3: (x: T3) => T4[]): (x: V0) => T4[];
export function pipeK<V0, T1, T2, T3, T4, T5>(fn0: (x: V0) => T1[], fn1: (x: T1) => T2[], fn2: (x: T2) => T3[], fn3: (x: T3) => T4[], fn4: (x: T4) => T5[]): (x: V0) => T5[];
export function pipeK<V0, T1, T2, T3, T4, T5, T6>(fn0: (x: V0) => T1[], fn1: (x: T1) => T2[], fn2: (x: T2) => T3[], fn3: (x: T3) => T4[], fn4: (x: T4) => T5[], fn5: (x: T5) => T6[]): (x: V0) => T6[];
export function pipeK<V0, T1, T2, T3, T4, T5, T6, T7>(fn0: (x: V0) => T1[], fn1: (x: T1) => T2[], fn2: (x: T2) => T3[], fn3: (x: T3) => T4[], fn4: (x: T4) => T5[], fn5: (x: T5) => T6[], fn: (x: T6) => T7[]): (x: V0) => T7[];
export function pipeK<V0, T1, T2, T3, T4, T5, T6, T7, T8>(fn0: (x: V0) => T1[], fn1: (x: T1) => T2[], fn2: (x: T2) => T3[], fn3: (x: T3) => T4[], fn4: (x: T4) => T5[], fn5: (x: T5) => T6[], fn6: (x: T6) => T7[], fn: (x: T7) => T8[]): (x: V0) => T8[];
export function pipeK<V0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn0: (x0: V0) => T1[], fn1: (x: T1) => T2[], fn2: (x: T2) => T3[], fn3: (x: T3) => T4[], fn4: (x: T4) => T5[], fn5: (x: T5) => T6[], fn6: (x: T6) => T7[], fn7: (x: T7) => T8[], fn8: (x: T8) => T9[]): (x0: V0) => T9[];
export function pipeK<V0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(fn0: (x0: V0) => T1[], fn1: (x: T1) => T2[], fn2: (x: T2) => T3[], fn3: (x: T3) => T4[], fn4: (x: T4) => T5[], fn5: (x: T5) => T6[], fn6: (x: T6) => T7[], fn7: (x: T7) => T8[], fn8: (x: T8) => T9[], fn9: (x: T9) => T10[]): (x0: V0) => T10[];
// tslint:enable:max-line-length

/**
 * Performs left-to-right composition of one or more Promise-returning functions.
 * All functions need to be unary.
 *
 * @deprecated since 0.26 in favor of pipeWith(then)
 */
// tslint:disable:max-line-length
export function pipeP<V0, T1>(fn0: (x0: V0) => Promise<T1>): (x0: V0) => Promise<T1>;
export function pipeP<V0, T1, T2>(fn0: (x0: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2>): (x0: V0) => Promise<T2>;
export function pipeP<V0, T1, T2, T3>(fn0: (x: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2>, fn2: (x: T2) => Promise<T3>): (x: V0) => Promise<T3>;
export function pipeP<V0, T1, T2, T3, T4>(fn0: (x: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2>, fn2: (x: T2) => Promise<T3>, fn3: (x: T3) => Promise<T4>): (x: V0) => Promise<T4>;
export function pipeP<V0, T1, T2, T3, T4, T5>(fn0: (x: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2>, fn2: (x: T2) => Promise<T3>, fn3: (x: T3) => Promise<T4>, fn4: (x: T4) => Promise<T5>): (x: V0) => Promise<T5>;
export function pipeP<V0, T1, T2, T3, T4, T5, T6>(fn0: (x: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2>, fn2: (x: T2) => Promise<T3>, fn3: (x: T3) => Promise<T4>, fn4: (x: T4) => Promise<T5>, fn5: (x: T5) => Promise<T6>): (x: V0) => Promise<T6>;
export function pipeP<V0, T1, T2, T3, T4, T5, T6, T7>(fn0: (x: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2>, fn2: (x: T2) => Promise<T3>, fn3: (x: T3) => Promise<T4>, fn4: (x: T4) => Promise<T5>, fn5: (x: T5) => Promise<T6>, fn: (x: T6) => Promise<T7>): (x: V0) => Promise<T7>;
export function pipeP<V0, T1, T2, T3, T4, T5, T6, T7, T8>(fn0: (x: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2>, fn2: (x: T2) => Promise<T3>, fn3: (x: T3) => Promise<T4>, fn4: (x: T4) => Promise<T5>, fn5: (x: T5) => Promise<T6>, fn6: (x: T6) => Promise<T7>, fn: (x: T7) => Promise<T8>): (x: V0) => Promise<T8>;
export function pipeP<V0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn0: (x0: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2>, fn2: (x: T2) => Promise<T3>, fn3: (x: T3) => Promise<T4>, fn4: (x: T4) => Promise<T5>, fn5: (x: T5) => Promise<T6>, fn6: (x: T6) => Promise<T7>, fn7: (x: T7) => Promise<T8>, fn8: (x: T8) => Promise<T9>): (x0: V0) => Promise<T9>;
export function pipeP<V0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(fn0: (x0: V0) => Promise<T1>, fn1: (x: T1) => Promise<T2>, fn2: (x: T2) => Promise<T3>, fn3: (x: T3) => Promise<T4>, fn4: (x: T4) => Promise<T5>, fn5: (x: T5) => Promise<T6>, fn6: (x: T6) => Promise<T7>, fn7: (x: T7) => Promise<T8>, fn8: (x: T8) => Promise<T9>, fn9: (x: T9) => Promise<T10>): (x0: V0) => Promise<T10>;
// tslint:enable:max-line-length

/*
    * Performs left-to-right function composition using transforming function.
    * With the current typings, all functions must be unary.
    */
export function pipeWith<V0, T>(composer: (a: any) => any, fns: PipeWithFns<V0, T>): (x0: V0) => T;
export function pipeWith(composer: (a: any) => any): <V0, T>(fns: PipeWithFns<V0, T>) => (x0: V0) => T;

/**
 * Returns a new list by plucking the same named property off all objects in the list supplied.
 */
export function pluck<K extends keyof T, T>(p: K, list: readonly T[]): Array<T[K]>;
export function pluck<T>(p: number, list: Array<{ [k: number]: T }>): T[];
export function pluck<P extends string>(p: P): <T>(list: Array<Record<P, T>>) => T[];
export function pluck(p: number): <T>(list: Array<{ [k: number]: T }>) => T[];

/**
 * Returns a new list with the given element at the front, followed by the contents of the
 * list.
 */
export function prepend<T>(el: T, list: readonly T[]): T[];
export function prepend<T>(el: T): (list: readonly T[]) => T[];

/**
 * Multiplies together all the elements of a list.
 */
export function product(list: readonly number[]): number;

/**
 * Reasonable analog to SQL `select` statement.
 */
export function project<T, U>(props: readonly string[], objs: readonly T[]): U[];
export function project<T, U>(props: readonly string[]): (objs: readonly T[]) => U[];

/**
 * Returns a function that when supplied an object returns the indicated property of that object, if it exists.
 */
export function prop<T>(__: Placeholder, obj: T): <P extends keyof T>(p: P) => T[P];
export function prop<P extends keyof T, T>(p: P, obj: T): T[P];
export function prop<P extends string>(p: P): <T>(obj: Record<P, T>) => T;
export function prop<P extends string, T>(p: P): (obj: Record<P, T>) => T;

/**
 * Determines whether the given property of an object has a specific
 * value according to strict equality (`===`).  Most likely used to
 * filter a list.
 */
export function propEq<T>(name: string | number, val: T, obj: any): boolean;
export function propEq<T>(name: string | number, val: T): (obj: any) => boolean;
export function propEq(name: string | number): {
    <T>(val: T, obj: any): boolean;
    <T>(val: T): (obj: any) => boolean;
};

/**
 * Returns true if the specified object property is of the given type; false otherwise.
 */
export function propIs(type: any, name: string, obj: any): boolean;
export function propIs(type: any, name: string): (obj: any) => boolean;
export function propIs(type: any): {
    (name: string, obj: any): boolean;
    (name: string): (obj: any) => boolean;
};

/**
 * If the given, non-null object has an own property with the specified name, returns the value of that property.
 * Otherwise returns the provided default value.
 */
export function propOr<T, U>(val: T, __: Placeholder, obj: U): <V>(p: string) => V;
export function propOr<U>(__: Placeholder, p: string, obj: U): <T, V>(val: T) => V;
export function propOr<T, U, V>(val: T, p: string, obj: U): V;
export function propOr<T>(val: T, p: string): <U, V>(obj: U) => V;
export function propOr<T>(val: T): <U, V>(p: string, obj: U) => V;

/**
 * Returns the value at the specified property.
 * The only difference from `prop` is the parameter order.
 * Note: TS1.9 # replace any by dictionary
 */
export function props<P extends string, T>(ps: readonly P[], obj: Record<P, T>): T[];
export function props<P extends string>(ps: readonly P[]): <T>(obj: Record<P, T>) => T[];
export function props<P extends string, T>(ps: readonly P[]): (obj: Record<P, T>) => T[];

/**
 * Returns true if the specified object property satisfies the given predicate; false otherwise.
 */
export function propSatisfies<T, U>(pred: (val: T) => boolean, name: string, obj: U): boolean;
export function propSatisfies<T, U>(pred: (val: T) => boolean, name: string): (obj: U) => boolean;
export function propSatisfies<T, U>(pred: (val: T) => boolean): _.F.Curry<(a: string, b: U) => boolean>;

/**
 * Returns a list of numbers from `from` (inclusive) to `to`
 * (exclusive). In mathematical terms, `range(a, b)` is equivalent to
 * the half-open interval `[a, b)`.
 */
export function range(from: number, to: number): number[];
export function range(from: number): (to: number) => number[];

/**
 * Returns a single item by iterating through the list, successively calling the iterator
 * function and passing it an accumulator value and the current value from the array, and
 * then passing the result to the next call.
 */
export function reduce<T, TResult>(fn: (acc: TResult, elem: T) => TResult | Reduced<TResult>, acc: TResult, list: readonly T[]): TResult;
export function reduce<T, TResult>(fn: (acc: TResult, elem: T) => TResult | Reduced<TResult>): (acc: TResult, list: readonly T[]) => TResult;
export function reduce<T, TResult>(fn: (acc: TResult, elem: T) => TResult | Reduced<TResult>, acc: TResult): (list: readonly T[]) => TResult;

/**
 * Groups the elements of the list according to the result of calling the String-returning function keyFn on each
 * element and reduces the elements of each group to a single value via the reducer function valueFn.
 */
export function reduceBy<T, TResult>(valueFn: (acc: TResult, elem: T) => TResult, acc: TResult, keyFn: (elem: T) => string, list: readonly T[]): { [index: string]: TResult };
export function reduceBy<T, TResult>(valueFn: (acc: TResult, elem: T) => TResult, acc: TResult, keyFn: (elem: T) => string): (list: readonly T[]) => { [index: string]: TResult };
export function reduceBy<T, TResult>(valueFn: (acc: TResult, elem: T) => TResult, acc: TResult): _.F.Curry<(a: (elem: T) => string, b: readonly T[]) => { [index: string]: TResult }>;
export function reduceBy<T, TResult>(valueFn: (acc: TResult, elem: T) => TResult): _.F.Curry<(a: TResult, b: (elem: T) => string, c: readonly T[]) => { [index: string]: TResult }>;

/**
 * Returns a value wrapped to indicate that it is the final value of the reduce and
 * transduce functions. The returned value should be considered a black box: the internal
 * structure is not guaranteed to be stable.
 */
export function reduced<T>(elem: T): Reduced<T>;

/**
 * Returns a single item by iterating through the list, successively calling the iterator
 * function and passing it an accumulator value and the current value from the array, and
 * then passing the result to the next call.
 */
export function reduceRight<T, TResult>(fn: (elem: T, acc: TResult) => TResult, acc: TResult, list: readonly T[]): TResult;
export function reduceRight<T, TResult>(fn: (elem: T, acc: TResult) => TResult): (acc: TResult, list: readonly T[]) => TResult;
export function reduceRight<T, TResult>(fn: (elem: T, acc: TResult) => TResult, acc: TResult): (list: readonly T[]) => TResult;

/**
 * Like reduce, reduceWhile returns a single item by iterating through the list, successively
 * calling the iterator function. reduceWhile also takes a predicate that is evaluated before
 * each step. If the predicate returns false, it "short-circuits" the iteration and returns
 * the current value of the accumulator.
 */
export function reduceWhile<T, TResult>(predicate: (acc: TResult, elem: T) => boolean, fn: (acc: TResult, elem: T) => TResult, acc: TResult, list: readonly T[]): TResult;
export function reduceWhile<T, TResult>(predicate: (acc: TResult, elem: T) => boolean, fn: (acc: TResult, elem: T) => TResult, acc: TResult): (list: readonly T[]) => TResult;
export function reduceWhile<T, TResult>(predicate: (acc: TResult, elem: T) => boolean, fn: (acc: TResult, elem: T) => TResult): _.F.Curry<(a: TResult, b: readonly T[]) => TResult>;
export function reduceWhile<T, TResult>(predicate: (acc: TResult, elem: T) => boolean): _.F.Curry<(a: (acc: TResult, elem: T) => TResult, b: TResult, c: readonly T[]) => TResult>;

/**
 * Similar to `filter`, except that it keeps only values for which the given predicate
 * function returns falsy.
 */
export const reject: Filter;

/**
 * Removes the sub-list of `list` starting at index `start` and containing `count` elements.
 */
export function remove<T>(start: number, count: number, list: readonly T[]): T[];
export function remove<T>(start: number): (count: number, list: readonly T[]) => T[];
export function remove<T>(start: number, count: number): (list: readonly T[]) => T[];

/**
 * Returns a fixed list of size n containing a specified identical value.
 */
export function repeat<T>(a: T, n: number): T[];
export function repeat<T>(a: T): (n: number) => T[];

/**
 * Replace a substring or regex match in a string with a replacement.
 */
export function replace(pattern: RegExp | string, replacement: string | ((match: string, ...args: readonly any[]) => string), str: string): string;
export function replace(pattern: RegExp | string, replacement: string | ((match: string, ...args: readonly any[]) => string)): (str: string) => string;
export function replace(pattern: RegExp | string): (replacement: string | ((match: string, ...args: readonly any[]) => string)) => (str: string) => string;

/**
 * Returns a new list with the same elements as the original list, just in the reverse order.
 */
export function reverse<T>(list: readonly T[]): T[];
/**
 * Returns a new string with the characters in reverse order.
 */
export function reverse(str: string): string;

/**
 * Scan is similar to reduce, but returns a list of successively reduced values from the left.
 */
export function scan<T, TResult>(fn: (acc: TResult, elem: T) => any, acc: TResult, list: readonly T[]): TResult[];
export function scan<T, TResult>(fn: (acc: TResult, elem: T) => any, acc: TResult): (list: readonly T[]) => TResult[];
export function scan<T, TResult>(fn: (acc: TResult, elem: T) => any): (acc: TResult, list: readonly T[]) => TResult[];

/**
 * Returns the result of "setting" the portion of the given data structure focused by the given lens to the
 * given value.
 */
export function set<T, U>(lens: Lens, a: U, obj: T): T;
export function set<U>(lens: Lens, a: U): <T>(obj: T) => T;
export function set(lens: Lens): <T, U>(a: U, obj: T) => T;

/**
 * Returns the elements from `xs` starting at `a` and ending at `b - 1`.
 */
export function slice(a: number, b: number, list: string): string;
export function slice<T>(a: number, b: number, list: readonly T[]): T[];
export function slice(a: number, b: number): {
    (list: string): string;
    <T>(list: readonly T[]): T[];
};
export function slice(a: number): {
    (b: number, list: string): string;
    <T>(b: number, list: readonly T[]): T[];
};

/**
 * Returns a copy of the list, sorted according to the comparator function, which should accept two values at a
 * time and return a negative number if the first value is smaller, a positive number if it's larger, and zero
 * if they are equal.
 */
export function sort<T>(fn: (a: T, b: T) => number, list: readonly T[]): T[];
export function sort<T>(fn: (a: T, b: T) => number): (list: readonly T[]) => T[];

/**
 * Sorts the list according to a key generated by the supplied function.
 */
export function sortBy<T>(fn: (a: T) => Ord, list: readonly T[]): T[];
export function sortBy(fn: (a: any) => Ord): <T>(list: readonly T[]) => T[];

/**
 * Sorts a list according to a list of comparators.
 */
export function sortWith<T>(fns: Array<((a: T, b: T) => number)>, list: readonly T[]): T[];
export function sortWith<T>(fns: Array<((a: T, b: T) => number)>): (list: readonly T[]) => T[];

/**
 * Splits a string into an array of strings based on the given
 * separator.
 */
export function split(sep: string | RegExp): (str: string) => string[];
export function split(sep: string | RegExp, str: string): string[];

/**
 * Splits a given list or string at a given index.
 */
export function splitAt<T>(index: number, list: readonly T[]): [T[], T[]];
export function splitAt(index: number, list: string): [string, string];
export function splitAt(index: number): {
    <T>(list: readonly T[]): [T[], T[]];
    (list: string): [string, string];
};

/**
 * Splits a collection into slices of the specified length.
 */
export function splitEvery<T>(a: number, list: readonly T[]): T[][];
export function splitEvery(a: number, list: string): string[];
export function splitEvery(a: number): {
    (list: string): string[];
    <T>(list: readonly T[]): T[][];
};

/**
 * Takes a list and a predicate and returns a pair of lists with the following properties:
 * - the result of concatenating the two output lists is equivalent to the input list;
 * - none of the elements of the first output list satisfies the predicate; and
 * - if the second output list is non-empty, its first element satisfies the predicate.
 */
export function splitWhen<T, U>(pred: (val: T) => boolean, list: readonly U[]): U[][];
export function splitWhen<T>(pred: (val: T) => boolean): <U>(list: readonly U[]) => U[][];

/**
 * Checks if a list starts with the provided values
 */
export function startsWith(a: string, list: string): boolean;
export function startsWith(a: string): (list: string) => boolean;
export function startsWith<T>(a: T | readonly T[], list: readonly T[]): boolean;
export function startsWith<T>(a: T | readonly T[]): (list: readonly T[]) => boolean;

/**
 * Subtracts two numbers. Equivalent to `a - b` but curried.
 */
export function subtract(__: Placeholder, b: number): (a: number) => number;
export function subtract(__: Placeholder): (b: number, a: number) => number;
export function subtract(a: number, b: number): number;
export function subtract(a: number): (b: number) => number;

/**
 * Adds together all the elements of a list.
 */
export function sum(list: readonly number[]): number;

/**
 * Finds the set (i.e. no duplicates) of all elements contained in the first or second list, but not both.
 */
export function symmetricDifference<T>(list1: readonly T[], list2: readonly T[]): T[];
export function symmetricDifference<T>(list: readonly T[]): <T>(list: readonly T[]) => T[];

/**
 * Finds the set (i.e. no duplicates) of all elements contained in the first or second list, but not both.
 * Duplication is determined according to the value returned by applying the supplied predicate to two list elements.
 */
export function symmetricDifferenceWith<T>(pred: (a: T, b: T) => boolean, list1: readonly T[], list2: readonly T[]): T[];
export function symmetricDifferenceWith<T>(pred: (a: T, b: T) => boolean): _.F.Curry<(a: readonly T[], b: readonly T[]) => T[]>;

/**
 * A function that always returns true. Any passed in parameters are ignored.
 */
export function T(): boolean;

/**
 * Returns all but the first element of a list or string.
 */
export function tail(list: string): string;
export function tail<T extends any>(list: readonly T[]): T[];

/**
 * Returns a new list containing the first `n` elements of the given list.  If
 * `n > * list.length`, returns a list of `list.length` elements.
 */
export function take<T>(n: number, xs: readonly T[]): T[];
export function take(n: number, xs: string): string;
export function take(n: number): {
    (xs: string): string;
    <T>(xs: readonly T[]): T[];
};

/**
 * Returns a new list containing the last n elements of the given list. If n > list.length,
 * returns a list of list.length elements.
 */
export function takeLast<T>(n: number, xs: readonly T[]): T[];
export function takeLast(n: number, xs: string): string;
export function takeLast(n: number): {
    <T>(xs: readonly T[]): T[];
    (xs: string): string;
};

/**
 * Returns a new list containing the last n elements of a given list, passing each value
 * to the supplied predicate function, and terminating when the predicate function returns
 * false. Excludes the element that caused the predicate function to fail. The predicate
 * function is passed one argument: (value).
 */
export function takeLastWhile<T>(pred: (a: T) => boolean, list: readonly T[]): T[];
export function takeLastWhile<T>(pred: (a: T) => boolean): <T>(list: readonly T[]) => T[];

/**
 * Returns a new list containing the first `n` elements of a given list, passing each value
 * to the supplied predicate function, and terminating when the predicate function returns
 * `false`.
 */
export function takeWhile<T>(fn: (x: T) => boolean, list: readonly T[]): T[];
export function takeWhile<T>(fn: (x: T) => boolean): (list: readonly T[]) => T[];

/**
 * The function to call with x. The return value of fn will be thrown away.
 */
export function tap<T>(fn: (a: T) => any, value: T): T;
export function tap<T>(fn: (a: T) => any): (value: T) => T;

/**
 * Determines whether a given string matches a given regular expression.
 */
export function test(regexp: RegExp, str: string): boolean;
export function test(regexp: RegExp): (str: string) => boolean;

/**
 * Returns the result of applying the onSuccess function to the value inside a successfully resolved promise. This is useful for working with promises inside function compositions.
 */
export function then<A, B>(onSuccess: (a: A) => B | Promise<B>, promise: Promise<A>): Promise<B>;
export function then<A, B>(onSuccess: (a: A) => B | Promise<B>): (promise: Promise<A>) => Promise<B>;

/**
 * Creates a thunk out of a function.
 * A thunk delays a calculation until its result is needed, providing lazy evaluation of arguments.
 */
export function thunkify<F extends (...args: readonly any[]) => any>(fn: F): _.F.Curry<(...args: Parameters<F>) => (() => ReturnType<F>)>;

/**
 * Calls an input function `n` times, returning an array containing the results of those
 * function calls.
 */
export function times<T>(fn: (i: number) => T, n: number): T[];
export function times<T>(fn: (i: number) => T): (n: number) => T[];

/**
 * The lower case version of a string.
 */
export function toLower(str: string): string;

/**
 * Converts an object into an array of key, value arrays.
 * Only the object's own properties are used.
 * Note that the order of the output array is not guaranteed to be
 * consistent across different JS platforms.
 */
export function toPairs<S>(obj: { [k: string]: S } | { [k: number]: S }): Array<[string, S]>;

/**
 * Converts an object into an array of key, value arrays.
 * The object's own properties and prototype properties are used.
 * Note that the order of the output array is not guaranteed to be
 * consistent across different JS platforms.
 */
export function toPairsIn<S>(obj: { [k: string]: S } | { [k: number]: S }): Array<[string, S]>;

/**
 * Returns the string representation of the given value. eval'ing the output should
 * result in a value equivalent to the input value. Many of the built-in toString
 * methods do not satisfy this requirement.
 *
 * If the given value is an [object Object] with a toString method other than
 * Object.prototype.toString, this method is invoked with no arguments to produce the
 * return value. This means user-defined constructor functions can provide a suitable
 * toString method.
 */
export function toString<T>(val: T): string;

/**
 * The upper case version of a string.
 */
export function toUpper(str: string): string;

/**
 * Initializes a transducer using supplied iterator function. Returns a single item by iterating through the
 * list, successively calling the transformed iterator function and passing it an accumulator value and the
 * current value from the array, and then passing the result to the next call.
 */
export function transduce<T, U>(xf: (arg: readonly T[]) => T[], fn: (acc: readonly U[], val: U) => U[], acc: readonly T[], list: readonly T[]): U;
export function transduce<T, U>(xf: (arg: readonly T[]) => T[]): (fn: (acc: readonly U[], val: U) => U[], acc: readonly T[], list: readonly T[]) => U;
export function transduce<T, U>(xf: (arg: readonly T[]) => T[], fn: (acc: readonly U[], val: U) => U[]): (acc: readonly T[], list: readonly T[]) => U;
export function transduce<T, U>(xf: (arg: readonly T[]) => T[], fn: (acc: readonly U[], val: U) => U[], acc: readonly T[]): (list: readonly T[]) => U;

/**
 * Transposes the rows and columns of a 2D list. When passed a list of n lists of length x, returns a list of x lists of length n.
 */
export function transpose<T>(list: readonly T[][]): T[][];

/**
 * Maps an Applicative-returning function over a Traversable, then uses
 * sequence to transform the resulting Traversable of Applicative into
 * an Applicative of Traversable.
 */
export function traverse<A, B>(of: (a: B) => B[], fn: (t: A) => B[], list: readonly A[]): B[][];
export function traverse<A, B>(of: (a: B) => B[], fn: (t: A) => B[]): (list: readonly A[]) => B[][];
export function traverse<A, B>(of: (a: B) => B[]): (fn: (t: A) => B[], list: readonly A[]) => B[][];

/**
 * Removes (strips) whitespace from both ends of the string.
 */
export function trim(str: string): string;

/**
 * tryCatch takes two functions, a tryer and a catcher. The returned function evaluates the tryer; if it does
 * not throw, it simply returns the result. If the tryer does throw, the returned function evaluates the catcher
 * function and returns its result. Note that for effective composition with this function, both the tryer and
 * catcher functions must return the same type of results.
 */
export function tryCatch<T>(tryer: (...args: readonly any[]) => T, catcher: (...args: readonly any[]) => T): (...args: readonly any[]) => T;

/**
 * Gives a single-word string description of the (native) type of a value, returning such answers as 'Object',
 * 'Number', 'Array', or 'Null'. Does not attempt to distinguish user Object types any further, reporting them
 * all as 'Object'.
 */
export function type(val: any): 'Object' | 'Number' | 'Boolean' | 'String' | 'Null' | 'Array' | 'RegExp' | 'Function' | 'Undefined';

/**
 * Takes a function fn, which takes a single array argument, and returns a function which:
 * - takes any number of positional arguments;
 * - passes these arguments to fn as an array; and
 * - returns the result.
 * In other words, R.unapply derives a variadic function from a function which takes an array.
 * R.unapply is the inverse of R.apply.
 */
export function unapply<T>(fn: (args: readonly any[]) => T): (...args: readonly any[]) => T;

/**
 * Wraps a function of any arity (including nullary) in a function that accepts exactly 1 parameter.
 * Any extraneous parameters will not be passed to the supplied function.
 */
export function unary<T>(fn: (a: T, ...args: readonly any[]) => any): (a: T) => any;

/**
 * Returns a function of arity n from a (manually) curried function.
 */
export function uncurryN<T>(len: number, fn: (a: any) => any): (...a: readonly any[]) => T;

/**
 * Builds a list from a seed value. Accepts an iterator function, which returns either false
 * to stop iteration or an array of length 2 containing the value to add to the resulting
 * list and the seed to be used in the next call to the iterator function.
 */
export function unfold<T, TResult>(fn: (seed: T) => [TResult, T] | false, seed: T): TResult[];
export function unfold<T, TResult>(fn: (seed: T) => [TResult, T] | false): (seed: T) => TResult[];

/**
 * Combines two lists into a set (i.e. no duplicates) composed of the
 * elements of each list.
 */
export function union<T>(as: readonly T[], bs: readonly T[]): T[];
export function union<T>(as: readonly T[]): (bs: readonly T[]) => T[];

/**
 * Combines two lists into a set (i.e. no duplicates) composed of the elements of each list.  Duplication is
 * determined according to the value returned by applying the supplied predicate to two list elements.
 */
export function unionWith<T>(pred: (a: T, b: T) => boolean, list1: readonly T[], list2: readonly T[]): T[];
export function unionWith<T>(pred: (a: T, b: T) => boolean): _.F.Curry<(a: readonly T[], b: readonly T[]) => T[]>;

/**
 * Returns a new list containing only one copy of each element in the original list.
 */
export function uniq<T>(list: readonly T[]): T[];

/**
 * Returns a new list containing only one copy of each element in the original list,
 * based upon the value returned by applying the supplied function to each list element.
 * Prefers the first item if the supplied function produces the same value on two items.
 * R.equals is used for comparison.
 */
export function uniqBy<T, U>(fn: (a: T) => U, list: readonly T[]): T[];
export function uniqBy<T, U>(fn: (a: T) => U): (list: readonly T[]) => T[];

/**
 * Returns a new list containing only one copy of each element in the original list, based upon the value
 * returned by applying the supplied predicate to two list elements.
 */
export function uniqWith<T, U>(pred: (x: T, y: T) => boolean, list: readonly T[]): T[];
export function uniqWith<T, U>(pred: (x: T, y: T) => boolean): (list: readonly T[]) => T[];

/**
 * Tests the final argument by passing it to the given predicate function. If the predicate is not satisfied,
 * the function will return the result of calling the whenFalseFn function with the same argument. If the
 * predicate is satisfied, the argument is returned as is.
 */
export function unless<T, U>(pred: (a: T) => boolean, whenFalseFn: (a: T) => U, obj: T): U;
export function unless<T, U>(pred: (a: T) => boolean, whenFalseFn: (a: T) => U): (obj: T) => U;

/**
 * Returns a new list by pulling every item at the first level of nesting out, and putting
 * them in a new array.
 */
export function unnest<T extends readonly any[]>(list: T): _.T.UnNest<T>;

/**
 * Takes a predicate, a transformation function, and an initial value, and returns a value of the same type as
 * the initial value. It does so by applying the transformation until the predicate is satisfied, at which point
 * it returns the satisfactory value.
 */
export function until<T, U>(pred: (val: T) => boolean, fn: (val: T) => U, init: U): U;
export function until<T, U>(pred: (val: T) => boolean, fn: (val: T) => U): (init: U) => U;

/**
 * Returns a new copy of the array with the element at the provided index replaced with the given value.
 */
export function update<T>(index: number, value: T, list: readonly T[]): T[];
export function update<T>(index: number, value: T): (list: readonly T[]) => T[];

/**
 * Accepts a function fn and a list of transformer functions and returns a new curried function.
 * When the new function is invoked, it calls the function fn with parameters consisting of the
 * result of calling each supplied handler on successive arguments to the new function.
 *
 * If more arguments are passed to the returned function than transformer functions, those arguments
 * are passed directly to fn as additional parameters. If you expect additional arguments that don't
 * need to be transformed, although you can ignore them, it's best to pass an identity function so
 * that the new function reports the correct arity.
 */
export function useWith(fn: ((...a: readonly any[]) => any), transformers: Array<((...a: readonly any[]) => any)>): (...a: readonly any[]) => any;

/**
 * Returns a list of all the enumerable own properties of the supplied object.
 * Note that the order of the output array is not guaranteed across
 * different JS platforms.
 */
export function values<T extends object, K extends keyof T>(obj: T): Array<T[K]>;

/**
 * Returns a list of all the properties, including prototype properties, of the supplied
 * object. Note that the order of the output array is not guaranteed to be consistent across different JS platforms.
 */
export function valuesIn<T>(obj: any): T[];

/**
 * Returns a "view" of the given data structure, determined by the given lens. The lens's focus determines which
 * portion of the data structure is visible.
 */
export function view<T, U>(lens: Lens): (obj: T) => U;
export function view<T, U>(lens: Lens, obj: T): U;

/**
 * Tests the final argument by passing it to the given predicate function. If the predicate is satisfied, the function
 * will return the result of calling the whenTrueFn function with the same argument. If the predicate is not satisfied,
 * the argument is returned as is.
 */
export function when<T, U>(pred: (a: T) => boolean, whenTrueFn: (a: T) => U, obj: T): U;
export function when<T, U>(pred: (a: T) => boolean, whenTrueFn: (a: T) => U): (obj: T) => U;

/**
 * Takes a spec object and a test object and returns true if the test satisfies the spec.
 * Any property on the spec that is not a function is interpreted as an equality
 * relation.
 *
 * If the spec has a property mapped to a function, then `where` evaluates the function, passing in
 * the test object's value for the property in question, as well as the whole test object.
 *
 * `where` is well suited to declarativley expressing constraints for other functions, e.g.,
 * `filter`, `find`, `pickWith`, etc.
 */
export function where<T, U>(spec: T, testObj: U): boolean;
export function where<T>(spec: T): <U>(testObj: U) => boolean;
export function where<ObjFunc2, U>(spec: ObjFunc2, testObj: U): boolean;
export function where<ObjFunc2>(spec: ObjFunc2): <U>(testObj: U) => boolean;

/**
 * Takes a spec object and a test object; returns true if the test satisfies the spec,
 * false otherwise. An object satisfies the spec if, for each of the spec's own properties,
 * accessing that property of the object gives the same value (in R.eq terms) as accessing
 * that property of the spec.
 */
export function whereEq<T, U>(spec: T, obj: U): boolean;
export function whereEq<T>(spec: T): <U>(obj: U) => boolean;

/**
 * Returns a new list without values in the first argument. R.equals is used to determine equality.
 * Acts as a transducer if a transformer is given in list position.
 */
export function without<T>(list1: readonly T[], list2: readonly T[]): T[];
export function without<T>(list1: readonly T[]): (list2: readonly T[]) => T[];

/**
 * Creates a new list out of the two supplied by creating each possible pair from the lists.
 */
export function xprod<K, V>(as: readonly K[], bs: readonly V[]): Array<KeyValuePair<K, V>>;
export function xprod<K>(as: readonly K[]): <V>(bs: readonly V[]) => Array<KeyValuePair<K, V>>;

/**
 * Creates a new list out of the two supplied by pairing up equally-positioned items from
 * both lists. Note: `zip` is equivalent to `zipWith(function(a, b) { return [a, b] })`.
 */
export function zip<K, V>(list1: readonly K[], list2: readonly V[]): Array<KeyValuePair<K, V>>;
export function zip<K>(list1: readonly K[]): <V>(list2: readonly V[]) => Array<KeyValuePair<K, V>>;

/**
 * Creates a new object out of a list of keys and a list of values.
 */
// TODO: Dictionary<T> as a return value is to specific, any seems to loose
export function zipObj<T>(keys: readonly string[], values: readonly T[]): { [index: string]: T };
export function zipObj(keys: readonly string[]): <T>(values: readonly T[]) => { [index: string]: T };
export function zipObj<T>(keys: readonly number[], values: readonly T[]): { [index: number]: T };
export function zipObj(keys: readonly number[]): <T>(values: readonly T[]) => { [index: number]: T };

/**
 * Creates a new list out of the two supplied by applying the function to each
 * equally-positioned pair in the lists.
 */
export function zipWith<T, U, TResult>(fn: (x: T, y: U) => TResult, list1: readonly T[], list2: readonly U[]): TResult[];
export function zipWith<T, U, TResult>(fn: (x: T, y: U) => TResult, list1: readonly T[]): (list2: readonly U[]) => TResult[];
export function zipWith<T, U, TResult>(fn: (x: T, y: U) => TResult): (list1: readonly T[], list2: readonly U[]) => TResult[];
