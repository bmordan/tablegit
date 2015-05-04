exports.auth = {
  method: 'GET',
  path: '/callback',
  handler: function (req, res) {
    console.log('inside callback: ',req)
  }
}
