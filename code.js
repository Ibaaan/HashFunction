function Hash(str){
    let sum = 0;
    let len = str.length;
    for (let i = 0; i < len; i++){
        sum += Math.pow(2, len - i) * str[i].charCodeAt(0);
    }
    return sum;
}

function EqualStrs(str1, str2,len){
    for(let i = 0; i < len;i++){
        if(str1[i] != str2[i]){
            return false;
        }
    }
    return true;
}

let fs = require('fs');
let str = fs.readFileSync("input.txt").toString().split(" ");

let mainStr = str[0];
let findStr = str[1];

let len = findStr.length;

let hshStr = 0;
let hshCheck = Hash(findStr);

let indexes = new Array();
let ip = 0;

for (let i = 0; i < mainStr.length - len + 1;i++){
    hshStr = Hash(mainStr.slice(i,len+i));
    if(hshCheck == hshStr){
        if(EqualStrs(findStr,mainStr.slice(i,len+i), len)){
            indexes[ip] = i;
            ip++;
        }
    }
}

if(indexes.length){
    fs.writeFileSync("output.txt", indexes.join(" "));
}
else{
    fs.writeFileSync("output.txt", "-1");
}