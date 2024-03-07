function findkeylong(name){


let ten = name.split(' ');
let max = ten[0];

for(let i=0; i< ten.lenght; i++){
    if(max < ten[i]){
        ten[i] = max;
    }
}
console.log(max)

}
findkeylong('trann dang huy');



//hoặc


function findkeylong3(name){
    let ten = "";
    let max = 0;

    name.trim().split(" ").forEach(element => 
        {
            max <= element.lenght ? (ten = element , max = element.lenght) : ten = ten
        });

        console.log(ten)



        findkeylong3('hhd aaggfh jhajf')
}