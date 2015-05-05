var request = require('request')
var config = require('config')

exports.render = {
  method: 'GET',
  path: '/',
  handler: function (req, res) {
    res.view('index')
  }
}
