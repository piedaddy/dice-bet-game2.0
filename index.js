const buttonU = document.querySelector('#buttonU');
const buttonO = document.querySelector('#buttonO');
const button7 = document.querySelector('#button7');
const click = document.querySelector('.click');



buttonU.addEventListener('click', () => {
 
      if (click.addEventListener('click', () => {
        const side = document.querySelector('#dice');
        const random = Math.round(Math.random() * (6-1) + 1);
        const account = document.querySelector('#acc');
        const bet = document.querySelector('#bet'); 
        const di2 = document.querySelector('#dice2');
        const random2 = Math.round(Math.random() * (6-1) + 1);


          if (random === 1) {
            side.className = 'side1'
          } else if (random === 2) {
            side.className ='side2';
          } else if (random === 3) {
            side.className='side3';
          } else if (random === 4) {
            side.className='side4';
          } else if (random === 5) {
            side.className='side5';
          } else if (random === 6) {
            side.className='side6'
          } 

          if (random2 === 1) {
            di2.className = 'side1'
          } else if (random2 === 2) {
            di2.className ='side2';
          } else if (random2 === 3) {
            di2.className='side3';
          } else if (random2 === 4) {
            di2.className='side4';
          } else if (random2 === 5) {
            di2.className='side5';
          } else if (random2 === 6) {
            di2.className='side6'
          } 

          if (random + random2 < 7) {
            account.value = Number(account.value) + (3 * Number(bet.value));
          } else if (random + random2 > 7) {
            account.value = account.value - Number(bet.value);
          } else if (random + random2 === 7) {
            account.value = account.value - Number(bet.value);
          }

       })

);



buttonO.addEventListener('click', () => {
 
  if (click.addEventListener('click', () => {
    let side = document.querySelector('#dice');
    let random = Math.round(Math.random() * (6-1) + 1);
    let account = document.querySelector('#acc');
    let bet = document.querySelector('#bet'); 
    let di2 = document.querySelector('#dice2');
    let random2 = Math.round(Math.random() * (6-1) + 1);


      if (random === 1) {
        side.className = 'side1'
      } else if (random === 2) {
        side.className ='side2';
      } else if (random === 3) {
        side.className='side3';
      } else if (random === 4) {
        side.className='side4';
      } else if (random === 5) {
        side.className='side5';
      } else if (random === 6) {
        side.className='side6'
      } 

      if (random2 === 1) {
        di2.className = 'side1'
      } else if (random2 === 2) {
        di2.className ='side2';
      } else if (random2 === 3) {
        di2.className='side3';
      } else if (random2 === 4) {
        di2.className='side4';
      } else if (random2 === 5) {
        di2.className='side5';
      } else if (random2 === 6) {
        di2.className='side6'
      } 

      if (random + random2 > 7) {
        account.value = Number(account.value) + (3 * Number(bet.value));
      } else if (random + random2 < 7) {
        account.value = account.value - Number(bet.value);
      } else if (random + random2 === 7) {
        account.value = account.value - Number(bet.value);
      }

   })

);



buttonE.addEventListener('click', () => {
 
  if (click.addEventListener('click', () => {
    let side = document.querySelector('#dice');
    let random = Math.round(Math.random() * (6-1) + 1);
    let account = document.querySelector('#acc');
    let bet = document.querySelector('#bet'); 
    let di2 = document.querySelector('#dice2');
    let random2 = Math.round(Math.random() * (6-1) + 1);


      if (random === 1) {
        side.className = 'side1'
      } else if (random === 2) {
        side.className ='side2';
      } else if (random === 3) {
        side.className='side3';
      } else if (random === 4) {
        side.className='side4';
      } else if (random === 5) {
        side.className='side5';
      } else if (random === 6) {
        side.className='side6'
      } 

      if (random2 === 1) {
        di2.className = 'side1'
      } else if (random2 === 2) {
        di2.className ='side2';
      } else if (random2 === 3) {
        di2.className='side3';
      } else if (random2 === 4) {
        di2.className='side4';
      } else if (random2 === 5) {
        di2.className='side5';
      } else if (random2 === 6) {
        di2.className='side6'
      } 

      if (random + random2 === 7) {
        account.value = Number(account.value) + (3 * Number(bet.value));
      } else if (random + random2 > 7) {
        account.value = account.value - Number(bet.value);
      } else if (random + random2 < 7) {
        account.value = account.value - Number(bet.value);
      }

   })

);

  
 })})}); 
