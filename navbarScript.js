function myFunction() {
    var x = document.getElementById("myNav");
    if (x.className === "nav_list") {
      x.className += " responsive";
    } else {
      x.className = "nav_list";
    }
  }