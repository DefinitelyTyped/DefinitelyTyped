import * as Keychain from 'react-native-keychain';

async () => {
  const username = 'username';
  const password = 'password';

  await Keychain.setGenericPassword(username, password);

  try {
    const credentials = await Keychain.getGenericPassword();
  } catch (error) {
    throw error;
  }
  await Keychain.resetGenericPassword();
};
