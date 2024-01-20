(function(){
    // Obtener todos los elementos con la clase 'questions-title'
    const titleQuestions = [...document.querySelectorAll('.questions-title')];
    
    // Iterar sobre cada elemento 'questions-title'
    titleQuestions.forEach(question => {
        // Agregar un evento de clic a cada elemento 'questions-title'
        question.addEventListener('click', () => {
            // Inicializar la altura a 0
            let height = 0;

            // Obtener la respuesta adyacente al elemento 'questions-title'
            let answer = question.nextElementSibling;

            // Obtener el contenedor principal del 'questions-title'
            let addPadding = question.parentElement.parentElement;

            // Alternar la clase para agregar o quitar relleno (padding)
            addPadding.classList.toggle('questions-padding--add');

            // Alternar la rotación de la flecha dentro del 'questions-title'
            question.children[0].classList.toggle('questions-arrow--rotate');

            // Verificar si la altura de la respuesta es 0
            if (answer.clientHeight === 0) {
                // Si es 0, establecer la altura al valor completo (scrollHeight)
                height = answer.scrollHeight;
            }

            // Establecer la altura de la respuesta
            answer.style.height = `${height}px`; 
        });
    });
})();