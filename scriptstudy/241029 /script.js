const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("arr 모든 값 출력");
console.log("---1번문제---");
for (let i = 0; i < arr.length; i++) {
  console.log(`${i}번째 값은 ${arr[i]}`);
}

console.log("---2번문제---");
console.log("arr 두배인 배열 만들어서 arr1 이라는 변수에 넣기");
const arr1 = arr.map((arr) => arr * 2);
console.log(arr1);

console.log("---3번문제---");
console.log("arr 에서 짝수만 arr2이라는 변수에 넣기");
const arr2 = arr.filter((even) => even % 2 === 0);
console.log(arr2);

console.log("---4번문제---");
console.log("arr2 에서 5보다 큰 숫자 중 첫번째 값만 출력하기");
console.log(arr2.find((arr) => arr > 5));

console.log("---5번문제---");
console.log("arr에서 오름차순으로 출력하기");
console.log(arr.sort((a, b) => a - b));

console.log("---6번문제---");
console.log("arr에서 내림차순으로 출력하기");
console.log(arr.sort((a, b) => b - a));

console.log("---7번문제---");
console.log("arr값 모두 더하기");
const sum = arr.reduce((a, b) => a + b);
console.log(sum);
