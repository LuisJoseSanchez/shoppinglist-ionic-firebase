import { Injectable } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { Observable } from 'rxjs';
// import { User } from '@angular/fire/auth';

//import { getAuth, signInWithEmailAndPassword, User } from "firebase/auth";

import { Auth, signInWithEmailAndPassword, UserCredential } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //user: User;

  constructor(private auth: Auth) { }

  login(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password);
    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in 
    //     const user = userCredential.user;
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //   });
  }

  // login(email: string, password: string) {
  //   this.auth.signInWithEmailAndPassword(email, password);
  // }

  // getCurrentUser(): User {
  //   return this.user;
  // }
}
