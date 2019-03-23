let card = "";
let array = [
	{
    	image: "a random image",
        category: "travel",
        title: "Decorating New Home Office",
        date: ["image-icon", "June 27th 2015" ]
    },
    {
    	image: "a random image",
        category: "travel",
        title: "Decorating New Home Office",
        date: ["image-icon", "June 27th 2015" ]
    },
    {
    	image: "a random image",
        category: "travel",
        title: "Decorating New Home Office",
        date: ["image-icon", "June 27th 2015" ]
    },
    {
    	image: "a random image",
        category: "travel",
        title: "Decorating New Home Office",
        date: ["image-icon", "June 27th 2015" ]
    },
    {
    	image: "a random image",
        category: "travel",
        title: "Decorating New Home Office",
        date: ["image-icon", "June 27th 2015" ]
    },
    {
    	image: "a random image",
        category: "travel",
        title: "Decorating New Home Office",
        date: ["image-icon", "June 27th 2015" ]
    },
    {
    	image: "a random image",
        category: "travel",
        title: "Decorating New Home Office",
        date: ["image-icon", "June 27th 2015" ]
    },
    {
    	image: "a random image",
        category: "travel",
        title: "Decorating New Home Office",
        date: ["image-icon", "June 27th 2015" ]
    },
    {
    	image: "a random image",
        category: "travel",
        title: "Decorating New Home Office",
        date: ["image-icon", "June 27th 2015" ]
    },
    {
    	image: "a random image",
        category: "travel",
        title: "Decorating New Home Office",
        date: ["image-icon", "June 27th 2015" ]
    },
    {
    	image: "a random image",
        category: "travel",
        title: "Decorating New Home Office",
        date: ["image-icon", "June 27th 2015" ]
    },
    {
    	image: "a random image",
        category: "travel",
        title: "Decorating New Home Office",
        date: ["image-icon", "June 27th 2015" ]
    },
    {
    	image: "a random image",
        category: "travel",
        title: "Decorating New Home Office",
        date: ["image-icon", "June 27th 2015" ]
    },
    {
    	image: "a random image",
        category: "travel",
        title: "Decorating New Home Office",
        date: ["image-icon", "June 27th 2015" ]
    }, 
]

for (let i = 0; i < array.length; i++) {
	card += `<img>${array[i].image}</img> <h4>${array[i].category}<h4> <h3${array[i].title}</h3> <h5>${array[i].message}</h5>`
}

document.getElementById("cards").innerHTML = card;