var request = require('request')
var config = require('config')
var github = require('octonode')

var client = github.client(config.git.token)

exports.render = {
  method: 'GET',
  path: '/',
  handler: function (req, res) {
    var tableflip = client.org('tableflip')
    tableflip.repos(function (err, repos) {
      res.view('index', {repos: repos})
    })
  }
}
