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

InCallManager.getAudioUri("ringtone", "_DEFAULT_");

InCallManager.startRingtone();

InCallManager.startRingtone("", [], "playback", 0);

InCallManager.stopRingtone();

InCallManager.setFlashOn();

InCallManager.setFlashOn(true, 1);

InCallManager.getIsWiredHeadsetPluggedIn();

InCallManager.startProximitySensor();

InCallManager.stopProximitySensor();

InCallManager.chooseAudioRoute("EARPIECE");

InCallManager.requestAudioFocus();

InCallManager.abandonAudioFocus();
