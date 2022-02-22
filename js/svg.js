const logoSvg = document.querySelector('#logo');

const fetchSvg = (logoSvg) =>{
    fetch(logoSvg)
    .then((response) => response.text())
    .then((response) => {
        const span = document.createElement('span');
        span.innerHTML = response;
        const inlineSvg = span.getElementsByTagName('svg')[0];
        logoSvg.parentNode.replaceChild(inlineSvg);
        return true;
    });
};