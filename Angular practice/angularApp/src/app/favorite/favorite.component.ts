import { Component, OnInit , Input , Output, EventEmitter, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent implements OnInit {


  @Input('isFavorite')  isFavorite: boolean;
  // tslint:disable-next-line:no-output-rename
  @Output('change') click = new EventEmitter() ;
  constructor() { }

  ngOnInit() {
  }

  onChange() {
    console.log('onchange event called');
  }
  onClick() {
    this.isFavorite = !this.isFavorite;
    this.click.emit( {newValue : this.isFavorite} );
  }
}
export interface FavoriteChangeEventArgs {
    newValue: boolean;
}
