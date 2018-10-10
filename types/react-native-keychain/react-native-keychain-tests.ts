import * as Keychain from 'react-native-keychain';

async () => {
  const username = 'username';
  const password = 'password';

  const service: string | undefined = "test.service";
  const server = "test.server";

  const serviceOrOptions: string | Keychain.Options | undefined = {};
  const options: Keychain.Options = {};

  const keychainServicePassword: boolean | {
    service: string;
    username: string;
    password: string;
  } = await Keychain.getGenericPassword(service);
  const keychainPassword: boolean | {
    service: string;
    username: string;
    password: string;
  } = await Keychain.getGenericPassword();

  const keychainServerPassword: Keychain.UserCredentials = await Keychain.getInternetCredentials(server);

  const keychainSharedWebPassword: Keychain.SharedWebCredentials = await Keychain.requestSharedWebCredentials();

  const keychainResetGenericPassword: boolean = await Keychain.resetGenericPassword(serviceOrOptions);

  const keychainSetGenericPassword: boolean = await Keychain.setGenericPassword(username, password, options);

  const keychainSetServerPassword: boolean = await Keychain.setInternetCredentials(server, username, password, serviceOrOptions);

  const keychainSetSharedWebPassword: boolean = await Keychain.setSharedWebCredentials(server, username, password);

  const canImplyAuthentication: boolean = await Keychain.canImplyAuthentication(serviceOrOptions);

  const supportedBiometryType: string | null = await Keychain.getSupportedBiometryType();
};
