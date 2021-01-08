//References - Get Programming with Node JS - Manning Books
// Net Ninja - Node JS - Youtube

"use strict";


const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  router = require("./router"),
  contentTypes = require("./contentTypes"),
  utils = require("./utils");

router.get("/", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.htm);
  utils.getFile("views/index.html", res);
});

router.get("/index.html", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.htm);
  utils.getFile("views/index.html", res);
});

router.get("/apod_2.html", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("views/apod_2.html", res);
});

router.get("/apodModal.html", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("views/apodModal.html", res);
});

router.get("/spirit_2.html", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("views/spirit_2.html", res);
});

router.get("/opportunity_2.html", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("views/opportunity_2.html", res);
});

router.get("/error.html", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("views/error.html", res);
});


router.get("/carousel.css", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.css);
  utils.getFile("public/css/carousel.css", res);
});

router.get("/curiosity.css", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.css);
  utils.getFile("public/css/curiosity.css", res);
});

router.get("/appApod.js", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.js);
  utils.getFile("public/js/appApod.js", res);
});

router.get("/appApodModal.js", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.js);
  utils.getFile("public/js/appApodModal.js", res);
});

router.get("/appApodModalDOM.js", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.js);
  utils.getFile("public/js/appApodModalDOM.js", res);
});

router.get("/appOpportunity.js", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.js);
  utils.getFile("public/js/appOpportunity.js", res);
});

router.get("/appSpirit.js", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.js);
  utils.getFile("public/js/appSpirit.js", res);
});

http.createServer(router.handle).listen(port);
console.log(`The server is listening on port number: ${port}`);
