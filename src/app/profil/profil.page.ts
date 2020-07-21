import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
// import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  busy: boolean = false;
  user = {
    firstname: '',
    name: '',
    birthday: '',
    music: '',
    city: ''
  };
  musics = [
    'A', 'B', 'C', 'D'
  ];

  constructor(
    private alert: AlertController,
    private storage: Storage
  ) { }

  ngOnInit() {
  }

  save() {
    this.alert.create({
      header: 'Utilisateur',
      message: JSON.stringify(this.user),
      buttons: ['OK']
    }).then(alert => alert.present());

    this.busy = true;
    this.storage.set('user', this.user).then(
      () => this.busy = false
    );
  }
}
