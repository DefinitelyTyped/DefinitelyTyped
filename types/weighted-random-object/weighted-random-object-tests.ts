import weightedRandomObject from 'weighted-random-object';

interface MyObject {
    data: string;
    weight: number;
}

const objs: MyObject[] = [{ data: 'a', weight: 7 }, { data: 'b', weight: 5 }];

weightedRandomObject(objs); // $ExpectType MyObject

weightedRandomObject([{ f: 5, weight: 1 }, { f: 9, weight: 2 }]).f; // $ExpectType number
