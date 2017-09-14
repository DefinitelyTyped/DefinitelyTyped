import * as control from "strong-cluster-control";

control.start({ size: control.CPUS}, (): void => { console.log("starting"); })
    .on("error", (err: Error): void => {
        console.error(err);
    });

control.start((): void => { console.log("staring"); })
    .on("error", (err: Error): void => {
        console.error(err);
    });

control.stop()
    .on("stop", (): void => {
        console.log("stopped");
    });

control.setSize(2)
    .on("setSize", (size) => console.log(size))
    .on("resize", (size) => console.log(size));

control.restart()
    .on("startRestart", (pids) => console.log(`Restarting ${pids.length} workers`))
    .on("restart", () => console.log("restarted"));

control.shutdown(123)
    .on("stopWorker", (worker) => console.log(`Worker ${worker.pid} stopped`));

control.terminate(123)
    .on("stopWorker", (worker) => console.log(`Worker ${worker.pid} stopped`));
