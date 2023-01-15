/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB4OKqn32uYqZL4VbV-GQ4baIaZpFuej_E",
    authDomain: "expense-tracker-96da9.firebaseapp.com",
    projectId: "expense-tracker-96da9",
    storageBucket: "expense-tracker-96da9.appspot.com",
    messagingSenderId: "683514280289",
    appId: "1:683514280289:web:f5d4d4c4822d80a353ad20",
    measurementId: "G-DJHJ449TSC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);