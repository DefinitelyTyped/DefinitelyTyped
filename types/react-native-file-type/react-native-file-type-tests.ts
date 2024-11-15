import FileType from "react-native-file-type";

// Test case 1: Ensure the function resolves to a valid FileTypeResult
async function testFileType() {
  const uri = "path/to/file.jpg";

  const result = await FileType(uri);

  if (result) {
    console.log(result.ext); // Should be a string (e.g., "jpg")
    console.log(result.mime); // Should be a string (e.g., "image/jpeg")
  } else {
    console.log("No type detected"); // Handle null case
  }
}

// Test case 2: Invalid URI should return null
async function testInvalidUri() {
  const uri = "invalid-path";
  const result = await FileType(uri);

  if (result === null) {
    console.log("Null result for invalid URI");
  }
}

// Call the test functions
testFileType();
testInvalidUri();
