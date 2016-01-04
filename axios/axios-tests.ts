/// <reference path="axios.d.ts" />

enum HttpMethod { GET, PUT, POST, DELETE, CONNECT, HEAD, OPTIONS, TRACE, PATCH }
enum ResponseType { arraybuffer, blob, document, json, text }

interface Repository {
  id: number;
  name: string;
}

axios.get<Repository>("https://api.github.com/repos/mzabriskie/axios")
     .then(r => console.log(r.config.method));

axios<Repository>({
    url: "https://api.github.com/repos/mzabriskie/axios",
    method: HttpMethod[HttpMethod.GET],
    headers: {},
}).then(r => console.log("ID:" + r.data.id + " Name: " + r.data.name));

axios.post("http://example.com/", {}, {
    transformRequest: (data: any) => data
});

axios.post("http://example.com/", {}, {
    transformRequest: [
        (data: any) => data
    ]
});
