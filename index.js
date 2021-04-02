function loopThrough(string, index, direction) {
    if(index==string.length+1) {
        direction = 1;
        return setTimeout(function() {loopThrough(string, index-1, direction)}, 3000);
    }
    else if(index==-1) {
        if(string=="Hello") string = "I'm Noah";
        else string = "Hello";
        index = 0;
        direction = 0;
    }
    else document.getElementById("head").innerHTML = `${string.substring(0,index)}_`;
    if(direction == 0) setTimeout(function() {loopThrough(string, index+1, direction)}, 150);
    if(direction == 1) setTimeout(function() {loopThrough(string, index-1, direction)}, 150);
}