/// <reference types="knockout" />
/// <reference types="jquery" />

import * as angular from 'angular';
import * as ng from 'angular';
// code from http://sptypescript.codeplex.com/
// BasicTasksJSOM.ts
// Website tasks
function retrieveWebsite(resultpanel: HTMLElement) {
    const clientContext = SP.ClientContext.get_current();
    const oWebsite = clientContext.get_web();
    clientContext.load(oWebsite);

    clientContext.executeQueryAsync(
        successHandler,
        errorHandler
    );

    function successHandler() {
        resultpanel.innerHTML = "Web site title: " + oWebsite.get_title();
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}
function retrieveWebsiteProps(resultpanel: HTMLElement) {
    const clientContext = SP.ClientContext.get_current();
    const oWebsite = clientContext.get_web();

    clientContext.load(oWebsite, "Description", "Created");

    clientContext.executeQueryAsync(successHandler, errorHandler);

    function successHandler() {
        resultpanel.innerHTML = "Description: " + oWebsite.get_description() +
            "<br/>Date created: " + oWebsite.get_created();
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}

function writeWebsiteProps(resultpanel: HTMLElement) {
    const clientContext = SP.ClientContext.get_current();
    const oWebsite = clientContext.get_web();

    oWebsite.set_description("This is an updated description.");
    oWebsite.update();

    clientContext.load(oWebsite, "Description");

    clientContext.executeQueryAsync(
        successHandler,
        errorHandler
    );

    function successHandler() {
        resultpanel.innerHTML = "Web site description: " + oWebsite.get_description();
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}

// Lists tasks
function readAllProps(resultpanel: HTMLElement) {
    const clientContext = SP.ClientContext.get_current();
    const oWebsite = clientContext.get_web();

    const collList = oWebsite.get_lists();
    clientContext.load(collList);

    clientContext.executeQueryAsync(
        successHandler,
        errorHandler
    );

    function successHandler() {
        const listEnumerator = collList.getEnumerator();

        let listInfo = "";
        while (listEnumerator.moveNext()) {
            const oList = listEnumerator.get_current();
            listInfo += "Title: " + oList.get_title() + " Created: " +
                oList.get_created().toString() + "<br/>";
        }

        resultpanel.innerHTML = listInfo;
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}

function readSpecificProps(resultpanel: HTMLElement) {
    const clientContext = SP.ClientContext.get_current();
    const oWebsite = clientContext.get_web();

    const collList = oWebsite.get_lists();

    clientContext.load(collList, "Include(Title, Id)");

    clientContext.executeQueryAsync(
        successHandler,
        errorHandler
    );

    function successHandler() {
        const listEnumerator = collList.getEnumerator();

        let listInfo = "";
        while (listEnumerator.moveNext()) {
            const oList = listEnumerator.get_current();
            listInfo += "Title: " + oList.get_title() +
                " ID: " + oList.get_id().toString() + "<br/>";
        }

        resultpanel.innerHTML = listInfo;
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}

function readColl(resultpanel: HTMLElement) {
    const clientContext = SP.ClientContext.get_current();
    const oWebsite = clientContext.get_web();
    const collList = oWebsite.get_lists();

    const listInfoCollection = clientContext.loadQuery(collList, "Include(Title, Id)");

    clientContext.executeQueryAsync(
        successHandler,
        errorHandler
    );

    function successHandler() {
        let listInfo = "";
        for (const oList of listInfoCollection) {
            listInfo += "Title: " + oList.get_title() +
                " ID: " + oList.get_id().toString() + "<br/>";
        }

        resultpanel.innerHTML = listInfo;
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}

function readFilter(resultpanel: HTMLElement) {
    const clientContext = SP.ClientContext.get_current();
    const oWebsite = clientContext.get_web();
    const collList = oWebsite.get_lists();

    const listInfoArray = clientContext.loadQuery(collList,
        "Include(Title,Fields.Include(Title,InternalName))");

    clientContext.executeQueryAsync(
        successHandler,
        errorHandler
    );

    function successHandler() {
        let listInfo = "";

        for (const oList of listInfoArray) {
            const collField = oList.get_fields();
            const fieldEnumerator = collField.getEnumerator();

            while (fieldEnumerator.moveNext()) {
                const oField = fieldEnumerator.get_current();
                const regEx = new RegExp("name", "ig");

                if (regEx.test(oField.get_internalName())) {
                    listInfo += "List: " + oList.get_title() +
                        "<br/>&nbsp;&nbsp;&nbsp;&nbsp;Field Title: " + oField.get_title() +
                        "<br/>&nbsp;&nbsp;&nbsp;&nbsp;Field Internal name: " + oField.get_internalName();
                }
            }
        }

        resultpanel.innerHTML = listInfo;
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}

// Create, update and delete lists
function createList(resultpanel: HTMLElement) {
    const clientContext = SP.ClientContext.get_current();
    const oWebsite = clientContext.get_web();

    const listCreationInfo = new SP.ListCreationInformation();
    listCreationInfo.set_title("My Announcements List");
    listCreationInfo.set_templateType(SP.ListTemplateType.announcements);

    const oList = oWebsite.get_lists().add(listCreationInfo);
    clientContext.load(oList);

    clientContext.executeQueryAsync(
        successHandler,
        errorHandler
    );

    function successHandler() {
        resultpanel.innerHTML = "Go to the <a href='../Lists/My Announcements List'>list</a>.";
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}

function updateList(resultpanel: HTMLElement) {
    const clientContext = SP.ClientContext.get_current();
    const oWebsite = clientContext.get_web();

    const oList = oWebsite.get_lists().getByTitle("My Announcements List");
    oList.set_description("New Announcements List");
    oList.update();

    clientContext.load(oList);
    clientContext.executeQueryAsync(
        successHandler,
        errorHandler
    );

    function successHandler() {
        resultpanel.innerHTML = "Check the description in the <a href='../Lists/My Announcements List'>list</a>.";
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}

function addField(resultpanel: HTMLElement) {
    const clientContext = SP.ClientContext.get_current();
    const oWebsite = clientContext.get_web();
    const oList = oWebsite.get_lists().getByTitle("My Announcements List");

    const oField = oList.get_fields().addFieldAsXml(
        "<Field DisplayName='MyField' Type='Number' />",
        true,
        SP.AddFieldOptions.defaultValue
    );

    const fieldNumber = clientContext.castTo(oField, SP.FieldNumber) as SP.FieldNumber;
    fieldNumber.set_maximumValue(100);
    fieldNumber.set_minimumValue(35);
    fieldNumber.update();

    clientContext.load(oField);

    clientContext.executeQueryAsync(
        successHandler,
        errorHandler
    );

    function successHandler() {
        resultpanel.innerHTML = "The <a href='../Lists/My Announcements List'>list</a> with a new field.";
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}

function deleteList(resultpanel: HTMLElement) {
    const listTitle = "My Announcements List";

    const clientContext = SP.ClientContext.get_current();
    const oWebsite = clientContext.get_web();
    const oList = oWebsite.get_lists().getByTitle(listTitle);
    oList.deleteObject();

    clientContext.executeQueryAsync(
        successHandler,
        errorHandler
    );

    function successHandler() {
        resultpanel.innerHTML = listTitle + " deleted.";
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}

// Create, update and delete folders
function createFolder(resultpanel: HTMLElement) {
    const clientContext = SP.ClientContext.get_current();
    const oWebsite = clientContext.get_web();
    const oList = oWebsite.get_lists().getByTitle("Shared Documents");

    const itemCreateInfo = new SP.ListItemCreationInformation();
    itemCreateInfo.set_underlyingObjectType(SP.FileSystemObjectType.folder);
    itemCreateInfo.set_leafName("My new folder!");
    const oListItem = oList.addItem(itemCreateInfo);
    oListItem.update();

    clientContext.load(oListItem);
    clientContext.executeQueryAsync(
        successHandler,
        errorHandler
    );

    function successHandler() {
        resultpanel.innerHTML = "Go to the <a href='../Lists/Shared Documents'>document library</a> to see your new folder.";
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}

function updateFolder(resultpanel: HTMLElement) {
    const clientContext = SP.ClientContext.get_current();
    const oWebsite = clientContext.get_web();
    const oList = oWebsite.get_lists().getByTitle("Shared Documents");

    const oListItem = oList.getItemById(1);
    oListItem.set_item("FileLeafRef", "My updated folder");
    oListItem.update();

    clientContext.load(oListItem);
    clientContext.executeQueryAsync(
        successHandler,
        errorHandler
    );

    function successHandler() {
        resultpanel.innerHTML = "Go to the <a href='../Lists/Shared Documents'>document library</a> to see your updated folder.";
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}

function deleteFolder(resultpanel: HTMLElement) {
    const clientContext = SP.ClientContext.get_current();
    const oWebsite = clientContext.get_web();
    const oList = oWebsite.get_lists().getByTitle("Shared Documents");

    const oListItem = oList.getItemById(1);
    oListItem.deleteObject();

    clientContext.executeQueryAsync(
        successHandler,
        errorHandler
    );

    function successHandler() {
        resultpanel.innerHTML = "Go to the <a href='../Lists/Shared Documents'>document library</a> to make sure the folder is no longer there.";
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}

interface Announcements {
    Title: string;
    Body: string;
}

// List item tasks
function readItems(resultpanel: HTMLElement) {
    const clientContext = SP.ClientContext.get_current();
    const oWebsite = clientContext.get_web();
    const oList = oWebsite.get_lists().getByTitle<Announcements>("Announcements");
    const camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml(
        '<View><Query><Where><Geq><FieldRef Name=\'ID\'/>' +
        '<Value Type=\'Number\'>1</Value></Geq></Where></Query>' +
        '<RowLimit>10</RowLimit></View>'
    );
    const collListItem = oList.getItems(camlQuery);

    clientContext.load(collListItem);
    clientContext.executeQueryAsync(
        successHandler,
        errorHandler
    );

    function successHandler() {
        const listItemEnumerator = collListItem.getEnumerator();

        let listItemInfo = "";
        while (listItemEnumerator.moveNext()) {
            const oListItem = listItemEnumerator.get_current();
            listItemInfo += "ID: " + oListItem.get_id() + "<br/>" +
                "Title: " + oListItem.get_item("Title") + "<br/>" +
                "Body: " + oListItem.get_item("Body") + "<br/>";
        }

        resultpanel.innerHTML = listItemInfo;
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}

function readInclude(resultpanel: HTMLElement) {
    const clientContext = SP.ClientContext.get_current();
    const oWebsite = clientContext.get_web();
    const oList = oWebsite.get_lists().getByTitle("Announcements");
    const camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml('<View><RowLimit>100</RowLimit></View>');

    const collListItem = oList.getItems(camlQuery);

    clientContext.load(collListItem, "Include(Id, DisplayName, HasUniqueRoleAssignments)");
    clientContext.executeQueryAsync(
        successHandler,
        errorHandler
    );

    function successHandler() {
        const listItemEnumerator = collListItem.getEnumerator();

        let listItemInfo = "";
        while (listItemEnumerator.moveNext()) {
            const oListItem = listItemEnumerator.get_current();
            listItemInfo += "ID: " + oListItem.get_id() + "<br/>" +
                "Display name: " + oListItem.get_displayName() + "<br/>" +
                "Unique role assignments: " + oListItem.get_hasUniqueRoleAssignments() + "<br/>";
        }

        resultpanel.innerHTML = listItemInfo;
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}

// Create, update and delete list items
function createListItem(resultpanel: HTMLElement) {
    const clientContext = SP.ClientContext.get_current();
    const oWebsite = clientContext.get_web();
    const oList = oWebsite.get_lists().getByTitle("Announcements");

    const itemCreateInfo = new SP.ListItemCreationInformation();
    const oListItem = oList.addItem(itemCreateInfo);
    oListItem.set_item("Title", "My New Item!");
    oListItem.set_item("Body", "Hello World!");
    oListItem.update();

    clientContext.load(oListItem);
    clientContext.executeQueryAsync(
        successHandler,
        errorHandler
    );

    function successHandler() {
        resultpanel.innerHTML = "Go to the <a href='../Lists/Announcements'>list</a> to see your new item.";
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}

function updateListItem(resultpanel: HTMLElement) {
    const clientContext = SP.ClientContext.get_current();
    const oWebsite = clientContext.get_web();
    const oList = oWebsite.get_lists().getByTitle("Announcements");

    const oListItem = oList.getItemById(1);
    oListItem.set_item("Title", "My updated title");
    oListItem.update();

    clientContext.load(oListItem);
    clientContext.executeQueryAsync(
        successHandler,
        errorHandler
    );

    function successHandler() {
        resultpanel.innerHTML = "Go to the <a href='../Lists/Announcements'>list</a> to see your updated item.";
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}

function deleteListItem(resultpanel: HTMLElement) {
    const clientContext = SP.ClientContext.get_current();
    const oWebsite = clientContext.get_web();
    const oList = oWebsite.get_lists().getByTitle("Announcements");

    const oListItem = oList.getItemById(1);
    oListItem.deleteObject();

    clientContext.executeQueryAsync(
        successHandler,
        errorHandler
    );

    function successHandler() {
        resultpanel.innerHTML = "Go to the <a href='../Lists/Announcements'>list</a> to make sure the item is no longer there.";
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}

/** Lightweight client-side rendering template overrides.*/
namespace CSR {
    export type UpdatedValueCallback = (value: any, fieldSchema?: SPClientTemplates.FieldSchema_InForm) => void;

    /** Creates new overrides. Call .register() at the end.*/
    export function override(listTemplateType?: number, baseViewId?: number | string): CSR {
        return new csr(listTemplateType, baseViewId)
            .onPreRender(hookFormContext)
            .onPostRender(fixCsrCustomLayout);

        function hookFormContext(ctx: FormRenderContexWithHook) {
            if (ctx.ControlMode === SPClientTemplates.ClientControlMode.EditForm
                || ctx.ControlMode === SPClientTemplates.ClientControlMode.NewForm) {
                for (const fieldSchemaInForm of ctx.ListSchema.Field) {
                    if (!ctx.FormContextHook) {
                        ctx.FormContextHook = {};

                        const oldRegisterGetValueCallback = ctx.FormContext.registerGetValueCallback;
                        ctx.FormContext.registerGetValueCallback = (fieldName, callback) => {
                            ctx.FormContextHook[fieldName].getValue = callback;
                            oldRegisterGetValueCallback(fieldName, callback);
                        };

                        const oldUpdateControlValue = ctx.FormContext.updateControlValue;
                        ctx.FormContext.updateControlValue = (fieldName: string, value: any) => {
                            oldUpdateControlValue(fieldName, value);

                            const hookedContext = ensureFormContextHookField(ctx.FormContextHook, fieldName);
                            hookedContext.lastValue = value;

                            const updatedCallbacks = ctx.FormContextHook[fieldName].updatedValueCallbacks;
                            for (const updatedCallback of updatedCallbacks) {
                                updatedCallback(value, hookedContext.fieldSchema);
                            }
                        };
                    }
                    ensureFormContextHookField(ctx.FormContextHook, fieldSchemaInForm.Name).fieldSchema = fieldSchemaInForm;
                }
            }
        }

        function fixCsrCustomLayout(ctx: SPClientTemplates.RenderContext_Form) {
            if (ctx.ControlMode === SPClientTemplates.ClientControlMode.Invalid
                || ctx.ControlMode === SPClientTemplates.ClientControlMode.View) {
                return;
            }

            if (ctx.ListSchema.Field.length > 1) {
                const wpq = ctx.FormUniqueId;
                const webpart = $get('WebPart' + wpq);
                const forms = webpart.getElementsByClassName('ms-formtable');

                if (forms.length > 0) {
                    const placeholder = $get(wpq + 'ClientFormTopContainer');
                    const fragment = document.createDocumentFragment();
                    for (let i = 0; i < placeholder.children.length; i++) {
                        fragment.appendChild(placeholder.children.item(i));
                    }

                    const form = forms.item(0);
                    form.parentNode.replaceChild(fragment, form);
                }

                const old = ctx.CurrentItem;
                ctx.CurrentItem = ctx.ListData.Items[0];
                const fields = ctx.ListSchema.Field;
                for (const field of fields) {
                    const pHolderId = wpq + ctx.FormContext.listAttributes.Id + field.Name;
                    const span = $get(pHolderId);
                    if (span) {
                        span.outerHTML = ctx.RenderFieldByName(ctx, field.Name);
                    }
                }
                ctx.CurrentItem = old;
            }
        }
    }

    // typescripttempltes.ts
    declare const Strings: any;
    export function getFieldValue(ctx: SPClientTemplates.RenderContext_Form, fieldName: string): any {
        if (ctx.ControlMode === SPClientTemplates.ClientControlMode.EditForm
            || ctx.ControlMode === SPClientTemplates.ClientControlMode.NewForm) {
            const contextWithHook = ctx as FormRenderContexWithHook;
            if (contextWithHook.FormContextHook
                && contextWithHook.FormContextHook[fieldName]
                && contextWithHook.FormContextHook[fieldName].getValue) {
                return contextWithHook.FormContextHook[fieldName].getValue();
            }
        }
        return null;
    }

    export function getFieldSchema(ctx: SPClientTemplates.RenderContext_Form, fieldName: string): SPClientTemplates.FieldSchema_InForm {
        if (ctx.ControlMode === SPClientTemplates.ClientControlMode.EditForm
            || ctx.ControlMode === SPClientTemplates.ClientControlMode.NewForm) {
            const contextWithHook = ctx as FormRenderContexWithHook;
            if (contextWithHook.FormContextHook
                && contextWithHook.FormContextHook[fieldName]) {
                return contextWithHook.FormContextHook[fieldName].fieldSchema;
            }
        }
        return null;
    }

    export function addUpdatedValueCallback(ctx: SPClientTemplates.RenderContext_Form, fieldName: string, callback: UpdatedValueCallback): void {
        if (ctx.ControlMode === SPClientTemplates.ClientControlMode.EditForm
            || ctx.ControlMode === SPClientTemplates.ClientControlMode.NewForm) {
            const contextWithHook = ctx as FormRenderContexWithHook;
            if (contextWithHook.FormContextHook) {
                const f = ensureFormContextHookField(contextWithHook.FormContextHook, fieldName);
                const callbacks = f.updatedValueCallbacks;
                if (callbacks.indexOf(callback) === -1) {
                    callbacks.push(callback);
                    if (f.lastValue) {
                        callback(f.lastValue, f.fieldSchema);
                    }
                }
            }
        }
    }

    export function removeUpdatedValueCallback(ctx: SPClientTemplates.RenderContext_Form, fieldName: string, callback: UpdatedValueCallback): void {
        if (ctx.ControlMode === SPClientTemplates.ClientControlMode.EditForm
            || ctx.ControlMode === SPClientTemplates.ClientControlMode.NewForm) {
            const contextWithHook = ctx as FormRenderContexWithHook;
            if (contextWithHook.FormContextHook) {
                const callbacks = ensureFormContextHookField(contextWithHook.FormContextHook, fieldName).updatedValueCallbacks;
                const index = callbacks.indexOf(callback);
                if (index !== -1) {
                    callbacks.splice(index, 1);
                }
            }
        }
    }

    export function getControl(schema: SPClientTemplates.FieldSchema_InForm): HTMLInputElement {
        const id = schema.Name + '_' + schema.Id + '_$' + schema.FieldType + 'Field';
        // TODO: Handle different input types
        return $get(id) as HTMLInputElement;
    }

    export function getFieldTemplate(field: SPClientTemplates.FieldSchema, mode: SPClientTemplates.ClientControlMode): SPClientTemplates.FieldCallback {
        const ctx = {
            ListTemplateType: 1,
            FieldControlModes: {},
            ListSchema: { Field: [field] },
        };
        ctx.FieldControlModes[field.Name] = mode;
        const templates = SPClientTemplates.TemplateManager.GetTemplates(ctx);
        return templates.Fields[field.Name];
    }

    class csr implements CSR, SPClientTemplates.TemplateOverridesOptions {
        Templates: SPClientTemplates.TemplateOverrides;
        OnPreRender: SPClientTemplates.RenderCallback[];
        OnPostRender: SPClientTemplates.RenderCallback[];
        private IsRegistered: boolean;

        constructor(public ListTemplateType?: number, public BaseViewID?: any) {
            this.Templates = { Fields: {} };
            this.OnPreRender = [];
            this.OnPostRender = [];
            this.IsRegistered = false;
        }

        /* tier 1 methods */
        view(template: any): CSR {
            this.Templates.View = template;
            return this;
        }

        item(template: any): CSR {
            this.Templates.Item = template;
            return this;
        }

        header(template: any): CSR {
            this.Templates.Header = template;
            return this;
        }

        body(template: any): CSR {
            this.Templates.Body = template;
            return this;
        }

        footer(template: any): CSR {
            this.Templates.Footer = template;
            return this;
        }

        fieldView(fieldName: string, template: any): CSR {
            this.Templates.Fields[fieldName] = this.Templates.Fields[fieldName] || {};
            this.Templates.Fields[fieldName].View = template;
            return this;
        }

        fieldDisplay(fieldName: string, template: any): CSR {
            this.Templates.Fields[fieldName] = this.Templates.Fields[fieldName] || {};
            this.Templates.Fields[fieldName].DisplayForm = template;
            return this;
        }

        fieldNew(fieldName: string, template: any): CSR {
            this.Templates.Fields[fieldName] = this.Templates.Fields[fieldName] || {};
            this.Templates.Fields[fieldName].NewForm = template;
            return this;
        }

        fieldEdit(fieldName: string, template: any): CSR {
            this.Templates.Fields[fieldName] = this.Templates.Fields[fieldName] || {};
            this.Templates.Fields[fieldName].EditForm = template;
            return this;
        }

        /* tier 2 methods */
        template(name: string, template: any): CSR {
            this.Templates[name] = template;
            return this;
        }

        fieldTemplate(fieldName: string, name: string, template: any): CSR {
            this.Templates.Fields[fieldName] = this.Templates.Fields[fieldName] || {};
            this.Templates.Fields[fieldName][name] = template;
            return this;
        }

        /* common */
        onPreRender(...callbacks: Array<(ctx: SPClientTemplates.RenderContext) => void>): CSR {
            for (const cb of callbacks) {
                this.OnPreRender.push(cb);
            }
            return this;
        }

        onPostRender(...callbacks: Array<(ctx: SPClientTemplates.RenderContext) => void>): CSR {
            for (const cb of callbacks) {
                this.OnPostRender.push(cb);
            }
            return this;
        }

        onPreRenderField(field: string, callback: (schema: SPClientTemplates.FieldSchema, ctx: SPClientTemplates.RenderContext) => void): CSR {
            return this.onPreRender((ctx: SPClientTemplates.RenderContext) => {
                const ctxInView = ctx as SPClientTemplates.RenderContext_InView;

                // ListSchema schma exists in Form and in View render context
                const fields = ctxInView.ListSchema.Field;
                if (fields) {
                    for (const innerField of fields) {
                        if (innerField.Name === field) {
                            callback(innerField, ctx);
                        }
                    }
                }
            });
        }

        onPostRenderField(field: string, callback: (schema: SPClientTemplates.FieldSchema, ctx: SPClientTemplates.RenderContext) => void): CSR {
            return this.onPostRender((ctx: SPClientTemplates.RenderContext) => {
                const ctxInView = ctx as SPClientTemplates.RenderContext_InView;

                // ListSchema schma exists in Form and in View render context
                const fields = ctxInView.ListSchema.Field;
                if (fields) {
                    for (const innerField of fields) {
                        if (innerField.Name === field) {
                            callback(innerField, ctx);
                        }
                    }
                }
            });
        }

        makeReadOnly(fieldName: string): CSR {
            return this
                .onPreRenderField(fieldName, (schema, ctx) => {
                    if (ctx.ControlMode === SPClientTemplates.ClientControlMode.Invalid
                        || ctx.ControlMode === SPClientTemplates.ClientControlMode.DisplayForm) return;
                    (schema as SPClientTemplates.FieldSchema_InForm).ReadOnlyField = true;
                    (schema as SPClientTemplates.FieldSchema_InView).ReadOnly = "TRUE";

                    if (ctx.ControlMode === SPClientTemplates.ClientControlMode.View) {
                        const ctxInView = ctx as SPClientTemplates.RenderContext_InView;
                        if (ctxInView.inGridMode) {
                            // TODO: Disable editing in grid mode
                        }
                    } else {
                        const ctxInForm = ctx as SPClientTemplates.RenderContext_FieldInForm;
                        if (schema.Type !== 'User' && schema.Type !== 'UserMulti') {
                            const template = getFieldTemplate(schema, SPClientTemplates.ClientControlMode.DisplayForm);
                            ctxInForm.Templates.Fields[fieldName] = template;
                            ctxInForm.FormContext.registerGetValueCallback(fieldName, () => ctxInForm.ListData.Items[0][fieldName]);
                        }
                    }
                })
                .onPostRenderField(fieldName, (schema: SPClientTemplates.FieldSchema_InForm_User, ctx) => {
                    if (ctx.ControlMode === SPClientTemplates.ClientControlMode.EditForm
                        || ctx.ControlMode === SPClientTemplates.ClientControlMode.NewForm) {
                        if (schema.Type === 'User' || schema.Type === 'UserMulti') {
                            SP.SOD.executeFunc('clientpeoplepicker.js', 'SPClientPeoplePicker', () => {
                                const topSpanId = schema.Name + '_' + schema.Id + '_$ClientPeoplePicker';
                                let retryCount = 10;
                                const callback = () => {
                                    const pp = SPClientPeoplePicker.SPClientPeoplePickerDict[topSpanId];
                                    if (!pp) {
                                        if (retryCount--) setTimeout(callback, 1);
                                    } else {
                                        pp.SetEnabledState(false);
                                        pp.DeleteProcessedUser = function deleteProcessedUser() { /*dummy function*/};
                                    }
                                };
                                callback();
                            });
                        }
                    }
                });
        }

        makeHidden(fieldName: string): CSR {
            return this.onPreRenderField(fieldName, (schema, ctx) => {
                if (ctx.ControlMode === SPClientTemplates.ClientControlMode.Invalid) return;
                (schema as SPClientTemplates.FieldSchema_InForm).Hidden = true;

                if (ctx.ControlMode === SPClientTemplates.ClientControlMode.View) {
                    const ctxInView = ctx as SPClientTemplates.RenderContext_InView;

                    if (ctxInView.inGridMode) {
                        // TODO: Hide item in grid mode
                    } else {
                        ctxInView.ListSchema.Field.splice(ctxInView.ListSchema.Field.indexOf(schema), 1);
                    }
                } else {
                    const ctxInForm = ctx as SPClientTemplates.RenderContext_Form;

                    const pHolderId = ctxInForm.FormUniqueId + ctxInForm.FormContext.listAttributes.Id + fieldName;
                    const placeholder = $get(pHolderId);
                    let current = placeholder;
                    while (current.tagName.toUpperCase() !== "TR") {
                        current = current.parentElement;
                    }
                    const row = current as HTMLTableRowElement;
                    row.style.display = 'none';
                }
            });
        }

        filteredLookup(fieldName: string, camlFilter: string, listname?: string, lookupField?: string): CSR {
            return this.fieldEdit(fieldName, SPFieldCascadedLookup_Edit)
                .fieldNew(fieldName, SPFieldCascadedLookup_Edit);

            function SPFieldCascadedLookup_Edit(rCtx: SPClientTemplates.RenderContext_FieldInForm) {
                const parseRegex = /\{[^\}]+\}/g;
                const dependencyExpressions: string[] = [];
                let result: RegExpExecArray;
                function nextResult() {
                   return result = parseRegex.exec(camlFilter);
                }
                while (nextResult()) {
                    dependencyExpressions.push(stripBraces(result[0]));
                }
                const dependencyValues: { [expr: string]: string } = {};

                let _dropdownElt: HTMLSelectElement;
                let _myData: SPClientTemplates.ClientFormContext;

                if (rCtx == null)
                    return '';
                _myData = SPClientTemplates.Utility.GetFormContextForCurrentField(rCtx);

                if (_myData == null || _myData.fieldSchema == null)
                    return '';

                const _schema = _myData.fieldSchema as SPClientTemplates.FieldSchema_InForm_Lookup;

                const validators = new SPClientForms.ClientValidation.ValidatorSet();
                validators.RegisterValidator(new BooleanValueValidator(() => _optionsLoaded, "Wait until lookup values loaded and try again"));

                if (_myData.fieldSchema.Required) {
                    validators.RegisterValidator(new SPClientForms.ClientValidation.RequiredValidator());
                }
                _myData.registerClientValidator(_myData.fieldName, validators);

                const _dropdownId = _myData.fieldName + '_' + _myData.fieldSchema.Id + '_$LookupField';
                let _valueStr = _myData.fieldValue != null ? _myData.fieldValue : '';
                let _selectedValue = SPClientTemplates.Utility.ParseLookupValue(_valueStr).LookupId;
                const _noValueSelected = _selectedValue === 0;
                let _optionsLoaded = false;
                let pendingLoads = 0;

                if (_noValueSelected)
                    _valueStr = '';

                _myData.registerInitCallback(_myData.fieldName, InitLookupControl);

                _myData.registerFocusCallback(_myData.fieldName, function focusCallback() {
                    if (_dropdownElt != null)
                        _dropdownElt.focus();
                });
                _myData.registerValidationErrorCallback(_myData.fieldName, function validationErrorCallback(errorResult) {
                    SPFormControl_AppendValidationErrorMessage(_dropdownId, errorResult);
                });
                _myData.registerGetValueCallback(_myData.fieldName, GetCurrentLookupValue);
                _myData.updateControlValue(_myData.fieldName, _valueStr);

                return BuildLookupDropdownControl();

                function InitLookupControl() {
                    _dropdownElt = document.getElementById(_dropdownId) as HTMLSelectElement;
                    if (_dropdownElt != null)
                        AddEvtHandler(_dropdownElt, "onchange", OnLookupValueChanged);

                    SP.SOD.executeFunc('sp.js', 'SP.ClientContext', () => {
                        bindDependentControls(dependencyExpressions);
                        loadOptions(true);
                    });
                }

                function BuildLookupDropdownControl() {
                    let result = '<span dir="' + STSHtmlEncode(_myData.fieldSchema.Direction) + '">';
                    result += '<select id="' + STSHtmlEncode(_dropdownId) + '" title="' + STSHtmlEncode(_myData.fieldSchema.Title) + '">';
                    result += '</select><br/></span>';
                    return result;
                }

                function OnLookupValueChanged() {
                    if (_optionsLoaded) {
                        if (_dropdownElt != null) {
                            _myData.updateControlValue(_myData.fieldName, GetCurrentLookupValue());
                            _selectedValue = parseInt(_dropdownElt.value, 10);
                        }
                    }
                }

                function GetCurrentLookupValue() {
                    if (_dropdownElt == null)
                        return '';
                    return _dropdownElt.value === '0' || _dropdownElt.value === '' ? '' : _dropdownElt.value + ';#' + (_dropdownElt.options[_dropdownElt.selectedIndex] as any /* TODO remove `as any` */).text;
                }

                function stripBraces(input: string): string {
                    return input.substring(1, input.length - 1);
                }

                function getDependencyValue(expr: string, value: string, listId: string, expressionParts: string[], callback: () => void) {
                    const isLookupValue = !!listId;
                    if (isLookupValue) {
                        const lookup = SPClientTemplates.Utility.ParseLookupValue(value);
                        if (expressionParts.length === 1 && expressionParts[0] === 'Value') {
                            value = lookup.LookupValue;
                            expressionParts.shift();
                        } else {
                            value = lookup.LookupId.toString();
                        }
                    }

                    if (expressionParts.length === 0) {
                        dependencyValues[expr] = value;
                        callback();
                    } else {
                        const ctx = SP.ClientContext.get_current();
                        const web = ctx.get_web();
                        // TODO: Handle lookup to another web
                        const list = web.get_lists().getById(listId);
                        const item = list.getItemById(parseInt(value, 10));
                        let field = list.get_fields().getByInternalNameOrTitle(expressionParts.shift());
                        ctx.load(item);
                        ctx.load(field);

                        ctx.executeQueryAsync((o, e) => {
                            let value = item.get_item(field.get_internalName());

                            if (field.get_typeAsString() === 'Lookup') {
                                field = ctx.castTo(field, SP.FieldLookup) as SP.Field;
                                const lookup = (value as SP.FieldLookupValue);
                                value = lookup.get_lookupId() + ';#' + lookup.get_lookupValue();
                                listId = (field as SP.FieldLookup).get_lookupList();
                            }

                            getDependencyValue(expr, value, listId, expressionParts, callback);
                        }, (o, args) => { console.log(args.get_message()); });
                    }
                }

                function bindDependentControls(dependencyExpressions: string[]) {
                    dependencyExpressions.forEach(expr => {
                        const exprParts = expr.split(".");
                        const field = exprParts.shift();

                        CSR.addUpdatedValueCallback(rCtx, field,
                            (v, s) => {
                                getDependencyValue(expr, v,
                                    (s as SPClientTemplates.FieldSchema_InForm_Lookup).LookupListId,
                                    exprParts.slice(0),
                                    loadOptions);
                            });
                    });
                }

                function loadOptions(isFirstLoad?: boolean) {
                    _optionsLoaded = false;
                    pendingLoads++;

                    const ctx = SP.ClientContext.get_current();
                    // TODO: Handle lookup to another web
                    const web = ctx.get_web();
                    const listId = _schema.LookupListId;
                    const list = !listname ? web.get_lists().getById(listId) : web.get_lists().getByTitle(listname);
                    const query = new SP.CamlQuery();

                    const predicate = camlFilter.replace(parseRegex, (v, a) => {
                        const expr = stripBraces(v);
                        return dependencyValues[expr] ? dependencyValues[expr] : '';
                    });

                    // TODO: Handle ShowField attribure
                    if (predicate.substr(0, 5) === '<View') {
                        query.set_viewXml(predicate);
                    } else {
                        query.set_viewXml('<View Scope="RecursiveAll"><Query><Where>' +
                            predicate +
                            '</Where></Query> ' +
                            '<ViewFields><FieldRef Name="ID" /><FieldRef Name="Title"/></ViewFields></View>');
                    }
                    const results = list.getItems(query);
                    ctx.load(results);

                    ctx.executeQueryAsync((o, e) => {
                        let selected = false;

                        while (_dropdownElt.options.length) {
                            (_dropdownElt.options as any /* TODO remove `as any` */).remove(0);
                        }

                        if (!_schema.Required) {
                            const defaultOpt = new Option(Strings.STS.L_LookupFieldNoneOption, '0', selected, selected);
                            (_dropdownElt.options as any /* TODO remove `as any` */).add(defaultOpt);
                            selected = _selectedValue === 0;
                        }
                        let isEmptyList = true;

                        const enumerator = results.getEnumerator();
                        while (enumerator.moveNext()) {
                            const c = enumerator.get_current();
                            let id: number;
                            let text: string;

                            if (!lookupField) {
                                id = c.get_id();
                                text = c.get_item('Title');
                            } else {
                                const value = c.get_item(lookupField) as SP.FieldLookupValue;
                                id = value.get_lookupId();
                                text = value.get_lookupValue();
                            }
                            const isSelected = _selectedValue === id;
                            if (isSelected) {
                                selected = true;
                            }
                            const opt = new Option(text, id.toString(), isSelected, isSelected);
                            (_dropdownElt.options as any /* TODO remove `as any` */).add(opt);
                            isEmptyList = false;
                        }
                        pendingLoads--;
                        _optionsLoaded = true;
                        if (!pendingLoads) {
                            if (isFirstLoad) {
                                if (_selectedValue === 0 && !selected) {
                                    _dropdownElt.selectedIndex = 0;
                                    OnLookupValueChanged();
                                }
                            } else {
                                if (_selectedValue !== 0 && !selected) {
                                    _dropdownElt.selectedIndex = 0;
                                }
                                OnLookupValueChanged();
                            }
                        }
                    }, (o, args) => { console.log(args.get_message()); });
                }
            }
        }

        koEditField(fieldName: string, template: string, vm: KoFieldInForm, dependencyFields?: string[]): CSR {
            return this.fieldEdit(fieldName, koEditField_Edit)
                .fieldNew(fieldName, koEditField_Edit);

            function koEditField_Edit(rCtx: SPClientTemplates.RenderContext_FieldInForm) {
                if (rCtx == null)
                    return '';
                const _myData = SPClientTemplates.Utility.GetFormContextForCurrentField(rCtx);

                if (_myData == null || _myData.fieldSchema == null)
                    return '';
                const elementId = _myData.fieldName + '_' + _myData.fieldSchema.Id + '_$' + _myData.fieldSchema.Type;

                vm.renderingContext = rCtx;

                if (dependencyFields) {
                    dependencyFields.forEach(dependencyField => {
                        if (!vm[dependencyField]) {
                            vm[dependencyField] = ko.observable(CSR.getFieldValue(rCtx, dependencyField));
                        }
                        CSR.addUpdatedValueCallback(rCtx, dependencyField, v => {
                            vm[dependencyField](v);
                        });
                    });
                }

                if (!vm.value) {
                    vm.value = ko.observable<any>();
                }

                vm.value.subscribe(v => { _myData.updateControlValue(fieldName, v); });
                _myData.registerGetValueCallback(fieldName, () => vm.value());

                _myData.registerInitCallback(fieldName, () => {
                    ko.applyBindings(vm, $get(elementId));
                });

                return '<div id="' + STSHtmlEncode(elementId) + '">' + template + '</div>';
            }
        }

        computedValue(targetField: string, transform: (...values: string[]) => string, ...sourceField: string[]): CSR {
            const dependentValues: { [field: string]: string } = {};

            return this.onPostRenderField(targetField, (schema: SPClientTemplates.FieldSchema_InForm, ctx: SPClientTemplates.RenderContext_FieldInForm) => {
                if (ctx.ControlMode === SPClientTemplates.ClientControlMode.EditForm
                    || ctx.ControlMode === SPClientTemplates.ClientControlMode.NewForm) {
                    const targetControl = CSR.getControl(schema as SPClientTemplates.FieldSchema_InForm);
                    sourceField.forEach((field) => {
                        CSR.addUpdatedValueCallback(ctx, field, v => {
                            dependentValues[field] = v;
                            targetControl.value = transform.apply(this,
                                sourceField.map(n => dependentValues[n] || ''));
                        });
                    });
                }
            });
        }

        setInitialValue(fieldName: string, value: any, ignoreNull?: boolean): CSR {
            if (value || !ignoreNull) {
                return this.onPreRenderField(fieldName, (schema, ctx: SPClientTemplates.RenderContext_FieldInForm) => {
                    ctx.ListData.Items[0][fieldName] = value;
                });
            } else {
                return this;
            }
        }

        autofill(fieldName: string, init: (ctx: AutoFillFieldContext) => () => void): CSR {
            return this
                .fieldNew(fieldName, SPFieldLookup_Autofill_Edit)
                .fieldEdit(fieldName, SPFieldLookup_Autofill_Edit);

            function SPFieldLookup_Autofill_Edit(rCtx: SPClientTemplates.RenderContext_FieldInForm) {
                if (rCtx == null)
                    return '';
                const _myData = SPClientTemplates.Utility.GetFormContextForCurrentField(rCtx);

                if (_myData == null || _myData.fieldSchema == null)
                    return '';

                let _autoFillControl: SPClientAutoFill;
                let _textInputElt: HTMLInputElement;
                const _textInputId = _myData.fieldName + '_' + _myData.fieldSchema.Id + '_$' + _myData.fieldSchema.Type + 'Field';
                const _autofillContainerId = _myData.fieldName + '_' + _myData.fieldSchema.Id + '_$AutoFill';

                const validators = new SPClientForms.ClientValidation.ValidatorSet();
                if (_myData.fieldSchema.Required) {
                    validators.RegisterValidator(new SPClientForms.ClientValidation.RequiredValidator());
                }
                _myData.registerClientValidator(_myData.fieldName, validators);

                _myData.registerInitCallback(_myData.fieldName, initAutoFillControl);
                _myData.registerFocusCallback(_myData.fieldName, function focusCallback() {
                    if (_textInputElt != null)
                        _textInputElt.focus();
                });
                _myData.registerValidationErrorCallback(_myData.fieldName, function validationErrorCallback(errorResult) {
                    SPFormControl_AppendValidationErrorMessage(_textInputId, errorResult);
                });
                _myData.registerGetValueCallback(_myData.fieldName, () => _myData.fieldValue);
                _myData.updateControlValue(_myData.fieldName, _myData.fieldValue);

                return buildAutoFillControl();

                function initAutoFillControl() {
                    _textInputElt = document.getElementById(_textInputId) as HTMLInputElement;

                    SP.SOD.executeFunc("autofill.js", "SPClientAutoFill", () => {
                        _autoFillControl = new SPClientAutoFill(_textInputId, _autofillContainerId, (_) => callback());
                        const callback = init({
                            renderContext: rCtx,
                            fieldContext: _myData,
                            autofill: _autoFillControl,
                            control: _textInputElt,
                        });

                        // _autoFillControl.AutoFillMinTextLength = 2;
                        // _autoFillControl.VisibleItemCount = 15;
                        // _autoFillControl.AutoFillTimeout = 500;
                    });
                }
                // function OnPopulate(targetElement: HTMLInputElement) {
                // }

                // function OnLookupValueChanged() {
                //    _myData.updateControlValue(_myData.fieldName, GetCurrentLookupValue());
                // }
                // function GetCurrentLookupValue() {
                //    return _valueStr;
                // }
                function buildAutoFillControl() {
                    const result: string[] = [];
                    result.push('<div dir="' + STSHtmlEncode(_myData.fieldSchema.Direction) + '" style="position: relative;">');
                    result.push('<input type="text" id="' + STSHtmlEncode(_textInputId) + '" title="' + STSHtmlEncode(_myData.fieldSchema.Title) + '"/>');

                    result.push("<div class='sp-peoplepicker-autoFillContainer' id='" + STSHtmlEncode(_autofillContainerId) + "'></div>");
                    result.push("</div>");

                    return result.join("");
                }
            }
        }

        seachLookup(fieldName: string): CSR {
            return this.autofill(fieldName, (ctx: AutoFillFieldContext) => {
                const _myData = ctx.fieldContext;
                const _schema = _myData.fieldSchema as SPClientTemplates.FieldSchema_InForm_Lookup;
                if (_myData.fieldSchema.Type !== 'Lookup') {
                    return null;
                }

                const _valueStr = _myData.fieldValue != null ? _myData.fieldValue : '';
                const _selectedValue = SPClientTemplates.Utility.ParseLookupValue(_valueStr);
                const _noValueSelected = _selectedValue.LookupId === 0;
                ctx.control.value = _selectedValue.LookupValue;
                $addHandler(ctx.control, "blur", _ => {
                    if (ctx.control.value === '') {
                        _myData.fieldValue = '';
                        _myData.updateControlValue(fieldName, _myData.fieldValue);
                    }
                });

                if (_noValueSelected)
                    _myData.fieldValue = '';

                const _autoFillControl = ctx.autofill;
                _autoFillControl.AutoFillMinTextLength = 2;
                _autoFillControl.VisibleItemCount = 15;
                _autoFillControl.AutoFillTimeout = 500;

                return () => {
                    const value = ctx.control.value;
                    _autoFillControl.PopulateAutoFill([AutoFillOptionBuilder.buildLoadingItem('Please wait...')], onSelectItem);

                    SP.SOD.executeFunc("sp.search.js", "Microsoft.SharePoint.Client.Search.Query", () => {
                        const Search = Microsoft.SharePoint.Client.Search.Query;
                        const ctx = SP.ClientContext.get_current();
                        const query = new Search.KeywordQuery(ctx);
                        query.set_rowLimit(_autoFillControl.VisibleItemCount);
                        query.set_queryText('contentclass:STS_ListItem ListID:{' + _schema.LookupListId + '} ' + value);
                        const selectProps = query.get_selectProperties();
                        selectProps.clear();
                        // TODO: Handle ShowField attribute
                        selectProps.add('Title');
                        selectProps.add('ListItemId');
                        const executor = new Search.SearchExecutor(ctx);
                        const result = executor.executeQuery(query);
                        ctx.executeQueryAsync(
                            () => {
                                // TODO: Discover proper way to load collection
                                const tableCollection = new Search.ResultTableCollection();
                                tableCollection.initPropertiesFromJson(result.get_value());

                                const relevantResults = tableCollection.get_item(0);
                                const rows = relevantResults.get_resultRows();

                                const items = [];
                                for (const row of rows) {
                                    items.push(AutoFillOptionBuilder.buildOptionItem(parseInt(row["ListItemId"], 10), row["Title"]));
                                }

                                items.push(AutoFillOptionBuilder.buildSeparatorItem());

                                if (relevantResults.get_totalRows() === 0)
                                    items.push(AutoFillOptionBuilder.buildFooterItem("No results. Please refine your query."));
                                else
                                    items.push(AutoFillOptionBuilder.buildFooterItem("Showing " + rows.length + " of" + relevantResults.get_totalRows() + " items!"));

                                _autoFillControl.PopulateAutoFill(items, onSelectItem);
                            },
                            (sender, args) => {
                                _autoFillControl.PopulateAutoFill([AutoFillOptionBuilder.buildFooterItem("Error executing query/ See log for details.")], onSelectItem);
                                console.log(args.get_message());
                            });
                    });
                };

                function onSelectItem(targetInputId, item: ISPClientAutoFillData) {
                    const targetElement = ctx.control;
                    targetElement.value = item[SPClientAutoFill.DisplayTextProperty];
                    _selectedValue.LookupId = item[SPClientAutoFill.KeyProperty];
                    _selectedValue.LookupValue = item[SPClientAutoFill.DisplayTextProperty];
                    _myData.fieldValue = item[SPClientAutoFill.KeyProperty] + ';#' + item[SPClientAutoFill.TitleTextProperty];
                    _myData.updateControlValue(_myData.fieldSchema.Name, _myData.fieldValue);
                }
            });
        }

        lookupAddNew(fieldName: string, prompt: string, showDialog?: boolean, contentTypeId?: string): CSR {
            return this.onPostRenderField(fieldName,
                (schema: SPClientTemplates.FieldSchema_InForm_Lookup, ctx: SPClientTemplates.RenderContext_FieldInForm) => {
                    let control: HTMLInputElement;
                    if (ctx.ControlMode === SPClientTemplates.ClientControlMode.EditForm
                        || ctx.ControlMode === SPClientTemplates.ClientControlMode.NewForm)

                        control = CSR.getControl(schema);
                    if (control) {
                        let weburl = _spPageContextInfo.webServerRelativeUrl;
                        if (weburl[weburl.length - 1] === '/') {
                            weburl = weburl.substring(0, weburl.length - 1);
                        }
                        let newFormUrl = weburl + '/_layouts/listform.aspx/listform.aspx?PageType=8'
                            + "&ListId=" + encodeURIComponent('{' + schema.LookupListId + '}');
                        if (contentTypeId) {
                            newFormUrl += '&ContentTypeId=' + contentTypeId;
                        }

                        const link = document.createElement('a');
                        link.href = "javascript:NewItem2(event, \'" + newFormUrl + "&Source=" + encodeURIComponent(document.location.href) + "')";
                        link.textContent = prompt;
                        if (control.nextElementSibling) {
                            control.parentElement.insertBefore(link, control.nextElementSibling);
                        } else {
                            control.parentElement.appendChild(link);
                        }

                        if (showDialog) {
                            $addHandler(link, "click", (e: Sys.UI.DomEvent) => {
                                SP.SOD.executeFunc('sp.ui.dialog.js', 'SP.UI.ModalDialog.ShowPopupDialog', () => {
                                    SP.UI.ModalDialog.ShowPopupDialog(newFormUrl);
                                });
                                e.stopPropagation();
                                e.preventDefault();
                            });
                        }
                    }
                });
        }

        register() {
            if (!this.IsRegistered) {
                SPClientTemplates.TemplateManager.RegisterTemplateOverrides(this);
                this.IsRegistered = true;
            }
        }
    }

    export class AutoFillOptionBuilder {
        static buildFooterItem(title: string): ISPClientAutoFillData {
            const item = {};

            item[SPClientAutoFill.DisplayTextProperty] = title;
            item[SPClientAutoFill.MenuOptionTypeProperty] = SPClientAutoFill.MenuOptionType.Footer;

            return item;
        }

        static buildOptionItem(id: number, title: string, displayText?: string, subDisplayText?: string): ISPClientAutoFillData {
            const item = {};

            item[SPClientAutoFill.KeyProperty] = id;
            item[SPClientAutoFill.DisplayTextProperty] = displayText || title;
            item[SPClientAutoFill.SubDisplayTextProperty] = subDisplayText;
            item[SPClientAutoFill.TitleTextProperty] = title;
            item[SPClientAutoFill.MenuOptionTypeProperty] = SPClientAutoFill.MenuOptionType.Option;

            return item;
        }

        static buildSeparatorItem(): ISPClientAutoFillData {
            const item = {};
            item[SPClientAutoFill.MenuOptionTypeProperty] = SPClientAutoFill.MenuOptionType.Separator;
            return item;
        }

        static buildLoadingItem(title: string): ISPClientAutoFillData {
            const item = {};

            item[SPClientAutoFill.MenuOptionTypeProperty] = SPClientAutoFill.MenuOptionType.Loading;
            item[SPClientAutoFill.DisplayTextProperty] = title;
            return item;
        }
    }
    type RenderContext<T> = (ctx: SPClientTemplates.RenderContext) => T;
    /** Lightweight client-side rendering template overrides.*/
    export interface CSR {
        /** Override rendering template.
            @param name Name of template to override.
            @param template New template.
        */
        template(name: string, template: string | RenderContext<string>): CSR;

        /** Override rendering template.
            @param name Name of template to override.
            @param template New template.
        */

        /** Override field rendering template.
            @param name Internal name of field to override.
            @param name Name of template to override.
            @param template New template.
        */
        fieldTemplate(field: string, name: string, template: string | RenderContext<string>): CSR;

        /** Sets pre-render callbacks. Callback called before rendering starts.
            @param callbacks pre-render callbacks.
        */
        onPreRender(...callbacks: Array<RenderContext<void>>): CSR;

        /** Sets post-render callbacks. Callback called after rendered html inserted to DOM.
            @param callbacks post-render callbacks.
        */
        onPostRender(...callbacks: Array<RenderContext<void>>): CSR;

        /** Sets pre-render callbacks for field. Callback called before rendering starts. Correctly handles form rendering.
            @param fieldName Internal name of the field.
            @param callbacks pre-render callbacks.
        */
        onPreRenderField(field: string, callback: (schema: SPClientTemplates.FieldSchema, ctx: SPClientTemplates.RenderContext) => void): CSR;

        /** Sets post-render callbacks. Callback called after rendered html inserted to DOM. Correctly handles form rendering.
            @param fieldName Internal name of the field.
            @param callbacks post-render callbacks.
        */
        onPostRenderField(field: string, callback: (schema: SPClientTemplates.FieldSchema, ctx: SPClientTemplates.RenderContext) => void): CSR;

        /** Registers overrides in client-side templating engine.*/
        register(): void;

        /** Override View rendering template.
            @param template New view template.
        */
        view(template: string): CSR;

        /** Override View rendering template.
            @param template New view template.
        */
        // tslint:disable-next-line: unified-signatures
        view(template: (ctx: SPClientTemplates.RenderContext_InView | SPClientTemplates.RenderContext_Form) => string): CSR;

        /** Override Item rendering template.
            @param template New item template.
        */
        item(template: string): CSR;

        /** Override Item rendering template.
            @param template New item template.
        */
        // tslint:disable-next-line: unified-signatures
        item(template: (ctx: SPClientTemplates.RenderContext_ItemInView | SPClientTemplates.RenderContext_Form) => string): CSR;

        /** Override Header rendering template.
            @param template New header template.
        */
        header(template: string | RenderContext<string>): CSR;

        /** Override Body rendering template.
            @param template New body template.
        */
        body(template: string | RenderContext<string>): CSR;

        /** Override Footer rendering template.
            @param template New footer template.
        */
        footer(template: string | RenderContext<string>): CSR;

        /** Override View rendering template for specified field.
            @param fieldName Internal name of the field.
            @param template New View template.
        */
        fieldView(fieldName: string, template: string): CSR;

        /** Override View rendering template for specified field.
            @param fieldName Internal name of the field.
            @param template New View template.
        */
        // tslint:disable-next-line: unified-signatures
        fieldView(fieldName: string, template: (ctx: SPClientTemplates.RenderContext_FieldInView) => string): CSR;

        /** Override DisplyForm rendering template for specified field.
            @param fieldName Internal name of the field.
            @param template New DisplyForm template.
        */
        fieldDisplay(fieldName: string, template: string): CSR;

        /** Override DisplyForm rendering template.
            @param fieldName Internal name of the field.
            @param template New DisplyForm template.
        */
        // tslint:disable-next-line: unified-signatures
        fieldDisplay(fieldName: string, template: (ctx: SPClientTemplates.RenderContext_FieldInForm) => string): CSR;

        /** Override EditForm rendering template for specified field.
            @param fieldName Internal name of the field.
            @param template New EditForm template.
        */
        fieldEdit(fieldName: string, template: string): CSR;

        /** Override EditForm rendering template.
            @param fieldName Internal name of the field.
            @param template New EditForm template.
        */
        // tslint:disable-next-line: unified-signatures
        fieldEdit(fieldName: string, template: (ctx: SPClientTemplates.RenderContext_FieldInForm) => string): CSR;

        /** Override NewForm rendering template for specified field.
            @param fieldName Internal name of the field.
            @param template New NewForm template.
        */
        fieldNew(fieldName: string, template: string): CSR;

        /** Override NewForm rendering template.
            @param fieldName Internal name of the field.
            @param template New NewForm template.
        */
        // tslint:disable-next-line: unified-signatures
        fieldNew(fieldName: string, template: (ctx: SPClientTemplates.RenderContext_FieldInForm) => string): CSR;

        /** Set initial value for field.
            @param fieldName Internal name of the field.
            @param value Initial value for field.
        */
        setInitialValue(fieldName: string, value: any): CSR;

        /** Make field hidden in list view and standard forms.
            @param fieldName Internal name of the field.
        */
        makeHidden(fieldName: string): CSR;

        /** Replace New and Edit templates for field to Display template.
            @param fieldName Internal name of the field.
        */
        makeReadOnly(fieldName: string): CSR;

        /** Create cascaded Lookup Field.
            @param fieldName Internal name of the field.
            @param camlFilter CAML predicate expression (inside Where clause). Use {FieldName} tokens for dependency fields substitutions.
        */
        filteredLookup(fieldName: string, camlFilter: string, listname?: string, lookupField?: string): CSR;

        /** Auto computes text-based field value based on another fields.
            @param targetField Internal name of the field.
            @param transform Function combines source field values.
            @param sourceField Internal names of source fields.
        */
        computedValue(targetField: string, transform: (...values: string[]) => string, ...sourceField: string[]): CSR;

        /** Field text value with autocomplete based on autofill.js
            @param fieldName Internal name of the field.
            @param ctx AutoFill context.
        */
        autofill(fieldName: string, init: (ctx: AutoFillFieldContext) => () => void): CSR;

        /** Replace defult dropdown to search-based autocomplete for Lookup field.
            @param fieldName Internal name of the field.
        */
        seachLookup(fieldName: string): CSR;

        /** Adds link to add new value to lookup list.
            @param fieldName Internal name of the field.
            @param prompt Text to display as a link to add new value.
            @param contentTypeID Default content type for new item.
        */
        lookupAddNew(fieldName: string, prompt: string, showDialog?: boolean, contentTypeId?: string): CSR;

        koEditField(fieldName: string, template: string, vm: KoFieldInForm, dependencyFields?: string[]): CSR;
    }

    export interface AutoFillFieldContext {
        renderContext: SPClientTemplates.RenderContext_FieldInForm;
        fieldContext: SPClientTemplates.ClientFormContext;
        autofill: SPClientAutoFill;
        control: HTMLInputElement;
    }

    export interface KoFieldInForm {
        renderingContext?: SPClientTemplates.RenderContext_FieldInForm;
        value?: KnockoutObservable<any>;
    }

    interface FormRenderContexWithHook extends SPClientTemplates.RenderContext_FieldInForm {
        FormContextHook: FormContextHook;
    }

    interface FormContextHook {
        [fieldName: string]: FormContextHookField;
    }

    interface FormContextHookField {
        fieldSchema?: SPClientTemplates.FieldSchema_InForm;
        lastValue?: any;
        getValue?(): any;
        updatedValueCallbacks: UpdatedValueCallback[];
    }

    function ensureFormContextHookField(hook: FormContextHook, fieldName: string): FormContextHookField {
        return hook[fieldName] = hook[fieldName] || {
            updatedValueCallbacks: []
        };
    }

    class BooleanValueValidator implements SPClientForms.ClientValidation.IValidator {
        constructor(public valueGetter: () => boolean, public validationMessage: string) { }

        Validate(value: any): SPClientForms.ClientValidation.ValidationResult {
            return new SPClientForms.ClientValidation.ValidationResult(!this.valueGetter(), this.validationMessage);
        }
    }
}

if (typeof SP === 'object' && SP && typeof SP.SOD === 'object' && SP.SOD) {
    SP.SOD.notifyScriptLoadedAndExecuteWaitingJobs("typescripttemplates.ts");
}

// mquery.ts

namespace spdevlab {
    export namespace mQuery {
        export class DynamicTable {
            // private fields
            _domContainer: HTMLElement;
            _tableContainer: MQueryResultSetElements;

            _rowTemplateId: string = null;
            _rowTemplateContent: string = null;

            _options = {
                tableCnt: '.spdev-rep-tb',
                addCnt: '.spdev-rep-tb-add',
                removeCnt: '.spdev-rep-tb-del'
            };

            // public methods
            init(domContainer: HTMLElement, options) {
                if (m$.isDefinedAndNotNull(options)) {
                    m$.extend(this._options, options);
                }

                this._initContainers(domContainer);

                this._initRowTemplate();
                this._initEvents();
                this._showUI();
            }

            // private methods
            _initContainers(domContainer) {
                this._domContainer = domContainer;
                this._tableContainer = m$(this._options.tableCnt, this._domContainer);
            }

            _showUI() {
                m$(this._domContainer).css("display", "");
            }

            _initEvents() {
                m$(this._options.addCnt, this._domContainer).click(() => {
                    if (m$.isDefinedAndNotNull(this._rowTemplateContent)) {
                        m$(this._tableContainer).append(this._rowTemplateContent);

                        m$("tr:last-child " + this._options.removeCnt, this._tableContainer).click((e) => {
                            const targetElement = e.currentTarget as HTMLElement;
                            const parentRow = m$(targetElement).parents("tr").first();

                            m$(parentRow).remove();
                        });
                    }

                    return false;
                });
            }

            _initRowTemplate() {
                const templateId = m$(this._tableContainer).attr("template-id");

                if (m$.isDefinedAndNotNull(templateId)) {
                    this._rowTemplateId = templateId;
                    this._rowTemplateContent = DynamicTable._templates[templateId];
                }
            }

            static _templates: string[] = [];
            static initTables() {
                // init templates
                m$('script').forEach((template: HTMLElement) => {
                    const id = m$(template).attr("dynamic-table-template-id");

                    if (m$.isDefinedAndNotNull(id)) {
                        DynamicTable._templates[id] = template.innerHTML;
                    }
                });

                // init tables
                m$(".spdev-rep-tb-cnt").forEach(divContainer => {
                    const dynamicTable = new DynamicTable();

                    dynamicTable.init(divContainer, {
                        removeCnt: '.spdev-rep-tb-del-override'
                    });
                });
            }
        }
    }
}

m$.ready(() => {
    spdevlab.mQuery.DynamicTable.initTables();
});

// whoisapppart.ts

namespace _ {
    const queryString = parseQueryString();
    const isIframe = queryString['DisplayMode'] === 'iframe';
    const spHostUrl = queryString['SPHostUrl'];
    const editmode = Number(queryString['editmode']);
    const includeDetails = queryString['boolProp'] === 'true';

    prepareVisual();
    m$.ready(() => {
        loadPeoplePicker('peoplePicker');
        partProperties();

        if (isIframe) {
            partResize();
        }
    });

    // Load the people picker
    function loadPeoplePicker(peoplePickerElementId: string) {
        const schema: ISPClientPeoplePickerSchema = {
            PrincipalAccountType: "User",
            AllowMultipleValues: false,
            Width: 300,
            OnUserResolvedClientScript: onUserResolvedClientScript
        };

        SPClientPeoplePicker.InitializeStandalonePeoplePicker(peoplePickerElementId, null, schema);
    }

    function onUserResolvedClientScript(el: string, users: ISPClientPeoplePickerEntity[]) {
        if (users.length > 0) {
            const person = users[0];
            const accountName = person.Key;

            const context = SP.ClientContext.get_current();

            const peopleManager = new SP.UserProfiles.PeopleManager(context);
            const personProperties = peopleManager.getPropertiesFor(accountName);

            context.load(personProperties);
            context.executeQueryAsync((sender, args) => {
                $get("basicInfo").style.display = 'block';

                const userPic = personProperties.get_userProfileProperties()["PictureURL"];
                $get("pic").innerHTML = '<img src="' + userPic + '" alt=' + personProperties.get_displayName() + '" width=92 height=92 />';

                $get("name").innerHTML = '<a href="' + personProperties.get_userUrl() + '">' + personProperties.get_displayName() + '</a>';
                $get("email").innerHTML = '<a href="mailto:' + personProperties.get_email() + '">' + personProperties.get_email() + '</a>';
                $get("title").innerHTML = personProperties.get_title();
                $get("department").innerHTML = person.EntityData.Department;
                $get("phone").innerHTML = person.EntityData.MobilePhone;

                const properties = personProperties.get_userProfileProperties();
                let messageText = "";
                for (const key in properties) {
                    if (properties.hasOwnProperty(key))
                        continue;
                    messageText += "<br />[" + key + "]: \"" + properties[key] + "\"";
                }
                $get("detailInfo").innerHTML = messageText;

                if (isIframe) {
                    partResize();
                }
            }, (sender, args) => { alert('Error: ' + args.get_message()); });
        }
    }

    function partProperties() {
        if (editmode === 1) {
            $get("editmodehdr").style.display = "inline";
            $get("content").style.display = "none";
        } else if (includeDetails) {
            $get('detailInfo').style.display = 'block';

            $get("editmodehdr").style.display = "none";
            $get("content").style.display = "inline";
        }
    }

    function partResize() {
        const bounds = Sys.UI.DomElement.getBounds(document.body);
        parent.postMessage('<message senderId=' + queryString['SenderId'] + '>resize(' + bounds.width + ',' + bounds.height + ')</message>', '*');
    }

    function prepareVisual() {
        if (isIframe) {
            // Create a Link element for the defaultcss.ashx resource
            const linkElement = document.createElement('link');
            linkElement.setAttribute('rel', 'stylesheet');
            linkElement.setAttribute('href', spHostUrl + '/_layouts/15/defaultcss.ashx');

            // Add the linkElement as a child to the head section of the html
            document.head.appendChild(linkElement);
        } else {
            m$.ready(() => {
                const nav = new SP.UI.Controls.Navigation('navigation', {
                    appIconUrl: queryString['SPHostLogo'],
                    appTitle: document.title
                });
                nav.setVisible(true);
                $get('apppart-notification').style.display = 'block';
                document.body.style.overflow = 'visible';
            });
        }
    }

    function parseQueryString() {
        const result = {};
        const qs = document.location.search.split('?')[1];
        if (qs) {
            const parts = qs.split('&');
            for (const part of parts) {
                if (part) {
                    const pair = part.split('=');
                    result[pair[0]] = decodeURIComponent(pair[1]);
                }
            }
        }
        return result;
    }
}

// taxonomy
namespace MySP {
    // Class
    export class ClientContextPromise extends SP.ClientContext {
        /** To use this function, you must ensure that jQuery and CSOMPromise js files are loaded to the page */
        executeQueryPromise(): JQueryPromise<any> {
            const deferred = jQuery.Deferred<any>();
            this.executeQueryAsync(function done(sender, args) {
                deferred.resolve(sender, args);
            },
                function fail(sender, args) {
                    deferred.reject(sender, args);
                });
            return deferred.promise();
        }

        constructor(serverRelativeUrlOrFullUrl: string) {
            super(serverRelativeUrlOrFullUrl);
        }

        static get_current(): ClientContextPromise {
            return new ClientContextPromise(_spPageContextInfo.siteServerRelativeUrl);
        }
    }
}

SP.SOD.notifyScriptLoadedAndExecuteWaitingJobs("CSOMPromise.ts");

namespace _ {
    let context: MySP.ClientContextPromise;
    let web: SP.Web;
    let site: SP.Site;
    let session: SP.Taxonomy.TaxonomySession;
    let termStore: SP.Taxonomy.TermStore;
    let groups: SP.Taxonomy.TermGroupCollection;

    // This code runs when the DOM is ready and creates a context object
    // which is needed to use the SharePoint object model.
    // It also wires up the click handlers for the two HTML buttons in Default.aspx.
    $(document).ready(function onready() {
        context = MySP.ClientContextPromise.get_current();
        site = context.get_site();
        web = context.get_web();
        $('#listExisting').click(function listExistingClick() { listGroups(); });
        $('#createTerms').click(function createTermsClick() { createTerms(); });
    });

    // When the listExisting button is clicked, start by loading
    // a TaxonomySession for the current context. Also get and load
    // the associated term store.
    function listGroups() {
        session = SP.Taxonomy.TaxonomySession.getTaxonomySession(context);
        termStore = session.getDefaultSiteCollectionTermStore();
        context.load(session);
        context.load(termStore);
        context.executeQueryAsync(onListTaxonomySession, onFailListTaxonomySession);
    }

    // Runs when the executeQueryAsync method in the listGroups function has succeeded.
    // In this case, get and load the groups associated with the term store that we
    // know we now have a reference to.
    function onListTaxonomySession() {
        groups = termStore.get_groups();
        context.load(groups);
        context.executeQueryAsync(onRetrieveGroups, onFailRetrieveGroups);
    }

    // Runs when the executeQueryAsync method in the onListTaxonomySession function has succeeded.
    // In this case, loop through all the groups and add a clickable div element to the report area
    // for each group.
    // NOTE: We clear the report area first to ensure we have a clean place to write to.
    // Also note how we create a click event handler for each div on-the-fly, and that we pass in the
    // current group ID to that function. So when the user clicks one of these divs, we will know which
    // one was clicked.
    function onRetrieveGroups() {
        $('#report').children().remove();

        const groupEnum = groups.getEnumerator();

        // For each group, we'll build a clickable div.
        while (groupEnum.moveNext()) {
            (() => {
                const currentGroup = groupEnum.get_current();
                const groupName = document.createElement("div");
                groupName.setAttribute("style", "float:none;cursor:pointer");
                const groupID = currentGroup.get_id();
                groupName.setAttribute("id", groupID.toString());
                $(groupName).click(() => showTermSets(groupID));
                groupName.appendChild(document.createTextNode(currentGroup.get_name()));
                $('#report').append(groupName);
            })();
        }
    }

    // This is the function that runs when the user clicks one of the divs
    // that we created in the onRetrieveGroups function. We can know which
    // div was clicked by interrogating the groupID parameter. So what we'll
    // do is retrieve a reference to the group with the same ID as the div, and
    // then add the term sets that belong to that group under the div that was clicked.
    function showTermSets(groupID: SP.Guid) {
        // First thing is to remnove the divs under the group DIV to ensure we have a clean place to write to.
        // The reason we don't clear them all is becuase we want to retain the text node of the
        // group div. I.E. that's why we use "parentDiv.childNodes.length>1" as our loop
        // controller.
        const parentDiv = document.getElementById(groupID.toString());
        while (parentDiv.childNodes.length > 1) {
            parentDiv.removeChild(parentDiv.lastChild);
        }

        // For each term set, we'll build a clickable div
        const currentGroup = groups.getById(groupID);

        // We need to load and populate the matching group first, or the
        // term sets that it contains will be inaccessible to our code.
        context.load(currentGroup);
        let termSets: SP.Taxonomy.TermSetCollection;
        context.executeQueryPromise()
            .then(
            () => {
                // The group is now available becuase this is the
                // success callback. So now we'll load and populate the
                // term set collection. We have to do this before we can
                // iterate through the collection, so we can do this
                // with the following nested executeQueryAsync method call.
                termSets = currentGroup.get_termSets();
                context.load(termSets);
                return context.executeQueryPromise();
            })
            .then(() => {
                // The term sets are now available becuase this is the
                // success callback. So now we'll iterate through the collection
                // and create the clickable div. Also note how we create a
                // click event handler for each div on-the-fly, and that we pass in the
                // current group ID and term set ID to that function. So when the user
                // clicks one of these divs, we will know which
                // one was clicked by its term set ID, and to which group it belongs by its
                // group ID. We also pass in the event object, so that we can cancel the bubble
                // because this clickable div will be inside a parent clickable div and we
                // don't want the parent's event to fire.
                const termSetEnum = termSets.getEnumerator();
                while (termSetEnum.moveNext()) {
                    (() => {
                        const currentTermSet = termSetEnum.get_current();
                        const termSetName = document.createElement("div");
                        termSetName.appendChild(document.createTextNode(" + " + currentTermSet.get_name()));
                        termSetName.setAttribute("style", "float:none;cursor:pointer;");
                        const termSetID = currentTermSet.get_id();
                        termSetName.setAttribute("id", termSetID.toString());
                        $(termSetName).click(e => showTerms(e, groupID, termSetID));
                        parentDiv.appendChild(termSetName);
                    })();
                }
            })
            .fail(() => parentDiv.appendChild(document.createTextNode("An error occurred in loading the term sets for this group")));
    }

    // This is the function that runs when the user clicks one of the divs
    // that we created in the showTermSets function. We can know which
    // div was clicked by interrogating the termSetID parameter. So what we'll
    // do is retrieve a reference to the term set with the same ID as the div, and
    // then add the term  that belong to that term set under the div that was clicked.

    function showTerms(event: JQuery.Event, groupID: SP.Guid, termSetID: SP.Guid) {
        // First, cancel the bubble so that the group div click handler does not also fire
        // because that removes all term set divs and we don't want that here.
        event.originalEvent.cancelBubble = true;

        // Get a reference to the term set div that was click and
        // remove its children (apart from the TextNode that is currently
        // showing the term set name.
        const parentDiv = document.getElementById(termSetID.toString());
        while (parentDiv.childNodes.length > 1) {
            parentDiv.removeChild(parentDiv.lastChild);
        }

        // We need to load and populate the matching group first, or the
        // term sets that it contains will be inaccessible to our code.
        const currentGroup = groups.getById(groupID);
        let termSets: SP.Taxonomy.TermSetCollection;
        let currentTermSet: SP.Taxonomy.TermSet;
        let terms: SP.Taxonomy.TermCollection;

        context.load(currentGroup);
        context
            .executeQueryPromise()
            .then(() => {
                // The group is now available becuase this is the
                // success callback. So now we'll load and populate the
                // term set collection. We have to do this before we can
                // iterate through the collection, so we can do this
                // with the following nested executeQueryAsync method call.
                termSets = currentGroup.get_termSets();
                context.load(termSets);
                return context.executeQueryPromise();
            })
            .then(() => {
                currentTermSet = termSets.getById(termSetID);
                context.load(currentTermSet);
                return context.executeQueryPromise();
            })
            .then(() => {
                terms = currentTermSet.get_terms();
                context.load(terms);
                return context.executeQueryPromise();
            })
            .then(() => {
                const termsEnum = terms.getEnumerator();
                while (termsEnum.moveNext()) {
                    const currentTerm = termsEnum.get_current();

                    const term = document.createElement("div");
                    term.appendChild(document.createTextNode("    - " + currentTerm.get_name()));
                    term.setAttribute("style", "float:none;margin-left:10px;");
                    parentDiv.appendChild(term);
                }
            })
            .fail(() => parentDiv.appendChild(document.createTextNode("An error occurred when trying to retrieve terms in this term set")));
    }

    // Runs when the executeQueryAsync method in the onListTaxonomySession function has failed.
    // In this case, clear the report area in the page and tell the user what went wrong.
    function onFailRetrieveGroups(sender, args) {
        $('#report').children().remove();
        $('#report').append("Failed to retrieve groups. Error:" + args.get_message());
    }

    // Runs when the executeQueryAsync method in the listGroups function has failed.
    // In this case, clear the report area in the page and tell the user what went wrong.
    function onFailListTaxonomySession(sender, args) {
        $('#report').children().remove();
        $('#report').append("Failed to get session. Error: " + args.get_message());
    }

    // When the createTerms button is clicked, start by loading
    // a TaxonomySession for the current context. Also get and load
    // the associated term store.
    function createTerms() {
        session = SP.Taxonomy.TaxonomySession.getTaxonomySession(context);
        termStore = session.getDefaultSiteCollectionTermStore();
        context.load(session);
        context.load(termStore);
        context.executeQueryAsync(onGetTaxonomySession, onFailTaxonomySession);
    }

    // This function is the success callback for loading the session and store from the createTerms function
    function onGetTaxonomySession() {
        // Create six GUIDs that we will need when we create a new group, term set, and associated terms
        const guidGroupValue = SP.Guid.newGuid();
        const guidTermSetValue = SP.Guid.newGuid();
        const guidTerm1 = SP.Guid.newGuid();
        const guidTerm2 = SP.Guid.newGuid();
        const guidTerm3 = SP.Guid.newGuid();
        const guidTerm4 = SP.Guid.newGuid();

        // Create a new group
        const myGroup = termStore.createGroup("CustomTerms", guidGroupValue);

        // Create a new term set in the newly-created group
        const myTermSet = myGroup.createTermSet("Privacy", guidTermSetValue, 1033);

        // Create four new terms in the newly-created  term set
        myTermSet.createTerm("Top Secret", 1033, guidTerm1);
        myTermSet.createTerm("Company Confidential", 1033, guidTerm2);
        myTermSet.createTerm("Partners Only", 1033, guidTerm3);
        myTermSet.createTerm("Public", 1033, guidTerm4);

        // Ensure the groups variable has been set, because when this all succeeds we will
        // effectively run the same code as if the user had clicked the listGroups button
        groups = termStore.get_groups();
        context.load(groups);

        // Execute all the preceeding statements in this function
        context.executeQueryAsync(onAddTerms, onFailAddTerms);
    }

    // If all is well with creating the terms, then this function will run.
    // Effectively this runs the same code as if the user had clicked the listGroups button
    // so the user will see their newly-created group
    function onAddTerms() {
        listGroups();
    }

    // Runs when the executeQueryAsync method in the onGetTaxonomySession function has failed.
    // In this case, clear the report area in the page and tell the user what went wrong.
    function onFailAddTerms(sender, args) {
        $('#report').children().remove();
        $('#report').append("Failed to add terms. Error: " + args.get_message());
    }

    // Runs when the executeQueryAsync method in the createTerms function has failed.
    // In this case, clear the report area in the page and tell the user what went wrong.
    function onFailTaxonomySession(sender, args) {
        $('#report').children().remove();
        $('#report').append("Failed to get session. Error: " + args.get_message());
    }
}

// publishing.ts
// Variables used in various callbacks
JSRequest.EnsureSetup();

SP.SOD.execute('mquery.js', 'm$.ready', () => {
    const context = SP.ClientContext.get_current();
    const web = context.get_web();
    m$('#CreatePage').click(createPage);
});

function createPage(evt) {
    SP.SOD.execute('sp.js', 'SP.ClientConext', () => {
        SP.SOD.execute('sp.publishing.js', 'SP.Publishing', () => {
            const context = SP.ClientContext.get_current();

            const hostUrl = decodeURIComponent(JSRequest.QueryString["SPHostUrl"]);
            const hostcontext = new SP.AppContextSite(context, hostUrl);
            const web = hostcontext.get_web();
            const pubWeb = SP.Publishing.PublishingWeb.getPublishingWeb(context, web);
            context.load(web);
            context.load(pubWeb);
            context.executeQueryAsync(
                // Success callback after getting the host Web as a PublishingWeb.
                // We now want to add a new Publishing Page.
                function done() {
                    const pageInfo = new SP.Publishing.PublishingPageInformation();
                    const newPage = pubWeb.addPublishingPage(pageInfo);
                    context.load(newPage);
                    context.executeQueryAsync(
                        function done() {
                            // Success callback after adding a new Publishing Page.
                            // We want to get the actual list item that is represented by the Publishing Page.
                            const listItem = newPage.get_listItem();
                            context.load(listItem);
                            context.executeQueryAsync(
                                // Success callback after getting the actual list item that is
                                // represented by the Publishing Page.
                                // We can now get its FieldValues, one of which is its FileLeafRef value.
                                // We can then use that value to build the Url to the new page
                                // and set the href or our link to that Url.
                                function done() {
                                    const link = document.getElementById("linkToPage");
                                    link.setAttribute("href", web.get_url() + "/Pages/" + listItem.get_fieldValues().FileLeafRef);
                                    link.innerText = "Go to new page!";
                                },

                                // Failure callback after getting the actual list item that is
                                // represented by the Publishing Page.
                                function fail(sender, args) {
                                    alert('Failed to get new page: ' + args.get_message());
                                }
                            );
                        },
                        // Failure callback after trying to add a new Publishing Page.
                        function fail(sender, args) {
                            alert('Failed to Add Page: ' + args.get_message());
                        }
                    );
                },
                // Failure callback after trying to get the host Web as a PublishingWeb.
                function fail(sender, args) {
                    alert('Failed to get the PublishingWeb: ' + args.get_message());
                }
            );
        });
    });
}

// likes
namespace SampleReputation {
    interface MyList extends SPClientTemplates.RenderContext_InView {
        listId: string;
    }

    class MyItem {
        id: number;
        title: string;
        likesCount: number;
        isLikedByCurrentUser: boolean;

        constructor(public row: SPClientTemplates.Item) {
            this.id = parseInt(row['ID'], 10);
            this.title = row['Title'];
            this.likesCount = parseInt(row['LikesCount'], 10) || 0;
            this.isLikedByCurrentUser = this.getLike(row['LikedBy']);
        }

        private getLike(likedBy): boolean {
            if (likedBy && likedBy.length > 0) {
                for (const likedByItem of likedBy) {
                    if (likedByItem.id === _spPageContextInfo.userId) {
                        return true;
                    }
                }
            }
            return false;
        }
    }

    function init() {
        SP.SOD.registerSod('reputation.js', '/_layouts/15/reputation.js');
        SP.SOD.registerSod('typescripttemplates.ts', '/SPTypeScript/Extensions/typescripttemplates.js');
        SP.SOD.executeFunc('typescripttemplates.ts', 'CSR', () => {
            CSR.override(10004, 1)
                .onPreRender((ctx: MyList) => {
                    ctx.listId = ctx.listName.substring(1, 37);
                })
                .header('<ul>')
                .body(renderTemplate)
                .footer('</ul>')
                .register();
        });

        SP.SOD.execute('mQuery.js', 'm$.ready', () => {
            RegisterModuleInit('/SPTypeScript/ReputationModule/likes.js', init);
        });

        SP.SOD.notifyScriptLoadedAndExecuteWaitingJobs('likes.js');
    }

    function renderTemplate(ctx: MyList) {
        const rows = ctx.ListData.Row;
        let result = '';
        for (const row of  rows) {
            const item = new MyItem(row);
            result += '\
			    <li>' + item.title + '\
					<a style="cursor: pointer;" onclick="SampleReputation.setLike(' + item.id + ', \'' + ctx.listId + '\')" >\
						<span id="likesCountText' + item.id + '">' + getLikeText(item.isLikedByCurrentUser) + '</span><span id="likesCount' + item.id + '">' + item.likesCount + '</span>\
					</a>\
			    </li>';
        }
        return result;
    }

    function getLikeText(isLikedByCurrentUser: boolean) {
        return isLikedByCurrentUser ? '\u2665' : '\u2661';
    }

    export function setLike(itemId: number, listId: string): void {
        const context = SP.ClientContext.get_current();
        const isLiked = m$('#likesCountText' + itemId)[0].textContent === '\u2661';
        SP.SOD.executeFunc('reputation.js', 'Microsoft.Office.Server.ReputationModel.Reputation', function fail() {
            Microsoft.Office.Server.ReputationModel.Reputation.setLike(context, listId, itemId, isLiked);
            context.executeQueryAsync(
                () => {
                    m$('#likesCountText' + itemId)[0].textContent = getLikeText(isLiked);
                    const likesCount = parseInt(m$('#likesCount' + itemId)[0].textContent, 10);
                    m$('#likesCount' + itemId)[0].textContent = (isLiked ? likesCount + 1 : likesCount - 1).toString();
                },
                (sender, args) => {
                    alert(args.get_message());
                });
        });
    }

    init();
}

// code from https://github.com/gandjustas/SharePointAngularTS
namespace App {
    "use strict";
    const app = angular.module("app", []);
}

// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
namespace App {
    "use strict";

    interface Iappcontroller {
        title: string;
        activate(): void;
    }

    class appcontroller implements Iappcontroller, ng.IController {
        title: string = "appcontroller";
        lists: SP.List[];

        static $inject: string[] = ["$SharePoint", "$spnotify"];

        constructor(private $SharePoint: App.SharePoint, private $n: App.SpNotify) {
            this.activate();
        }

        activate() {
            const loading = this.$n.showLoading(true);
            this.$SharePoint
                .getLists()
                .then(l => this.lists = l)
                .catch((e: string) => this.$n.show(e, true))
                .finally(() => this.$n.remove(loading));
        }

        $onInit() {
        }
    }

    angular.module("app").controller("appcontroller", [appcontroller]);
}

namespace App {
    "use strict";

    export interface SharePoint {
        getLists(): ng.IPromise<SP.List[]>;
    }

    class SharePointServcie implements SharePoint {
        static $inject: string[] = ["$q"];

        constructor(public $q: ng.IQService) {
        }

        getLists() {
            const promise = this.$q.defer<SP.List[]>();
            SP.SOD.executeFunc("sp.js", "SP.ClientContext", () => {
                const ctx = SP.ClientContext.get_current();
                const hostUrl = decodeURIComponent(SP.ScriptHelpers.getDocumentQueryPairs()['SPHostUrl']);
                const appCtx = new SP.AppContextSite(ctx, hostUrl);
                const hostWeb = appCtx.get_web();
                const lists = hostWeb.get_lists();
                ctx.load(lists);

                ctx.executeQueryAsync(() => {
                    const result: SP.List[] = [];
                    for (const e = lists.getEnumerator(); e.moveNext(); /* nothing */) {
                        result.push(e.get_current());
                    }
                    promise.resolve(result);
                },
                    (o, args) => { promise.reject(args.get_message()); });
            });
            return promise.promise;
        }
    }

    angular.module("app").service("$SharePoint", SharePointServcie);
}

// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
namespace App {
    "use strict";

    export interface SpNotify {
        showLoading(sticky?: boolean): string;
        show(msg: string, sticky?: boolean): string;
        remove(id: string): void;
    }

    class NotifyImpl implements SpNotify {
        static $inject: string[] = [];

        showLoading(sticky: boolean = false) {
            return SP.UI.Notify.showLoadingNotification(sticky);
        }

        show(msg: string, sticky: boolean = false) {
            return SP.UI.Notify.addNotification(msg, sticky);
        }

        remove(id: string) {
            SP.UI.Notify.removeNotification(id);
        }
    }

    angular.module("app").service("$spnotify", NotifyImpl);
}
