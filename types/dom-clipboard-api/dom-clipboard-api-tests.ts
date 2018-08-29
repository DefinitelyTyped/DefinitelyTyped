const clipboard = navigator.clipboard;

let text: string;

clipboard.writeText('foo');
clipboard.readText().then((val) => {
    text = val;
});

const transfer = new DataTransfer();
transfer.setData('text/plain', 'foo');

clipboard.write(transfer);
clipboard.read().then((tf) => {
    text = tf.getData('text/plain');
});
