import { Component } from '@angular/core';
import { Media } from '@ionic-native/media/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private media: Media) {}

  play_The_track: string = "/android_asset/public/assets/sound.mp3"; //note this specific url format is used in android only
  playSound() {
    const curr_playing_file = this.media.create(this.play_The_track);
    // on occassions, the plugin only gives duration of the file if the file is played
    // at least once
    curr_playing_file.play();
  }
}
