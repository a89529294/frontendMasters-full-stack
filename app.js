const http = require('http');

const server = http.createServer(function(req,res){
	res.write('On the way to being a fullstack engineer!');
	res.end()
})

server.listen(3000);

console.log('server started');
