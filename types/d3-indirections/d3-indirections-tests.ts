/// <reference types="d3-indirections" />

function request(url: string, method: string, b: (response: any) => void, body?: any) {
    const a = new XMLHttpRequest();
    a.open(method, url);
    a.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            b(JSON.parse(this.responseText));
        }
    };
    a.send(body);
}

request('GET', 'http://localhost:80/api/v1/indirections', (response: AllIndirectionsResponse) => {
    response.result.forEach(value => {
        console.log(`${value.uid}:: ${value.name} is a ${value.resourceType}`);
    });
});

const indirectionUid = '1832822376423';
request('GET', 'http://localhost:80/api/v1/indirections/' + indirectionUid, (response: IndirectionByUidResponse) => {
    const value = response.result;
    console.log(`${value.uid}:: ${value.name} is a ${value.resourceType}`);
});

const resourceType = 'VideoClip';
request(
    'GET',
    'http://localhost:80/api/v1/resources?type=' + resourceType,
    (response: AllResourcesResponse<typeof resourceType>) => {
        response.result.forEach(value => {
            console.log(`${value.uid}:: ${value.name} is a ${value.type} stored at ${value.path}`);
        });
    },
);

const resourceUid = '93264385638475';
request('GET', 'http://localhost:80/api/v1/resources/' + resourceUid, (response: ResourceByUidResponse) => {
    const value = response.result;
    console.log(`${value.uid}:: ${value.name} is a ${value.type} stored at ${value.path}`);

    if ((value.type as string) === 'VideoClip') {
        console.log('It is definitely a video clip');
    }
});

const assignments: Assignments = {
    assignments: {
        uid: indirectionUid,
        resourceUid,
    },
};
request(
    'PUT',
    'http://localhost:80/api/v1/indirections',
    (response: AssignmentsResponse) => {
        response.failedAssignments.forEach(value => {
            console.log(`Failure with ${value.uid}: ${value.error}`);
        });
    },
    assignments,
);
