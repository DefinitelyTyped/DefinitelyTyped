import generateFeed = require('generate-feed');
const baseUrl = 'https://example.com';

const config: generateFeed.Config = {
    title: 'bret.io log',
    url: 'https://bret.io',
    description: 'A running log of announcements, projects and accomplishments.',
    icon: '/icon-512x512.png',
    favicon: '/favicon-64x64.png',
    author: 'Bret Comnes <bcomnes@gmail.com> (https://bret.io)',
    avatar: '/avatar-512x512.png',
};

const logMap1: generateFeed.LogMap = {
    date: '2018-04-07T13:48:02-07:00',
    content: 'Wee wooo this is some content. \n Maybe a new paragraph too',
    url: '/my-text-post',
};

const logMap2: generateFeed.LogMap = {
    date: '2018-04-07T15:06:43-07:00',
    content: '<p>Hello, world!</p>',
    title: 'This is a blog title',
    url: '/my-blog-post',
    link: 'https://example.com/some-external-link',
};

generateFeed(config, [logMap1, logMap2], './feed');
