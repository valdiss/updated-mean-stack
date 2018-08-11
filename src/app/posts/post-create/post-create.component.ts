import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  postForm: FormGroup;

  @Output()
  newPostEmitter = new EventEmitter<any>();

  ngOnInit() {
    this.postForm = new FormGroup({
      title: new FormControl(''),
      message: new FormControl('')
    });
  }

  sendPost() {
    this.newPostEmitter.emit(this.postForm.value);
    this.postForm.reset();
  }
}
