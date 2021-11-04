import * as R from 'ramda';

() => {
  const list1 = [
    { id: 1, name: 'One' },
    { id: 2, name: 'Two' },
    { id: 3, name: 'Three' },
    { id: 4, name: 'Four' },
    { id: 5, name: 'Five' },
  ];

  const list2 = [5, 4, 6];
  const matchId = (record: { id: number; name: string }, id: number): boolean =>
    record.id === id;

  R.innerJoin(matchId, list1, list2); // [{"id": 4, "name": "Four"}, {"id": 5, "name": "Five"}]

  const innerJoinCurried = R.innerJoin(matchId);
  innerJoinCurried(list1, list2); // [{"id": 4, "name": "Four"}, {"id": 5, "name": "Five"}]
};
