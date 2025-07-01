  const dialog1: frappe.ui.Dialog = new frappe.ui.Dialog({
    title: 'Test Dialog',
    fields: [{ label: 'L', fieldname: 'f', fieldtype: 'Data' }],
  });
  
  const dialog2: frappe.ui.Dialog = new frappe.ui.Dialog({
    title: 'Test Dialog',
    fields: [{ label: 'L', fieldname: 'f', fieldtype: 'Data' }],
    size: 'large',
    primary_action_label: 'OK',
    primary_action: (values) => {},
  });
  
  // Missing required properties
  // @ts-expect-error
  new frappe.ui.Dialog({
    fields: [{ label: 'L', fieldname: 'f', fieldtype: 'Data' }],
  });
  
  new frappe.ui.Dialog({
    title: 'Test',
    fields: [{ label: 'L', fieldname: 'f', fieldtype: 'Data' }],
    // @ts-expect-error
    size: 'medium',
  });
  
  // Instance methods
  const dlg = new frappe.ui.Dialog({
    title: 'Test',
    fields: [{ label: 'L', fieldname: 'f', fieldtype: 'Data' }],
  })
  
 dlg.show();
 dlg.hide();
 dlg.set_value('f', 123);
 dlg.get_value('f');
 dlg.set_primary_action('Submit', (values) => {});
 dlg.set_df_property('f', 'label', 'New');
  
  // msgprint
  frappe.msgprint('Hello');
  frappe.msgprint({
    title: 'T',
    message: 'Hello',
    indicator: 'green',
    primary_action: () => {},
  });
  // @ts-expect-error
  frappe.msgprint(123);
  
  // throw_
  const throwResult: never = frappe.throw_('Error');
  
  // prompt
  frappe.prompt('Enter', (values) => {});
  frappe.prompt('Enter', (values) => {}, 'Title', 'OK');
  frappe.prompt(
    { label: 'L', fieldname: 'f', fieldtype: 'Data' },
    (values) => {}
  );
  frappe.prompt(
    [{ label: 'L', fieldname: 'f', fieldtype: 'Data' }],
    (values) => {},
    'Title',
    'OK'
  );
  // @ts-expect-error
  frappe.prompt(123, (values) => {});
  
  // confirm
  frappe.confirm('Proceed?', () => {});
  frappe.confirm(
    'Proceed?',
    () => {},
    () => {}
  );
  // @ts-expect-error
  frappe.confirm();
  // @ts-expect-error
  frappe.confirm('Proceed?');
  
  // warn
  frappe.warn('W', 'message', () => {});
  frappe.warn('W', 'message', () => {}, 'OK');
  frappe.warn('W', 'message', () => {}, undefined, true);
  // @ts-expect-error
  frappe.warn();
  
  // show_alert
  frappe.show_alert('Alert');
  frappe.show_alert({ message: 'Alert', indicator: 'red' });
  frappe.show_alert('Alert', 5);
  // @ts-expect-error
  frappe.show_alert(123);
  // @ts-expect-error
  frappe.show_alert('Alert', '5');
  
  // show_progress
  frappe.show_progress('Loading', 1, 10);
  frappe.show_progress('Loading', 1, 10, 'desc');
  // @ts-expect-error
  frappe.show_progress('Loading', '1', 10);
  // @ts-expect-error
  frappe.show_progress('Loading', 1, 10, 5);
  