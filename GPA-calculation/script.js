//script.js
const course = [
    {name:'数学',score:90},
    {name:'英语',score:85},
    {name:'物理',score:78},
    {name:'化学',score:69},
    {name:'生物',score:88},
    {name:'历史',score:105},
    {name:'政治',score:-3},
];
//清洗数据：过滤掉异常成绩
const cleanCourse = (list) => list.filter(c => c.score >= 0 && c.score <= 100);
console.log('清洗后：',cleanCourse(course));
//计算绩点
const gpa = (list) => {
    if(list.length === 0) return 0;
    const valid = cleanCourse(list);
    const total = valid.reduce((sum,c)=>{
        const point = Math.max(0,Math.min(5.0,(c.score-50)/10));
        return sum + point;
    },0);
    return (total / valid.length).toFixed(2);
};
console.log('绩点：',gpa(course));
//每门课程的绩点
const coursePoints = cleanCourse(course).map(c => ({
    name: c.name,
    point: Math.max(0,Math.min(5.0,(c.score-50)/10))
}));
console.log('每门课程的绩点：',coursePoints);

