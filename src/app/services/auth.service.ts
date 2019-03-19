import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afsAuth: AngularFireAuth, private afs: AngularFirestore) { }
  get AuthServiceRef() {
    return auth
  }

  /**
  loginFacebookUser() {
    return this.afsAuth.auth.signInWithPopup(new auth.FacebookAuthProvider())
      .then(credential => this.updateUserData(credential.user))
  }

  loginGoogleUser() {
    return this.afsAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(credential => this.updateUserData(credential.user))
  }
  )*/

logoutUser(){
  return this.afsAuth.auth.signOut();
}

//metodo que comproueba si nuestro usuario sta logueado
isAuth(){
    return this.afsAuth.authState.pipe(map(auth => auth));
}
}
