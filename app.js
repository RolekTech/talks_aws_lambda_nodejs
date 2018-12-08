// Initalizing the X-Ray
var AWSXRay = require('aws-xray-sdk-core');
AWSXRay.enableManualMode();


// Starting to build the Claudia API Response
var ApiBuilder = require('claudia-api-builder'),
    api = new ApiBuilder();

module.exports = api;

// Simple GET Request
api.get('/hello', function () {
    return 'hello world';
});


// Simple GET Request with HTML Response.
api.get('/sherpa.html', function () {
    'use strict';
    var HTML = '<html><body>' +
                '<h1>Aww Snap.... Some HTML!</h1>' +
                // Image stored in a Public S3 bucket
                '<img src="https://s3.amazonaws.com/crolek-public/adopted_family_2018.jpg" style="width: 500px; height 500px;"/>' +
                '</body></html>';

    return Promise.resolve().then(function () {
        return new api.ApiResponse(HTML, {'X-Version': '303', 'Content-Type': 'text/html'}, 400);
    });
});


// Simple POST Request with the Request Context being Dumped back.
api.post('/squiggle', function (request) {
    'use strict';
    console.log(request);

    return "he's very FIAT           " + JSON.stringify(request);
}, { success: 201 });