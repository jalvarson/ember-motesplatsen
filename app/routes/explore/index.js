import Route from '@ember/routing/route'
import { service } from '@ember/service'

export default class ExploreIndexRoute extends Route {
  @service router

  beforeModel() {
    this.router.transitionTo('explore.new-singles')
  }
}
