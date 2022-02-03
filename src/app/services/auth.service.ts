import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  User,
  signOut
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;

  constructor(private auth: Auth) { }

  login(email: string, password: string): Promise<boolean> {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then(
        data => {
          this.user = data.user;
          return true;
        },
        error => {
          console.error(error);
          return false;
        }
      );
        //   });

    // return signInWithEmailAndPassword(this.auth, email, password);


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

  getCurrentUser(): User {
    return this.user;
  }

  logout() {
    signOut(this.auth);
  }
}
