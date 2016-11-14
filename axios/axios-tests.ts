/// <reference path="axios.d.ts" />

enum HttpMethod { GET, PUT, POST, DELETE, CONNECT, HEAD, OPTIONS, TRACE, PATCH }
enum ResponseType { arraybuffer, blob, document, json, text }

interface Repository {
  id: number;
  name: string;
}

interface Issue {
  id: number;
  title: string;
}

axios.interceptors.request.use<any>(config => {
    console.log("Method:" + config.method + " Url:" +config.url);
    return config;
});


const requestId: number = axios.interceptors.request.use<any>(
    (config) => {
        console.log("Method:" + config.method + " Url:" +config.url);
        return config;
    },
    (error: any) => error);


axios.interceptors.request.eject(requestId);
axios.interceptors.request.eject(7);


axios.interceptors.response.use<any>(config => {
    console.log("Status:" + config.status);
    return config;
});

const responseId: number = axios.interceptors.response.use<any>(
    config => {
        console.log("Status:" + config.status);
        return config;
    },
    (error: any) => error);

axios.interceptors.response.eject(responseId);

axios.get<Repository>("https://api.github.com/repos/mzabriskie/axios")
     .then(r => console.log(r.config.method));

var getRepoDetails = axios<Repository>({
    url: "https://api.github.com/repos/mzabriskie/axios",
    method: HttpMethod[HttpMethod.GET],
    headers: {},
}).then(r => {
    console.log("ID:" + r.data.id + " Name: " + r.data.name);
    return r;
});

axios.post("http://example.com/", {}, {
    transformRequest: (data: any) => data
});

axios.post("http://example.com/", {
       headers: {'X-Custom-Header': 'foobar'}
}, {
    transformRequest: [
        (data: any) => data
    ]
});

var config: Axios.AxiosXHRConfigBase<any> = {headers: {}};
config.headers['X-Custom-Header'] = 'baz';
axios.post("http://example.com/", config);

var getRepoIssue = axios.get<Issue>("https://api.github.com/repos/mzabriskie/axios/issues/1");

var axiosInstance = axios.create({
    baseURL: "https://api.github.com/repos/mzabriskie/axios/",
    timeout: 1000
});

axiosInstance.request({url: "issues/1"});

axios.all<Repository, Repository>([getRepoDetails, getRepoDetails]).then(([repo1, repo2]) => {
    var sumIds = repo1.data.id + repo2.data.id;
    console.log("Sum ID:" + sumIds);
    return sumIds;
});

var repoSum = (repo1: Axios.AxiosXHR<Repository>, repo2: Axios.AxiosXHR<Repository>) => {
    var sumIds = repo1.data.id + repo2.data.id;
    console.log("Sum ID:" + sumIds);
    return sumIds;
};

axios.all<Repository, Repository>([getRepoDetails, getRepoDetails]).then(axios.spread(repoSum));

axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = "AUTH_TOKEN";
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axiosInstance.defaults.headers.common['Authorization'] = "AUTH_TOKEN";