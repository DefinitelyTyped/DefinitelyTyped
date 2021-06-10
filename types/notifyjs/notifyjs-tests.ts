import Notify, { NotifyOption } from 'notifyjs';

function test_Notify_constructor() {
    //Min
    var n = new Notify('hoge');
    n.show();

    //With option
    const option: NotifyOption = { body: 'fuga' };
    n = new Notify('hoge', option);
    n.show();

    //With Full option
    n = new Notify('hoge', {
        body: 'fuga',
        icon: './logo.png',
        tag: 'user',
        timeout: 2,
        silent: false,
        notifyShow: (e: Event) => console.log('notifyShow', e),
        notifyClose: () => console.log('notifyClose'),
        notifyClick: () => console.log('notifyClick'),
        notifyError: () => console.log('notifyError'),
        permissionGranted: () => console.log('permissionGranted'),
        permissionDenied: () => console.log('permissionDenied'),
        requireInteraction: true,
    });
    n.show();
}

function test_Notify_static_methods() {
    Notify.needsPermission;
    Notify.requestPermission();
    Notify.requestPermission(() => console.log('onPermissionGrantedCallback'));
    Notify.requestPermission(
        () => console.log('onPermissionGrantedCallback'),
        () => console.log('onPermissionDeniedCallback'),
    );
    Notify.isSupported();
    Notify.permissionLevel;
}
