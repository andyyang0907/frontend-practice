const form = document.getElementById('add-form');
const input = document.getElementById('task-input');
const tip = document.getElementById('tip');
const list = document.getElementById('task-list');

let tasks = [];
const render = () => {
    list.innerHTML = '';
    if (tasks.length === 0) {
        const li = document.createElement('li');
        li.innerHTML = '暂无任务';
        list.appendChild(li);
        return;
    }
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.text;
        if(task.done)li.classList.add('done');
        list.appendChild(li);
    });
};
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const text = input.value.trim();
    if(text === '') {
        tip.textContent = '任务名不能为空';
        return;
    }
    tasks.push({ text:text,done:false});
    tip.textContent = '';
    input.value = '';
    render();
});
render();
