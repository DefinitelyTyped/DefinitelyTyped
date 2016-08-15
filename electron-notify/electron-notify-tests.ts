/// <reference path="./electron-notify.d.ts" />

import * as eNotify from 'electron-notify';

eNotify.setConfig({
  appIcon: 'images/otherIcon.png',
  displayTime: 6000,
  defaultStyleText: {
    color: '#FF0000',
    fontWeight: 'bold'
  }
});

eNotify.notify({
  title: 'Title',
  text: 'Some text',
  image: 'path/to/image.png',
  url: 'http://google.de',
  sound: 'notification.wav',
  onClickFunc: function () { console.log('onClick') },
  onShowFunc: function () { console.log('onShow') },
  onCloseFunc: function () { console.log('onClose') }
});