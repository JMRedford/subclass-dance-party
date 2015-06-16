var TinyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="tinydancer"></span>');
  this.top = top;
  this.left = left;
  this.tick = 0;
  this.timeBetweenSteps = timeBetweenSteps/10;

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

TinyDancer.prototype = Object.create(Dancer.prototype);

TinyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);

  var y = this.top + Math.sin(this.tick)*5;
  var x = this.left + Math.cos(this.tick)*5;

  this.tick++;
  this.tick = this.tick % 6;

  var styleReset = {
    top : y, left : x
  }

  this.$node.css(styleReset);
};
