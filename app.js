const container = document.getElementById('container');

const onClear = function (e) {
    container.style.setProperty('--grid-rows', e);
    container.style.setProperty('--grid-cols', e);
    for (let i = 0; i < (e* e); i++){
        let square = document.createElement('div');
        square.className = 'square';
        container.appendChild(square);

    };
};

onClear(16);

