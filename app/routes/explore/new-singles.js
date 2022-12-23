import Route from '@ember/routing/route'

export default class ExploreNewSinglesRoute extends Route {
  async model() {
    let response = await fetch('/api/profiles.json')
    let parsed = await response.json()
    let profiles = parsed.profiles

    return { profiles }
  }
}
