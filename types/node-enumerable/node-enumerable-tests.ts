import * as Enumerable from 'node-enumerable';


let seq = Enumerable.create(5979, 23979, null, '23979', 1781, 241279);

let newSeq = seq.where((x) => x !== null)
                .skip(1)
                .take(3)
                .distinct()
                .select((x) => "" + x)
                .order();

for (let item of newSeq) {
    console.log(item);
}
