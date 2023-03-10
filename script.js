function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
  
    if (name == "" || email == "" || subject == "" || message == "") {
      alert("Please fill in all fields");
    } else {
      var link = "mailto:thepyguyteam@gmail.com"
               + "?subject=" + encodeURIComponent(subject)
               + "&body=" + encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message);
      window.location.href = link;
      alert("Your email has been sent, thank you!");
    }
  }
  