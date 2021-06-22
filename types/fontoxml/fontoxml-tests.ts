var workflow:com.fontoxml.IWorkflowInfo = {
    id:"1",
    displayName:"workflow"
}

var user:com.fontoxml.IUserInfo = {
    id: "123",
    displayName: "test",
    roleId: "editor"
}

var init:com.fontoxml.IInvocator = {
    documentIds: ["11-22-33","44-55-66"],
    cmsBaseUrl: "/test/",
    editSessionToken: "aa-bb-cc-dd-ee",
    user: user,
    workflow: workflow,
    autosave: false,
    heartbeat: 300    
}

var simpleinit:com.fontoxml.IInvocator = {
    documentIds: ["11-22-33","44-55-66"],
    cmsBaseUrl: "/test/",
    editSessionToken: "aa-bb-cc-dd-ee"
}

var eventData:com.fontoxml.IFontoMessageEventData = {
    command: "test-command",
    type: "test-type",
    scope: init,
    metadata: {}
}
