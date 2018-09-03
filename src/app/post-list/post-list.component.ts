import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../models/post.model';
import { Subscription } from 'rxjs';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy{

  posts: Post[] = [];
  postsSuscription = new Subscription;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postsSuscription = this.postService.postsSubject.subscribe(
    (data: Post[]) => this.posts = data )
    this.postService.emitPosts();
  }

  ngOnDestroy() {
    this.postsSuscription.unsubscribe();
  }

  sortPosts(prop: string) {
    const sortedPosts = this.posts.sort(
      (a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
    if (prop.charAt(0) === '-') { sortedPosts.reverse(); }
    return sortedPosts;
  }
}
