import { configureRefreshFetch, fetchJSON } from 'refresh-fetch';

const fetchJSONWithToken = (url: string, options?: RequestInit): Promise<{ body: {}; response: Response }> => {
  return fetchJSON(url, options);
};

const refreshToken = (): Promise<void> => {
  return fetchJSON<{
    refreshToken: string;
  }>(
    'url',
    {
        method: "GET"
    },
  ).then(() => {
    return;
  });
};

const fetch = configureRefreshFetch({
  fetch: fetchJSONWithToken,
  shouldRefreshToken: (): boolean => true,
  refreshToken,
});
