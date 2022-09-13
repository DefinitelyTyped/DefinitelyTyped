import RNEasyUpgrade from 'react-native-easy-upgrade';
import { Alert, Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';

const easyUpgrade = new RNEasyUpgrade({
    iOSAppId: '12345678',
    downloadTitle: 'Download package',
    downloadDescription: 'Packing downloading...',
    downloadApkEnd: () => {
        // eg: install apk
        easyUpgrade.installApk();
    },
    onError: () => {
        console.log('downloadApkError');
    }
});

async function getUpdateInfo() {
    const updateInfo = {
        latestVersion: '3.0.0',
        hasNewVersion: true,
        apkUrl: 'http://{remoteApkDownloadUrl}'
    };
    if (isAndroid) {
        try {
            const resp = await fetch('http://{remoteUrl}/updateInfo.json');
            return await resp.json();
        } catch (error) {
            return updateInfo;
        }
    } else {
        return easyUpgrade.checkAppVersionIOS();
    }
}

async function startUpgrade() {
    const updateInfo = await getUpdateInfo();
    if (updateInfo.hasNewVersion) {
        Alert.alert(
            'Find a new version: ' + updateInfo.latestVersion,
            'Whether to upgrade app?',
            [
                { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                {
                    text: 'Upgrade', onPress: () => {
                        easyUpgrade.startAppUpdate(updateInfo.apkUrl);
                    }
                },
            ],
        );
    }
}
