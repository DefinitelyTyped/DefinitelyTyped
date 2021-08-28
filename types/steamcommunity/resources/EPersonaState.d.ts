export interface EPersonaState {
    'Offline': 0;
    'Online': 1;
    'Busy': 2;
    'Away': 3;
    'Snooze': 4;
    'LookingToTrade': 5;
    'LookingToPlay': 6;
    'Invisible': 7;

    // Value-to-name mapping for convenience
    '0': 'Offline';
    '1': 'Online';
    '2': 'Busy';
    '3': 'Away';
    '4': 'Snooze';
    '5': 'LookingToTrade';
    '6': 'LookingToPlay';
    '7': 'Invisible';
}
