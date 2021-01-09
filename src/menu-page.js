import {renderContent, createHtmlElement, pageArticle} from './page-loader';

function render(){
    let $article = pageArticle();
    let $canvas = $article.querySelector('.main');
    let $title = createHtmlElement('h1', 'Catálogo de revistas');
    $title.classList.add('page-title'); 
    $canvas.appendChild($title);
    renderContent($article);
}

export {render as renderCatalogo};