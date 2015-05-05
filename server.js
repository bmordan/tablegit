var Hapi = require('hapi')
var Good = require('good')
var Routes = require('./routes/routes')
var server = new Hapi.Server()
server.connection({
  host: 'localhost',
  port: '3000'
})
server.views({
  engines: {
    html: require('handlebars')
  },
  relativeTo: __dirname,
  path: './views',
  layoutPath: './views/layouts',
  layout: 'default'
})
server.register({
  register: Good,
  options: {
    reporters: [{
      reporter: require('good-console'),
      events: {
        response: '*',
        log: '*'
      }
    }]
  }
}, onError)

server.route(Routes.index.render)
server.route(Routes.assets)
server.start(onStartUp)

function onStartUp () {
  console.log('Hapi serving on ' + server.info.port)
}
function onError (err) {
  if (err) throw console.error(err)
}
