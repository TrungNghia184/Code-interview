const result = 1;
const result2 = 2;
const result3 = 3;
const api = new Promise((resolve, reject) => {
    resolve(result)
})
const api2 = new Promise((resolve, reject) => {
    resolve(result2)
})
const api3 = new Promise((resolve, reject) => {
    resolve(result3)
})

api
.finally(() => {console.log('result:', result)})
.then(
    api2
    .finally(() => {console.log('result2:', result2)})
    .then(
        api3
        .then(() => {console.log('result3:', result3)})
    )
)
    
 
