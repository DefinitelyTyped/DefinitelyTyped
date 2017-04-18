namespace std.test
{
	export function test_list(): void
	{
		let intList: std.List<number> = new std.List<number>();
		for (let i: number = 0; i < 10; i++)
			intList.pushBack(i);

		let it = intList.begin().advance(3);
		it = intList.erase(it); // erase 3
		console.log(it.value); // print 4

		it = intList.begin().advance(2);
		it = intList.insert(it, -1); // insert -1
		console.log(it.next().value); // print 2

		it = intList.begin().advance(6);
		it = intList.erase(it, it.advance(3)); // erase from 6 to 9
		//console.log(it.value); // print 9
		console.log(it.equals(intList.end()));

		console.log("-------------------------------------");
		for (let it = intList.begin(); !it.equals(intList.end()); it = it.next())
			console.log(it.value);
	}
}