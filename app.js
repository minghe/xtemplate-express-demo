var http = require('http');
var xtpl = require('xtpl');
xtpl.__express = xtpl.renderFile;
var app = require('express')();
server = http.createServer(app);
app.set('views','./views');
app.set('view engine', 'xtpl');
app.set('port', 3000);


app.get('/index',function(req, res){
    res.render('index',{title:'xtemplate',content:'this is demo'});
});

server.listen(app.get('port'), function() {
    console.log("Express server listening on port " + app.get('port'));
});