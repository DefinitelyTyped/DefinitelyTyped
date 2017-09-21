import { EmitterSubscription } from 'react-native';
import SafariView from 'react-native-safari-view';

const didShow: Promise<boolean> = SafariView.show({
    barTintColor: '#FFFFFF',
    fromBottom: true,
    readerMode: true,
    tintColor: '#000000',
    url: 'http://test.url'
});

const listener = (): void => {};

const subscription: EmitterSubscription = SafariView.addEventListener('onShow', listener);

SafariView.removeEventListener('onShow', listener);

SafariView.dismiss();

const available: Promise<boolean> = SafariView.isAvailable();
