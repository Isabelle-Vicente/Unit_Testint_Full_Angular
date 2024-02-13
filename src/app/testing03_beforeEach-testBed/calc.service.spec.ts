import { TestBed } from '@angular/core/testing';
import { CalcServiceBeforeEachAndTestBed } from "./calc.service";

describe("BeforeEachAndTestBed", () => {

  let calc: CalcServiceBeforeEachAndTestBed;

  beforeEach(() => {
    calc = new CalcServiceBeforeEachAndTestBed();
    TestBed.configureTestingModule({
      providers: [CalcServiceBeforeEachAndTestBed]
    });
    calc = TestBed.inject(CalcServiceBeforeEachAndTestBed);
  });

  it("should multiple two numbers", () =>{
    //const calc = new CalcServiceBeforeEachAndTestBed();
    const result = calc.multiply(3, 5);
    expect(result).toBe(15);
  });

  it("should add two numbers", () =>{
    //const calc = new CalcServiceBeforeEachAndTestBed();
    const result = calc.add(3, 5);
    expect(result).toBe(8);
  });
});
