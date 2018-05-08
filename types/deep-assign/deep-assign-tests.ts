import * as deepAssign from 'deep-assign';

deepAssign({a: 1});
deepAssign({a: 1}, {b: 2});
deepAssign({a: 1, b: {c: 2}}, {b: {e: 33}, x: 11});
deepAssign({}, {a: 1}, {b: 2}, {c: 3});
deepAssign({}, {a: 1}, {b: 2}, {c: 3}, {d: 4});
deepAssign({}, {a: 1}, {b: 2}, {c: 3}, {d: 4}, {e: 5});
deepAssign({}, {a: 1}, {b: 2}, {c: 3}, {d: 4}, {e: 5}, {f: 6});
deepAssign({}, {a: 1}, {b: 2}, {c: 3}, {d: 4}, {e: 5}, {f: 6}, {g: 7});
