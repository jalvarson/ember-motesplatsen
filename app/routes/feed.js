import Route from '@ember/routing/route'

export default class FeedRoute extends Route {
  async model() {
    let response = await fetch('/api/profiles.json')
    let parsed = await response.json()
    let feedPosts = parsed.profiles

    return { feedPosts }
  }
}
