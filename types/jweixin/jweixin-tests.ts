import { scanQRCode } from 'jweixin';

scanQRCode({
	needResult: 0,
	scanType: ['qrCode'],
	success(res) {
		console.log(res);
	}
});
