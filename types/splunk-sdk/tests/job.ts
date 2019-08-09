import * as splunk from 'splunk-sdk';

export function test(service: splunk.Service) {
  service.search('search index=_internal | head 1', {}, (
    err, // $ExpectType SplunkError | null
    job, // $ExpectType Job
  ) => {
    job.sid; // $ExpectType string
    job.name; // $ExpectType string
  });
}
