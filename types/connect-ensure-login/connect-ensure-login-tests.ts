import login = require("connect-ensure-login");

login.ensureLoggedIn();
login.ensureLoggedIn("/login");
login.ensureLoggedIn({
    redirectTo: "/login",
});

login.ensureLoggedOut();
login.ensureLoggedOut("/");
login.ensureLoggedOut({
    redirectTo: "/",
});
