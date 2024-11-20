import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  name!: string;
  age!: number;
  students: Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }

  onCreate() {
    this.studentService.addStudent(this.name, this.age);
    this.students = this.studentService.getStudents();
    this.name = '';
    this.age = 0; 
  }

  remove(name: string) {
    this.studentService.removeStudent(name);
    this.students = this.studentService.getStudents(); 
  }
}
