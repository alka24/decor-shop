import { elements } from './base';

const renderList = product => {
    const markup = `
        <div class="item" style="position:relative;">
            <a class="rilrtl-products-list__link" href="" target="_blank">
                <div class="preview">
                    <div class="imgHolder" style="width:250px;height:200px;">
                        <img alt="${product.title}" class="" src="${product.image_url}">
                    </div>
                    <div class="contentHolder">
                        <span class="item-name">${product.title}</span>
                    </div>
                    <div class="">
                    <div class="item-categ" style="font-size: 10px;color: gray; float:left;text-transform:uppercase">${product.category}</div>
                    <span class="price" style="font-size: 14px;color: #333;float:right;">$${product.price}</span>
                    </div>
                </div>
            </a>
        </div>
    `;

    elements.resultList.insertAdjacentHTML('beforeend', markup);
};

const createButton = (page, type) => `
    <button class="btn-paginate btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
        <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
        </svg>
    </button>
`;

const renderButtons = (page, numResults, resPerPage) => {
    const pages = Math.ceil(numResults / resPerPage);

    let button;
    if (page === 1 && pages > 1) {
        // Only button to go to next page
        button = createButton(page, 'next');
    } else if (page < pages) {
        // Both buttons
        button = `
            ${createButton(page, 'prev')}
            ${createButton(page, 'next')}
        `;
    } else if (page === pages && pages > 1) {
        // Only button to go to prev page
        button = createButton(page, 'prev');
    }

    elements.resultPages.insertAdjacentHTML('afterbegin', button);
};

export const renderResults = (products, page = 1, resultsPerPage = 9) => {
    const items = products.products;
    const start = (page -1) * resultsPerPage;
    const end = page * resultsPerPage;
    items.slice(start, end).forEach(renderList);
    // render pagination buttons
    renderButtons(page, items.length, resultsPerPage);
};

export const clearResults = () => {
    elements.resultList.innerHTML = '';
    elements.resultPages.innerHTML = '';
};