import {renderContent, createHtmlElement} from './page-loader';

function render(){
    const navItems = ["INICIO", "REVISTA", "ACERCA DE"];
    let $nav = document.createElement('nav');
    const $ul = document.createElement('ul');

    navItems.forEach((item)=>{
        $ul.appendChild(createHtmlElement('li', item));
    })
    $nav.appendChild($ul);
    renderContent($nav);
}

export {render as renderNav};