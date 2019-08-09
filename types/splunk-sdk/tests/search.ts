import * as splunk from "splunk-sdk";

export function test(service: splunk.Service) {
    service.search("search index=_internal | head 10", { exec_mode: "blocking" }, (err, job) => {
        job.fetch({}, (err, job) => {
            job.results({},
                (
                    err, // $ExpectType SplunkError | null
                    results, // $ExpectType { [key: string]: any; }
                    job // $ExpectType Job
                ) => {
                    job.cancel(() => {
                        // CANCELED!
                    }); // TODO Type this callback
                });
        });
    });
}
