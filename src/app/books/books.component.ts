import { Component, OnInit } from '@angular/core';

interface Book {
  name: string,
  author: string,
  image: string,
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [
    {
      name: 'Clean Code',
      author: 'Robert C Martin',
      image: "https://m.media-amazon.com/images/I/51csugYPrJL._SX331_BO1,204,203,200_.jpg",
    },
    {
      name: 'Pragmatic Programmer',
      author: 'David Thomas',
      image: "https://m.media-amazon.com/images/I/91T0FcC2t-L._AC_UL640_FMwebp_QL65_.jpg",
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
