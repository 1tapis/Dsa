var decodeMessage = function(key, message) {
    const alphabet ="abcdefghijklmnopqrstuvwxyz";
    
    let obj ={};
    let keyIdx = 0;
    for(let i=0; i< key.length; i++){
        if(key[i] != " " && !obj[key[i]]){
            obj[key[i]] = alphabet[keyIdx];
            keyIdx++;
        }
    }
    let decodeString = "";
    for(let j =0 ;j <message.length; j++){
        if(message[j] ===" "){
            decodeString += " ";
        }else{
            decodeString += obj[message[j]];
           
        }
    }

    return decodeString;

};
