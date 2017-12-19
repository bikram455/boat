function River(){
  this.river;
  this.background = 'aqua';
  this.height = 250;
  this.width = 1000;
  this.position = 'absolute';
  this.top = 350;
  this.left = 0;
  var that = this;

  this.createRiver = function(){

    that.river = document.createElement('div');
    that.river.style.background = that.background;
    that.river.style.height = that.height;
    that.river.style.width = that.width;
    that.river.style.position = that.position;
    that.river.style.top = that.top;
    that.river.style.left = that.left;

  }

}