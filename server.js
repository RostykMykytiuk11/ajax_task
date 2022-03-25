const static = require('node-static');

var fileServer = new static.Server('./users.json');

require('http').createServer(function (request, response) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

   
    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
}).listen(8080,()=>{console.log('Working...')});