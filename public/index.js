

function one() {
    const input = ['hello', 'goodbye'];
    const output = _.last(input);

    displayOutput(output, 'output-1');
}

function two() {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const output = _.shuffle(input);

    displayOutput(output, 'output-2');
}

function three() {
    const output = _.inRange(5,100);

    displayOutput(output, 'output-3');
}

function four() {
    const input = {name: "Steven", age: 12, town: "Bradford", job: "accountant"};
    const output = JSON.stringify(_.pick(input,['name', 'age']));

    displayOutput(output, 'output-4');
}

function five() {
    const input = [{name: "Steven", age: 15}, {name: "Paul", age: 12}, {name: "David", age: 5}];
    const output = _.reduce(input, function(sum, obj){
        return sum + obj.age;
    }, 0);

    displayOutput(output, 'output-5');
}

function six() {
    const input = [{name: "Steven", age: 15}, {name: "Paul", age: 12}, {name: "David", age: 5}, {name: "Simon", age: 18}];
    const output =JSON.stringify( _.filter(input, function(input) {
        return input.age >= 10;
    }));

    displayOutput(output, 'output-6');
}

function seven() {
    const input = [[2,45,7,62,83,555,42], [2,40,7,62,83,55,42]];
    const output = _.difference(input[0],input[1]);

    displayOutput(output, 'output-7');
}

function displayOutput(value, outputElementId) {
    const outputEl = document.getElementById(outputElementId);
    outputEl.innerText = value;
};