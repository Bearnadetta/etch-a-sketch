const container = document.getElementById('container');

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



onClear(16);
