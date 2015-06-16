var WiggleDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('class',"wiggledancer");
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps/10;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

WiggleDancer.prototype = Object.create(Dancer.prototype);

WiggleDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  if (window.dancers.length > 2){
    moveToward(this, window.dancers[window.dancers.length-1]);
  }

  this.top = this.top + Math.random()*10 - 5;
  this.left = this.left + Math.random()*10-5;

  var styleReset = {
    top : this.top, left : this.left
  }

  this.$node.css(styleReset);
};
