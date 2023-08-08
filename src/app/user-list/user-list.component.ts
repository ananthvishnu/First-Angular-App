import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
// import { Observable } from 'rxjs';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  //? CONSTRUCTOR FUNCTION FOR HttpClient **********************************//
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUsers().subscribe((response) => {
      this.users = response;
    });
  }

  getUsers() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

//? POST METHOD FUNCTIONS ****************************************************//
  onSubmit() {
    this.addUser().subscribe((response) => {
      this.users.push(response);
    });
    
  }

  addUser() {
    return this.http.post<User>('https://jsonplaceholder.typicode.com/users', {
      name: this.userForm.controls.name.value,
      username: this.userForm.controls.username.value,
      email: this.userForm.controls.email.value
    });
  }
 
  // onSubmit(): void {
  //   this.addUser().subscribe((response) => {
  //     this.users.push(response);
  //   });
  // }

  // addUser(): Observable<User> {
  //   return this.http.post<User>('https://jsonplaceholder.typicode.com/users', {
  //     name: this.userForm.controls.name.value,
  //     email: this.userForm.controls.email.value
  //   });
  // }


//? STYLING FOR TABLE VARIABLES *************************************************//
  rainbowColors = [
    '#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#8b00ff'
  ];

  getRainbowColor(index: number): string {
    const colorIndex = index % this.rainbowColors.length;
    return this.rainbowColors[colorIndex];
  }

//? REACTIVE-FORM IKKANA FORM-CONTROL *******************************************//
  userForm = new FormGroup(
    {
    name: new FormControl(""),
    username: new FormControl(""),
    email: new FormControl("")
    }
  )

  


// ... (existing code) ...

editedUser: User | null = null;

// Function to populate the form with user details for editing
editUser(user: User) {
  this.editedUser = user;
  this.userForm.patchValue(user);
}

// Function to cancel editing
cancelEdit() {
  this.editedUser = null;
  this.userForm.reset();
}

updateUser() {
  if (this.editedUser) {
    const updatedUser: User = {
      ...this.editedUser,
      name: this.userForm.controls.name.value as string,
      username: this.userForm.controls.username.value as string,
      email: this.userForm.controls.email.value as string
    };

    this.http
      .put<User>(`https://jsonplaceholder.typicode.com/users/${updatedUser.id}`, updatedUser)
      .subscribe(() => {
        const index = this.users.findIndex(user => user.id === updatedUser.id);
        if (index !== -1) {
          this.users[index] = updatedUser;
        }
        this.cancelEdit();
      });
  }
}


// Function to delete a user
deleteUser(user: User) {
  this.http
    .delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
    .subscribe(() => {
      this.users = this.users.filter(u => u.id !== user.id);
    });
}

// ... (rest of the component code) ...


  

}

//? USERS I GET PANRATHUKKANA CLASS ***************************//
class User {
  id!: number;
  name!: string;
  username!: string;
  email!: string;
}
