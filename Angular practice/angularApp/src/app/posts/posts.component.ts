import { Component, OnInit } from '@angular/core';
 import { PostService } from '../services/post.service';
import { AppError } from '../common/validator/app-error';
import { NotFoundError } from '../common/validator/not-found-error';
import { BadInput } from '../common/validator/bad-input';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];
  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getAll()
    .subscribe(posts => this.posts = posts);
  }

  insertPost(input: HTMLInputElement) {
    // tslint:disable-next-line:prefer-const
    let post = {title : input.value};
    this.posts.splice(0 , 0, post);

    input.value = '';
    this.service.create(post)
    .subscribe(
      newPost => {
      post['id'] = newPost.id;
    },
    (error: AppError) => {
      this.posts.splice(0, 1);

      if (error instanceof BadInput) {
        //  this.form.setError(error.originalError);
      }
      else throw error;
    });
  }

  updatePost(title: HTMLInputElement) {
    this.service.update(title)
     .subscribe(updatedPost => {
      console.log(updatedPost.json());
    });
  }

  deletePost(title) {
    this.service.delete(title.id)
    .subscribe(
      () => {
        let index = this.posts.indexOf(title);
        this.posts.splice(index, 1);
      },
    (error: AppError) => {

      if (error instanceof NotFoundError) {
        alert('This post has already been deleted');
      }
      else throw error;

    });
  }
}
