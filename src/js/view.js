(function(window, document, undefined) {

    var indexFilter = document.querySelector('[data-name|="index"]');

    indexFilter.addEventListener('click', toggleArrow);

    function toggleArrow(e) {
        e.target.classList.toggle('index-filter__btn_reverse');
    }

    var nameFilter = document.querySelector('[data-name|="name"]');

    nameFilter.addEventListener('click', togglevarters);

    function togglevarters(e) {
        if (e.target.innerHTML === 'A to Z') {
            e.target.innerHTML = 'Z to A';
        } else {
            e.target.innerHTML = 'A to Z';
        }
    };

})(window, document, undefined);
