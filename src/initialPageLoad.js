export function initialPageLoad () {
    const content = document.getElementById('content');
    const contentTitle = document.createElement('h1');
    const contentPara = document.createElement('p')

    contentTitle.className = 'title';
    contentPara.className = 'quote';

    contentTitle.innerHTML = 'TOPEATS';
    contentPara.innerHTML = 'First, we eat.<br>Then, we do everything else.';

    content.appendChild(contentTitle);
    content.appendChild(contentPara);
}