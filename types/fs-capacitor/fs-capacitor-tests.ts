import { createReadStream, createWriteStream } from "fs";
import { WriteStream } from "fs-capacitor";

const source = createReadStream("source.txt");
const capacitor = new WriteStream();
const destination = createWriteStream("destination.txt");

// pipe data to the capacitor
source.pipe(capacitor);

// read data from the capacitor
capacitor
  .createReadStream()
  /* .pipe(...some slow Transform streams here...) */
  .pipe(destination);

// read data from the very beginning
setTimeout(() => {
  capacitor.createReadStream() /* .pipe(...elsewhere...) */;

  // you can destroy a capacitor as soon as no more read streams are needed
  // without worrying if existing streams are fully consumed
  capacitor.destroy();
}, 100);
