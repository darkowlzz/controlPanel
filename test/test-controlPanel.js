var Bot = require('mybot');
var http = require('http');
var should = require('should');
var port = require('../').port;

var config = {
  nick: 'controlPanelBot',
  channels: ['#foo'],
  server: 'localhost',
  plugins: ['../index.js']
};

describe('test controlPanel', function() {
  it('GET /', function (done) {
    this.timeout(5000);
    var b = new Bot(config);
    var chunks = [];

    http.get('http://localhost:' + port, function (res) {
      res.statusCode.should.equal(200);
      res.on('data', function (data) {
        chunks.push(data);
      }).on('end', function () {
        chunks.join('').should.containEql('bot control panel');
      });
      done();
    });
  });
});
