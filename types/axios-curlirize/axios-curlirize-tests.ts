import curlirize from 'axios-curlirize';
import axios from 'axios';

curlirize(axios);
curlirize(axios, (res, err) => { });
curlirize(axios, (res, err) => {
    const { command: string } = res;
});
