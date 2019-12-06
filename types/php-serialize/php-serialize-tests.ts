import PhpSerialize = require('php-serialize');

const testObject = {
  user_id: 399,
  parent_user_id: 399,
};
const serialized = PhpSerialize.serialize(testObject);
PhpSerialize.unserialize(serialized);
