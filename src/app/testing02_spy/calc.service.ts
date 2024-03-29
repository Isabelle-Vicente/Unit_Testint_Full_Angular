import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class CalcServiceSpy {

  constructor(private sharedService: SharedService) {}
  
  multiply(a: number, b: number){
    this.sharedService.mySharedFunction();
    return a * b;
  }
}
