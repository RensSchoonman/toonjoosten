function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// Add click event listeners to all the images
document.querySelectorAll('.image-container img').forEach(function(img) {
  img.addEventListener('click', function() {
    // Add the "active" class to the container when the image is clicked
    img.closest('.image-container').classList.add('active');
  });
});

// Add click event listeners to all the close icons
document.querySelectorAll('.image-container .close').forEach(function(close) {
  close.addEventListener('click', function() {
    // Remove the "active" class from the container when the close icon is clicked
    close.closest('.image-container').classList.remove('active');
  });
});

// Add a click event listener to the document
document.addEventListener('click', function(event) {
  // Check if the clicked element is outside any of the image containers
  if (!event.target.closest('.image-container') && document.querySelector('.image-container.active')) {
    // Remove the "active" class from all the containers when clicked outside
    document.querySelectorAll('.image-container.active').forEach(function(container) {
      container.classList.remove('active');
    });
  }
});


const wrapper = document.getElementById("bubble-wrapper");

const animateBubble = x => {  
  const bubble = document.createElement("div");
  
  bubble.className = "bubble";
  bubble.style.left = `${x}px`;
  
  wrapper.appendChild(bubble);
  
  setTimeout(() => wrapper.removeChild(bubble), 2000);
}

window.onmousemove = e => animateBubble(e.clientX);
