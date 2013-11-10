var express = require("express")
  , app = express()
  , http = require("http").createServer(app);

app.set("ipaddr", "192.168.0.103");

app.set("port", 8080);

app.set("views", __dirname + "/views");

app.set("view engine", "jade");

app.use(express.bodyParser());

app.use(app.router);

app.use(express.static("public", __dirname + "/public"));

app.get("/", function(request, response) {

  response.render("index");

});

http.listen(app.get("port"), app.get("ipaddr"), function() {
  console.log("Server up and running. Go to http://" + app.get("ipaddr") + ":" + app.get("port"));


});