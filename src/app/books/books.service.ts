import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks() {
    return [
      {
        name: 'Clean Code',
        author: 'Robert C Martin',
        image: "https://m.media-amazon.com/images/I/51csugYPrJL._SX331_BO1,204,203,200_.jpg",
        amount: 20.62,
      },
      {
        name: 'Pragmatic Programmer',
        author: 'David Thomas',
        image: "https://m.media-amazon.com/images/I/91T0FcC2t-L._AC_UL640_FMwebp_QL65_.jpg",
        amount: 17.10,
      },
      {
        name: 'After the Rain',
        author: 'Alexandra Elle',
        image: "https://m.media-amazon.com/images/I/61OSIDPov9L._AC_UL640_FMwebp_QL65_.jpg",
        amount: 18.40,
      },
      {
        name: 'Curious Minds',
        author: 'Jordan Moore',
        image: "https://m.media-amazon.com/images/I/71m+Qtq+HrL._AC_UL640_FMwebp_QL65_.jpg",
        amount: 17.99,
      },
      
    ]
  }
}
