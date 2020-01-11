//input "hello world!"
//output
"!dlrow olleh"

var str = "hello world!";

function balikString(param){
    var j = param.length-1;
    var result = [];
    for(var i=0; i<param.length; i++) {
        result[j] = param[i];
        j--
    }
    return result.join('');
}

console.log(balikString(str));