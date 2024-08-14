//ДЗ 1

// function counter(count = 0) {
//   const increaseCount = () => {
//     count++;
//     viewData();
//   };
//   const reduceCount = () => {
//     count--;
//     viewData();
//   };
//   const viewData = () => {
//     console.log(count);
//   };
//   return {
//     increaseCount,
//     reduceCount,
//   };
// }

// const myFunc = counter();

// myFunc.increaseCount();
// myFunc.increaseCount();
// myFunc.increaseCount();
// myFunc.increaseCount();
// myFunc.reduceCount();
// myFunc.reduceCount();
// myFunc.reduceCount();
// myFunc.reduceCount();

//ДЗ 2
// function test(isAuth) {
//   if (isAuth) {
//     return function (url) {
//       return function (id) {
//         console.log(
//           `Авторизованный пользователь запрашивает данные по id: ${id} , по url: ${url}`
//         );
//       };
//     };
//   } else {
//     console.log(
//       `Не авторизованный пользователь запрашивает данные по id: ${id} , по url: ${url}`
//     );
//   }
// }

// test("https://192.112.122")("8080")(20);

//ДЗ 3

let codeInput = document.querySelector(".code");
let run = document.querySelector(".run");

run.addEventListener("click", function () {
  let inputValue = codeInput.value;
  let codeRunner = new Function("name", "age", inputValue);
  let codeResult = codeRunner("Gani", "21");
  alert(codeResult);
});
