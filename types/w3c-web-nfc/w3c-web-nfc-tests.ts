// Modified from WebUSB spec: https://w3c.github.io/web-nfc/
// NOTE: Code kept as close to spec examples as possible

/*~ https://w3c.github.io/web-nfc/#example-3 */

async function example_3() {
  const ndef = new NDEFReader();
  try {
    await ndef.write({
      records: [{ recordType: "url", data: "https://w3c.github.io/web-nfc/" }]
    });
  } catch {
    console.log("Write failed :-( try again.");
  }
}

/*~ https://w3c.github.io/web-nfc/#example-6 */

async function example_6() {
  const ndef = new NDEFReader();
  ndef.scan().then(() => {
    console.log("Scan started successfully.");
    ndef.onreadingerror = (event) => {
      console.log("Error! Cannot read data from the NFC tag. Try a different one?");
    };
    ndef.onreading = (event) => {
      console.log("NDEF message read.");
    };
  }).catch(error => {
    console.log(`Error! Scan failed to start: ${error}.`);
  });
}
/*~ https://w3c.github.io/web-nfc/#example-8 */

async function example_8() {
  const ndef = new NDEFReader();
  await ndef.scan();
  ndef.onreading = async ({ message }) => {
    if (message.records.length === 0 ||               // unformatted tag
        message.records[0].recordType === "empty") {  // empty record
      await ndef.write({
        records: [{ recordType: "text", data: "Hello World" }]
      });
      return;
    }

    const decoder = new TextDecoder();
    for (const record of message.records) {
      switch (record.recordType) {
        case "text":
          const textDecoder = new TextDecoder(record.encoding);
          console.log(`Text: ${textDecoder.decode(record.data)} (${record.lang})`);
          break;
        case "url":
          console.log(`URL: ${decoder.decode(record.data)}`);
          break;
        case "mime":
          if (record.mediaType === "application/json") {
            console.log(`JSON: ${JSON.parse(decoder.decode(record.data))}`);
          } else if (record.mediaType?.startsWith("image/")) {
            const blob = new Blob([record.data as DataView], { type: record.mediaType });

            const img = document.createElement("img");
            img.src = URL.createObjectURL(blob);
            document.body.appendChild(img);
          } else {
            console.log(`Media not handled`);
          }
          break;
        default:
          console.log(`Record not handled`);
      }
    }
  };
}

/*~ https://w3c.github.io/web-nfc/#example-11 */

async function example_11() {
  const ndef = new NDEFReader();
  await ndef.scan();
  ndef.onreading = async (event) => {
    const decoder = new TextDecoder();
    for (const record of event.message.records) {
      console.log("Record type:  " + record.recordType);
      console.log("MIME type:    " + record.mediaType);
      console.log("=== data ===\n" + decoder.decode(record.data));
    }

    try {
      await ndef.write("Overriding data is fun!");
    } catch (error) {
      console.log(`Write failed :-( try again: ${error}.`);
    }
  };
}

/*~ https://w3c.github.io/web-nfc/#example-12 */

async function example_12() {
  const ndef = new NDEFReader();
  const ctrl = new AbortController();

  await ndef.scan({ signal: ctrl.signal });
  ndef.onreading = () => {
    console.log("NDEF message read.");
  };

  ctrl.signal.onabort = () => {
    console.log("We're done waiting for NDEF messages.");
  };

  // Stop listening to NDEF messages after 3s.
  setTimeout(() => ctrl.abort(), 3_000);
}

/*~ https://w3c.github.io/web-nfc/#example-19 */

async function example_19() {
  const ndef = new NDEFReader();
  try {
    await ndef.write("Hello world");
    console.log("Message written.");
    await ndef.makeReadOnly();
    console.log("NFC tag has been made permanently read-only after writing to it.");
  } catch (error) {
    console.log(`Operation failed: ${error}`);
  }
}
