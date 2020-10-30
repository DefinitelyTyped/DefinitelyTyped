import AddToHomeScreen = require('a2hs.js');

AddToHomeScreen();

AddToHomeScreen({
    backgroundColor: 'red',
    padding: '10px',
    shadowColor: '#e9e9e9',
    shadowSize: '10px',
    color: '#5d5d5d',
    brandName: 'Demo',
    fontFamily: 'Tahoma, sans-serif',
    fontSize: '0.9rem',
    logoImage: `<svg enable-background="new 0 0 1952.00 734.93" height="25" viewBox="0 0 1952 734.93" width="70" xmlns="http://www.w3.org/2000/svg">`,
    htmlContent: `Install <strong>{{brandName}} web app</strong> on your iOS device: tap share and <strong>Add to Home Screen</strong> ↓`,
});
