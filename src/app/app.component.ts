import {Component, OnInit} from '@angular/core';
import {ICurrency} from "./models/currency";
import {CurrencyService} from "./services/currency.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'converter';
  currency: ICurrency[] = [];

  constructor(private currencyService: CurrencyService) {
  }

  ngOnInit(): void {
    this.currencyService.getAllData().subscribe((data)=>{
      this.currency = data
    })
  }

}
