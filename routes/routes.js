module.exports = {
  index: index(),
  assets: assets()
}

function index () {
  return {
    method: 'GET',
    path: '/',
    handler: function (req, res) {
      res.view('index',{
        title: 'Hello World',
        projects: []
      })
    }
  }
}

function assets () {
  return {
    method: 'GET',
    path: '/assets/{path*}',
    handler: {
      directory: {
        path: './public',
        listing: false,
        index: false
      }
    }
  }
}
