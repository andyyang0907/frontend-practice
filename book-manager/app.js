const form = document.querySelector('#add-form');
const nameInput = document.querySelector('#name-input');
const authorInput = document.querySelector('#author-input');
const ratingInput = document.querySelector('#rating-input');
const tip = document.querySelector('#tip');
const list = document.querySelector('#book-list');
const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-btn');
const allBtn = document.querySelector('#all-btn');
let books = [];
const render = (shown = books) => {
    list.innerHTML = '';
    if (shown.length === 0) {
        const li = document.createElement('li');
        li.textContent = '暂无图书';
        list.appendChild(li);
        return;
    }
    shown.forEach((book, index) => {
        const li = document.createElement('li');
        li.textContent = book.name + ' | ' + book.author + ' | ' + book.rating;
        const del = document.createElement('button');
        del.textContent = '删除';
        del.addEventListener('click', () => {
            books.splice(index, 1);
            render();
        });
        li.appendChild(del);
        list.appendChild(li);
    });
};
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const author = authorInput.value.trim();
    const rating = ratingInput.value.trim();
    if (name === '' || author === '' || rating === '') {
        tip.textContent = '图书信息不能为空';
        return;
    }
    books.push({
        name: name,
        author: author,
        rating: rating
    });
    tip.textContent = '';
    nameInput.value = '';
    authorInput.value = '';
    ratingInput.value = '';
    render();
});
searchBtn.addEventListener('click', () => {
    const text = searchInput.value.trim();
    const shown = books.filter(book => book.name.includes(text));
    render(shown);
});
allBtn.addEventListener('click', () => {
    searchInput.value = '';
    render();
});
render();