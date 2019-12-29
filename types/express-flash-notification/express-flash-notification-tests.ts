import express = require("express");
import flash = require("express-flash-notification");

const app = express();

// Simple initialization test
app.use(flash(app));

// Incomplete object test
app.use(flash(app, {
	sessionName: "to-flash",
	utilityName: "||",
	localsName: "!to-flash"
}));

// Empty object test
app.use(flash(app, {}));

// Functions test
app.use(flash(app, {
	beforeSingleRender: (item, callback) => { callback(null, item); },
	afterAllRender: (htmlFragments, callback) => { callback(null, htmlFragments.join("\n")); }
}));

// Full object test
app.use(flash(app, {
	sessionName: "flash",
	utilityName: "flash",
	localsName: "flash",
	viewName: "flash",
	beforeSingleRender: (item, callback) => { callback(null, item); },
	afterAllRender: (htmlFragments, callback) => { callback(null, htmlFragments.join("\n")); }
  }));

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
	req.flash("info");
	req.flash("info", "I am a pretty butterfly");
	req.flash("info", "I am a pretty butterfly", "/");
	req.flash("info", "I am a pretty butterfly", true);
	req.flash({
		type: "error",
		message: "Lets mix things up, shall we?"
	});

	req.flash({
		type: "info",
		message: "if cats rules the world",
		redirect: false
	});

	req.flash({
		type: "success",
		message: "Odd",
		redirect: true,
		url: "/"
	});
});
