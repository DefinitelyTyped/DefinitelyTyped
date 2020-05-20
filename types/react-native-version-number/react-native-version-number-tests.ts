import VersionNumber from 'react-native-version-number';

const FullVersionNumber: VersionNumber = {
  appVersion: '1.0',
  buildVersion: '42',
  bundleIdentifier: 'com.foo.bar.MyApp',
};

const MissingAppVersionNumber: VersionNumber = {
  buildVersion: '42',
  bundleIdentifier: 'com.foo.bar.MyApp',
};

const MissingBuildVersionNumber: VersionNumber = {
  appVersion: '1.0',
  bundleIdentifier: 'com.foo.bar.MyApp',
};

const MissingBundleVersionNumber: VersionNumber = {
  appVersion: '1.0',
  buildVersion: '42',
};
