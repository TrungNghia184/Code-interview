const result = 1;
const result2 = 2;
const result3 = 3;
function api(x) {
    console.log('result:', x);
}
function api2(x) {
    console.log('result2:', x);
}
function api3(x) {
    console.log('result3:', x);
}
(async () => {
    await api(result)
    await api2(result2)
    await api3(result3)
})()