/// <reference path="heap.d.ts" />

var numberComparator = (a: number, b: number) => { return a.toString().length - b.toString().length; };
var stringComparator = (a: string, b: string) => { return a.length - b.length; };

// Test constructor
var numberHeap: Heap<number> = new Heap<number>();
numberHeap = new Heap<number>(numberComparator);

var stringHeap: Heap<string> = new Heap<string>();
stringHeap = new Heap<string>(stringComparator);

// Test instance methods
numberHeap.push(0);
stringHeap.push("foo");
numberHeap.insert(0);
stringHeap.insert("foo");

var numberIdentifier: number = numberHeap.pop();
var stringIdentifier: string = stringHeap.pop();

numberIdentifier = numberHeap.replace(1);
stringIdentifier = stringHeap.replace("bar");

numberIdentifier = numberHeap.pushpop(2);
stringIdentifier = stringHeap.pushpop("bar");

numberHeap.heapify();
stringHeap.heapify();

numberHeap.updateItem(2);
stringHeap.updateItem("bar");

var booleanIdentifier: boolean = numberHeap.empty();
booleanIdentifier = stringHeap.empty();

numberIdentifier = numberHeap.size();
numberIdentifier = stringHeap.size();

var numberArray: number[] = numberHeap.toArray();
var stringArray: string[] = stringHeap.toArray();

numberHeap = numberHeap.clone();
numberHeap = numberHeap.copy();

stringHeap = stringHeap.clone();
stringHeap = stringHeap.copy();

// Test static methods
Heap.push(numberArray, 3);
Heap.push(numberArray, 3, numberComparator);

Heap.push(stringArray, "foo");
Heap.push(stringArray, "foo", stringComparator);

numberIdentifier = Heap.pop(numberArray);
numberIdentifier = Heap.pop(numberArray, numberComparator);

stringIdentifier = Heap.pop(stringArray);
stringIdentifier = Heap.pop(stringArray, stringComparator);

numberIdentifier = Heap.replace(numberArray, 1);
numberIdentifier = Heap.replace(numberArray, 1, numberComparator);

stringIdentifier = Heap.replace(stringArray, "foo");
stringIdentifier = Heap.replace(stringArray, "foo", stringComparator);

numberIdentifier = Heap.pushpop(numberArray, 1);
numberIdentifier = Heap.pushpop(numberArray, 1, numberComparator);

stringIdentifier = Heap.pushpop(stringArray, "foo");
stringIdentifier = Heap.pushpop(stringArray, "foo", stringComparator);

Heap.heapify(numberArray);
Heap.heapify(numberArray, numberComparator);

Heap.heapify(stringArray);
Heap.heapify(stringArray, stringComparator);

Heap.updateItem(numberArray, 1);
Heap.updateItem(numberArray, 1, numberComparator);

Heap.updateItem(stringArray, "foo");
Heap.updateItem(stringArray, "foo", stringComparator);

Heap.nlargest(numberArray, 1);
Heap.nlargest(numberArray, 1, numberComparator);

Heap.nlargest(stringArray, 1);
Heap.nlargest(stringArray, 1, stringComparator);

Heap.nsmallest(numberArray, 1);
Heap.nsmallest(numberArray, 1, numberComparator);

Heap.nsmallest(stringArray, 1);
Heap.nsmallest(stringArray, 1, stringComparator);
