

const express = require('express');
const app = express();
const server = require('http').createServer(app);
const body = require('body-parser');
require('./config/config.js');
// const methodOverride = require("method-override");
// const path = require('path');


app.set('view engine','ejs');
app.set('views',__dirname + '/views');
app.use(express.static('publik'));
app.use(body.urlencoded({extended:false}));


const mailerRouter = require("./routes/mailerRouter");
app.use("/mailer",mailerRouter);

server.listen(3010,function(){
	console.log("server listening port 3010");
	console.log(process.env.email_from);
	console.log(process.env.email_to);
	console.log(process.env.email_pass);
});
