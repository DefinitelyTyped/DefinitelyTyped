
Lockr.set('test', 123);
Lockr.sadd('array', 2);
Lockr.sadd('array', 3);
Lockr.set('hash', {"test": 123, "hey": "whatsup"});
Lockr.set('hash', [1, 2, 3]);
Lockr.set('valueFalse', false);
Lockr.set('value0', 0);

let value = Lockr.get<number>('test');
Lockr.rm('test');

let contents = Lockr.getAll();
Lockr.flush();

Lockr.sadd('test_set', 1);
Lockr.sadd('test_set', 2);
Lockr.smembers('test_set');
Lockr.sismember('test_set', 1);
Lockr.srem('test_set', 1);

Lockr.prefix = "imaprefix";
