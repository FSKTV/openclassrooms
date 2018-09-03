import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.scss']
})
export class PostNewComponent implements OnInit {

  postForm: FormGroup;

  constructor(private postService: PostService,
              private formBuilder: FormBuilder) { }

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
    console.log(post);
  }

}
