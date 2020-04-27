import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private _back: boolean;
  get back(): boolean {
    return this._back;
  }
  @Input()
  set back(back: boolean) {
    this._back = !!back;
  }

  private _title = 'Popular Movies';
  get title(): string {
    return this._title;
  }
  @Input()
  set title(title: string) {
    this._title = title ? title : 'Popular Movies';
  }

  constructor(private _location: Location) { }

  ngOnInit() {
  }

  public goBack(event: MouseEvent): void {
    event.preventDefault();
    this._location.back();
  }
}
