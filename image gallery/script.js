// Get modal element
var modal = document.getElementById("modal");

// Get the modal image and caption elements
var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("caption");

// Get all images inside the gallery
var images = document.querySelectorAll(".gallery img");

// Loop through the images and add a click event to each
images.forEach(function (img) {
  img.addEventListener("click", function () {
    // Show the modal
    modal.style.display = "block";
    
    // Set the modal image source and caption text
    modalImg.src = this.src;
    captionText.innerHTML = this.nextElementSibling.innerHTML;
  });
});

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function () {
  modal.style.display = "none";
}
