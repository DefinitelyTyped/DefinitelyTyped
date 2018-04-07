// Modified from Permissions API spec: https://w3c.github.io/permissions/#examples
// NOTE: Code kept as close to spec examples as possible

// Example 3
function showLocalNewsWithGeolocation() {}
function showButtonToEnableLocalNews() {}

const test = navigator.permissions.query({ name: "geolocation" }).then(({ state }) => {
    switch (state) {
      case "granted":
        showLocalNewsWithGeolocation();
        break;
      case "prompt":
        showButtonToEnableLocalNews();
        break;
      default:
        // Don’t do anything if the permission was denied.
        break;
    }
});

// Example 4
function updateNotificationButton(state: PermissionState) {
    const button = document.getElementById('chat-notification-button');
    if (button) {
        button.setAttribute('disabled', state === 'denied' ? 'disabled' : '');
    }
}

navigator.permissions.query({ name: 'notifications' }).then((result) => {
    updateNotificationButton(result.state);
    result.addEventListener('change', () => {
        updateNotificationButton(result.state);
    });
});

// Example 5
Promise.all([
    navigator.permissions.query({ name: "geolocation" }),
    navigator.permissions.query({ name: "notifications" })
])
.then(([{ state: geoState }, { state: notifState }]) => {
    console.log("Geolocation permission state is:", geoState);
    console.log("Notifications permission state is:", notifState);
});
