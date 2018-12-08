var AWSXRay = require('aws-xray-sdk-core');

AWSXRay.enableManualMode();

var ApiBuilder = require('claudia-api-builder'),
    api = new ApiBuilder();

module.exports = api;

api.get('/hello', function () {
    return 'hello world';
});


api.get('/sherpa.html', function () {
    'use strict';
    var HTML = '<html><body><h1>Aww Snap.... Some HTML!</h1></body></html>';

    return Promise.resolve().then(function () {
        return new api.ApiResponse(HTML, {'X-Version': '303', 'Content-Type': 'text/html'}, 400);
    });
});


api.post('/squiggle', function (request) {
    'use strict';
    console.log(request);

    return "he's very FIAT " + JSON.stringify(request);
}, { success: 201 });