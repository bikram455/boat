function Hero(){
  
  this.hero;
  this.height = 100;
  this.width = 150;
  this.background = 'url("images/boatl2r.gif")';
  this.position = 'absolute';
  this.left = Math.floor(Math.random()*850);
  this.top = 265;
  this.velocity = 1;
  
  var that = this;

  this.createHero = function(){
    
    that.hero = document.createElement('div');
    that.hero.style.height = that.height;
    that.hero.style.width = that.width;
    that.hero.style.background = that.background;
    that.hero.style.position = that.position;
    that.hero.style.left = that.left;
    that.hero.style.top = that.top;
    that.hero.velocity = that.velocity;
    that.hero.left = that.left;
  }

}