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
        if( ips[i].value=="Invalid" ||  ips[i].value=="**This field is important" ) {
            ipbits[i] = false;
            valid = false;
            continue;
        }

        if( ips[i].value=="" ) {
            setInvalid( ips[i] , "**This field is important" );
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
     for( let i=0 ; i<ips.length ; i++ ) {
        if( ips[i].value=="Invalid" ||  ips[i].value=="**This field is important" ) {
            ipbits[i] = false;
            valid = false;
            continue;
        }
    
        if( i==0 ) {
            if( !ips[i].value.includes("JST")  ) {
                setInvalid( ips[i] , "Invalid");
                ipbits[i] = false;
                valid = false;
            }
            else
                ipbits[i] = true;
        } 
        if( i>=2 ) {
            let marks = Number( ips[i].value );
            if( marks<0 || marks>20 ) {
                setInvalid( ips[i] , "Invalid" );
                ipbits[i] = false;
                valid = false;
            }
            else 
                ipbits[i] = true;
        }
     }

     return valid;
}


btn.addEventListener( "click" , (event)=>{
    event.preventDefault();
    let check1 = checkEmptyFields();
    let check2 = checkInvalidFields();
    console.log( check1 + " | " + check2 );
    if( check1 &&  check2 ) {
       alert(`STUDENT REG.NO : ${ips[0].value}\nSUBJECT CODE : ${ips[1].value}\nCURRENT CIE : ${ (Number(ips[2].value)+Number(ips[3].value)+Number(ips[4].value))/2}`);
    }
});
