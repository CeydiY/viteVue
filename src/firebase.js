import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

let firebaseConfig = {
    apiKey: "AIzaSyDpFFtLPe3YSuwB35o2HVYmginkMfTqHDQ",
    authDomain: "groocery-a345d.firebaseapp.com",
    projectId: "groocery-a345d",
    storageBucket: "groocery-a345d.appspot.com",
    messagingSenderId: "637235599340",
    appId: "1:637235599340:web:f170405635ac8a69ff52c9",
    measurementId: "G-1QFLJXQ0WK"
    };
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app }