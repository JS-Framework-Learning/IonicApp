import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  username: string = '';
  birth: string = '';

  constructor(private alert: AlertController) { }

  ngOnInit() {
  }

  save() {
    this.alert.create({

      header: 'Alerte',
      message: 'Vous avez saisi' + ' : ' + this.username,
      buttons: ['OK']

    }).then(alert => alert.present());
  }

}
