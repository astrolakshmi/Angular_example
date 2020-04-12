import { CoursesService } from './../courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl:  './courses.component.html',
  styleUrls: ['./courses.component.css']

  /*     selector: 'courses', // property of the component, add it as a class. 
    template: '<h2>Courses</h2>' */

})
export class CoursesComponent implements OnInit {
  title = "List of courses";
  courses;

 
  constructor(service: CoursesService) {
    this.courses = service.getCourses(); 

   }

  ngOnInit(): void {
  }

}
