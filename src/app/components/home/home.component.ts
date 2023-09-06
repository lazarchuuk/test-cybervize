import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data/data.service";
import { Drug } from "../../models/data.model";
import { Observable } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  value = '';
  drugList$!: Observable<Drug[]>;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.drugList$ = this.dataService.getList()
  }
}
