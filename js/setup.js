function SetUp(id){
  var game = document.getElementById(id);
  var objects = [];

  this.init = function(){
    //Creating up the environment
    var environment = new Environment();
    environment.createEnvironment();
    game.appendChild(environment.environment);

    //Creating the life bar
    var lifebar = new LifeBar();
    lifebar.createLife();
    environment.append(lifebar.lifebar);

    //Creating the river
    var river = new River();
    river.createRiver();
    environment.append(river.river);

    //Creating the Hero
    var hero = new Hero();
    hero.createHero();
    environment.append(hero.hero);

    //Creating the objects
    var object1 = new Object(0);
    object1.createObject();
    environment.append(object1.object);

    var object2 = new Object(-2);
    object2.createObject();
    environment.append(object2.object);
    
    var object3 = new Object(-4);
    object3.createObject();
    environment.append(object3.object);

    var object4 = new Object(-6);
    object4.createObject();
    environment.append(object4.object);

    var object5 = new Object(-8);
    object5.createObject();
    environment.append(object5.object);

    //Pushing objects
    objects.push(object1.object,object2.object,object3.object,object4.object);

    //Animating the game
    var animator = new Animator(hero.hero,objects,lifebar.lifebar);
    animator.animate()
  }
}

var set = new SetUp('environment');
set.init();