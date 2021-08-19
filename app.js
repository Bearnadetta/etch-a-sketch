const container = document.getElementById('container');
const clearBtn = document.getElementById('clearBtn');
const resizeBtn = document.getElementById('resizeBtn');
let userInput = '';

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

clearBtn.addEventListener('click', function(){
    if (userInput) {
        onClear(userInput);
    } else {
        onClear(16);
    }
    
});

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

