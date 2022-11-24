const app = window.Telegram.WebApp;

app.ready();
if (!app.isExpanded) {
    app.expand(); // $ExpectType void
}
const btn = app.MainButton; // $ExpectType MainButton
btn.text = (app.initDataUnsafe.user?.first_name ?? 'you') + ' r 2 close';
btn.onClick(() => {
    app.close();
});
app.onEvent('viewportChanged', e => {
    if (e.isStateStable) console.log('Done at', app.viewportHeight);
    else console.log('Changing, currently at ', app.viewportHeight);
});
app.showPopup(
    {
        message: 'Hello',
        buttons: [{ type: 'default', text: 'Button text', id: 'btn_id' }],
    },
    btn_id => console.log(btn_id),
);
app.onEvent('popupClosed', e => {
    console.log(e.button_id);
});
