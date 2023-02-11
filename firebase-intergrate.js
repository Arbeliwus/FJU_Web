
const firebaseConfig = {
  apiKey: "AIzaSyAoFB2LNIpJCw1Zlm0z-SF9cp5q78TL7wY",
  authDomain: "webset-53eec.firebaseapp.com",
  databaseURL: "https://webset-53eec-default-rtdb.firebaseio.com",
  projectId: "webset-53eec",
  storageBucket: "webset-53eec.appspot.com",
  messagingSenderId: "957366132343",
  appId: "1:957366132343:web:c236961f3bf222de2b7072",
  measurementId: "G-BJS6LCD6RE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
db=firebase.database();



function read_db(){
  db.ref("users").orderByValue().once('value', function (snapshot) {
    snapshot.forEach(function (item) {
        let d=item.val();
        tidy(d);
        
    })
});
return firebase_data;
}
console.log("成功載入firebase.js"); 