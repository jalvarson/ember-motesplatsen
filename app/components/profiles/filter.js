import Component from '@glimmer/component'

export default class ProfilesFilterComponent extends Component {
  get results() {
    let { profiles, onlyWithPicture } = this.args

    if (onlyWithPicture) {
      profiles = profiles.filter(profile => profile.hasPicture == true)
    }
    return profiles
  }
}
