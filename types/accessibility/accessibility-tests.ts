let options: Accessibility.Options = {
    icon: {
        position: {
            bottom: { size: 50, units: 'px' },
            right: { size: 0, units: 'px' },
            type: 'fixed',
        },
        circular: false,
        img: 'accessible',
    },
    session: {
        persistent: false,
    },
};
new Accessibility(options);

options = {
    icon: {
        position: {
            top: { size: 2, units: 'vh' },
            left: { size: 2, units: '%' },
            type: 'absolute',
        },
    },
};
new Accessibility(options);

const instance = new Accessibility(options);

instance.menuInterface.increaseText();

instance.menuInterface.decreaseText();

instance.menuInterface.increaseTextSpacing();

instance.menuInterface.decreaseTextSpacing();

instance.menuInterface.invertColors();

instance.menuInterface.grayHues();

instance.menuInterface.underlineLinks();

instance.menuInterface.bigCursor();

instance.menuInterface.readingGuide();

instance.menuInterface.textToSpeech();

instance.menuInterface.speechToText();
