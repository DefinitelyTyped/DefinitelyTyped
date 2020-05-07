import * as Akumina from 'akumina-core';

class CompanyNewsItemWidget extends Akumina.BaseWidget {
    TestProperties() {
        super.GetPropertyValue({}, 'id', {});
        super.RefreshWidget('id');
        super.BindTemplate('templateUrl', {}, 'id');
    }
}

const stringTest = (param: string): void => { return; };
const numberTest = (param: number): void => { return; };
const boolTest = (param: boolean): void => { return; };
const functionTest = (param: (s: string) => string): void => { return; };

stringTest(Akumina.Digispace.ConfigurationContext.LoadingTemplateHtml);
numberTest(Akumina.Digispace.UserContext.LanguageId);
boolTest(Akumina.Digispace.SiteContext.IsLoaderComplete);
functionTest(Akumina.Digispace.PageContext.MapPageUrl);

const factory = new Akumina.Digispace.Data.DataFactory();
const request = {
    listName: '', selectFields: '', personaCheckRequired: true, isRoot: true,
    isHosted: true, hostUrl: '', viewXml: '', rowLimit: 499, isPagedResult: false,
    additionalSelectFields: '', contextSiteUrl: '', expandFields: '', postData: {}
};
factory.GetList(request);

Akumina.Digispace.AppPart.Eventing.Publish('route', {});

boolTest(Akumina.Digispace.ConfigurationContext.CONSTANTS.LOADER_STEPS_ENABLE_VALIDATEWORKSPACECONFIG);
