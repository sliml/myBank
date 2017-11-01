import {TestBed, inject, async} from '@angular/core/testing';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Deal} from './deal';
import {DEALS} from './mock-deals';
import {DealService} from './deal.service';


describe('DealService test', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
       providers: [ DealService],
     }).compileComponents();
  }));
  
  it('returns mock of deals',
    inject([DealService], (dealService) => {
      expect(dealService).toBeDefined();
      expect(dealService.getDeals()).toBeDefined();
      expect(dealService.getDeals()).toEqual(DEALS);

    }));
  
  
  it('add deal', 
    inject([DealService], (dealService) => {
    expect(dealService).toBeDefined();
      
    const date = new Date().toLocaleString();
    dealService.addDeal({date: date, description: 'Withdrawal', amount: 100});  

    DEALS.push({date: date, description: 'Withdrawal', amount: 100});
    expect(dealService.getDeals()).toEqual(DEALS);

  }));

});
  

