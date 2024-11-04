document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.slide-in, .fade-in');

    const scrollHandler = () => {
        elements.forEach(element => {
            const position = element.getBoundingClientRect().top;
            if (position < window.innerHeight * 0.9) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', scrollHandler);
    scrollHandler(); 
});