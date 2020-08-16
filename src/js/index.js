import List from './models/List';
import Search from './models/Search';
import * as searchView from './views/searchView';
import * as listView from './views/listView';
import { elements } from './views/base';

/** Global state of the app **/
const state = {};

state.decorList = new List();
state.decorList.getResults();
listView.renderResults(state.decorList.result);

const controlSearch = async () => {
    // 1) Get query from view
    const query = 'pizza';
    //const query = searchView.getInput();

    if (query) {
        // 2) New search object and add to state
        state.search = new Search(query);

        // 3) Prepare UI for results

        // searchView.clearInput();
        // searchView.clearResults();
        // renderLoader(elements.searchRes);

        try {
            // 4) Search for item
            await state.search.getResults();
            console.log(state.search.result);
    
            // 5) Render results on UI

            // clearLoader();
            // searchView.renderResults(state.search.result);
        } catch (err) {
            alert('Something wrong with the search...');
            //clearLoader();
        }
    }
}

elements.searchForm.addEventListener('submit', e =>{
    e.preventDefault();
    controlSearch();
});

(function() {
    const accordion = document.getElementsByClassName("accordion");
    let current = -1;

    for (let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', function() {
            this.nextElementSibling.classList.toggle('panel-open');
            current = this.classList.toggle('active') ? i : -1;
        });
    };
})();

elements.resultPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-paginate');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        listView.clearResults();
        listView.renderResults(state.decorList.result, goToPage);
    }
});