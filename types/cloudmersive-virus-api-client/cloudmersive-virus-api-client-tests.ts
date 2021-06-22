import * as CloudmersiveVirusApiClient from 'cloudmersive-virus-api-client';
// $ExpectType typeof WebsiteThreatType
CloudmersiveVirusApiClient.WebsiteThreatType;
// $ExpectType typeof CollectionFormatEnum
CloudmersiveVirusApiClient.CollectionFormatEnum;
// $ExpectType VirusFound
CloudmersiveVirusApiClient.VirusFound;
// $ExpectType VirusScanAdvancedResult
CloudmersiveVirusApiClient.VirusScanAdvancedResult;
// $ExpectType VirusScanResult
CloudmersiveVirusApiClient.VirusScanResult;
// $ExpectType WebsiteScanResult
CloudmersiveVirusApiClient.WebsiteScanResult;
// $ExpectType WebsiteScanRequest
CloudmersiveVirusApiClient.WebsiteScanRequest;
// $ExpectType ApiClient
const defaultClient = CloudmersiveVirusApiClient.ApiClient;
// $ExpectType Date
defaultClient.parseDate('1970-01-01');
// $ExpectType void
defaultClient.constructFromObject({}, {}, {});
// $ExpectType any
defaultClient.convertToType({}, {});
// $ExpectType CollectionFormatEnum
defaultClient.CollectionFormatEnum;
// $ExpectType ApiInstance
const defaultInstance = defaultClient.instance;
// $ExpectType ApiInstanceAuthentications
const APKey = defaultInstance.authentications.Apikey;
APKey.apiKey = '';
// $ExpectType ScanApi
const apinstance = new CloudmersiveVirusApiClient.ScanApi();
// $ExpectType any
apinstance.scanFile(
    Buffer.alloc(10),
    (error: any, data: CloudmersiveVirusApiClient.VirusScanResult, response: any) => {},
);
// $ExpectType any
apinstance.scanFileAdvanced(
    Buffer.alloc(10),
    { allowExecutables: false, allowInvalidFiles: false, allowScripts: false, restrictFileTypes: '' },
    (error: any, data: CloudmersiveVirusApiClient.VirusScanAdvancedResult, response: any) => {},
);
// $ExpectType any
apinstance.scanWebsite({ Url: '' }, (error: any, data: CloudmersiveVirusApiClient.WebsiteScanResult, response: any) => {});
