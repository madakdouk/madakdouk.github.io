/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function addLinkListener(className, url) {
  var elements = document.querySelectorAll('.' + className);
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function(event) {
      if (event.target.tagName === 'A') {
        window.open.href = event.target.href;
      } else {
        window.location.href = url;
      }
    });
  }
}

addLinkListener('spaceshooter_link', 'spaceshooter.html');