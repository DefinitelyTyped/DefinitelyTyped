// Here are some examples for Navigator.Permissions types.
// Open it in your IDE with TypeScript support and observe the types and documentation help
// that this module provides

// Navigator from lib.dom might have permissions
const nav = navigator as NavigatorPermissions.NavigatorPermissions;

async function exampleQueryAndEventListeners() {
    // Force users to check for undefined as the feature is not widely supported
    if (typeof nav.permissions === 'undefined') { return; }
    const permissionsStatus = await nav.permissions.query({ name: 'camera' });
    // Possible state values are known to users:
    const isDenied = permissionsStatus.state === 'denied';
    // if compared to any non-valid value, it warns
    // const tsShouldWarn = permissionsStatus.state === 'can you see the warning?';
    permissionsStatus.addEventListener('change', (event) => {
        console.log('permission state changed');
        // I couldn't find a way to set the EventTarget's type to PermissionStatus
        console.log('new PermissionStatus', event.target);
    });
}

function exampleQueryOptions() {
    // Force users to check for undefined as the feature is not widely supported
    if (typeof nav.permissions === 'undefined') { return; }
    // query method checks if the name is a valid permission name
    nav.permissions.query({ name: 'camera' });
    // Other names would cause type errors
    // nav.permissions.query({ name: 'invalid name' });

    // When permission name is 'push', userVisibleOnly property is also supported
    nav.permissions.query({ name: 'push', userVisibleOnly: true });
    // For other names, it would fail:
    // nav.permissions.query({ name: 'camera', userVisibleOnly: true });

    // When permission name is 'midi', sysex property is also supported
    nav.permissions.query({ name: 'midi', sysex: true });
    // For other names, it would fail:
    // nav.permissions.query({ name: 'camera', sysex: true });
}

function exampleIgnoreUndefinedCheck() {
    // Using the ! after permissions will let you bypass the undefined-check
    nav.permissions!.query({ name: 'microphone' });
}
