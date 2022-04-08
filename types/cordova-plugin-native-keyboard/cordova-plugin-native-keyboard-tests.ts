/**
 * Display Messenger
 */
NativeKeyboard.showMessenger({
    onSubmit: (text) => {},
    onKeyboardDidHide: () => {},
    onKeyboardDidShow: () => {},
    onKeyboardWillShow: () => {},
    onTextChanged: (text) => {},
    onKeyboardWillHide: () => {},
});

/**
 * Display Messenger Keyboard
 */
NativeKeyboard.showMessengerKeyboard(
    () => {},
    () => {});

/**
 * Hide Messenger
 */
NativeKeyboard.hideMessenger(
    { animated: true},
    () => {},
    () => {});

NativeKeyboard.hideMessenger();

/**
 * Hide Messenger Keyboard
 */
NativeKeyboard.hideMessengerKeyboard(
    () => {},
    () => {});

/**
 * Update Messenger Keyboard
 */
NativeKeyboard.updateMessenger(
    {text: 'FooBar'},
    () => {},
    () => {});
