import * as workgrid from "workgrid-toolbar";

const options: workgrid.WorkgridToolbarOptions = {
    companyCode: "mycompany",
    authorizerUrl: "https://nowhere",
    clientId: "123",
    spaceId: "123",
    tenantId: "123",
};

workgrid.showWorkgridToolbar(options);
