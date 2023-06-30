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
    }else{
      let value;
      this.currency2 != "UAH"  ? value = this.currency.find(obj => obj.cc === this.currency2) : value = this.currency.find(obj => obj.cc === this.currency1)
      //@ts-ignore
      this.currency1 != "UAH" ? this.currency2Value = this.currency1Value * value?.rate : this.currency2Value =  this.currency1Value / value?.rate
    }
  }
  SecondInputChange() {
    if (this.currency1 === this.currency2) {
      this.currency1Value = this.currency2Value
    }
    else{
      let value;
      this.currency1 != "UAH"  ? value = this.currency.find(obj => obj.cc === this.currency1) : value = this.currency.find(obj => obj.cc === this.currency2)
      //@ts-ignore
      this.currency2 != "UAH" ? this.currency1Value = this.currency2Value * value?.rate : this.currency1Value = this.currency1Value / value?.rate
    }
  }
}
// як зробити по іншому не знаю,можливо якась формула є?
