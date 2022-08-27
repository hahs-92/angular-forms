import { Component, OnInit } from '@angular/core';

interface Person {
  name: string;
  favorites: Fav[];
}

interface Fav {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styleUrls: ['./dinamics.component.css'],
})
export class DinamicsComponent {
  person: Person = {
    name: 'Alex',
    favorites: [
      {
        id: 1,
        name: 'The last of us',
      },
      {
        id: 2,
        name: 'Uncharted',
      },
    ],
  };

  newGame = '';

  deleteFav(index: number) {
    this.person.favorites.splice(index, 1);
  }

  addNewGame() {
    const newFav: Fav = {
      id: this.person.favorites.length + 1,
      name: this.newGame,
    };

    this.person.favorites.push({ ...newFav });
    this.newGame = '';
  }

  save() {
    console.log('sending..');
  }
}
