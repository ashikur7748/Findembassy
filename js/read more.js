function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = '<i class="fas fa-plus mr-2"></i>Show All'; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = '<i class="fas fa-minus mr-2"></i>show Less'; 
    moreText.style.display = "inline";
  }
}