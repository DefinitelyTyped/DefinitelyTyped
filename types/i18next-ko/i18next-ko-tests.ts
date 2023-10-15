import * as i18next from 'i18next';
import * as i18nextko from 'i18next-ko';
import * as ko from 'knockout';

const resourceStore = {
    en: {
        translation: {
            testTranslation: 'Test translation'
        }
    },

    de: {
        translation: {
            testTranslation: 'Test-Übersetzung'
        }
    }
};
i18nextko.init(resourceStore, 'en', ko);

i18nextko.setLanguage('de');

i18nextko.i18n;

i18nextko.t('testTranslation');
