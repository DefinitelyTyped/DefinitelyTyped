import * as splunk from 'splunk-sdk';

export function test(service: splunk.Service) {
  service.oneshotSearch('search index=_internal | head 5', {}, (
    err, // $ExpectType SplunkError | null
    results, // $ExpectType { [key: string]: any; }
  ) => {});
}
