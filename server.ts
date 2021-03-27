import { add, multiply } from './arithmetic.ts';

// ! Basic Operations

function capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function hello(name: string): string {
    return "Hello " + capitalize(name);
}

console.log(hello("Pavan"));
console.log(hello("Aditya"));
console.log(hello("M S"));

// ! Using Imports

function totalCost(outbound: number, inbound: number, tax: number): number {
    return multiply(add(outbound, inbound), tax);
}

console.log(totalCost(19, 31, 1.2));
console.log(totalCost(45, 27, 1.15));


// ! Fetch call, Internet usage


const json = fetch("https://api.github.com/users/denoland");

json.then((response) => {
    return response.json();
}).then((jsonData) => {
    console.log(jsonData);
});

const text = fetch("https://deno.land/");

text.then((response) => {
    return response.text();
}).then((textData) => {
    console.log(textData); // ? Data
});

const error = fetch("https://does.not.exist/");

error.catch((error) => console.log(error.message)); // ? Error


// ! Read/Write Files, Files system usage


function writeJson(path: string, data: object): string {
    try {
        Deno.writeTextFileSync(path, JSON.stringify(data));

        return "Written to " + path;
    } catch (e) {
        return e.message;
    }
}

console.log(writeJson("./data.json", { hello: "World" }));