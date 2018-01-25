const express = require("express");
const port = process.env.PORT || 10000;

var app = express();

const path = require("path");
const bodyParser = require("body-parser");

var pF = path.resolve(__dirname, "public");

const server = require("http").createServer(app);

app.use("/public", express.static("public"));
app.use("/scripts", express.static("js"));
app.use("/styling", express.static("styles"));
app.use("/img", express.static("images"));

app.use(bodyParser.urlencoded({
	extended: true
}));

app.get("/", function(req, resp) {
	resp.sendFile(pF + "/Index.html");
});

server.listen(port, function(err) {
	if(err) {
		console.log(err);
		return(false);
    }
	console.log(port + " is running");
});

