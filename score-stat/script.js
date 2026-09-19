//script.js
const score = [
    {name:'李四',score:92},
    {name:'王五',score:85},
    {name:'赵六',score:78},
    {name:'孙七',score:59},
    {name:'周八',score:88},
    {name:'吴九',score:105},
    {name:'郑十',score:-3},
];
//清洗：过滤掉异常成绩
const cleanScore = (list) => list.filter(s => s.score >= 0 && s.score <= 100);
const average = (list)=>{
    if(list.length === 0) return 0;
    const total = list.reduce((sum, s) => sum + s.score, 0);
    return (total / list.length).toFixed(2);
};
//最高分
const highest = (list) => list.reduce((max, s) => s.score > max.score ? s : max, list[0]);
//不及格名单
const failed = (list) => list.filter(s => s.score < 60).map(s => s.name);
console.log('清洗后：',cleanScore(score));
console.log('平均分：',average(cleanScore(score)));
console.log('最高分：',highest(cleanScore(score)));
console.log('不及格：',failed(cleanScore(score)));

