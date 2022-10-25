import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  name: string = 'Clean Code';
  author: string = 'Robert C Martin';
  src: string = "https://m.media-amazon.com/images/I/51csugYPrJL._SX331_BO1,204,203,200_.jpg";

  name2: string = 'Pragmatic Programmer';
  author2: string = 'David Thomas';
  src2: string = "https://m.media-amazon.com/images/I/91T0FcC2t-L._AC_UL640_FMwebp_QL65_.jpg";
  myName: string = '';


  isShowing: boolean = true;

  
  // isDisabled: boolean = false;

  // handleClick() {
  //   this.isDisabled = true;
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
