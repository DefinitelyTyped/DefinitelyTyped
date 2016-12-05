

var nh = new Azure.ServiceBus.NotificationHubService();
nh.send('tag', '<payload></payload>', function (error, result) {});
nh.send('tag', '<payload></payload>', { headers: {} }, function (error, result) {});

nh.apns.send('tag', { payload: { } }, function (error, result) {});
nh.apns.send(['tag'], { payload: { } }, function (error, result) {});
nh.gcm.send('tag', { }, function (error, result) {});
nh.gcm.send(['tag'], { }, function (error, result) {});
nh.wns.send('tag', '<payload></payload>', 'wns/toast', function (error, result) {});
nh.wns.send(['tag'], '<payload></payload>', 'wns/toast', function (error, result) {});
nh.wns.send('tag', '<payload></payload>', 'wns/toast', { headers: {} }, function (error, result) {});
nh.wns.sendToastText01('tag', '<payload></payload>', function (error, result) {});
nh.wns.sendToastText01(['tag'], '<payload></payload>', function (error, result) {});
nh.wns.sendToastText01('tag', '<payload></payload>', { headers: {} }, function (error, result) {});