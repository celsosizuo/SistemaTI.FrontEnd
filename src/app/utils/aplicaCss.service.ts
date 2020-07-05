import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AplicaCss {

  constructor(

  ) { }

  async onTable(item, arr: any) {

      // const toggle = !item.active;
      // item.active = true;
      await arr.map(y => y = { ...y, active: false });
      item.active = await !item.active;
  }


}
