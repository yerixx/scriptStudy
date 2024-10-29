// 241001 ~ 241002 문제
//중첩 for문을 사용해서 구구단 출력

// let i;
// let j;

// for(i=2; i <10 ; i++){
//   for(j=1; j <10; j++){
//     window.document.write(`<br/>${i} * ${j} = ${i * j}` )
//     }
// }

//구구단을 테이블에 넣어봅시다..

const table = document.querySelector(".table");

// for(let i = 2; i < 10 ; i++){
//   const tr = document.createElement("tr");
//   const th = document.createElement("th");
//       th.innerText=`${i}단 `
//       for(let j = 1; j <10; j++){
//         const tr = document.createElement("tr");
//         const td = document.createElement("td");
//           td.innerText = `${i} * ${j} = ${i * j}`
//           tr.appendChild(td);
//           table.appendChild(tr);
//         };
//     tr.appendChild(th);
//     table.appendChild(tr);
// }
for (let i = 1; i < 10; i++) {
  for (let j = 2; j < 10; j++) {}
  table.appendChild(tr);
}

// for(let j = 1; j <10; j++){
//   const tr = document.createElement("tr");
//   const td = document.createElement("td");
//     td.innerText = `${i} * ${j} = ${i * j}`
//     tr.appendChild(td);
//     table.appendChild(tr);
//   };

// const table = document.querySelector(".table");
// for (let i = 2; i < 10; i++) {
//   const tr = document.createElement("tr"); // 새로운 행 생성
//   for (let j = 1; j < 10; j++) {
//     const td = document.createElement("td"); // 새로운 셀 생성
//     td.innerText = `${i} * ${j} = ${i * j}`; // 구구단 값 추가
//     tr.appendChild(td); // 셀을 행에 추가
//   }
//   table.appendChild(tr); // 행을 테이블에 추가
// }
