import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = [
      { id: 1, name:'Mohit', mobileNum:9767374737, location:'Udaipur' },
      { id: 2, name:'Ronak', mobileNum:7767356537, location:'Udaipur' },
      { id: 3, name:'Vijay', mobileNum:9767378887, location:'Jaipur' },
      { id: 4, name:'Amit', mobileNum:8767374737, location:'Jaipur' },
      { id: 5, name:'Akshat', mobileNum:7767374737, location:'Jaipur' },
      { id: 6, name:'Saurabh', mobileNum:7767374737, location:'Udaipur' }
    ];
    return {users};
  }
}