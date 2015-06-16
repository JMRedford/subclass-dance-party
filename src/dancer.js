// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  // use jQuery to create an HTML <span> tag
  var thisDancer = this;
  this.$node = $('<span class="dancer"></span>');
  this.$node.on("mouseover", function(){
    thisDancer.lineUp();
  });

  this.step();

  this.timeBetweenSteps = timeBetweenSteps;

  window.dancers.push(this);
};

Dancer.prototype.step = function(){
  //closure for anonymous function
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
  if(this.left > 15) {
    this.left --;
  } else {
    clearTimeout(this.lineTimeOutID)
  }

  //closure for anonymous function
  var that = this;
  this.lineTimeOutID = setTimeout(function () {
    that.lineUp()
  }, 10);
}
