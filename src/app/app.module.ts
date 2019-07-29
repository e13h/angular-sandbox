import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { CaseComponent } from './case/case.component';
import { CaseListComponent } from './case-list/case-list.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [ // this is where we add all the components that are a part of this module
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    CaseComponent,
    CaseListComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    PanelComponent
  ], // register all dependencies that the module depends/relies on
  bootstrap: [AppComponent]
})
export class AppModule { }
