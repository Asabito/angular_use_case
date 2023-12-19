import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  friendslist = [
    {
      name: 'Nishant',
      negara: "Indonesia",
      kota: "Jakarta",
      balance: 900000
    },
    {
      name: 'Shailesh',
      negara: "USA",
      kota: "Los Angeless",
      balance: 590000
    },
    {
      name: 'Akshay',
      negara: "India",
      kota: "Kolkota",
      balance: 125000
    },
    {
      name: 'Uday',
      negara: "Indonesia",
      kota: "Jakarta",
      balance: 234000
    },
    {
      name: 'Abhishek',
      negara: "India",
      kota: "Mumbai",
      balance: 421000
    },
    {
      name: 'Mayank',
      negara: "Indonesia",
      kota: "Jakarta",
      balance: 104000
    },
    {
      name: 'Ashish',
      negara: "Pakistan",
      kota: "Pakistan",
      balance: 120000
    },
    {
      name: 'Raju',
      negara: "Indonesia",
      kota: "Jakarta",
      balance: 43000
    },
  ]
}
