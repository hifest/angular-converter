import {Component, Input} from "@angular/core"
import {ICurrency} from "../../models/currency";

@Component({
  selector: "app-currency",
  templateUrl: "./currency.component.html",
  styleUrls: ['./currency.component.scss'],
})

export class CurrencyComponent {
  @Input() currency: ICurrency[];
  currency1: string = 'UAH';
  currency2: string = 'USD';
  currency1Value: number = 0;
  currency2Value: number = 0;


  FirstInputChange(){
    if(this.currency1 === this.currency2){
      this.currency1Value = this.currency2Value
    }else if(this.currency1 === 'USD' || this.currency1 === 'EUR'){
      const currencyValue = this.currency.find(obj => obj.cc === this.currency1)
      currencyValue ? this.currency2Value = parseFloat((this.currency1Value * currencyValue.rate).toFixed(2)) : console.log('none');
    }
    else if(this.currency1 === 'UAH') {
      const currencyValue = this.currency.find(obj => obj.cc === this.currency2)
      currencyValue ? this.currency2Value = parseFloat((this.currency1Value / currencyValue.rate).toFixed(2)) : console.log('none');
    }
    else if(this.currency2 === 'UAH') {
      const currencyValue = this.currency.find(obj => obj.cc === this.currency1)
      currencyValue ? this.currency1Value = parseFloat((this.currency2Value / currencyValue.rate).toFixed(2)) : console.log('none');
    }
  }
  SecondInputChange(){
    if(this.currency1 === this.currency2){
      this.currency1Value = this.currency2Value
    }else if(this.currency2 === 'USD' || this.currency2 === 'EUR'){
      const currencyValue = this.currency.find(obj => obj.cc === this.currency2)
      currencyValue ? this.currency1Value = parseFloat((this.currency2Value * currencyValue.rate).toFixed(2)) : console.log('none');
    }
    else if(this.currency1 === 'UAH') {
      const currencyValue = this.currency.find(obj => obj.cc === this.currency2)
      currencyValue ? this.currency2Value = parseFloat((this.currency1Value / currencyValue.rate).toFixed(2)) : console.log('none');
    }
    else if(this.currency2 === 'UAH') {
      const currencyValue = this.currency.find(obj => obj.cc === this.currency1)
      currencyValue ? this.currency1Value = parseFloat((this.currency2Value / currencyValue.rate).toFixed(2)) : console.log('none');
    }
  }
}
// як зробити по іншому не знаю,можливо якась формула є?
