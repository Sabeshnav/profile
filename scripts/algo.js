$(document).ready(function() {
    setTimeout(function() {
      $("#proceed").show();
    }, 5000);
  });
$(function() {
    var header = $(".navIclass");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 350) {
          console.log("hshus");
            header.removeClass('navIclass').addClass("navBclass");
        } else {
            header.removeClass("navBclass").addClass('navIclass');
        }
    });
});
$(function() {
    var header = $(".bill");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 350) {
          console.log("hshus");
            header.removeClass('bill').addClass("trans");
        } else {
            header.removeClass("trans").addClass('bill');
        }
    });
});
document.addEventListener("mousemove", parallax);
function parallax(e) {
    document.querySelectorAll(".object").forEach(function(move){
        let moving_value = move.getAttribute("data-value");
        let x = (e.clientX * moving_value) / 200;
        let y = (e.clientY * moving_value) / 250;
        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
    document.querySelectorAll(".services_object").forEach(function(move){
        let moving_value = move.getAttribute("data-value");
        let x = (e.clientX * moving_value) / 200;
        let y = (e.clientY * moving_value) / 250;
        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });

}
function showalert() {
    window.alert("sabesh is here!!");
  }

  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  function sendEmail() {
    
  var firebaseConfig = {
    apiKey: "AIzaSyDlwEwGSQNMMrPYfCOydQkCFM5SNQOiweg",
    authDomain: "light-ce1e3.firebaseapp.com",
    databaseURL: "https://light-ce1e3.firebaseio.com",
    projectId: "light-ce1e3",
    storageBucket: "light-ce1e3.appspot.com",
    messagingSenderId: "638227861192",
    appId: "1:638227861192:web:1dcc13eb8b1b7983381ffd",
    measurementId: "G-SFPFYR01EK"
  };
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
  db.collection("potential").add({
    email: email,
    phone: phone
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});
  }




