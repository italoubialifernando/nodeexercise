import * as fs from  "node:fs";

fs.readFile("file.txt",{encoding: "utf-8"}, function(er, data) {
    if(er){
        console.log(er);
        return;
    }
     
    console.log(data);

});