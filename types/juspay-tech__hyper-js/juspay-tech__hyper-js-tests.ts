import { loadHyper, loadStripe } from '@juspay-tech/hyper-js';

loadHyper('pk_snd_***********************************');
loadHyper('pk_snd_***********************************', { env: 'PROD' });
loadHyper('pk_snd_***********************************', { env: 'SANDBOX' });

loadStripe('pk_snd_***********************************');
loadStripe('pk_snd_***********************************', { env: 'PROD' });
loadStripe('pk_snd_***********************************', { env: 'SANDBOX' });
