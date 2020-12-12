import * as Akumina from '../index';
import IPageWidget from '../interfaces/IPageWidget';
import Assert from './Assert';

// 4.0
class CompanyNewsItemWidget extends Akumina.BaseWidget {
    TestProperties() {
        super.GetPropertyValue({}, 'id', {});
        super.RefreshWidget('id');
        super.BindTemplate('templateUrl', {}, 'id');
    }
}

const StringTest = (s: string): void => { PrimitiveTest(s, typeof 'string'); }
const NumberTest = (n: number): void => { PrimitiveTest(n, typeof 0); }
const BoolTest = (b: boolean): void => { PrimitiveTest(b, typeof true); }
const FunctionTest = (f: Function): void => { PrimitiveTest(f, typeof function() { }); }
const PrimitiveTest = (o: any, t: string): void => {
    if (typeof o !== t) throw new Error('Value provided [' + o + '] is not of type [' + t + ']');
}

StringTest(Akumina.Digispace.ConfigurationContext.LoadingTemplateHtml);
NumberTest(Akumina.Digispace.UserContext.LanguageId);
BoolTest(Akumina.Digispace.SiteContext.IsLoaderComplete);
FunctionTest(Akumina.Digispace.PageContext.MapPageUrl);

const factory = new Akumina.Digispace.Data.DataFactory();
const request = {
    listName: '', selectFields: '', personaCheckRequired: true, isRoot: true,
    isHosted: true, hostUrl: '', viewXml: '', rowLimit: 499, isPagedResult: false,
    additionalSelectFields: '', contextSiteUrl: '', expandFields: '', postData: {}
};
factory.GetList(request);

Akumina.Digispace.AppPart.Eventing.Publish('route', {});

BoolTest(Akumina.Digispace.ConfigurationContext.CONSTANTS.LOADER_STEPS_ENABLE_VALIDATEWORKSPACECONFIG);

// 5.0
// Assert not null | undefined
var PageWidgetTest: IPageWidget = {
    ContainerId: '',
    DisplayOrder: '',
    Grid: '',
    LayoutId: '',
    PageId: '',
    Title: '',
    VirtualWidgetInstanceId: '',
    WidgetDescription: '',
    WidgetIcon: '',
    WidgetInstanceId: '',
    WidgetName: '',
    WidgetOptions: '',
    WidgetProperties: '',
    ZoneId: ''
}

StringTest(Akumina.Digispace.ConfigurationContext.ServiceHubURL);
BoolTest(Akumina.Digispace.ConfigurationContext.IsSeparateServiceHubMode);
BoolTest(Akumina.Digispace.ConfigurationContext.IsDeliveryMode);
Assert('hi').DEBUG();