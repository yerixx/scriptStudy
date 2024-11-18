// 1번 문제 : 짝수를 추출하는 함수를 만들어주세요
const numbers1 = [1, 2, 3, 4, 5, 6];
const numA = numbers1.filter((it) => it % 2 === 0);
console.log(numA);
// 2번 문제 : 가장 큰 값 추출하는 함수를 만들어주세요
const numbers2 = [3, 5, 7, 2, 8];
const numB = Math.max(...numbers2);
console.log(numB);
