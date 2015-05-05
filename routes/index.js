var request = require('request')
var config = require('config')
var github = require('octonode')

var client = github.client(config.git.token)

exports.render = {
  method: 'GET',
  path: '/',
  handler: function (req, res) {
    client.get('issues', {}, function (err, status, body, headers){
      console.log(body)
      res.view('index', {projects: body})
    })
  }
}
