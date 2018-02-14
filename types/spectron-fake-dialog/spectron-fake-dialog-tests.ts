import * as fakeDialog from "spectron-fake-dialog";
import { Application } from 'spectron';

const app = new Application({path: ''});
fakeDialog.apply(app);

const options: fakeDialog.FakeDialogOptions = {
  method: 'method',
  value: 'value'
};

fakeDialog.mock([options]);
