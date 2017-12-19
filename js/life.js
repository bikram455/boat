function LifeBar(){
  
  this.lifebar;
  this.height = 40;
  this.width = 250;
  this.position = 'absolute';
  this.left = 10;
  this.top = 10;
  this.background = 'lightgreen';
  var that = this;

  this.createLife = function(){
  
    that.lifebar = document.createElement('div');
    that.lifebar.style.height = that.height;
    that.lifebar.style.width = that.width;
    that.lifebar.style.position = that.position;
    that.lifebar.style.top = that.top;
    that.lifebar.style.left = that.left;
    that.lifebar.style.background = that.background;
    that.lifebar.velocity = 1;
    that.lifebar.life = that.width;

  }

}