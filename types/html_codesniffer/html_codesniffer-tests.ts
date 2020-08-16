HTMLCS.ERROR; // $ExpectType 1
HTMLCS.NOTICE; // $ExpectType 3
HTMLCS.WARNING; // $ExpectType 2

const container = document.getElementById('#container')!;

HTMLCS.addMessage(HTMLCS.ERROR, container, 'Test message', '34443');
HTMLCS.getMessages(); // $ExpectType Message[]
HTMLCS.getTranslation('Hello World!'); // $ExpectType string
HTMLCS.isFullDoc(container); // $ExpectType boolean
HTMLCS.lang; // $ExpectType string
HTMLCS.loadStandard('Section508', () => {
    //
});
HTMLCS.process(
    'Section508',
    container,
    () => {
        // done
    },
    () => {
        // error
    },
    HTMLCS.lang,
);
HTMLCS.run(() => {
    // done
}, container);

HTMLCS.Util; // $ExpectType typeof Util
