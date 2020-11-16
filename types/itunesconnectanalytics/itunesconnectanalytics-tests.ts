import * as itc from "itunesconnectanalytics";

interface AppStoreConnectQueryDesc {
    measures: itc.measures;
    frequency: itc.frequency;
    group: itc.QueryGroup;
    dimensionFilters: itc.DimensionFilters[];
    start: string;
    end: string;
    appId: string;
}

export class AppStoreConnect {
    loggedIn: boolean;
    instance: itc.Itunes | undefined;
    constructor(logLevel: string) {
        this.loggedIn = false;
    }

    login(username: string, password: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.instance = new itc.Itunes(username, password, {
                errorCallback: (error: Error) => {
                    reject(error);
                },
                successCallback: () => {
                    this.loggedIn = true;
                    resolve();
                },
            });
        });
    }

    switchProvider(providerId: string): Promise<void> {
        return new Promise((resolve, reject) => {
            if (this.instance && this.loggedIn) {
                this.instance.changeProvider(providerId,  (error: Error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve();
                    }
                });
            } else {
                reject('AppStoreConnect has not been properly initialized.  It is likely you did not login first.');
            }
        });
    }

    queryMeasure(queryDesc: AppStoreConnectQueryDesc): Promise<itc.QueryResult> {
        return new Promise((resolve, reject) => {
            if (this.instance) {
                let query = itc.AnalyticsQuery.metrics(queryDesc.appId, {
                    measures: queryDesc.measures,
                    frequency: queryDesc.frequency,
                    group: queryDesc.group,
                    dimensionFilters: queryDesc.dimensionFilters,
                });
                if (queryDesc.start && queryDesc.end) {
                    query = query.date(queryDesc.start, queryDesc.end);
                }
                this.instance.request(query, (error: Error, result: itc.QueryResult) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                });
            } else {
                reject('Cannot query AppStoreConnect.  It appears it has not been properly initialized.  Perhaps you did not login first?');
            }
        });
    }

    static getValueFromDataPointForKey(dataPoint: itc.AnalyticsDataPoint, key: string): number {
        let value: number | undefined;
        switch (key) {
            case itc.measures.activeDevices: {
                if (dataPoint.activeDevices) {
                    value = dataPoint.activeDevices;
                }
            }
            case itc.measures.activeLast30days: {
                if (dataPoint.rollingActiveDevices) {
                    value = dataPoint.rollingActiveDevices;
                }
            }
            case itc.measures.crashes: {
                if (dataPoint.crashes) {
                    value = dataPoint.crashes;
                }
            }
            case itc.measures.iap: {
                if (dataPoint.iap) {
                    value = dataPoint.iap;
                }
            }
            case itc.measures.impressions: {
                if (dataPoint.impressionsTotal) {
                    value = dataPoint.impressionsTotal;
                }
            }
            case itc.measures.impressionsUnique: {
                if (dataPoint.impressionsTotalUnique) {
                    value = dataPoint.impressionsTotalUnique;
                }
            }
            case itc.measures.installs: {
                if (dataPoint.installs) {
                    value = dataPoint.installs;
                }
            }
            case itc.measures.pageViewUnique: {
                if (dataPoint.pageViewUnique) {
                    value = dataPoint.pageViewUnique;
                }
            }
            case itc.measures.pageViews: {
                if (dataPoint.pageViewCount) {
                    value = dataPoint.pageViewCount;
                }
            }
            case itc.measures.payingUsers: {
                if (dataPoint.payingUsers) {
                    value = dataPoint.payingUsers;
                }
            }
            case itc.measures.sales: {
                if (dataPoint.sales) {
                    value = dataPoint.sales;
                }
            }
            case itc.measures.sessions: {
                if (dataPoint.sessions) {
                    value = dataPoint.sessions;
                }
            }
            case itc.measures.uninstalls: {
                if (dataPoint.uninstalls) {
                    value = dataPoint.uninstalls;
                }
            }
            case itc.measures.units: {
                if (dataPoint.units) {
                    value = dataPoint.units;
                }
            }
        }
        if (value === undefined) {
            throw new Error(`Missing value for ${key}`);
        }
        return value;
    }
}
