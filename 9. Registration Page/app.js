let ips = document.querySelectorAll("input");
let btn = document.querySelector("button");

let ipbits = [ true , true , true , true ];

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

function checkInvalidFields() {
    let valid = true;

    for( let i=0 ; i<ips.length ; i++ ) {
          if( ips[i].value=="**This field is important" || ips[i].value=="Invalid" )
              continue;
          if( i==0 ) {
             if( ( ips[i].value.length<5 || ips[i].value.length>12 ) ) {
                setInvalid( ips[i] , "Invalid" );
                ipbits[i] = false;
                valid = false;
             }
          }
          else if( i==1 ) {
             if( ips[i].value.length>15 || ips[i].value.search(/[^a-zA-Z]/)!=-1 ) {
                setInvalid( ips[i] , "Invalid" );
                ipbits[i] = false;
                valid = false;
             }
          }
          else if( i==2 ) {
             let password = ips[i].value;
             if( password.match(/[a-z]/)==null ||  password.match(/[A-Z]/)==null || password.match(/[0-9]/)==null || password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)==null || password.length<8 ) {
                setInvalid( ips[i] , "" );
                ipbits[i] = false;
                valid = false;
             }
          }
          else if( i==3 ) {
            let x = ips[i].value.match(/[a-z0-9\.]+[@]+[a-z]+[\.]+[a-z]+/g);
            if( x==null || x[0].length!=ips[i].value.length ) {
                setInvalid( ips[i] , "Invalid" );
                ipbits[i] = false;
                valid = false;
            }
          }
    }

    return valid;
}

function checkEmptyFields() {
    let valid = true;
    for( let i=0 ; i<ips.length ; i++ ) {
        if( ips[i].value=="" || ips[i].value=="**This field is important" ) {
            if( i==2 ) {
                setInvalid( ips[i] , "" );
            }
            else
                setInvalid( ips[i] , "**This field is important" );
            ipbits[i] = false;
            valid = false;
        }
        else if( ips[i].value=="Invalid" ) {
            if( i==2 ) {
                setInvalid( ips[i] , "" );
            }
            else
                setInvalid( ips[i] , "Invalid" );
            ipbits[i] = false;
            valid = false;
        }
        else{
            ipbits[i] = true;
        }
    }
    return valid;
} 

btn.addEventListener( "click" , (event)=>{
    let check1 = checkEmptyFields();
    let check2 = checkInvalidFields();
    if( !( check1 && check2 ) ) 
      event.preventDefault();
});
