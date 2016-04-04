namespace std.test
{
	export function tree_set(): void
	{
		let intSet: std.TreeMultiSet<number> = new std.TreeMultiSet<number>();

		// INSERTS EVEN NUMBERS
		for (let i = 0; i <= 10; i += 2)
			for (let j = 0; j < 3; j++)
				intSet.insert(i);

		// FIND 4 -> HAS
		console.log("Matched node: 4");
		console.log("	lower bound: " + intSet.lowerBound(4).value);
		console.log("	upper bound: " + intSet.upperBound(4).value);
		console.log(" ");

		// FIND ODD NUMBERS -> NOT EXIST
		for (let i = 1; i <= 10; i += 2)
		{
			console.log("Mis-matched node: " + i);
			console.log("	lower bound: " + intSet.lowerBound(i).value);
			console.log("	upper bound: " + intSet.upperBound(i).value);
			console.log(" ");
		}
	}
}