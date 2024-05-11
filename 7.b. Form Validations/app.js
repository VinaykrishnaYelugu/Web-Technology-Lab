let nameo = document.querySelector("#name_"); let namebit = true; 
let emailo = document.querySelector("#email_"); let emailbit = true;
let gendero = document.querySelector("#gender_"); let genderbit = true;
let mobileo = document.querySelector("#mobile_"); let mobilebit = true;
let favclro = document.querySelector("#color_"); let favclrbit = true;
let btno = document.querySelector("button"); let btnbit = true;
let result = document.querySelector("#result"); 

function setInvalid( o,  msg ) {
    o.style.color = "red";
    o.style.borderColor = "red";
    o.value = msg;
}

function setNormal( o ) {
    o.style.color = "black";
    o.style.borderColor = "black";
}

nameo.addEventListener( "focus" , ()=>{
    if( namebit==false ) {
        nameo.value = '';
        setNormal( nameo);
    }
});

emailo.addEventListener( "focus" , ()=>{
    if( emailbit==false ) {
        emailo.value = '';
        setNormal( emailo );
    }
});

gendero.addEventListener( "focus" , ()=>{
    if( genderbit==false ) {
        gendero.value = '';
        setNormal( gendero );
    }
});

mobileo.addEventListener( "input" , ()=>{
    if(  isNaN( Number(mobileo.value) ) || mobileo.value.slice(-1)==' ' || mobileo.value.slice(-1)=='.' ){
        mobileo.value = mobileo.value.slice(0,-1);
    }
});

mobileo.addEventListener( "focus" , ()=>{
    if(mobilebit==false ) {
        mobileo.value = '';
        setNormal( mobileo );
    }
});


function removePrevChilds() {
    let childs = document.querySelectorAll(`#result>h2`);
    for( let i=0 ; i<childs.length ; i++ ) {
        result.removeChild( childs[i] );
    }
    
    childs = document.querySelectorAll(`#result>div`);
    for( let i=0 ; i<childs.length ; i++ ) {
        result.removeChild( childs[i] );
    }
}

btno.addEventListener( "click" , (event)=>{
    event.preventDefault();
    let display = true;

    if( nameo.value=='' ) {
        namebit = false;
        setInvalid( nameo , "**This field is important!!");
        display &&= false;
    }
    else if( nameo.value=='**This field is important!!' ) {
        namebit = false;
        setInvalid( nameo , "**This field is important!!");
        display &&= false;
    }
    else{
        display&&=true;
        namebit = true;
        setNormal( nameo );
    }

    if( emailo.value.slice(-10)=='@gmail.com' || emailo.value.slice(-12)=='@outlook.com' || emailo.value.slice(-10)=='@yahoo.com' ){
        setNormal( emailo );
        emailbit = true;
        display&&=true;
    }
    else if( emailo.value=='' || emailo.value=='**This field is important!!' ) {
        emailbit = false;
        setInvalid( emailo , '**This field is important!!');
        display &&= false;
    }
    else{
        emailbit = false;
        setInvalid( emailo , "Invalid email entered!!");
        display &&= false;
    }

    if( gendero.value.toLowerCase()=='male' || gendero.value.toLowerCase()=='female' || gendero.value.toLowerCase=='others' ){
        genderbit = true;
        setNormal( gendero );
        display&&=true;
    }
    else if( gendero.value=='' || gendero.value=='**This field is important!!' ) {
        genderbit = false;
        setInvalid( gendero , "**This field is important!!");
        display &&= false;
    }
    else{
        genderbit = false;
        setInvalid( gendero , "Invalid gender entered!!");
        display &&= false;
    }

    if( mobileo.value.length==10 ) {
        mobilebit = true;
        setNormal( mobileo );
        display&&=true;
    }
    else if( mobileo.value=='' || mobileo.value=='**This field is important!!' ) {
        mobilebit = false;
        setInvalid( mobileo , "**This field is important!!");
        display &&= false;
    }
    else {
        mobilebit = false;
        setInvalid( mobileo , "Invalid Mobile Number!!");
        display &&= false;
    }

    console.log( display );
    if( display==true ) {
          removePrevChilds();
          result.style.display = "flex";
          result.style.color = favclro.value;
          result.style.backgroundColor = "aliceblue";
          let new_el = document.createElement('h2');
          new_el.innerText = "YOUR ENTERED DETAILS!!";
          result.append( new_el );
          let values = [ "Name : "+nameo.value , "Email : "+emailo.value , "Gender : "+gendero.value , "Mobile no : "+mobileo.value , "Favourite Color hex code : "+favclro.value ];
          for( let i=0 ; i<values.length ; i++ ) {
            console.log( values[i] );
            let new_el = document.createElement('div');
            new_el.innerText = values[i];
            result.append( new_el );
          }
    }
});





