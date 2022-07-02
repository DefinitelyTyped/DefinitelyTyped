import PopupWindow from 'popup-window';

// Ensure we can use and instantiate PopupWindow class.
const popup1 = new PopupWindow();
// PopupWindow instance should have open() method.
popup1.open();
// PopupWindow instance should have close() method.
popup1.close();

const popup2 = new PopupWindow();
// Test common use-case with passing opened, blocked and closed callbacks.
popup2.opened(win => {
  // The callback argument should be an instance of PopupWindow.
  console.log(win.url);
  console.log(win.name);
}).blocked(win => {
  // The callback argument should be an instance of PopupWindow.
  console.log(win.url);
  console.log(win.name);
}).closed(win => {
  // The callback argument should be an instance of PopupWindow.
  console.log(win.url);
  console.log(win.name);
});

// PopupWindow class should accept URL contructor argument.
const popup3 = new PopupWindow('http://example.com');

// PopupWindow class should accept both URL and configuration constructor arguments.
const popup4 = new PopupWindow(
  'http://example.com',
  // Test configuration interface.
  {
    width: 350,
    height: 250,
    resizable: true,
    menubar: false
  }
);
