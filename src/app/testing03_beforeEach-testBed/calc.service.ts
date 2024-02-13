import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcServiceBeforeEachAndTestBed {

  constructor() {}

  multiply(a: number, b: number){
    return a * b;
  }

  add(a: number, b: number){
    return a + b;
  }
}