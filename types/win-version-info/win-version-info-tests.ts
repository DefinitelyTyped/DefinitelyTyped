import vi = require("win-version-info");

const versionInfo = vi("C:\\MyFiles\\file.exe");
const productName = versionInfo.ProductName;
const fileVersion = versionInfo.FileVersion;
