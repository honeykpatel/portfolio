if (document.getElementById("about")) {
  dragElement(document.getElementById("draggable3"));
  dragElement(document.getElementById("draggable4"));
} else if (document.getElementById("work")){
  dragElement(document.getElementById("draggable2"));
}
else {
  dragElement(document.getElementById("draggable1"));
  dragElement(document.getElementById("draggable2"));
}

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    // document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    document.getElementById(elmnt.id + "header").onpointerdown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onpointerdown = dragMouseDown;
    // elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    // document.onmouseup = closeDragElement;
    document.onpointerup = closeDragElement;
    // call a function whenever the cursor moves:
    // document.onmousemove = elementDrag;
    document.onpointermove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    // document.onmouseup = null;
    document.onpointerup = null;
    // document.onmousemove = null;
    document.onpointermove = null;
  }
}

(function () {
  $(".menu-wrapper").on("click", function () {
    $(".hamburger-menu").toggleClass("active");
    $("nav").toggleClass("active");
  });
})();
