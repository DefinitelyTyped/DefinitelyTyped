import userEvent, { UserOpts } from 'user-event';

userEvent.click(document.body); // $ExpectType void
userEvent.dblClick(window); // $ExpectType void
userEvent.selectOptions(window, 'test'); // $ExpectType void
userEvent.selectOptions(window, ['test1', 'test2']); // $ExpectType void
userEvent.type(document.body, "s"); // $ExpectType Promise<void>
userEvent.type(document.body, "s", {}); // $ExpectType Promise<void>
userEvent.type(document.body, "s", { delay: 5000 }); // $ExpectType Promise<void>
userEvent.type(document.body, "s", { allAtOnce: true }); // $ExpectType Promise<void>
userEvent.type(document.body, "s", { delay: 1000, allAtOnce: false }); // $ExpectType Promise<void>

const u: UserOpts = { delay: 20 };
