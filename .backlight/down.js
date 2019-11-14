#!/usr/bin/env node
var HID = require('node-hid');
fs = require('fs');

var devices = HID.devices();
device = new HID.HID(4292,33742);

path = '/Users/timothy/.backlight/level';

fs.readFile(path, 'utf8', function (err,data) {
	if (err) {
		return console.log(err);
	}
	data = parseInt(data);
	if (data > 0)
		data = data - 16;
	device.write([6, data]);
	fs.writeFile(path, data, (err) => {
		if (err) throw err;
	});
});