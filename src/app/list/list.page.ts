import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * 1 On a besoin d'afficher une liste d'éléments.
 * 2 On crée une page pour cela dans Ionic :
 * - Avec la commande pour générer la page
 * - On ajoute un lien vers la page => Ajout d'une tab
 * 3 Je dois récupérer les pokémons sur l'API
 * - Je n'oublie pas d'activer le module HttpClientModule
 * - Je vais pouvoir importer le service HttpClient dans la liste
 * 4 Je récupère les pokemon sur l'API dans le ngOnInit() et je fais un
 * console.log pour debugger
 */

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})

export class ListPage implements OnInit {
    pokemons: any[];

    offset: number = 20;

    constructor(private http: HttpClient,) { }

    ngOnInit() {
    this.http.get('https://pokeapi.co/api/v2/pokemon')
        .toPromise()
        .then((response: any) => {

            // console.log(response.results);
            this.pokemons = response.results;

            // Parcourir chaque Pokemon et récupérer l'ID
            this.pokemons.forEach(pokemon => {

                pokemon.id = pokemon.url
                    .replace('https://pokeapi.co/api/v2/pokemon/', '')
                    .replace('/', '');
            });
        });
    }

    // Ce code est appelé quand on scroll
    loadPokemon(event) {

        setTimeout(() => {
           
        }, 1000);

        // Je récupère chaque pokémon et son ID 
        this.http.get('https://pokeapi.co/api/v2/pokemon?offset=' + this.offset).toPromise().then((response: any) => {
            this.pokemons = this.pokemons.concat(response.results); //ici avec concat. on fusionne le 1er tableau au second, 
            // ainsi que les 20 premiers résultats au 20 suivants et ainsi de suite
        });

        // Parcourir chaque Pokemon et récupérer l'ID
        this.pokemons.forEach(pokemon => {

            pokemon.id = pokemon.url
                .replace('https://pokeapi.co/api/v2/pokemon/', '')
                .replace('/', '');
        });
        
        // Incrémenter le compteur
        this.offset += 20;

        event.target.complete(); // Je masque le scroll infini
    }
}


