/**
 * Test valid usage with HTMLElement parent
 */
const makeControlResult1: any = frappe.ui.form.make_control({
  parent: document.createElement('div'),
  df: {
    label: 'Test Label',
    fieldname: 'test_field',
    fieldtype: 'Data',
  },
})

/**
 * Test optional render_input and options
 */
const makeControlResult2: any = frappe.ui.form.make_control({
  parent: document.createElement('span'),
  df: {
    label: 'Another Label',
    fieldname: 'another_field',
    fieldtype: 'Link',
    options: 'SomeOption',
  },
  render_input: true,
})

frappe.ui.form.make_control({
  parent: document.createElement('div'),
  // @ts-expect-error
  df: {
    fieldname: 'f',
    fieldtype: 'Data',
  },
})
