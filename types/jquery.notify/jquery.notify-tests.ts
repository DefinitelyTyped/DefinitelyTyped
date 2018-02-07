let $container: JQueryNotifyWidget = $("<div style='display:none' class='noprint'><div></div></div>").appendTo(document.body).notify();

let notification: JQueryNotifyInstance = $container.notify(
	"create",
	{}, // empty parameters
	{
		close: () => {
			console.log("closed");
		},
		open: () => {
			console.log("opened");
		},
		expires: 1000,
		speed: 100
	}
);
notification.element.html("<strong>text</strong>");

notification.element.click(() => {
	notification.close();
});
