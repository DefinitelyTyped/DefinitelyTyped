import admin = require("admin-check");

admin.check().then(result => {
    if (result) {
        // Do something when admin privileges are present
    } else {
        // Do something when admin privileges are NOT present
    }
});
