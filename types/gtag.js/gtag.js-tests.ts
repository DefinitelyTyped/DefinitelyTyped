gtag('config', 'GA-TRACKING_ID');
gtag('config', 'GA-TRACKING_ID', {send_page_view: false});

gtag('event', 'login', {
  method: 'Google'
});

gtag('set', 'user_properties', {
  favorite_composer: 'Mahler',
  favorite_instrument: 'double bass',
  season_ticketholder: 'true'
});
gtag('set', {currency: 'USD'});
gtag('js', new Date());
gtag('set', {
  country: 'US',
  currency: 'USD'
});
