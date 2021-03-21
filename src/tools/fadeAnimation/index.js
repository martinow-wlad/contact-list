const fadeIn = (elem) => {
    elem.classList.remove('hide');
    elem.classList.add('fade-in');
    setTimeout(() => {
        elem.classList.remove('fade-in');
    }, 200);
}

const fadeOut = (elem) => {
    elem.classList.remove('fade-in');
    elem.classList.add('fade-out');
    setTimeout(() => {
        elem.classList.remove('fade-out');
        elem.classList.add('hide');
    }, 500);
}

export {fadeIn, fadeOut};