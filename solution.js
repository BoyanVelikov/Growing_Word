function growingWord() {
   const growingWord = document.querySelector('#exercise > p');
   let initialPx = 2;
   const colors = {
     'blue': 'green',
     'green': 'red',
     'red': 'blue'
   }
   
   if (!growingWord.hasAttribute('style')){
     growingWord.setAttribute('style', `color:blue; font-size:${initialPx}px`);
   } else {
     let currentPx = growingWord.style['font-size'];
     initialPx = currentPx.substr(0, currentPx.length - 2) * 2;
     let currentColor = growingWord.style.color;
     growingWord.setAttribute('style', `color: ${colors[currentColor]}; font-size: ${initialPx}px`);
   }
} 