let text = "";
let array = [
	{
    	brand: "BBQ",
        message: "hello there!"
    },
    {
    	brand: "Volvo",
        message: "hello there! 2"
    },
    {
    	brand: "Saab",
        message: "hello there! 3"
    },
    
]

for (let i = 0; i < array.length; i++) {
	text += `<h1>${array[i].brand}</h1> ${array[i].message} <br>`
}

document.getElementById("demo").innerHTML = text;