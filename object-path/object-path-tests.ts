/// <reference path="object-path.d.ts" />

var
  object = {
    one: 1,
    two: {
      three: 3,
      four: ['4']
    }
  },
  array: any[] = [],
  Null:any = null;

objectPath.del<string[]>(array) === ['12'];
objectPath.del<typeof object>(object) === object;
objectPath.del(object) === object;

objectPath.del() === void 0;
objectPath.del(object, ['1','2','3']);
objectPath.del(object, [1,2,3]);
objectPath.del(object, 1);
objectPath.del(object, 'one').one === 1;

objectPath.coalesce(object, ['1','2']) === void 0;
objectPath.coalesce(object, ['1',['2','1']]) === void 0;
objectPath.coalesce(object, ['1',['2','1']], 1) === 1;
objectPath.coalesce(object, [1,1], 1) === 1;
objectPath.coalesce(object, <Array<number[]>>[1,[1,1]], 1) === 1;

objectPath.ensureExists(object, '1.2', 2);
objectPath.ensureExists(object, 1, 2);
objectPath.ensureExists(object, [1,2], 2);
objectPath.ensureExists(object, ['1','2'], 2);
objectPath.ensureExists<typeof object, number>(object, ['1','2'], 2) === 3;
objectPath.ensureExists<typeof object, any[][]>(object, ['1','2'], 2) === [[]];

objectPath.push(object, 1, 1,2,3,4);
objectPath.push(object, 1, 1,'2', 3, false);
objectPath.push(object, 'one.four', 1,'2', 3, false);
objectPath.push(object, ['one','two'], [1,'2', 3, false]);

objectPath.get(array) === array;
objectPath.get(Null) === Null;
objectPath.get() === void 0;
objectPath.get(object, 'one') === 1;
objectPath.get(object, ['two','three']) === 3;
objectPath.get(object, ['three'], 3) === 3;
objectPath.get(object, 'three', 3) === 3;
objectPath.get(object, 0, 3) === 3;
objectPath.get(object, 0, '3') === '3';
objectPath.get<typeof object, string[]>(object, 0, ['1','2']) === ['1','2'];
objectPath.get<typeof object, number>(object, 0) === 10;

objectPath.set(object, '1.2', true);
objectPath.set(object, ['1','2'], true);
objectPath.set(object, [1, 2], true);
objectPath.set(object, '1.2', true, true);
objectPath.set(object, '1.2', true, false);
objectPath.set<typeof object, string[]>(object, '1.2', true, false) === ['string'];
objectPath.set<typeof object, typeof object>(object, '1.2', true, false) === object;

objectPath.insert(object, '1.2', 1);
objectPath.insert(object, ['1','2'], 1);
objectPath.insert(object, 1, 1);
objectPath.insert(object, [1,2], 1);
objectPath.insert(object, '1.2', 1, 2);
objectPath.insert(object, ['1.2'], 1, 6);

