import * as notifier from 'electron-notifications';

const data: notifier.NotifierOptions = {
  message: 'message',
  icon: 'icon',
  buttons: ['ok', 'cancel']
};
const notification = notifier.notify('title', data);
notification.on('clicked', () => { console.log('clicked') });
notification.on('swipedRight', () => { console.log('swipedRight') });
notification.on('buttonClicked', (text) => { console.log(`buttonClicked: ${text}`) });