import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books = [
    {
      name: 'Clean Code',
      author: 'Robert C Martin',
      src: "https://m.media-amazon.com/images/I/51csugYPrJL._SX331_BO1,204,203,200_.jpg",
    },
    {
      name2: 'Pragmatic Programmer',
      author2: 'David Thomas',
      src2: "https://m.media-amazon.com/images/I/91T0FcC2t-L._AC_UL640_FMwebp_QL65_.jpg",
    }
  ]

  
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
