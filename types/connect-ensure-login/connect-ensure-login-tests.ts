import login = require("connect-ensure-login");

login.ensureLoggedIn();
login.ensureLoggedIn("/login");
login.ensureLoggedIn({
    redirectTo: "/login",
});
login.ensureLoggedIn({
    redirectTo: "/login",
    setReturnTo: true,
});
login.ensureLoggedIn({
    redirectTo: "/login",
    setReturnTo: false,
});

login.ensureLoggedOut();
login.ensureLoggedOut("/");
login.ensureLoggedOut({
    redirectTo: "/",
});
