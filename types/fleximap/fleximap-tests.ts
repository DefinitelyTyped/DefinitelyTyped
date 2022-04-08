import { FlexiMap } from "fleximap";

let flexiMap = new FlexiMap();
flexiMap = new FlexiMap({ arr: [] });
flexiMap = new FlexiMap([{ arr: [] }, { obj: {} }]);

flexiMap.set('keyA', {arr: [], obj: {}});
let result = flexiMap.get(['keyA', 'arr']);

flexiMap.add(['keyB1', 'keyB2', 'keyB3'], 123);
result = flexiMap.get(['keyB1', 'keyB2']);

const arr = [];
arr[5] = 'Hello world';

flexiMap.set(['keyC1', 'keyC2'], arr);
result = flexiMap.get(['keyC1', 'keyC2']);

flexiMap.set(['itemsA', 0], 'hello');
flexiMap.set(['itemsA', 2], 'world');
flexiMap.remove(['itemsA', 0]);

flexiMap.set(['itemsB', 0], 'a');
flexiMap.set(['itemsB', 1], 'b');
flexiMap.set(['itemsB', 2], 'c');
let splicedItems = flexiMap.splice(['itemsB'], 1, 1);
splicedItems = flexiMap.splice(['itemsB'], 1, 0, 'b2');
