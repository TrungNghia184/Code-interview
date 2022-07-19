const result = 1;
const result2 = 2;
const result3 = 3;
function api(func) {
  func(result);
}
function api2(func) {
  func(result2);
}
function api3(func) {
  func(result3);
}
api(function (result) {
  console.log("result: ", result);
  api2(function (result2) {
    console.log("result2: ", result2);
    api3(function (result3) {
      console.log("result3: ", result3);
    });
  });
});
