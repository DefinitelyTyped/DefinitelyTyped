import OrderedMap = require('orderedmap');

// Ensure .get() returns the correct type.
OrderedMap
    .from({ one: 1 })
    .get('one')!.toExponential();
OrderedMap
    .from({ one: '1' })
    .get('one')!.codePointAt(0);

const om = OrderedMap.from({ key: 'value' });

// Terminating methods / properties
om.get('key');
om.forEach((key: string, value: string) => {});
om.size + 1;

// Method chaining
om
    .update('key', 'value')
    .remove('key')
    .addToStart('key', 'value')
    .addToEnd('key', 'value')
    .addBefore('key', 'key', 'value')
    .prepend({ key: 'value' })
    .append({ key: 'value' })
    .subtract({ key: 'value' });
