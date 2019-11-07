#!/usr/bin/env node
var HID = require('node-hid');
fs = require('fs');

var devices = HID.devices();
device = new HID.HID(4292,33742);

fs.readFile('/Users/timothy/.backlight/level', 'utf8', function (err,data) {
	if (err) {
		return console.log(err);
	}
	data = 0;
	device.write([6, data]);
	fs.writeFile('/Users/timothy/.backlight/level', data, (err) => {
		if (err) throw err;
	});
});