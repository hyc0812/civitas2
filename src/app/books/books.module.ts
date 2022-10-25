import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from './books.service';



@NgModule({
  declarations: [],
  providers: [BooksService],
  imports: [
    CommonModule
  ]
})
export class BooksModule { }
