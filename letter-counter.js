document.addEventListener("DOMContentLoaded", function () {
    function letterCounter(length) {
        var cells = document.querySelectorAll('.news-summary');
        cells.forEach(function (cell) {
            var contenido = cell.textContent;
            if (contenido.length > length) {
                cell.textContent = contenido.substring(0, length) + '...';
            }
        });
    }

    function handleResize() {
        if (window.innerWidth >= 1025 && window.innerWidth <= 1200) {
            letterCounter(160);
        } else if (window.innerWidth >= 1201 && window.innerWidth <= 1400) {
            letterCounter(240);
        }
    }

    handleResize();

    window.addEventListener("resize", function () {
        handleResize();
    });
});