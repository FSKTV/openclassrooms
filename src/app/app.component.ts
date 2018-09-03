import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Blog'

  constructor() {
    var config = {
      apiKey: "AIzaSyBgG6Kqz6ivttpNdCIZLRKN7tI0uBKorNQ",
      authDomain: "blog-c237c.firebaseapp.com",
      databaseURL: "https://blog-c237c.firebaseio.com",
      projectId: "blog-c237c",
      storageBucket: "blog-c237c.appspot.com",
      messagingSenderId: "677672551206"
    };
    firebase.initializeApp(config);
  } 
  
}