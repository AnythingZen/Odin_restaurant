import './style.css';
import { initialPageLoad } from './initialPageLoad';
import { menuPageLoad } from './menuPageLoad';
import { aboutPageLoad } from './aboutPageLoad';

initialPageLoad();

(function tabSwitch () {

    const buttonsContainer = document.querySelector('.nav-bar');
    let currentPage = 'home';
    const homePageStyle = content.style.cssText;
    
    buttonsContainer.addEventListener('click', (e) => {
        
        const nav = e.target.className;
        
        // check if in nav, and whether nav is in same page
        if (nav && nav != currentPage) {
            contentStyleReset();
            switch (nav) {
                case 'home':
                    content.style.cssText = homePageStyle;
                    initialPageLoad();
                    break;

                case 'menu':
                    menuPageLoad();
                    break;

                case 'about':
                    aboutPageLoad();
                    break;
            }
            currentPage = nav;
        }
        
    })
})();

function contentStyleReset() {
    content.innerHTML = '';
    content.style.setProperty('all', 'initial');
}

