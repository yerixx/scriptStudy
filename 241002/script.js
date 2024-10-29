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


const table = document.querySelector(".table")
for(let i = 2; i <10 ; i++){
  const tr = document.createElement("tr");
  tr.innerText=`${i}단 `
  for(let j = 1; j <10; j++){
    const td = document.createElement("td");
    td.innerText = `${i} * ${j} = ${i * j}`
    tr.appendChild(td);
    };
    table.appendChild(tr);
}


