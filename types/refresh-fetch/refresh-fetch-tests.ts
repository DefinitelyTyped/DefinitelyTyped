import { configureRefreshFetch, fetchJSON } from 'refresh-fetch';
import { RequestInit, Response } from 'node-fetch';

const fetchJSONWithToken = <ResponseBody>(url: string, options?: RequestInit): Promise<{ body: ResponseBody; response: Response }> => {
  return fetchJSON<ResponseBody>(url, options);
};

const refreshToken = (): Promise<void> => {
  return fetchJSON<{
    refreshToken: string;
  }>(
    'url',
    {},
  ).then(() => {
    return;
  });
};

const fetch = configureRefreshFetch({
  fetch: fetchJSONWithToken,
  shouldRefreshToken: (): boolean => true,
  refreshToken,
});
