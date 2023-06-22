import { cmp, newComparer } from "semver-compare-multi";

let x: number;
let sorted: string[];
const arr = [
    '1.2.3',
    '4.11.6',
    '4.2.0',
    '1.5.19',
    '1.5.5',
    '4.1.3',
    '2.3.1',
    '10.5.5',
    '11.3.0'
];
const arr1 = [
    '1.2-3',
    '4.11beta6',
    '4.2beta0',
    '1.5-19',
    '1beta5-5',
    '4.1-3',
    '2.3beta1',
    '10.5beta5',
    '11.3beta0'
];

x = cmp("1.0.2", "1.3.2");
x = newComparer(["_", "\\.", "-"])("1_5.3-2", "1.3_2-4");
sorted = arr.sort(cmp);
sorted = arr1.sort(newComparer(["beta", "\\.", "-"]));
