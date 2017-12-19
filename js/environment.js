function Environment(){
  this.environment;
  this.height = 600;
  this.width = 1000;
  this.position = 'relative';
  this.background = 'cadetblue';
  this.margin = '50 auto';
  this.overflow = 'hidden'
  var that = this;

  this.createEnvironment = function(){
    
    that.environment = document.createElement('div');
    that.environment.style.height = that.height;
    that.environment.style.width = that.width;
    that.environment.style.background = that.background;
    that.environment.style.position = that.position;
    that.environment.style.margin = that.margin;
    that.environment.style.overflow = that.overflow;

  }

  that.append = function(object){
    that.environment.appendChild(object);
  }
}