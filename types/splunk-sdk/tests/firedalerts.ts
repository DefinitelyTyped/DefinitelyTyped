import * as splunk from "splunk-sdk";

export function test(service: splunk.Service) {
    service.firedAlertGroups().fetch((
        err,
        firedAlertGroups // $ExpectType Collection<FiredAlertGroup>
    ) => {
        if (err) {
            return;
        }

        const groups = firedAlertGroups.list(); // $ExpectType FiredAlertGroup[]
    });
}
