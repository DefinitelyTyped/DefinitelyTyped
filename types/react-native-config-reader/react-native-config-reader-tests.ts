import { Platform } from "react-native";
import RNConfigReader from "react-native-config-reader";

if (Platform.OS === "ios") {
    const iosBundleDisplayName = RNConfigReader.CFBundleDisplayName;
    const testConfigValue = RNConfigReader.TEST_CONFIG_FIELD;
}

if (Platform.OS === "android") {
    const androidApplicationID = RNConfigReader.applicationId;
    const testConfigValue = RNConfigReader.TEST_CONFIG_FIELD;
}
