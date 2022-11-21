import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'temperature-converter',
  templateUrl: './temperatureConverter.component.html',
  styleUrls: ['./temperatureConverter.component.scss']
})

export class TemperatureConverter {

  constructor(private formBuilder: FormBuilder) {}
    formGroup: FormGroup;
    fah: number;
    cel: number;

  ngOnInit() {
    // C = (F − 32) × 5/9
    // F = C*9/5 + 32
  }

  getChangeCel(event) {
    const newC = ((Number(this.fah) - 32) * (5/9));
    this.cel = newC;
    console.log("hello" + newC);
  }

  getChangeFah(event) {
    const newF = (Number(this.cel) * (9/5) + 32);
    this.fah = newF;
    console.log("hello" + newF);
  }

}