import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCD7jBFYOPHLWZFknxgz4_HvN3-bGN1ekU",
  authDomain: "auth-b9006.firebaseapp.com",
  projectId: "auth-b9006",
  storageBucket: "auth-b9006.appspot.com",
  messagingSenderId: "666628701336",
  appId: "1:666628701336:web:6964092bf4815bd2cc64ed"
};
// app inicializa a minha conexão com o firebase
const app = initializeApp(firebaseConfig);
// auth vai guardar todos os parâmetros de autenticação
export const auth = getAuth(app);