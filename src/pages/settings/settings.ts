import { Component } from '@angular/core';
import { IonicPage,  Toggle } from 'ionic-angular';

import { SettingsService } from "../../services/settings";


/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(private settingsService: SettingsService) {
  }

  onToggle(toggle: Toggle) {
    this.settingsService.setBackground(toggle.checked);
  }

  checkColorBackground() {
    return this.settingsService.isColoredBackground();
  }
}
