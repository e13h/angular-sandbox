import { Component } from '@angular/core'
import { CoursesService } from '../courses.service';

@Component({
    selector: 'courses', // anywhere we use the element "courses", angular will render the template inside the element
    templateUrl: './courses.component.html'
})
export class CoursesComponent {
    title = "List of courses";
    courses;
    imageUrl = 'http://lorempixel.com/400/200/'
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
    loremIpsum = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl purus in mollis nunc sed id semper. Elementum curabitur vitae nunc sed velit dignissim. Mattis pellentesque id nibh tortor id aliquet lectus proin. Mauris pharetra et ultrices neque. Felis eget velit aliquet sagittis id consectetur purus ut faucibus. Tellus id interdum velit laoreet id donec ultrices tincidunt. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. A condimentum vitae sapien pellentesque. Sit amet justo donec enim diam vulputate ut. Posuere morbi leo urna molestie. Morbi leo urna molestie at elementum eu facilisis. Sed risus pretium quam vulputate dignissim suspendisse. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Interdum varius sit amet mattis vulputate enim. Dictum varius duis at consectetur lorem donec massa sapien. Sed cras ornare arcu dui vivamus arcu felis bibendum ut.

        Facilisis volutpat est velit egestas dui id ornare arcu odio. Turpis massa sed elementum tempus. Laoreet sit amet cursus sit amet dictum. Lorem ipsum dolor sit amet. Semper viverra nam libero justo laoreet. Odio ut sem nulla pharetra diam sit amet. Aliquet nec ullamcorper sit amet risus. Dolor sit amet consectetur adipiscing. Lectus nulla at volutpat diam ut venenatis tellus in. Velit egestas dui id ornare arcu odio. Facilisi etiam dignissim diam quis. Senectus et netus et malesuada fames ac. Faucibus pulvinar elementum integer enim neque volutpat. Nunc pulvinar sapien et ligula. Tortor consequat id porta nibh venenatis cras sed. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Dui faucibus in ornare quam.

        Et sollicitudin ac orci phasellus egestas. Accumsan tortor posuere ac ut. Enim eu turpis egestas pretium aenean pharetra. Lacus suspendisse faucibus interdum posuere. Bibendum est ultricies integer quis auctor elit. Elementum nibh tellus molestie nunc. Velit laoreet id donec ultrices tincidunt arcu non. Elit sed vulputate mi sit. Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim. Velit scelerisque in dictum non consectetur a.
        `;

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
}