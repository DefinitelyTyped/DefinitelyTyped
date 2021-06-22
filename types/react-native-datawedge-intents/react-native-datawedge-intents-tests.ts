import DataWedgeIntents from 'react-native-datawedge-intents';

//  Register a receiver for the barcode scans with the appropriate action
DataWedgeIntents.registerBroadcastReceiver({
    filterActions: [
        'com.zebra.reactnativedemo.ACTION',
        'com.symbol.datawedge.api.RESULT_ACTION'
    ],
    filterCategories: [
        'android.intent.category.DEFAULT'
    ]
});

//  Initiate a scan (you could also press the trigger key)
sendCommand('com.symbol.datawedge.api.SOFT_SCAN_TRIGGER', 'TOGGLE_SCANNING');

function sendCommand(extraName: string, extraValue: any) {
    const broadcastExtras = {
        [extraName]: extraValue,
        SEND_RESULT: "false" // need to be passed as string
    };
    DataWedgeIntents.sendBroadcastWithExtras({
        action: "com.symbol.datawedge.api.ACTION",
        extras: broadcastExtras
    });
}
