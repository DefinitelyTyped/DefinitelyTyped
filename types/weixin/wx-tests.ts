import { scanQRCode } from 'wx';

scanQRCode({
	needResult: 0,
	scanType: ['qrCode'],
	success(res) {
		console.log(res);
	}
});
