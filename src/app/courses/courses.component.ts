import { Component } from '@angular/core'
import { CoursesService } from '../courses.service';

@Component({
    selector: 'courses', // anywhere we use the element "courses", angular will render the template inside the element
    templateUrl: './courses.component.html'
})
export class CoursesComponent {
    title = "List of courses";
    courses;
    imageUrl = 'http://lorempixel.com/200/200/'
    colSpan = 2;
    isActive = true;
    email = "me@example.com";
    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    };
    loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl purus in mollis nunc sed id semper. Elementum curabitur vitae nunc sed velit dignissim. Mattis pellentesque id nibh tortor id aliquet lectus proin. Mauris pharetra et ultrices neque. Felis eget velit aliquet sagittis id consectetur purus ut faucibus. Tellus id interdum velit laoreet id donec ultrices tincidunt. Facilisis volutpat est velit egestas dui id ornare arcu odio. Turpis massa sed elementum tempus. Laoreet sit amet cursus sit amet dictum. Lorem ipsum dolor sit amet. Semper viverra nam libero justo laoreet. Et sollicitudin ac orci phasellus egestas. Accumsan tortor posuere ac ut.`;
    showAllText = false;
    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    getTitle() {
        return this.title;
    }

    onSave($event) {
        console.log("button was clicked!", $event);
    }

    onKeyUp() {
        console.log(this.email);
    }

    onShowMoreClick() {
        this.showAllText = !this.showAllText;
    }
}