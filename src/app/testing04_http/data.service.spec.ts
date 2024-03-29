import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { USERS } from './mock-data/user';

fdescribe('DataService', () => {
  let service: DataService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DataService);
    testingController = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all users', () => {
   service.getAllUsers().subscribe((users: any) => {
    expect(users).toBeTruthy();
    expect(users.length).toBe(2);
    const secondUsed = users.find((user: any) => user.id === 2);
    expect(secondUsed.name).toBe('Ron Weasley');
  });
   const mockReq = testingController.expectOne('api/users');
   expect(mockReq.request.method).toEqual('GET');
   mockReq.flush(Object.values(USERS))
  });

  it('should get user by id', () => {
    service.getUsersById(1).subscribe((user: any) => {
     expect(user).toBeTruthy();
     expect(user.name).toBe('Harry Potter');
   });
    const mockReq = testingController.expectOne('api/users/1');
    expect(mockReq.request.method).toEqual('GET');
    mockReq.flush(USERS[1]);
   });

   afterEach(() => {
    testingController.verify();
   })
});
