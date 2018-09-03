import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.scss']
})
export class PostNewComponent implements OnInit {

  postForm: FormGroup;

  constructor(private postService: PostService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      name: [null, Validators.required],
      content: [null, Validators.required]
    });
  }

  onSavePost() {
    const name = this.postForm.get('name').value;
    const content = this.postForm.get('content').value;
    const date = Date.now();
    const post = new Post(name, content, date);
    this.postService.addPost(post);
    this.router.navigate(['/posts']);
  }

}
