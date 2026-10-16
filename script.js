document.getElementById("btn").onclick = function () {
    let num = Number(document.getElementById("ip").value);
    let output = document.getElementById("output");

    output.innerHTML = "";

    new Promise((resolve) => {
        setTimeout(() => resolve(num), 2000);
    })
    .then((result) => {
        output.innerHTML = `Result: ${result}`;
        return new Promise((resolve) => {
            setTimeout(() => resolve(result * 2), 2000);
        });
    })
    .then((result) => {
        output.innerHTML = `Result: ${result}`;
        return new Promise((resolve) => {
            setTimeout(() => resolve(result - 3), 1000);
        });
    })
    .then((result) => {
        output.innerHTML = `Result: ${result}`;
        return new Promise((resolve) => {
            setTimeout(() => resolve(result / 2), 1000);
        });
    })
    .then((result) => {
        output.innerHTML = `Final Result: ${result + 10}`;
    });
};