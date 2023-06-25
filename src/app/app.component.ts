import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'complete-form-validation-crud';

  id: string = '';
  name: string = '';
  email: string = '';
  gender: string = 'Male';
  round: string = '51';
  skills: any[] = [
    { name: "Java", isChecked: false },
    { name: "Rust", isChecked: false }
  ];

  students: any[] = [
    { id: '101', name: 'Hassan Mahfuj', email: 'mahfuj@gmail.com', gender: 'Male', round: '52', skills: [{ name: "Java", isChecked: false }, { name: "Rust", isChecked: true }] },
    { id: '102', name: 'Mohinur Rahman', email: 'mohin@gmail.com', gender: 'Male', round: '53', skills: [{ name: "Java", isChecked: true }, { name: "Rust", isChecked: false }] }
  ];

  onSkillChange(p: any, v: any) {
    this.skills[p].isChecked = v.checked;
  }

  getSkillNames(skills: any[]) {
    return skills.filter(skill1 => skill1.isChecked).map(skill2 => skill2.name).join(', ');
  }

  read(p: number) {
    this.id = this.students[p].id;
    this.name = this.students[p].name;
    this.email = this.students[p].email;
    this.gender = this.students[p].gender;
    this.round = this.students[p].round;
    this.skills = JSON.parse(JSON.stringify(this.students[p].skills));
  }

  create() {
    this.students.push({
      id: this.id,
      name: this.name,
      email: this.email,
      gender: this.gender,
      round: this.round,
      skills: JSON.parse(JSON.stringify(this.skills))
    });
  }

  update() {
    for (let i = 0; i < this.students.length; i++) {
      if (this.id === this.students[i].id) {
        this.students.splice(i, 1, {
          id: this.id,
          name: this.name,
          email: this.email,
          gender: this.gender,
          round: this.round,
          skills: JSON.parse(JSON.stringify(this.skills))
        })
      }
    }
  }

  delete() {
    this.students = this.students.filter((e) => e.id !== this.id);
  }
}
