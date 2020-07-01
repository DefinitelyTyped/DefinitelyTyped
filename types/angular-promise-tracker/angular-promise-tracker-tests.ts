angular.module('promise-tracker-tests', []).run(['$q', '$http', 'promiseTracker',
    ($q: angular.IQService, $http: angular.IHttpService, promiseTracker: angular.promisetracker.PromiseTrackerService) => {
        const trackerWithoutOptions = promiseTracker();

        const options = {
            activationDelay: 10,
            minDuration: 500
        } as angular.promisetracker.PromiseTrackerOptions;
        const trackerWithOptions = promiseTracker(options);

        const isActive: boolean = trackerWithOptions.active();
        const tracking: boolean = trackerWithOptions.tracking();
        const trackingCount: number = trackerWithOptions.trackingCount();
        trackerWithOptions.cancel();

        const createdPromise: angular.IDeferred<void> = trackerWithOptions.createPromise();

        const promiseToAdd = $q.defer().promise;
        const addedPromise: angular.IDeferred<void> = trackerWithOptions.addPromise(promiseToAdd);

        const trackerWithSomeOptions = promiseTracker({activationDelay: 500});

        $http.post('/foo', {}, { });
        $http.post('/foo', {}, { tracker: trackerWithOptions });
        $http.post('/foo', {}, { tracker: [trackerWithoutOptions, trackerWithOptions] });
}]);
