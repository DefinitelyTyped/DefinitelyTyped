import * as sorted from "sorted-array-functions";

const list = [1, 4];

function compare(a: number, b: number) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
}

sorted.add(list, 2, compare);

sorted.addFromFront(list, 0);

sorted.remove(list, 1);

sorted.has(list, 3);

sorted.eq(list, 2);

sorted.gte(list, 2);

sorted.gt(list, 2);

sorted.lte(list, 2);

sorted.lt(list, 2);

sorted.nearest(list, 2);
