/// <reference path="./linqsharp.d.ts" />

import Linq, { LinqSharp } from "linqsharp";

var linq: Linq<number> = new Linq<number>([0, 1, 2, 3]);

var linqResult: Linq<number>;
var linqAny: Linq<any>;
var arrayResult: number[];

var numberResult: number;
var boolResult: boolean;

var comparer: LinqSharp.IEqualityComparer<number> = {
	Equals: (x: number, y: number): boolean =>
	{
		return x === y;
	},
	GetHashCode: (obj: number): number =>
	{
		return obj.valueOf();
	}
};
var comparer2: (o: number, i: number) => number;
var comparer3: (o: number, i: number) => boolean;

numberResult = linq.Aggregate<number>((prev: number, next: number) => { return prev + next; });
boolResult = linq.All((value: number) => value == 0);
boolResult = linq.Any();
boolResult = linq.Any((value: number) => value == 0);
numberResult = linq.Average();
numberResult = linq.Average((value: number) => value);
linqResult = linq.Concat([4, 5, 6]);
boolResult = linq.Contains(0);
boolResult = linq.Contains(0, comparer);
numberResult = linq.Count();
numberResult = linq.Count((value: number) => value == 0);
linqResult = linq.Distinct();
linqResult = linq.Distinct(comparer);
linqResult = linq.DistinctBy((value: number) => value);
numberResult = linq.ElementAt(0);
numberResult = linq.ElementAtOrDefault(0, 1);
linqResult = linq.Except([2]);
linqResult = linq.Except([2], comparer);
numberResult = linq.First();
numberResult = linq.First((value: number) => value == 0);
numberResult = linq.FirstOrDefault();
numberResult = linq.FirstOrDefault((value: number) => value == 0);
linq.ForEach((value: number, index: number) => { });
linqAny = linq.GroupBy((value: number) => value % 2);
linqAny = linq.GroupBy((value: number) => value % 2, (value: number) => value * 2);
linqAny = linq.GroupBy((value: number) => value % 2, (value: number) => value * 2, comparer);
numberResult = linq.IndexOf(0);
numberResult = linq.IndexOf(0, comparer);
linqResult = linq.Intersect([0]);
linqResult = linq.Intersect([0], comparer);
linqResult = linq.Join([0], (outer: number) => outer, (inner: number) => inner, (outer: number, inner: number) => outer + inner);
linqResult = linq.Join([0], (outer: number) => outer, (inner: number) => inner, (outer: number, inner: number) => outer + inner, comparer);
numberResult = linq.Last();
numberResult = linq.Last((value: number) => value == 0);
numberResult = linq.LastOrDefault();
numberResult = linq.LastOrDefault((value: number) => value == 0);
numberResult = linq.Max();
numberResult = linq.Max((value: number) => value);
numberResult = linq.Min();
numberResult = linq.Min((value: number) => value);
linqResult = linq.OrderBy((value: number) => value);
linqResult = linq.OrderBy((value: number) => value, comparer2);
linqResult = linq.OrderByDescending((value: number) => value);
linqResult = linq.OrderByDescending((value: number) => value, comparer2);
linqResult = linq.Reverse();
linqResult = linq.Select((value: number) => value);
linqResult = linq.Select((value: number, index: number) => value + index);
linqResult = linq.SelectMany<number>((value: number) => [ value ]);
linqResult = linq.SelectMany<number>((value: number) => [ value ], (value: number) => value);
boolResult = linq.SequenceEqual([0]);
boolResult = linq.SequenceEqual([0], comparer3);
numberResult = linq.Single();
numberResult = linq.Single((value: number) => value == 0);
numberResult = linq.SingleOrDefault();
numberResult = linq.SingleOrDefault((value: number) => value == 0);
linqResult = linq.Skip(0);
linqResult = linq.SkipWhile((value: number) => value < 2);
numberResult = linq.Sum();
numberResult = linq.Sum((value: number) => value * 2);
linqResult = linq.Take(2);
linqResult = linq.TakeWhile((value: number) => value < 2);
arrayResult = linq.ToArray();
linqResult = linq.Union([0]);
linqResult = linq.Union([0], comparer);
linqResult = linq.Where((value: number) => value > 0);
linqResult = linq.Zip([0], (outer: number, inner: number) => outer + inner);