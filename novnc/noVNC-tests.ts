Util.load_scripts(["webutil.js", "base64.js", "websock.js", "des.js",
				   "input.js", "display.js", "jsunzip.js", "rfb.js"]);

var rfb:RFB;

function setPassword() {
	rfb.sendPassword('password');
}

function sendCtrlAltDel() {
	rfb.sendCtrlAltDel();
}

function init() {
	var host:string, port:number, password:string, path:string, token;
	var canvas = <HTMLCanvasElement>document.getElementById('noVNC_canvas');

	rfb = new RFB({
		target: canvas,
		encrypt: true,
		repeaterID: "myrepeaterid",
		true_color: true,
		local_cursor: true,
		shared: true,
		view_only: true,
		updateState: true,
		onPasswordRequired: (rfb: RFB) => { }
	});
	rfb.connect(host, port, password, path);
};
