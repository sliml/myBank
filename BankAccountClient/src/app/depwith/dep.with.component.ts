import {Component} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

import {DealService} from '../service/deal.service';
import {Deal} from '../service/deal';
import {emailValidator, matchingPasswords} from '../../app/validators/validators';


import {SelectItem} from 'primeng/components/common/api';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'dep-with-form',
  templateUrl: '../../app/depwith/dep-with-form.html',
  providers: [DealService]
})
export class DepWithComponent {

  msgs: Message[] = [];
  constructor(private service: DealService) {}

  public deposit(st: HTMLInputElement): void {
    this.msgs = [];
    const amount = Number(st.value);
    if (!amount && amount === 0) {
      this.msgs.push({severity: 'error', summary: 'Error Message', detail: 'amount must be specified.'});
      throw new Error('amount must be specified.');
    }

    if (amount < 0) {
      this.msgs.push({severity: 'error', summary: 'Error Message', detail: 'The amount specified  must not be negative.'});
      throw new Error(`The amount specified '${amount}' must not be negative.`);
    }

    const date = new Date().toLocaleString();
    this.service.addDeal({date: date, description: 'Deposit', amount: amount});
    st.value = '';

    this.msgs.push({severity: 'success', summary: 'Success Message', detail: `Deposit order of '${amount}' submitted`});
  }


  public withdrawal(st: HTMLInputElement): void {

    const amount = Number(st.value);
    if (!amount && amount === 0) {
      this.msgs.push({severity: 'error', summary: 'Error Message', detail: 'amount must be specified.'});
      throw new Error('amount must be specified.');
    }

    if (amount < 0) {
      this.msgs.push({severity: 'error', summary: 'Error Message', detail: 'The amount specified  must not be negative.'});
      throw new Error(`The amount specified '${amount}' must not be negative.`);
    }

    const date = new Date().toLocaleString();
    this.service.addDeal({date: date, description: 'Withdrawal', amount: amount});
    st.value = '';

    this.msgs = [];
    this.msgs.push({severity: 'success', summary: 'Success Message', detail: `Withdrawal order of '${amount}' submitted`});
  }



}
