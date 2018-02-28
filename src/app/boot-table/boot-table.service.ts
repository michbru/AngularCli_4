import { Injectable } from '@angular/core';

import { Applicant } from './applicant'
import { APPLICANTS } from './data.json';

@Injectable()
export class BootTableService {
  pItems: Applicant[] = APPLICANTS;

  constructor() { }

  getItemsFromData(): Applicant[] {
    return this.pItems;
  }
  addItem(applicant: Applicant) {
    this.pItems.push(applicant);
  }
  updateItem(applicant: Applicant) {
    const index = this.pItems.map(x => x.id).indexOf(applicant.id);
    this.pItems[index] = applicant;
  }
  deleteItem(applicant: Applicant) {
    this.pItems.splice(this.pItems.indexOf(applicant), 1);
  }
}
