Keyboard.shrinkView(true);
Keyboard.shrinkView(false);
Keyboard.shrinkView(null, (currentValue) => console.log(currentValue));

Keyboard.hideFormAccessoryBar(true);
Keyboard.hideFormAccessoryBar(false);
Keyboard.hideFormAccessoryBar(null, (currentValue) => console.log(currentValue));

Keyboard.disableScrollingInShrinkView(true);
Keyboard.disableScrollingInShrinkView(false);
Keyboard.disableScrollingInShrinkView(null, (currentValue) => console.log(currentValue));

Keyboard.hide();

Keyboard.show();

if (Keyboard.isVisible) {
    console.log('Keyboard is visible');
}

Keyboard.automaticScrollToTopOnHiding = true;

window.addEventListener('keyboardDidShow', () => console.log('keyboardDidShow'));

window.addEventListener('keyboardDidHide', () => console.log('keyboardDidHide'));

window.addEventListener('keyboardWillShow', () => console.log('keyboardWillShow'));

window.addEventListener('keyboardWillHide', () => console.log('keyboardWillHide'));

window.addEventListener('keyboardHeightWillChange', (event: CordovaKeyboardEvent) => console.log(`keyboardHeightWillChange - keyboard height: ${event.keyboardHeight}`));
