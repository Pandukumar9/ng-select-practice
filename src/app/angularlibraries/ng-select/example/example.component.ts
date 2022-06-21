import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
  }

  selectedCar!: any;

    cars = [
        { id: 1, name: 'Volvo' },
        { id: 2, name: 'Saab' },
        { id: 3, name: 'Opel' },
        { id: 4, name: 'Audi' },
    ];

    cities = [
      { id: 1, name: "Vilnius" },
      { id: 2, name: "Kaunas" },
      { id: 3, name: "Pavilnys" },
      { id: 4, name: "Pabradė" },
      { id: 5, name: "Klaipėda" }
    ];
    selectedCityIds!: string[];

    cities2 =[];
    selectedCity:any;

    addCustomUser = (term:any) => ({id: term, name: term});

    selectedUserIds:any;

    users = [
      {id: 'anjmao', name: 'Anjmao'},
      {id: 'varnas', name: 'Tadeus Varnas'}
  ];
  selectedCity2:any;
  cities5 = [
    {id: 1, name: 'City1'},
    {id: 2, name: 'City2'},
    {id: 3, name: 'City3'},
    {id: 4, name: 'City4'},
    {id: 5, name: 'City5'}
    ];
    
    CreateNew(city: string){
    alert("Create New Clicked : "+city)
    }
  
    people: any = [];
    cities4:any[]=[];
    selectedCityId:any;

}
