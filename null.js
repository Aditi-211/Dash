// Event listener for handling keyboard input
function handleKeyDown(event) {
  var keyCode = event.keyCode || event.which;
  // Check if the key pressed is the spacebar (keyCode 32) or left arrow (keyCode 37)
  if (keyCode === 32 || keyCode === 37) {
    event.preventDefault();
    event.stopPropagation();
  }
}

// Event listener for handling the context menu event (right-click)
function handleContextMenu(event) {
  event.preventDefault();
}

// Adding event listeners to the document
document.addEventListener('keydown', handleKeyDown);
document.addEventListener('contextmenu', handleContextMenu, false);
