function tryKeepScreenAlive(minutes: number) {
    navigator.wakeLock.request('screen').then(lock => {
        setTimeout(() => lock.release(), minutes * 60 * 1000);
    });
}

tryKeepScreenAlive(10);

const lockingCheckbox = async () => {
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    document.body.appendChild(checkbox);

    const sentinel = await navigator.wakeLock.request('screen');
    checkbox.checked = !sentinel.released;
    sentinel.onrelease = () => (checkbox.checked = !sentinel.released);
};
