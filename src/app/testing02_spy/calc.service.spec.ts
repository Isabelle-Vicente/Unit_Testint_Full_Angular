import { CalcServiceSpy } from "./calc.service";
import { SharedService } from "./shared.service";

describe("Spy", () => {

  it("should call the mySharedFuntion func", () =>{
    const shared = new SharedService();
    spyOn(shared, "mySharedFunction");
    const calc = new CalcServiceSpy(shared);
    const result = calc.multiply(3, 5);
    expect(shared.mySharedFunction).toHaveBeenCalled();
  });

  it("should call the mySharedFuntion func secure", () =>{
    //const shared = new SharedService();
    const shared = jasmine.createSpyObj("SharedService", ["mySharedFunction"]);
    const calc = new CalcServiceSpy(shared);
    //spyOn(shared, "mySharedFunction");
    //spyOn(shared, "mySharedFunction").and.callThrough();
    const result = calc.multiply(3, 5);
    //expect(shared.mySharedFunction).toHaveBeenCalled();
    expect(result).toBe(15);
  });

});
