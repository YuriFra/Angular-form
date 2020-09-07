import { TestBed } from '@angular/core/testing';

import { AddFriendService } from './addFriend.service';

describe('FormService', () => {
  let service: AddFriendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddFriendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
