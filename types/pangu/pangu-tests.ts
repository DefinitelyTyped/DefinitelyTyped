import pangu = require('pangu');

pangu.spacing('Sephiroth見他這等神情,也是悚然一驚:不知我這Ultimate Destructive Magic是否對付得了?');
// output: Sephiroth 見他這等神情, 也是悚然一驚: 不知我這 Ultimate Destructive Magic 是否對付得了?

pangu.spacingFile('/path/to/text.txt', (err, data) => {
});

pangu.spacingFile('/path/to/text.txt').then(data => {
});

const data = pangu.spacingFileSync('/path/to/text.txt');

pangu.spacingPage();
pangu.spacingElementById('main');
pangu.spacingElementByClassName('comment');
pangu.spacingElementByTagName('p');
