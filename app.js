

let btnMain = document.querySelector(".main");

let btnCatalog = document.querySelector(".catalog");

let btnContacts = document.querySelector(".contacts");

let containerRoot = document.querySelector(".root");


let objectContent = {

    mainPage: `
        <h1>Это главная страница</h1>
        <h3>Samnesvoj</h3>
    `, 
    catalogPage: `

        <h1>Страница каталог</h1>
        <p>У нас самые прекрасные цветы и самый лучший магазин в городе Краснодара</p>
    `,
    conctactsPage: `

        <h1>Страница Контакты</h1>
        <p>Мы находимся по адлресу Казбекская 13</p>

    `
}


btnCatalog.onclick = () => {
    containerRoot.innerHTML = objectContent.catalogPage;
}

btnMain.onclick = () => {
    containerRoot.innerHTML = objectContent.mainPage;

}

btnContacts.onclick = () => {
    containerRoot.innerHTML = objectContent.conctactsPage;
}