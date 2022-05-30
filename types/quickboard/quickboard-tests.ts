const quickboard = require('quickboard');

// $ExpectType any
const result = new quickboard({
    max: 1,
    data: [{ member: { displayName: 'foo' }, value: 1 }],
    map: (item: { member: { displayName: string }, value: number }, index: number) => `${index + 1}. ${item.member.displayName} - ${item.value} messages`,
    sort: (according: { member: { displayName: string }, value: number }, current: { member: { displayName: string }, value: number }) => current.value - according.value,
}).create();
