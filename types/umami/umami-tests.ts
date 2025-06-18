umami.track();

umami.track({ website: "e676c9b4-11e4-4ef1-a4d7-87001773e9f2", url: "/home", title: "Home page" });

umami.track(props => ({ ...props, url: "/home", title: "Home page" }));

umami.track("signup-button");

umami.track("signup-button", { name: "newsletter", id: 123 });

umami.track(props => ({
    ...props,
    name: "signup-button",
    data: {
        name: "newsletter",
        id: 123,
    },
}));
