import BackgroundJob from 'react-native-background-job';

const backgroundJob = {
    jobKey: "myJob",
    job: () => console.log("Running in background")
};

BackgroundJob.register(backgroundJob);

var backgroundSchedule = {
    jobKey: "myJob",
}

BackgroundJob.schedule(backgroundSchedule)
    .then(() => console.log("Success"))
    .catch(err => console.error(err));

BackgroundJob.cancel({ jobKey: 'myJob' })
    .then(() => console.log("Success"))
    .catch(err => console.error(err));


BackgroundJob.cancelAll()
    .then(() => console.log("Success"))
    .catch(err => console.error(err));


BackgroundJob.setGlobalWarnings(false);

BackgroundJob.isAppIgnoringBatteryOptimization((err, isIgnoring) => console.log(`Callback: isIgnoring = ${isIgnoring}`))
    .then(isIgnoring => console.log(`Promise: isIgnoring = ${isIgnoring}`))
    .catch(err => console.error(err));