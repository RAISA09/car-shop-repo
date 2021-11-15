import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebasde.config";

const initializeFiebase=()=>{
    initializeApp(firebaseConfig)
}
export default initializeFiebase;