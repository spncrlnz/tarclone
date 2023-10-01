const firebaseConfig = {
    apiKey: "AIzaSyDvngAmERtasLHlDjZg7hr6h27OSXLUmGM",
    authDomain: "tapandrepair-online.firebaseapp.com",
    databaseURL: "https://tapandrepair-online-default-rtdb.firebaseio.com",
    projectId: "tapandrepair-online",
    storageBucket: "tapandrepair-online.appspot.com",
    messagingSenderId: "531475628882",
    appId: "1:531475628882:web:9d175ba5ff37abfd01b08b"
};
firebase.initializeApp(firebaseConfig);

//Sign-Out Button
function signout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "login.html";
    }).catch((error) => {
        alert(error)
    });
}

$(document).ready(function () {
    if ($("body").hasClass("theme-dark")) {
        $("body").removeClass("theme-dark").addClass("theme-light");
    }
});

//
// var user = firebase.auth().currentUser;
// user.sendEmailVerification()
//     .then(function () {
//         console.log("Verification email sent");
//     })
//     .catch(function (error) {
//         console.error("Error sending verification email:", error);
//     });

// var user = firebase.auth().currentUser;
// if (user.emailVerified) {
//     console.log("Email is verified");
// } else {
//     console.log("Email is not verified");
// }
