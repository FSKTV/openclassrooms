import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/post.model';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();
  fireDB = firebase.database();

  constructor() { 
    this.getPosts();
  }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    this.fireDB.ref('/posts').set(this.posts);
  }

  getPosts() {
    this.fireDB.ref('/posts').on('value', 
    (data) => {
      this.posts = data.val() ? data.val() : [];
      this.emitPosts();
    });
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.savePosts();
    this.emitPosts();
  }

  delPost(post: Post) {
    const indexToRemove = this.posts.findIndex(
      (data) => { if(data === post) return true;
    });
    this.posts.splice(indexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }

  changePostLike(post: Post, plus: boolean) {
    const indexToUpdate = this.posts.findIndex(
      (data) => { if(data === post) return true;
    });
    this.posts[indexToUpdate].like = plus ? this.posts[indexToUpdate].like + 1 : this.posts[indexToUpdate].like - 1 ;
    this.savePosts();
    this.emitPosts();
  }

}
