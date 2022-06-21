import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface Country {
  value: string;
  viewValue: string;
  symbol:string;
  img: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ng-select-practice';

  myData: any;
  public selectedCityName222 = {value: 'USD', viewValue:'US Dollar',symbol:'$' ,img: './assets/flags/united-states-of-america-flag-png-large.png'};

    constructor(private http: HttpClient) {}
    selectedCityName:any;
    ngOnInit(){
        this.http.get('https://trial.mobiscroll.com/content/countries.json').subscribe((resp: any) => {
            const countries = [];
            for (let i = 0; i < resp.length; ++i) {
                const country = resp[i];
                countries.push({ text: country.text, value: country.value });
            }
            this.myData = countries;
            console.log(this.myData,'ppppp')
        });
    }
    country: Country[] = [
      { value: 'USD', viewValue: 'US Dollar', symbol:'$', img: './assets/flags/united-states-of-america-flag-png-large.png' },
      { value: 'EUR', viewValue: 'Euro', symbol:'€', img: './assets/flags//europe-flag-jpg-xl-1536x1024.jpg' },
      { value: 'AUD', viewValue: 'Australian Dollar',  symbol:'$', img: './assets/flags/Australian.jpg' },
      { value: 'GBP', viewValue: 'British Pound', symbol:'£', img: './assets/flags/united-kingdom-flag-png-large.png' },
      { value: 'CAD', viewValue: 'Canadian Dollar',symbol:'$', img: './assets/flags/canada-flag-png-large.png' },
      { value: 'JYP', viewValue: 'Japanese Yen',symbol:'¥', img: './assets/flags/japan-flag-png-large.png' },
      { value: 'NZD', viewValue: 'New Zealand Dollar',symbol:'$', img: './assets/flags/new-zealand-flag-png-large.png' },
      { value: 'CHF', viewValue: 'Swiss Franc',symbol:'CHF', img: './assets/flags/switzerland-flag-png-large.png' },
      { value: 'ZAR', viewValue: 'South African Rand',symbol:'R', img: './assets/flags/south-africa-flag-png-large.png' },
      { value: 'RUB', viewValue: 'Russian Ruble',symbol:'₽', img: './assets/flags/russia-flag-png-large.png' },
      { value: 'BGN', viewValue: 'Bulgarian Lev', symbol:'лв',img: './assets/flags/bulgaria-flag-png-large.png' },
      { value: 'SGD', viewValue: 'Singapore Dollar',symbol:'$', img: './assets/flags/singapore-flag-png-large.png' },
      { value: 'HKD', viewValue: 'Hong Kong Dollar',symbol:'$', img: './assets/flags/hongkong-flag-jpg-xl-1536x1024.jpg' },
      { value: 'SEK', viewValue: 'Swedish Krona', symbol:'kr',img: './assets/flags/sweden-flag-png-large.png' },
      { value: 'THB', viewValue: 'Thai Baht',symbol:'฿', img: './assets/flags/thailand-flag-png-large.png' },
      { value: 'HUF', viewValue: 'Hungarian Forint',symbol:'Ft', img: './assets/flags/hungary-flag-png-large.png' },
      { value: 'CNY', viewValue: 'Chinese Yuan Renminbi',symbol:'¥', img: './assets/flags/china-flag-png-large.png' },
      { value: 'NOK', viewValue: 'Norwegian Krone', symbol:'kr',img: './assets/flags/norway-flag-png-large.png' },
      { value: 'MXN', viewValue: 'Mexican Peso',symbol:'$', img: './assets/flags/mexico-flag-png-large.png' },
      { value: 'DKK', viewValue: 'Danish Krone', symbol:'kr',img: './assets/flags/denmark-flag-png-large.png' },
      { value: 'MYR', viewValue: 'Malaysian Ringgit',symbol:'RM', img: './assets/flags/malaysia-flag-png-large.png' },
    ];
    from:any;
    changebase(){
      this.from = this.selectedCityName222.value;
      console.log(this.from);
    }

    convert(){
      console.log('hello');
      console.log(this.selectedCityName222.value);
    }
}
