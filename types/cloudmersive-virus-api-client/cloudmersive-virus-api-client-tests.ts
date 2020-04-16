import * as CloudmersiveVirusApiClient from 'cloudmersive-virus-api-client';
// $ExpectType typeof WebsiteThreatType
CloudmersiveVirusApiClient.WebsiteThreatType;
// $ExpectType typeof CollectionFormatEnum
CloudmersiveVirusApiClient.CollectionFormatEnum;
// $ExpectType IVirusFound
CloudmersiveVirusApiClient.VirusFound;
// $ExpectType IVirusScanAdvancedResult
CloudmersiveVirusApiClient.VirusScanAdvancedResult;
// $ExpectType IVirusScanResult
CloudmersiveVirusApiClient.VirusScanResult;
// $ExpectType IWebsiteScanResult
CloudmersiveVirusApiClient.WebsiteScanResult;
// $ExpectType IWebsiteScanRequest
CloudmersiveVirusApiClient.WebsiteScanRequest;
// $ExpectType IApiClient
const defaultClient = CloudmersiveVirusApiClient.ApiClient;
// $ExpectType Date
defaultClient.parseDate('1970-01-01');
// $ExpectType void
defaultClient.constructFromObject({}, {}, {});
// $ExpectType any
defaultClient.convertToType({}, {});
// $ExpectType CollectionFormatEnum
defaultClient.CollectionFormatEnum;
// $ExpectType IApiInstance
const defaultInstance = defaultClient.instance;
// $ExpectType IApiInstanceAuthentications
const APIKey = defaultInstance.authentications.Apikey;
APIKey.apiKey = '';
// $ExpectType ScanApi
const apiInstance = new CloudmersiveVirusApiClient.ScanApi();
// $ExpectType any
apiInstance.scanFile(
    Buffer.alloc(10),
    (error: any, data: CloudmersiveVirusApiClient.IVirusScanResult, response: any) => {},
);
// $ExpectType any
apiInstance.scanFileAdvanced(
    Buffer.alloc(10),
    { allowExecutables: false, allowInvalidFiles: false, allowScripts: false, restrictFileTypes: '' },
    (error: any, data: CloudmersiveVirusApiClient.IVirusScanAdvancedResult, response: any) => {},
);
// $ExpectType any
apiInstance.scanWebsite('', (error: any, data: CloudmersiveVirusApiClient.IWebsiteScanResult, response: any) => {});
