var request = require('request')
var config = require('config')
var GithubApi = require('github')

var github = new GithubApi({
  version: "3.0.0",
  debug: true,
  protocal: "https",
  host: "api.github.com",
  timeout: 5000,
  headers: {
    "user-agent":"tablegit"
  }
})
github.authenticate({
  type: "oauth",
  key: config.git.clientId,
  secret: config.git.clientSecret
})
exports.render = {
  method: 'GET',
  path: '/',
  handler: function (req, res) {

    github.authorization.create({
      scopes: ["user", "public_repo", "repo", "repo:status", "gist"],
      note: "what this auth is for",
      note_url: "http://url-to-this-auth-app",
      headers: {"X-GitHub-OTP": "two-factor-code"}
      }, function(err, res) {
        if (res.token) {
        console.log(res.token)
      }
    })

  }
}

function cb (err, result) {
  if (err) return console.error(err)
  console.log(result)
}
