import { Deck, evalCard, evalHand, EvaluatedHand, HandName, HANDTYPES, ranks } from 'poker-evaluator';

HANDTYPES; // $ExpectType HandName[]
ranks; // $ExpectType Buffer

evalHand(['as', 'ks', 'qs', 'js', 'ts', '3c', '5h']); // $ExpectType EvaluatedHand
const result: EvaluatedHand = {
    handType: 9,
    handRank: 10,
    value: 36874,
    handName: 'straight flush',
};

evalCard('as'); // $ExpectType number

const highCardName: HandName = 'high card';
const deck: Deck = {
    '2c': 1,
    '2d': 2,
    '2h': 3,
    '2s': 4,
    '3c': 5,
    '3d': 6,
    '3h': 7,
    '3s': 8,
    '4c': 9,
    '4d': 10,
    '4h': 11,
    '4s': 12,
    '5c': 13,
    '5d': 14,
    '5h': 15,
    '5s': 16,
    '6c': 17,
    '6d': 18,
    '6h': 19,
    '6s': 20,
    '7c': 21,
    '7d': 22,
    '7h': 23,
    '7s': 24,
    '8c': 25,
    '8d': 26,
    '8h': 27,
    '8s': 28,
    '9c': 29,
    '9d': 30,
    '9h': 31,
    '9s': 32,
    tc: 33,
    td: 34,
    th: 35,
    ts: 36,
    jc: 37,
    jd: 38,
    jh: 39,
    js: 40,
    qc: 41,
    qd: 42,
    qh: 43,
    qs: 44,
    kc: 45,
    kd: 46,
    kh: 47,
    ks: 48,
    ac: 49,
    ad: 50,
    ah: 51,
    as: 52
};
