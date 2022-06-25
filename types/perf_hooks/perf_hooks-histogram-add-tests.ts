import { RecordableHistogram, Histogram } from "perf_hooks";

declare const histogram1: RecordableHistogram;
declare const histogram2: RecordableHistogram;
declare const histogram3: RecordableHistogram;

async () => {
    histogram1.add(histogram2);
    histogram1.add(histogram3);
};
