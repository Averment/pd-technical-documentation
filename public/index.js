

function one() {
    const input = ['hello', 'goodbye'];
    const output = 'NOT IMPLEMENTED';

    displayOutput(output, 'output-1');
}

function two() {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const output = 'NOT IMPLEMENTED';

    displayOutput(output, 'output-2');
}

function three() {
    const output = 'NOT IMPLEMENTED';

    displayOutput(output, 'output-3');
}

function four() {
    const input = {name: "Steven", age: 12, town: "Bradford", job: "accountant"};
    const output = 'NOT IMPLEMENTED';

    displayOutput(output, 'output-4');
}

function five() {
    const input = [{name: "Steven", age: 15}, {name: "Paul", age: 12}, {name: "David", age: 5}];
    const output = 'NOT IMPLEMENTED';

    displayOutput(output, 'output-5');
}

function six() {
    const input = [{name: "Steven", age: 15}, {name: "Paul", age: 12}, {name: "David", age: 5}, {name: "Simon", age: 18}];
    const output = 'NOT IMPLEMENTED';

    displayOutput(output, 'output-6');
}

function seven() {
    const input = [[2,45,7,62,83,555,42], [2,40,7,62,83,55,42]];
    const output = 'NOT IMPLEMENTED';

    displayOutput(output, 'output-7');
}

function displayOutput(value, outputElementId) {
    const outputEl = document.getElementById(outputElementId);
    outputEl.innerText = value;
}