let app = new ActiveXObject('Access.Application');
app.UserControl = true;

// opens a form
app.DoCmd.OpenForm('MyForm', Access.AcFormView.acNormal, '', 'LastName="Smith"');

// change the contents of a textbox
// tslint:disable-next-line:no-unnecessary-type-assertion
let textbox = app.Forms.Item('MyForm').Controls.Item('MyTextBox') as Access.TextBox;
textbox.Text = 'Not Smith';

// save the current record on the active form
app.RunCommand(Access.AcCommand.acCmdSaveRecord);

// close the form
app.DoCmd.Close(Access.AcObjectType.acForm, 'MyForm');

// open a report for printing
app.DoCmd.OpenReport('MyReport');

// open the same report in Design View
app.DoCmd.OpenReport('MyReport', Access.AcView.acViewDesign);

// run a VBA macro
app.Run('MyMacro', 'argument1', 2);
