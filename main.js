/*global document*/

/*Initialize Square Result & Square Input*/
let sResult = document.getElementById('square-result');
let sInput = document.getElementById('square-input');

sInput.onkeyup = function() {
    
    'use strict';
    let s;
    
    s = sInput.value;
    
    sResult.innerHTML = s + "<sup>2</sup> &nbsp; = &nbsp;" + (s * s) ;
    
};
