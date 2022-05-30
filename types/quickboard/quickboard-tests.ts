import quickboard from "quickboard";

// $ExpectType string
const result = new quickboard({
    max: 1,
    data: [{ member: { displayName: 'foo' }, value: 1 }],
    map: (item, index) => `${index + 1}. ${item.member.displayName} - ${item.value} messages`,
    sort: (according, current) => current.value - according.value,
}).create();
