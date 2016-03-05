var express = require('express');                           // get the express.js module and stores it in express var
var app = express();                                        // sets the express library to app var

app.all('/:parm', function(req, res){                       // accepts all methods
   if(req.method == 'PUT')
   {
       res.set('Content-Type', 'text/html');
       var par = req.params.parm;                           // variable that stores the query parameter
       var responseObj = {message: 'parameters:' + par};    // a variable that hold a message containing the parameters
       var s = "<html><body><table>";                       // creates a table for the headers
       for (var name in req.headers) s += '<tr><td>' + name + '</td><td>' + req.headers[name] + '</td></tr>';   // loop that goes through all the headers and puts it in table form
       s+="</table></body></html>";
       res.send(s + responseObj);                           // adds the s variable which contains the table of headers and the responseObj variable

   }
    else if(req.method == 'GET')
    {
        res.set('Content-Type', 'text/html');
        var par = req.params.parm;                           // variable that stores the query parameter
        var responseObj = {message: 'parameters:' + par};    // a variable that hold a message containing the parameters
        var s = "<html><body><table>";                       // creates a table for the headers
        for (var name in req.headers) s += '<tr><td>' + name + '</td><td>' + req.headers[name] + '</td></tr>';   // loop that goes through all the headers and puts it in table form
        s+="</table></body></html>";
        res.send(s + responseObj);                           // adds the s variable which contains the table of headers and the responseObj variable
    }
   else if(req.method == 'POST')
   {
       res.set('Content-Type', 'text/html');
       var par = req.params.parm;                           // variable that stores the query parameter
       var responseObj = {message: 'parameters:' + par};    // a variable that hold a message containing the parameters
       var s = "<html><body><table>";                       // creates a table for the headers
       for (var name in req.headers) s += '<tr><td>' + name + '</td><td>' + req.headers[name] + '</td></tr>';   // loop that goes through all the headers and puts it in table form
       s+="</table></body></html>";
       res.send(s + responseObj);                           // adds the s variable which contains the table of headers and the responseObj variable
   }
   else if(req.method == 'DELETE')
   {
       res.set('Content-Type', 'text/html');
       var par = req.params.parm;                           // variable that stores the query parameter
       var responseObj = {message: 'parameters:' + par};    // a variable that hold a message containing the parameters
       var s = "<html><body><table>";                       // creates a table for the headers
       for (var name in req.headers) s += '<tr><td>' + name + '</td><td>' + req.headers[name] + '</td></tr>';   // loop that goes through all the headers and puts it in table form
       s+="</table></body></html>";
       res.send(s + responseObj);                           // adds the s variable which contains the table of headers and the responseObj variable
   }
    else
   {
       var err = new Error();
       err.status = 404;
       err.message = "ERROR: does not support HTTP method";
       next(err);
   }

});
app.listen(8080, function(){
    console.log('listening https://localhost:8080/');
});