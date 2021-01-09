import {renderContent, createHtmlElement, pageArticle} from './page-loader';

function render(){
    let $article = pageArticle();
    let $canvas = $article.querySelector('.main');
    $canvas.classList.add('transparent');
    $canvas.classList.add('home-canvas');
    let $content = createHtmlElement('h2', 'bienvenido');
    let $slogan = createHtmlElement('p', "Encuentra San Miguel de Allende");
    let $button = createHtmlElement('button', 'Ver revista');
    let $titleContainer = document.createElement('div');
    $titleContainer.classList.add('title-container');
    let $titleFirstLetter = createHtmlElement('h1', 'E');
    let $title = createHtmlElement('h1', 'ncuentros');
    $title.classList.add('page-title');
    $titleFirstLetter.classList.add('page-title');
    $titleFirstLetter.classList.add('first-letter');
    $titleContainer.appendChild($titleFirstLetter);
    $titleContainer.appendChild($title);
    $canvas.appendChild($titleContainer);
    $canvas.appendChild($content);
    $canvas.appendChild($slogan);
    $canvas.appendChild($button);
    renderContent($article);
}

export {render as renderHome};