var screenDiv = document.getElementsByClassName('screen')[0]
function getValue(value){
    switch(value){
        case '=':
            var res = eval(screenDiv.innerText);
            screenDiv.innerText = res;
            break;
        case '':
            screenDiv.innerText = '';
            break; 
        case 'back':
                screenDiv.innerText = screenDiv.innerText.slice(0,screenDiv.innerText.length-1);
                break;
        default:
            screenDiv.innerText += value;
  
    }

}