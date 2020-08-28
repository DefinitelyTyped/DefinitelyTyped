import InCallManager from "react-native-incall-manager";

InCallManager.start({ media: "video" });

InCallManager.start();

InCallManager.stop({ busytone: "video" });

InCallManager.stop();

InCallManager.turnScreenOn();

InCallManager.turnScreenOff();

InCallManager.setKeepScreenOn(true);

InCallManager.setKeepScreenOn();

InCallManager.setSpeakerphoneOn();

InCallManager.setSpeakerphoneOn(true);

InCallManager.setMicrophoneMute();

InCallManager.setMicrophoneMute(false);

InCallManager.checkRecordPermission();

InCallManager.requestRecordPermission();

InCallManager.getAudioUri("", "");

InCallManager.startRingtone();

InCallManager.startRingtone("", [], "", 0);

InCallManager.stopRingtone();

InCallManager.setFlashOn();

InCallManager.setFlashOn(true, 1);

InCallManager.getIsWiredHeadsetPluggedIn();
