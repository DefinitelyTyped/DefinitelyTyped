import fsMate from "fsmate";

// Simple test file
const testFile = "demo.txt";

async function runTests() {
  // Create file
  await fsMate.mkfile(testFile, true);

  // Write data
  await fsMate.writeFile(testFile, "Hello Afsara!");
  console.log("File written.");

  // Read data
  const content = await fsMate.readFile(testFile);
  console.log("Read content:", content);

  // Append
  await fsMate.appendFile(testFile, "\nThis is appended.");
  console.log("Appended.");

  // Read lines
  const lines = await fsMate.readLine(testFile, 0, true);
  console.log("Lines:", lines);

  // File size
  const size = await fsMate.filesize(testFile);
  console.log("File size:", size);

  // Remove
  await fsMate.remove(testFile);
  console.log("File removed.");
}

runTests().catch(console.error);
