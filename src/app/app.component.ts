import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postList: any[] = [];

  newPostEmitted(formValue: any) {
    this.postList.push(formValue);
  }
}
