import './menustyle.css';

export function menuPageLoad() {
    const content = document.getElementById('content');
    const menu = document.createElement('div');
    const menuTitle = document.createElement('div');

    menu.className = 'menuTab';
    menuTitle.className = 'menu-title';

    content.appendChild(menu);
    menu.appendChild(menuTitle);

    menuTitle.innerHTML = '<p>Made with the best,<br> for the best.<p>'
    const menuHTML = `
    <div class="menu-food">
        <div class="menu-name">Hawaii Pineapple Burger</div>
        <div class="price">$9.99</div>
    </div>

    <div class="menu-food">
        <div class="menu-name">Zinger Burger</div>
        <div class="price">$10</div>
    </div>

    <div class="menu-food">
        <div class="menu-name">Chicken Bucket</div>
        <div class="price">$19.99</div>
    </div>

    <div class="menu-food">
        <div class="menu-name">Chick Fillets Set Meals</div>
        <div class="price">$9.99</div>
    </div>

    <div class="menu-food no-bottom">
        <div class="menu-name">Can of Coke</div>
        <div class="price">$99.99</div>
    </div>`;
    menu.insertAdjacentHTML('beforeend', menuHTML);
}