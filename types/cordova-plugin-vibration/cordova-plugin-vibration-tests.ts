var notification: Notification;

notification.vibrate(100);
notification.vibrateWithPattern([100, 200, 200, 150, 50], 3);
setTimeout(notification.cancelVibration, 1000);

