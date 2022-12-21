import distanceFrom from 'distance-from';

distanceFrom([ 41.8781, 87.6298 ]); // $ExpectType DistanceFrom
distanceFrom([ 41.8781, 87.6298 ]).to([ 40.7128, 74.0060 ]); // $ExpectType DistanceFrom
distanceFrom([ 41.8781, 87.6298 ]).to([ 40.7128, 74.0060 ]).in('ft'); // $ExpectType number
distanceFrom([ 41.8781, 87.6298 ]).unitList(); // $ExpectType Units[]
// @ts-expect-error
distanceFrom();
// @ts-expect-error
distanceFrom(41.8781, 87.6298);
