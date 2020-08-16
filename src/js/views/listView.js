import { elements } from './base';

const renderList = product => {
    const markup = `
        <div class="item" style="height: 505px; left: 0px; position: absolute; top: 0px; width: 323px;">
            <a class="rilrtl-products-list__link" href="" target="_blank">
                <div class="preview">
                    <div class="imgHolder"><img alt="${product.title}" class="rilrtl-lazy-img  rilrtl-lazy-img-loaded" src="${product.image_url}"></div>
                    <div class="contentHolder">
                        <div class="brand">${product.category}</div>
                        <div class="name">${product.title}</div>
                        <div class=""><span class="price  ">${product.price}</span></div>
                    </div>
                </div>
            </a>
        </div>
    `;

    elements.resultList.insertAdjacentHTML('beforeend', markup);
};

export const renderResults = products => {
    const items = products.products;
    items.forEach(renderList);
}