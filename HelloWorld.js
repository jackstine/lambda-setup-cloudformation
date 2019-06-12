exports.helloWorld = function (event, context, callback) {
	console.log('Hello World!');
	callback(null, null);
}
