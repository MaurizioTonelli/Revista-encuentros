import {renderContent, createHtmlElement, clearContent} from './page-loader';
import {renderNav} from './nav-bar';
import {renderFooter} from './footer';
import {renderHome} from './home-page';
import {renderCatalogo} from './menu-page';
import {renderAbout} from './about-page';


function showHome(){
    clearContent();
    renderNav();
    renderHome();
    renderFooter();
}
function showCatalogo(){
    clearContent();
    renderNav();
    renderCatalogo();
    renderFooter();
}
function showAbout(){
    clearContent();
    renderNav();
    renderAbout();
    renderFooter();
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomBackground(){
    let randNum = getRandomInt(1,12);
    let randomBackground = `url(img/fondo${randNum}.jpg)`;
    console.log(randomBackground);
    return randomBackground;
}

showHome();

document.addEventListener('click', (e)=>{
    const target = e.target.textContent;

    if(target == 'INICIO') showHome();
    if(target == 'REVISTA' || target == "Ver revista") showCatalogo();
    if(target == 'ACERCA DE') showAbout();
});


document.querySelector("#content").style.backgroundImage = getRandomBackground();
