const fetchCopy: GlobalFetch["fetch"] = fetch;

const myHeaders = new Headers();
myHeaders.append("Content-Type", "image/jpeg");

const myInit: RequestInit = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
};

const myRequest = new Request("flowers.jpg");

fetch(myRequest, myInit)
    .then(response => {
        console.log(response.type);
        console.log(response.url);
        console.log(response.status);
        console.log(response.ok);
        console.log(response.statusText);
        console.log(response.headers);

        return response.blob();
    })
    .then(blob => {
        const init = { status: 200, statusText: "SuperSmashingGreat!" };
        const myResponse = new Response(blob, init);
    });
