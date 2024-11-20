import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] = [
    { name: 'Han', age: 45 },
    { name: 'Soe', age: 30 },
    { name: 'Naung', age: 23 }
  ];

  constructor() { }

  public getStudents() {
    return [...this.students]; // Return a copy to prevent external mutation
  }

  public addStudent(name: string, age: number) {
    this.students.push({ name, age });
    console.log(this.students)
  }

  public removeStudent(name: string) {
    this.students = this.students.filter(student => student.name !== name);
    console.log(this.students)
  }
}
