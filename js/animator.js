function Animator(hero,objects,lifebar){
  this.hero = hero;
  this.objects = objects;
  this.lifebar = lifebar;
  var that = this;

  this.animate = function(){
    setInterval(function(){
      that.decreaseLife();
      that.moveHero();
      that.checkHeroCollision();
      that.objects.forEach(function(object){
        that.moveObject(object);
        that.checkObjectCollision(object);
      })
    },1000/60)
  }

  //Decrease Life
  this.decreaseLife = function(){
    that.lifebar.life = that.lifebar.life - that.lifebar.velocity * 0.1;
    that.lifebar.style.width = that.lifebar.life;
  }

  //Move the Hero/Boat
  this.moveHero = function(){
    that.hero.left = that.hero.left + that.hero.velocity*5;
    that.hero.style.left = that.hero.left;
  }

  //Checking collision for hero
  this.checkHeroCollision = function(){
    if(that.hero.left>=850){
      that.hero.velocity = that.hero.velocity * -1;
      that.hero.style.background = 'url("images/boatr2l.gif")';
    }
    else if(that.hero.left<=0){
      that.hero.velocity = that.hero.velocity * -1;
      that.hero.style.background = 'url("images/boatl2r.gif")';
    }
  }

  //Move the objects
  this.moveObject = function(object){
    object.left = object.left + object.velocity * 3;
    object.style.left = object.left;
  }

  //Check the wall collision for objects
  this.checkObjectCollision = function(object){
    if(object.left>=1000){
      object.top = 400 + Math.floor(Math.random()*150);      
      object.left = 0;
      object.style.top = object.top;
    }
  }

}