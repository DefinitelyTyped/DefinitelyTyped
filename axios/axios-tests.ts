/// <reference path="axios.d.ts" />

interface InputBody {
    random: number;
}

interface Repository {
  id: number;
  name: string;
}

function convenientGet () {
  axios.get<Repository, InputBody>("https://api.github.com/repos/mzabriskie/axios")
       .then(r => console.log(r.config.data.random));
}

function get() {
  axios<Repository, any>({
      url: "https://api.github.com/repos/mzabriskie/axios",
      method: Axios.HTTPMethod.GET,
      headers: {},
  }).then(r => console.log("ID:" + r.data.id + " Name: " + r.data.name));
}