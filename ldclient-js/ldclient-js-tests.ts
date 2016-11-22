// Implicitly calls LDClient#identify
const ldClient = LDClient.initialize(
    'ENV KEY',
    {
        key: 'USER KEY',
        name: 'USER NAME',
        custom: {
            'CUSTOM ATTRIBUTE': ['CUSTOM VALUE'],
        },
    },
    {
        hash: 'SECURE USER HASH',
    }
);

ldClient.on('ready', () => {
    const defaultValue = false;
    ldClient.variation('FLAG-KEY', defaultValue);
    console.log('All flag values:', ldClient.allFlags());
});

function changeCallback(changes: LaunchDarkly.LDFlagChangeset) {
    console.log('Flags changed:', changes);
}

ldClient.on('change', changeCallback);

document.getElementById('disable-change-tracking')!.addEventListener('click', () => {
    ldClient.off('change', changeCallback);
});
