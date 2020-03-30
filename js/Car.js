//Class of the hero car

function Car() {
  this.element = document.createElement('div');

  this.posX;
  this.posY;

  var that = this;

  this.addClass = function(cName) {
    that.element.className = cName;
  }

  this.appendTo = function(parentElement) {
    parentElement.appendChild(that.element);
  }

  //position = {posX : '', posY:''}
  this.setInitialPos = function(position) {
    that.posX = position.posX;
    that.posY = position.posY;

    that.element.style.left = that.posX + 'px';
    that.element.style.top = that.posY + 'px';
  }

  this.movePos = function(posX) {
    that.posX += posX;
    that.element.style.left = that.posX + 'px';
  }

  this.deleteCar = function(container) {
    container.removeChild(that.element);
  }
}
