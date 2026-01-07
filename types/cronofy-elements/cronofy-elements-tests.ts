import * as CronofyElements from "cronofy-elements";

const query: CronofyElements.AvailabilityQuery = {
    participants: [],
    required_duration: { minutes: 60 },
    query_periods: [],
    response_format: "slots",
    buffer: {
        before: { minutes: 15 },
        after: { minutes: 15 },
    },
};

const callback: CronofyElements.AvailabilityViewerCallback = (action: CronofyElements.AvailabilityViewerAction) => {
    if (action.notification.type === "slot_added") {
        const timeslots: CronofyElements.Slot[] = action.slots ?? [];
    }
};

const availabilityOptions: CronofyElements.AvailabilityViewerOptions = {
    availability_query: query,
    element_token: "TOKEN",
    demo: true,
    callback,
    target_id: "cronofy-availability-viewer",
    data_center: "uk",
};

const AvailabilityViewer = CronofyElements.AvailabilityViewer(availabilityOptions);
