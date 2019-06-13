import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private dataS = new BehaviorSubject<string>('');
  public data = this.dataS.asObservable();
  updatedDataSelection(data: string) {
    this.dataS.next(data);
  }
  constructor() {}
}
