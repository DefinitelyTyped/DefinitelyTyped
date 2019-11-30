/// <reference types="jquery" />

import jDataView = require('jdataview');

interface TARMetaData {
	name: string;
	mode: number;
	owner: number;
	group: number;
	size: number;
	modtime: number;
	checksum: number;
	link: string;
	name_linked: string;
	ustar: string;
	ustar_version: number;
	owner_name: string;
	group_name: string;
	device: number[];
	name_prefix: string;
}

// Download the file
$.get('jquery.tar', function (data) {
	// Make a view on the data
	var view = new jDataView(data);

	//	console.log(view.getUint32(0, true));
	//	console.log(view.getUint32(0, false));
	//	view.seek(0);

	while (view.tell() < view.byteLength) {
		// Parse the file meta data
		var metadata: TARMetaData = {
			name: view.getString(100).replace(/\0+$/, ''),
			mode: parseInt(view.getString(8), 8),
			owner: parseInt(view.getString(8), 8),
			group: parseInt(view.getString(8), 8),
			size: parseInt(view.getString(12), 8),
			modtime: parseInt(view.getString(12), 8),
			checksum: parseInt(view.getString(8), 8),
			link: view.getChar(),
			name_linked: view.getString(100).replace(/\0+$/, ''),
			ustar: view.getString(6),
			ustar_version: parseInt(view.getString(2), 8),
			owner_name: view.getString(32).replace(/\0+$/, ''),
			group_name: view.getString(32).replace(/\0+$/, ''),
			device: [parseInt(view.getString(8), 8), parseInt(view.getString(8), 8)],
			name_prefix: view.getString(155).replace(/\0+$/, '')
		};

		// Padding
		if (view.tell() % 512 !== 0) {
			view.seek(view.tell() + 512 - (view.tell() % 512));
		}

		// Get the file
		if (isNaN(metadata.size)) {
			break;
		}
		var content = view.getString(metadata.size);

		// Padding
		if (view.tell() % 512 != 0) {
			view.seek(view.tell() + 512 - (view.tell() % 512));
		}

		// Print the file
		$(document.body).append($('<pre></pre>').html(JSON.stringify(metadata, null, '  ')));

		if (metadata.size) {
			$('body').append($('<textarea></textarea>').val(content));
		}
	}
});
