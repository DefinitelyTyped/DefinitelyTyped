// EXAMPLE 1
const example1: WebAppManifest = {
    name: 'Donate App',
    description: 'This app helps you donate to worthy causes.',
    icons: [
        {
            src: 'images/icon.png',
            sizes: '192x192',
        },
    ],
};

// EXAMPLE 2
const example2: WebAppManifest = {
    lang: 'en',
    dir: 'ltr',
    name: 'Super Racer 3000',
    description: 'The ultimate futuristic racing game from the future!',
    short_name: 'Racer3K',
    icons: [
        {
            src: 'icon/lowres.webp',
            sizes: '64x64',
            type: 'image/webp',
        },
        {
            src: 'icon/lowres.png',
            sizes: '64x64',
        },
        {
            src: 'icon/hd_hi',
            sizes: '128x128',
        },
    ],
    scope: '/racer/',
    start_url: '/racer/start.html',
    display: 'fullscreen',
    orientation: 'landscape',
    theme_color: 'aliceblue',
    background_color: 'red',
    screenshots: [
        {
            src: 'screenshots/in-game-1x.jpg',
            sizes: '640x480',
            type: 'image/jpeg',
        },
        {
            src: 'screenshots/in-game-2x.jpg',
            sizes: '1280x920',
            type: 'image/jpeg',
        },
    ],
};

// EXAMPLE 8
const example8: WebAppManifest = {
    name: 'Donate App',
    description: 'This app helps you donate to worthy causes.',
    iarc_rating_id: 'e84b072d-71b3-4d3e-86ae-31a8ce4e53b7',
    icons: [
        {
            src: 'images/icon.png',
            sizes: '192x192',
        },
    ],
};

// EXAMPLE 9
const example9: WebAppManifest = {
    shortcuts: [
        {
            name: 'Play Later',
            description: 'View the list of podcasts you saved for later',
            url: '/play-later',
            icons: [
                {
                    src: '/icons/play-later.svg',
                    type: 'image/svg+xml',
                    purpose: 'any',
                },
            ],
        },
        {
            name: 'Subscriptions',
            description: 'View the list of podcasts you listen to',
            url: '/subscriptions?sort=desc',
        },
    ],
};

// EXAMPLE 11
const example11: WebAppManifest = {
    name: 'custom manifest',
    start_url: 'https://boo',
    icons: [
        {
            src: '//icons.example.com/lowres',
        },
        {
            src: '//other.com/hi-res',
        },
    ],
};

// EXAMPLE 12
const example12: WebAppManifest = {
    name: 'News',
    icons: [
        {
            platform: 'play',
            purpose: 'badge',
            sizes: '16x16',
            src: 'icons/badges/android.png',
            type: 'image/png',
        },
        {
            purpose: 'badge',
            src: 'icons/badges/safari.svg',
            type: 'image/svg',
        },
    ],
};

const example13: WebAppManifest = {
    related_applications: [
        {
            platform: 'play',
            url: 'https://play.google.com/store/apps/details?id=com.example.app1',
            id: 'com.example.app1',
            min_version: '2',
            fingerprints: [
                {
                    type: 'sha256_cert',
                    value: '92:5A:39:05:C5:B9:EA:BC:71:48:5F:F2',
                },
            ],
        },
        {
            platform: 'itunes',
            url: 'https://itunes.apple.com/app/example-app1/id123456789',
        },
    ],
};
