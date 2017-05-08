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
    onClickFunc: (event) => {
        console.log('onClick ' + event.id);
        event.closeNotification('onClick');
    },
    onShowFunc: (event) => { console.log('onShow ' + event.id) },
    onCloseFunc: (event) => { console.log('onClose ' + event.id) }
});