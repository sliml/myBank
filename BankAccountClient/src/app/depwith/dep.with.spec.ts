import {TestBed, inject, async} from '@angular/core/testing';
import {Injectable, Component} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {DealService} from '../service/deal.service';
import {Deal} from '../service/deal';
import {emailValidator, matchingPasswords} from '../../app/validators/validators';
import {SelectItem} from 'primeng/components/common/api';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';
import {DEALS} from '../service/mock-deals';


describe('deposit withdrawal test', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [DealService],
    }).compileComponents();
  }));

  it('deposit',
    inject([DealService], (dealService) => {

      const date = new Date().toLocaleString();
      dealService.addDeal({date: date, description: 'deposit', amount: 100});

      DEALS.push({date: date, description: 'deposit', amount: 100});
      expect(dealService.getDeals()).toEqual(DEALS);

    }));

  it('Withdrawal',
    inject([DealService], (dealService) => {

      const date = new Date().toLocaleString();
      dealService.addDeal({date: date, description: 'Withdrawal', amount: 100});

      DEALS.push({date: date, description: 'Withdrawal', amount: 100});
      expect(dealService.getDeals()).toEqual(DEALS);

    }));


});


