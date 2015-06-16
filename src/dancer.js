// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  //this = {}
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
  this.step();

  //
  this.timeBetweenSteps = timeBetweenSteps;
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
 //return this;
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var that = this;
  setTimeout(function(){that.step()}, this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(){
  if(this.left > 0) {
    this.left --;
  } else {
    clearTimeout(this.lineTimeOutID)
  }
  var that = this;
  this.lineTimeOutID = setTimeout(function () {
    that.lineUp()
  }, this.timeBetweenSteps);
}
