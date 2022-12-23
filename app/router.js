import EmberRouter from '@ember/routing/router'
import config from 'ember-mp/config/environment'

export default class Router extends EmberRouter {
  location = config.locationType
  rootURL = config.rootURL
}

Router.map(function () {
  this.route('feed', { path: '/' })
  this.route('like')
  this.route('explore', function () {
    this.route('new-singles')
  })
  this.route('notifications')
  this.route('messages')
})
