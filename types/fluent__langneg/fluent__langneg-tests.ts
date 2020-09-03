import { acceptedLanguages, negotiateLanguages } from '@fluent/langneg';

const reqLangs = acceptedLanguages('fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5');
const useLangs = negotiateLanguages(reqLangs, ['pt-BR', 'es-ES', 'en-US', 'en-GB'], {
    strategy: 'filtering',
    defaultLocale: 'en-US',
    likelySubtags: { 'en-US': 'en' },
});
