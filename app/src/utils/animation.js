export function createWordListAnimation(animNode, delay){
    // Fetch the DOM elements.
    var animWindow = animNode.querySelector(".animation-window");
    var ul = animWindow.querySelector("ul");
    var lis = ul.querySelectorAll("li");
  
    // This function shows the li number `liNum`.                     
    function goTo(liNum){
      if ( current + 1 === lis.length ) {
        return clearInterval(interval)
      }
      var li = lis[liNum];
      var liTop = li.getBoundingClientRect().top;
      var ulTop = ul.getBoundingClientRect().top;
      var liOffset = liTop - ulTop;
      ul.style.top = -liOffset + "px";
    }
  
    // Set up an interval that changes the current li every `delay` ms.
    var current = 0;
    // We need a boolean to know if the animation is going up or down.
    var ascending = true;
    // Create the interval.
    const interval = setInterval(function(){
      ascending = ascending && current + 1 < lis.length || current === 0;
      current = ascending && current + 1;
      goTo(current);
    }, delay);

    return interval
  }
  
