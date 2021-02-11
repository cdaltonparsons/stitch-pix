import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';

export interface Measurements {
  hips: number;
  waist: number;
  chest: number;
  feet: number;
  inches: number;
  userId?: string;
}

export interface User {
  uid: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  currentUser: User = null;
  provider = new firebase.auth.GoogleAuthProvider();

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    this.afAuth.onAuthStateChanged((user) => {
      console.log('user change: ', user);
      this.currentUser = user;
    });
  }

  addMeasurementsShopper(measurements: Measurements) {
    return this.afs.collection('shopperMeasurements').add(measurements);
  }

  addMeasurementsModel(measurements: Measurements) {
    return this.afs.collection('modelMeasurements').add(measurements);
  }

  async signUp({ email, password }) {
    const credential = await this.afAuth.createUserWithEmailAndPassword(
      email,
      password
    );

    const uid = credential.user.uid;

    return this.afs.doc(`users/${uid}`).set({
      uid,
      email: credential.user.email,
    });
  }

  signIn({ email, password }) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  googleLogin() {
   return this.afAuth.signInWithPopup(this.provider).then((result) => {
      let credential = result.credential;
      console.log(credential);
    });
  }

  signOut() {
    return this.afAuth.signOut();
  }
}
