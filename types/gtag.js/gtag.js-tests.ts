gtag('config', 'GA-TRACKING_ID');
gtag('config', 'GA-TRACKING_ID', { send_page_view: false });

gtag('event', 'login', {
  method: 'Google',
});

gtag('set', 'user_properties', {
  favorite_composer: 'Mahler',
  favorite_instrument: 'double bass',
  season_ticketholder: 'true',
});
gtag('set', { currency: 'USD' });
gtag('js', new Date());
gtag('set', {
  country: 'US',
  currency: 'USD',
});
gtag('set', 'developer_id', true);

gtag('get', 'GA-TRACKING_ID', 'client_id', _clientId => {});

gtag('consent', 'default', {
  ad_storage: 'denied',
  analytics_storage: 'denied',
  wait_for_update: 500,
});
gtag('consent', 'default', {
  ad_storage: 'denied',
  region: ['ES', 'US-AK'],
});
gtag('consent', 'default', {
  analytics_storage: 'denied',
});
