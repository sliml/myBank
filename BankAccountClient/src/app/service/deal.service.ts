import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Deal } from './deal';
import { DEALS } from './mock-deals';

@Injectable()
export class DealService {

  private deals = DEALS;

  constructor() { }

  public addDeal(deal: Deal) {
    this.deals.push(deal);
  }

  public getDeals(): Deal[] {
    return (this.deals);
  }
}
