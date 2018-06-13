import * as lib from "gitlab";

const gitlab = lib({
    url:   'http://example.com',
    token: 'abcdefghij123456'
});

const v3 = new lib.ApiV3({ });

// From README

// Listing users
gitlab.users.all((users) => { });

// Listing projects
gitlab.projects.all((projects) => { });

// From examples/delet-service

gitlab.projects.services.remove("pid", "name", (service) => { });
