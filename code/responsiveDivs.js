window.addEventListener('resize', function() {
    var myDiv = document.getElementById("responsiveDiv");
    
    var aspectRatio = window.innerWidth / window.innerHeight;
    
    if (aspectRatio >= 1) {
      myDiv.style.display = 'flex';
    } else {
      myDiv.style.display = 'grid';
    }
});