const simpleExample = <fbt desc="Welcome message">Hello</fbt>;

const paramExample = <fbt desc="Welcome message">Hello, <fbt:param name="name">Name</fbt:param></fbt>;

const pluralExample = <fbt desc="Enumeration"><fbt:plural name="name" count={2} showCount="yes" many="items">item</fbt:plural></fbt>;

// @ts-expect-error desc is required
const invalid1 = <fbt>children</fbt>;
