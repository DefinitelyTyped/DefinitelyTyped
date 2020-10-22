import arraySort from 'array-sort';

const numberArr = [1, 2, 3];
const objArr = [{foo: "asd"}, {foo: "fas"}];

arraySort(objArr);
arraySort(numberArr);

arraySort(objArr, "foo");
arraySort(objArr, "foo", {reverse: true});

arraySort(objArr, ["foo"]);
arraySort(objArr, ["foo"], {reverse: true});

arraySort(numberArr, ["foo", (a, b) => -1]);
arraySort(numberArr, [(a, b) => 1], {reverse: true});
