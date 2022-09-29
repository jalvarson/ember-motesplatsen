import Component from '@glimmer/component'
import { tracked } from '@glimmer/tracking'
import { action } from '@ember/object'

export default class ProfilesComponent extends Component {
  @tracked havePicture = true

  @action
  toggleHasPicture() {
    this.havePicture = !this.havePicture
  }
}
