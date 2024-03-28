import { StrategyOptions, Profile } from 'passport-wechat';

// Test StrategyOptions interface
const options: StrategyOptions = {
  clientID: 'your-client-id',
  clientSecret: 'your-client-secret',
  callbackURL: 'your-callback-url',
  scope: 'snsapi_login',
};

// Test Profile interface
const profile: Profile = {
  id: '123',
  username: 'username',
  displayName: 'display name',
  photos: ['http://example.com/photo.jpg'],
  provider: 'wechat',
};

