let regno = document.querySelector("#reg_no_");
let subcode = document.querySelector("#sub_code_");
let m1 = document.querySelector("#m1_");
let m2 = document.querySelector("#m2_");
let m3 = document.querySelector("#m3_");
let btn = document.querySelector("#btn_");

let ips = document.querySelectorAll("input");
let ipbits = [ true , true , true , true , true ];

function setInvalid( o , msg ) {
    console.log("Invalid func is triggering, msg-"+msg);
    o.value = msg;
    o.style.color = "red";
    o.style.borderColor = "red";
}


function setNormal( o ) {
   o.style.color = "black";
   o.style.borderColor = "black";
}

for( let i=0 ; i<ips.length ; i++ ) {
    ips[i].addEventListener( "focus" , ()=>{
        console.log("Focussed !!");
        if( ipbits[i]==false ) {
            ips[i].value = "";
            setNormal( ips[i] );
        }
    });
}

for( let i=2 ; i<ips.length ; i++ ) {
    ips[i].addEventListener( "input" , ()=>{
         if( isNaN( Number(ips[i].value) )==true || ips[i].value.slice(-1)==' '  ) {
            ips[i].value = ips[i].value.slice(0,-1);
         }
         console.log("input inputted '"+ ips[i].value+"'");
    });
}

function checkEmptyFields() {
    let valid = true;
    for( let i=0 ; i<ips.length ; i++ ) {
        if( ips[i].value=="" || ips[i].value=="**This field is important" ) {
            setInvalid( ips[i] , "**This field is important" );
            ipbits[i] = false;
            valid = false;
        }
        else if( ips[i].value=="Invalid Reg.No" ) {
            setInvalid( ips[i] , "Invalid Reg.No" );
            ipbits[i] = false;
            valid = false;
        }
        else if( ips[i].value=="Invalid marks entered"){
            setInvalid( ips[i] , "Invalid marks entered" );
            ipbits[i] = false;
            valid = false;
        }
        else{
            ipbits[i] = true;
        }
    }
    return valid;
} 

function checkInvalidFields() {
     let valid = true;

     if( !regno.value.includes("JST")  && regno.value!="Invalid Reg.No" && regno.value!="**This field is important") {
        console.log("I am Triggered");
        setInvalid( regno , "Invalid Reg.No");
        ipbits[0] = false;
        valid = false;
     }
     else if( regno.value=="Invalid Reg.No" ) {
        setInvalid( regno , "Invalid Reg.No");
        ipbits[0] = false;
        valid = false;
     }
     else if( regno.value=="**This field is important" ) {
        setInvalid( regno , "**This field is important");
        ipbits[0] = false;
        valid = false;
     }
     else{
        ipbits[0] = true;
        setNormal( regno );
     }

     for( let i=2 ; i<ips.length ; i++ ) {
        let marks = Number( ips[i].value );
        if( marks<0 || marks>20 ) {
            setInvalid( ips[i] , "Invalid marks entered" );
            ipbits[i] = false;
            valid = false;
            continue;
        }
     }

     return valid;
}


btn.addEventListener( "click" , (event)=>{
    event.preventDefault();
    let check1 = checkEmptyFields();
    let check2 = checkInvalidFields();
    if( check1 &&  check2 ) {
       alert(`STUDENT REG.NO : ${regno.value}\nSUBJECT CODE : ${subcode.value}\nCURRENT CIE : ${(Number(m1.value)+Number(m2.value)+Number(m3.value))/2}`);
    }
});
