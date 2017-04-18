namespace std.test
{
	export function hash_map(): void
	{
		/////////////////////////////////////
		// CONSTRUCT DATA FROM 1 TO 10
		/////////////////////////////////////
		let map: std.HashMap<number, string> = new std.HashMap<number, string>();
		for (let i: number = 0; i < 10; i++)
			map.set(i, "Its key is " + i);

		/////////////////////////////////////
		//  ELEMENT I/O
		/////////////////////////////////////
		// ERASE AN ELEMENT
		let it = map.find(3); // find 3.
		it = map.erase(it); // erase 3. [it] points key 4.
		console.log(it.first); // prints key 4.

		// INSERT AN ELEMENT
		it = map.begin().advance(2) // [it] points key 2 (0 ----> 2)
		it = map.insert(it, new std.Pair<number, string>(-1, "Its key is -1"));
		// [it] points key -1=
		// key list: [0, 1, -1, 2, 4, 5, 6, 7, 8, 9]
		console.log(it.next().first); // prints 2, next of [it] (-1 -> 2)

		// RANGE ERASER
		it = map.erase(map.begin().advance(6), map.begin().advance(9));
		// erase elements from 6th until 9th.

		// INSPECT ELEMENTS BY THEIR KEY
		// key list: [0, 1, -1, 2, 4, 5, 9]
		console.log("has 7:", map.has(7));
		console.log("count 5:", map.count(5));
		console.log("it is end():", it.equals(map.end()));

		/////////////////////////////////////
		// PRINT ALL ELEMENTS
		/////////////////////////////////////
		console.log("------------------------------");

		// key list: [0, 1, -1, 2, 4, 5, 9]
		for (let it = map.begin(); !it.equals(map.end()); it = it.next())
			console.log(it.second);

		/* OUTPUT
		=========================================
			4
			2
			has 7: true
			count 5: 1
			it is end(): false
			------------------------------
			Its key is 0
			Its key is 1
			Its key is -1
			Its key is 2
			Its key is 4
			Its key is 5
			Its key is 9
		=========================================
		*/
	}
}