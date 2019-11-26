import curlirize from 'axios-curlirize';
import axios from 'axios';

curlirize(axios);
curlirize(axios, (err, res) => { });
