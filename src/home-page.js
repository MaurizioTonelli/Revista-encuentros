import {renderContent, createHtmlElement, pageArticle} from './page-loader';

function render(){
    let $article = pageArticle();
    let $canvas = $article.querySelector('.main');
    $canvas.classList.add('transparent');
    $canvas.classList.add('home-canvas');
    let $content = createHtmlElement('h2', 'bienvenido');
    let $slogan = createHtmlElement('p', "Encuentra San Miguel de Allende");
    let $button = createHtmlElement('button', 'Ver revista');
    let $title = createHtmlElement('h1', 'Revista Encuentros');
    $title.classList.add('page-title');
    $canvas.appendChild($title);
    $canvas.appendChild($content);
    $canvas.appendChild($slogan);
    $canvas.appendChild($button);
    renderContent($article);
}

export {render as renderHome};