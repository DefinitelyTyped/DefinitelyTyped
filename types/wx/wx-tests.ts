import * as wx from 'wx';

wx.scanQRCode({
	needResult: 0,
	scanType: ['qrCode'],
	success(res) {
		console.log(res);
	}
});
