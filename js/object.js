function Object(count){
  this.object;
  this.height = 30;
  this.width = 80;
  this.background = 'lightblue';
  this.position = 'absolute';
  
  var that = this;

  this.createObject = function(){

    that.object = document.createElement('div');
    that.object.style.height = that.height;
    that.object.style.width = that.width;
    that.object.style.background = that.background;
    that.object.style.position = that.position;
    that.object.top = 400 + Math.floor(Math.random()*150);
    that.object.left = 100 + count*100;
    that.object.style.top = that.object.top;
    that.object.style.left = that.object.left;
    that.object.velocity = 1;

  }

}