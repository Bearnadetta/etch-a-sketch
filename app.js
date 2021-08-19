const container = document.getElementById('container');
const clearBtn = document.getElementById('clearBtn');
const resizeBtn = document.getElementById('resizeBtn');
let userInput = '';
//clears the #container, then fills with squares
const onClear = function (e) {
    container.innerHTML = '';
    container.style.setProperty('--grid-rows', e);
    container.style.setProperty('--grid-cols', e);
    for (let i = 0; i < (e* e); i++){
        let square = document.createElement('div');
        square.className = 'square';
        square.addEventListener('mouseenter', function(e){
            e.target.style.backgroundColor = 'black';
        });
        container.appendChild(square);
    };
};
/*runs the onClear function, checking for a user input. If no
user input, defaults to 16 */
clearBtn.addEventListener('click', function(){
    if (userInput) {
        onClear(userInput);
    } else {
        onClear(16);
    }
    
});
/* prompts the user for the number of rows and colums, then runs the onClear function with 
that number of rows and columns */
resizeBtn.addEventListener('click', function(){
    userInput = prompt('please enter a number between 4 and 100', 16);
    if (userInput >= 4 && userInput <= 100) {
        onClear(userInput);
    }
    else {
        alert('please enter a valid number');
    }
});


onClear(16);

