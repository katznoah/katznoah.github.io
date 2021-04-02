function loopThrough(tag, strings, index1, index2, direction) {
    var string = strings[index2%strings.length];
    if(index1 == string.length+1){
        direction = 1;
        return setTimeout(function() {loopThrough(tag, strings, index1-1, index2, direction)}, 1000);
    }
    else if(index1==-1) {
        index2++;
        index1 = 0;
        direction = 0;
    }
    else document.getElementById("head").innerHTML = `${string.substring(0,index1)}_`;
    if(direction == 0) setTimeout(function() {loopThrough(tag, strings, index1+1, index2, direction)}, 100);
    else setTimeout(function() {loopThrough(tag, strings, index1-1, index2, direction)}, 50);
}