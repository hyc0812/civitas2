import { Component, OnInit } from '@angular/core';
import { firebaseConfig } from './firebase.config';
import {initializeApp} from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'civitas2';
  ngOnInit(): void {
    initializeApp(firebaseConfig);
  }
}
