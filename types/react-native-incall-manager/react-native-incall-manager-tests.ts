import InCallManager from "react-native-incall-manager";

const InCallManagerInit = new InCallManager();

InCallManagerInit.start({ media: "video" });

InCallManagerInit.start();

InCallManagerInit.stop({ busytone: "video" });

InCallManagerInit.stop();

InCallManagerInit.turnScreenOn();

InCallManagerInit.turnScreenOff();

InCallManagerInit.setKeepScreenOn(true);

InCallManagerInit.setKeepScreenOn();

InCallManagerInit.setSpeakerphoneOn();

InCallManagerInit.setSpeakerphoneOn(true);

InCallManagerInit.setMicrophoneMute();

InCallManagerInit.setMicrophoneMute(false);

InCallManagerInit.checkRecordPermission();

InCallManagerInit.requestRecordPermission();

InCallManagerInit.getAudioUri("", "");

InCallManagerInit.startRingtone();

InCallManagerInit.startRingtone("", [], "", 0);

InCallManagerInit.stopRingtone();

InCallManagerInit.setFlashOn();

InCallManagerInit.setFlashOn(true, 1);

InCallManagerInit.getIsWiredHeadsetPluggedIn();
