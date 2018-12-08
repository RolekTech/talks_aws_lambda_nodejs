var AWSXRay = require('aws-xray-sdk-core');

AWSXRay.enableManualMode();

var ApiBuilder = require('claudia-api-builder'),
    api = new ApiBuilder();

module.exports = api;

api.get('/hello', function () {
    return 'hello world';
});