import * as Printer from "ipp-printer";
import * as fs from "node:fs";

const printer = new Printer({
    port: 631,
});

printer.on("job", (job: Printer.Job) => {
    console.log("[job %d] Printing document: %s", job.id, job.name);

    const filename = `job-${job.id}.ps`;
    const file = fs.createWriteStream(filename);

    job.on("end", () => {
        console.log("[job %d] Document saved as %s", job.id, filename);
    });

    job.pipe(file);
});
