var http = require('http');
var request = require('request');
var port = process.env.PORT || 5000;

exports.type = 'main';

exports.help = 'ControlPanel:\n' +
               'A control panel plugin for the bot.';

exports.main = function(bot) {
  'use strict';
  bot.server = http.createServer(function(req, res) {
    res.writeHeader(200, {'Content-Type': 'text/plain'});
    res.write('bot control panel');
    res.end();
  });
  bot.server.listen(port);
  console.log('Server running on ' + port);
};
