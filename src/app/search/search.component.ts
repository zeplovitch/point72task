import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private listService: ListService) {}
  onInput(mySearch: HTMLInputElement) {
    this.listService.updatedDataSelection(mySearch.value);
  }
  ngOnInit() {}
}
