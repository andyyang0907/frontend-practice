const form = document.querySelector('#add-form');
const nameInput = document.querySelector('#name-input');
const authorInput = document.querySelector('#author-input');
const ratingInput = document.querySelector('#rating-input');
const tip = document.querySelector('#tip');
const list = document.querySelector('#book-list');
let books = [];
const render = () => {
    list.innerHTML = '';
    if (books.length === 0) {
        const li = document.createElement('li');
        li.textContent = '暂无图书';
        list.appendChild(li);
        return;
    }
    books.forEach(book => {
        const li = document.createElement('li');
        li.textContent = book.name + ' | ' + book.author + ' | ' + book.rating;
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
render();