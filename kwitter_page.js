var firebaseConfig = {
    apiKey: "AIzaSyDTiiV_lWv3EcUTuLmvt_Atjz1M1NkIfn0",
    authDomain: "project-c94-a42e3.firebaseapp.com",
    databaseURL: "https://project-c94-a42e3-default-rtdb.firebaseio.com",
    projectId: "project-c94-a42e3",
    storageBucket: "project-c94-a42e3.appspot.com",
    messagingSenderId: "397168280704",
    appId: "1:397168280704:web:08a846c2d091cf33945265",
    measurementId: "G-LE26S13NNY"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  room_name = localStorage.getItem("room_name");

  function send() 
{
      msg = document.getElementById("msg").ariaValueMax;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}
