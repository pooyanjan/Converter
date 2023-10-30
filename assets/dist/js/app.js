// meter  to cm
const btn1 = document.getElementById('btn1');

btn1.addEventListener( 'click' , function(){
let input = document.getElementById('input').value;
 document.getElementById('output').value = input * 100  ;
 
} )


// cm  to inch
const btn2 = document.getElementById('btn2');

btn2.addEventListener( 'click' , function(){
    let input2 = document.getElementById('input2').value;
     document.getElementById('output2').value = input2 /2.54  ;
    })

    // meter  to inch
const btn3 = document.getElementById('btn3');

btn3.addEventListener( 'click' , function(){
    let input3 = document.getElementById('input3').value;
     document.getElementById('output3').value = input3 /0.0254  ;
    })