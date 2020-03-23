import * as orientation from 'o9n';

const isLandscape = orientation.type.startsWith('landscape');

orientation.addEventListener('change', () => {});

orientation.lock('landscape').then(() => {});

orientation.unlock();

orientation.install();
