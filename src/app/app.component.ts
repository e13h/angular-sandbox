import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { CoursesService } from './courses.service';
import { CaseListComponent } from './case-list/case-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'HelloWorld';
  courses;
  caseList: CaseListComponent;
  post = {
    title: "Title",
    isFavorite: false
  };
  imageUrl = "http://placekitten.com/500/200";
  viewMode = 'card';

  constructor(courseService: CoursesService) {
    this.courses = courseService.getCourses();
  }

  // declaring an interface that expliciting lays out the expected args is more specific and provides intellisense
  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log(`isFavorite: `, eventArgs.newValue);
  }
}