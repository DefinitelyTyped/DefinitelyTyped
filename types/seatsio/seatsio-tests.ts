import seatsio from "seatsio";

new seatsio.SeatingChart({
    divId: 'chart',
    workspaceKey: 'myWorkspaceKey',
    selectionValidators: [
        { type: 'consecutiveSeats' },
        { type: 'noOrphanSeats' }
    ]
});
