import { Component, OnInit } from '@angular/core';
import { DataAccessService } from '../services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public countryName;

  constructor(private _dataAccessService: DataAccessService) { }

  public ngOnInit() {
    this.countryName = this._dataAccessService.getCapital('IL');
  }
}
