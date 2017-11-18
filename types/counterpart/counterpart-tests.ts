import * as counterpart from 'counterpart';

counterpart('translation.to.be.used');
counterpart(['translation', 'to', 'be', 'used']);

counterpart.setSeparator('*');

counterpart.onTranslationNotFound((locale: string, key: string, fallback: string, scope: string) => {});
counterpart.offTranslationNotFound((locale: string, key: string, fallback: string, scope: string) => {});

counterpart.setMissingEntryGenerator((value: string) => {});

counterpart.setLocale('es');
counterpart.getLocale();

counterpart.onLocaleChange((newLocale: string, oldLocale: string) => {});
counterpart.offLocaleChange((newLocale: string, oldLocale: string) => {});

counterpart.setFallbackLocale('es');

counterpart.registerTranslations('es', { hello: 'Hola' });

counterpart.registerInterpolations({ library: 'Counterpart' });

counterpart.setKeyTransformer((value: string, options: object) => {
  return value.toUpperCase();
});

counterpart.localize(new Date(), { format: 'short' });
