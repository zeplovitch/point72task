import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { SearchPipe } from '../search.pipe';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  vegtables = ['apple', 'orangres', 'bananas'];
  searchString: string;
  constructor(private listService: ListService) {}

  ngOnInit() {
    this.listService.data.subscribe(s => {
      this.searchString = s;
    });
  }
}
