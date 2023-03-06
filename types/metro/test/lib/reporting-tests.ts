import { BundleDetails, ReportableEvent, Reporter } from 'metro';

export const details: BundleDetails = {
    bundleType: "type",
    dev: false,
    entryFile: "entry",
    minify: true,
    platform: "ios",
};

export const reporter: Reporter = {
    update: (event: ReportableEvent): void => {}
};

reporter.update({
    type: 'initialize_failed',
    port: 1234,
    error: new Error("error")
});
