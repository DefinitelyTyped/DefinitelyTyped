import { HumanActivityAccumulativePedometerData, HumanActivityPedometerData, HumanActivitySleepMonitorData, HumanActivityType } from "tizen-common-web/humanactivity";
import { WebAPIError } from "tizen-common-web/tizen";

{
    function onchangedCB(sleepInfo?: HumanActivitySleepMonitorData): void {
        if (sleepInfo) {
            console.log("Sleep status: " + sleepInfo.status);
            console.log("Timestamp: " + sleepInfo.timestamp);
        }
    }

    tizen.humanactivitymonitor.start("SLEEP_MONITOR", onchangedCB);
}

{
    function onsuccessCB(pedometerInfo?: HumanActivityPedometerData) {
        if (pedometerInfo) {
            console.log("Step status: " + pedometerInfo.stepStatus);
            console.log("Cumulative total step count: " + pedometerInfo.cumulativeTotalStepCount);
        }
    }

    function onerrorCB(error: WebAPIError) {
        console.log(`Error occurs, name: ${error.name}, message: ${error.message}`);
    }

    function onchangedCB(pedometerdata?: HumanActivityPedometerData) {
        console.log("From now on, you will be notified when the pedometer data changes");
        /* To get the current data information. */
        tizen.humanactivitymonitor.getHumanActivityData("PEDOMETER", onsuccessCB, onerrorCB);
    }

    tizen.humanactivitymonitor.start("PEDOMETER", onchangedCB, onerrorCB, { callbackInterval: 150000, sampleInterval: 1000 });
}

{
    function onchangedCB(pedometerInfo?: HumanActivityAccumulativePedometerData) {
        if (pedometerInfo) {
            console.log("Step status: " + pedometerInfo.stepStatus);
            console.log("Accumulative total step count: " + pedometerInfo.accumulativeTotalStepCount);
        }
    }

    tizen.humanactivitymonitor.setAccumulativePedometerListener(onchangedCB);
    tizen.humanactivitymonitor.unsetAccumulativePedometerListener();
}
