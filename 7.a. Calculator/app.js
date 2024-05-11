let keypad = document.querySelector("#keys");
let scrn = document.querySelector("input");

keypad.addEventListener( "click" , (event)=>{
    let btn = event.target;
    console.log( btn.innerText + " | " + event.target.innerText );
    if( btn.innerText=='=' ){
        try{
            scrn.value = eval( scrn.value );
        } catch( err ) {
            scrn.value = "ERROR";
        }   
        if( scrn.value=='undefined' || scrn.value=='Nan' )
            scrn.value = "ERROR";
    }
    else if( btn.innerText=='AC' ) {
        scrn.value = '';
    }
    else if( btn.innerText=='CE') {
        scrn.value = scrn.value.slice(0,-1);
    }
    else if( btn.innerText=="^" ) {
        scrn.value += '**';
    }
    else if( btn.innerText=='x-1' ) {
       scrn.value += '**-1';
    }
    else if( btn.innerText=="x2" ) {
       scrn.value += '**2';
    }
    else{
       scrn.value += btn.innerText;
    }

});