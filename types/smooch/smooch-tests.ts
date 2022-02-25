import Smooch = require('smooch');

// InitOptions must always have integrationId
// $ExpectError
Smooch.init({});
// integrationId must be a string
// $ExpectError
Smooch.init({ integrationId: 42 });

Smooch.init({ integrationId: '' });
Smooch.open();
Smooch.close();
Smooch.destroy();
// $ExpectType boolean
Smooch.isOpened();

Smooch.login('externalId', 'jwt');
Smooch.logout();

// All fields of updateConversation's options should be optional
Smooch.updateConversation('conversation-id', {});
// All fields of updateConversation's options should be nullable
Smooch.updateConversation('conversation-id', { lastUpdatedAt: null, iconUrl: null });
// We should still not be able to provide the wrong type for one of updateConversation's options
// $ExpectError
Smooch.updateConversation('conversation-id', { lastUpdatedAt: 'may', iconUrl: 42 });

// updateUser should allow custom data to be submitted via the metadata property
Smooch.updateUser({ metadata: { myCustomProperty: 21 } });
// updateUser should also allow custom data to be submitted via the properties property
Smooch.updateUser({ properties: { myCustomProperty: 21 } });
// But updateUser should NOT allow custom data to be added outside of the metadata property
// $ExpectError
Smooch.updateUser({ anIncorrectProperty: 21 });
