function loopThrough(head, tag, strings, index1, index2, direction, loops, suffix) {
    if(index1 == strings[index2%strings.length].length+1) return (index2==loops*strings.length-1)?end():setTimeout(() => {loopThrough(head, tag, strings, index1-1, index2, 1, loops, suffix)}, 1000);
    else if(index1!=-1) document.getElementById(tag).innerHTML = `${head}${strings[index2%strings.length].substring(0,index1)}${suffix}`;
    return setTimeout(() => {loopThrough(head, tag, strings, (index1==-1)?0:(direction==0)?index1+1:index1-1, (index1==-1)?index2+1:index2, (index1==-1)?0:direction, loops, suffix)}, (direction==0)?35:20);
}

function end() {
    console.log("end");
}

function fade(id, current) {
    document.getElementById("link").style.visibility="visible";
    document.getElementById(id).style.opacity=(0.02 + current);
    current = current + 0.03;
    return (current<1)?setTimeout(() => {fade(id, current)}, 50):"done";
}

function func1() {
    loopThrough('I am a ', 'type', ['programmer', 'student', 'pretty cool guy'], 0, 0, 0, 1, '');
    setTimeout(() => {loopThrough('', 'one', ['I am skilled in C, C++ and Java'], 0, 0, 0, 1, '');}, 5000);
    setTimeout(() => {loopThrough('', 'two', ['I enjoy Linux programming and developing software'], 0, 0, 0, 1, '');}, 6500);
    setTimeout(() => {loopThrough('', 'three', ['Here is some of my work:'], 0, 0, 0, 1, '');}, 9000);
    setTimeout(() => fade('link', 0), 10500);
}