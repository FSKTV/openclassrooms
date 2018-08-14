import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor() {
    this.addPost("david Bowie", "un excellent chanteur");
    this.addPost("Wes Anderson","un excellent ralisateur");
    this.addPost("J.R.R Martin", "un excellent crivain");
  };

  posts = [];
 
  addPost(name, content) {
    let post = new Post(name, content);
    this.posts.push(post);
  };
}

class Post {

  name: string;
  content: string;
  like: number;
  date: Date;

  constructor(nameArg, contentArg) {
    this.name = nameArg;
    this.content = contentArg;
    this.date = new Date();
    this.like = 0;
  }
}