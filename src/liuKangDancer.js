var lkDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('class','lkdancer');
  this.$node.html('<img class="lkdancer" src="./src/lk.gif">');

  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps/10;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

lkDancer.prototype = Object.create(Dancer.prototype);

lkDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);


  var styleReset = {
    top : this.top, left : this.left

  }

  this.$node.css(styleReset);


};
