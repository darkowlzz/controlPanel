var express = require('express');
var port = process.env.PORT || 5000;

exports.type = 'main';

exports.help = 'ControlPanel:\n' +
               'A control panel plugin for the bot.';

var app = express();

exports.main = function(bot) {
  'use strict';
  app.get('/', function(req, res) {
    res.send('bot control panel');
  });
  var server = app.listen(port);
  console.log('Server running on ' + port);
};

exports.port = port;
