/*
  From
  - https://help.hotjar.com/hc/en-us/articles/6164366461719
  - https://help.hotjar.com/hc/en-us/articles/360038394053
*/
hj('identify', 'user-123', {
    name: 'John Doe',
});

hj('event', 'button_clicked');

// @ts-expect-error
hj('identify', 'user-123');

// @ts-expect-error
hj('event', 'button_clicked', {
    button_color: 'red',
});
