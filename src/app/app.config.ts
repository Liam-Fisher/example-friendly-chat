import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import { provideFirestore, getFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { provideFunctions, getFunctions, connectFunctionsEmulator} from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage, connectStorageEmulator } from '@angular/fire/storage';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideFirestore(() => getFirestore()),
      provideAuth(() => getAuth()),
      provideFunctions(() => getFunctions()),
      provideStorage(() => getStorage()),
      provideMessaging(() => getMessaging())
    ),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"friendlychat-889c4","appId":"1:374825389115:web:7a1a9112695a5ed257a01e","storageBucket":"friendlychat-889c4.appspot.com","locationId":"us-central","apiKey":"AIzaSyD65zWu8mEOPw3eU1tqYGQDCu7CAYO_BCg","authDomain":"friendlychat-889c4.firebaseapp.com","messagingSenderId":"374825389115"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideStorage(() => getStorage()), provideFirebaseApp(() => initializeApp({"projectId":"friendlychat-889c4","appId":"1:374825389115:web:7a1a9112695a5ed257a01e","storageBucket":"friendlychat-889c4.appspot.com","locationId":"us-central","apiKey":"AIzaSyD65zWu8mEOPw3eU1tqYGQDCu7CAYO_BCg","authDomain":"friendlychat-889c4.firebaseapp.com","messagingSenderId":"374825389115"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage())
  ],
};
