import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {
    pokemon; // Objet vide, qui contiendra les infos de l'api

    constructor(
        private route: ActivatedRoute,
        private http: HttpClient) { }

    ngOnInit() {
        //On récupère l'id du pokémon sur la route
        let id = this.route.snapshot.paramMap.get('id');

        // on execute une requête sur l'api suivi de l'id 
        this.http.get('https://pokeapi.co/api/v2/pokemon/' + id)
        .toPromise()
        .then(response => this.pokemon = response);
    }

}
