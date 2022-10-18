// Exercise 1

const address = {
    street: "Grace Baptist",
    city: "Lagos",
    zip: 110101
}

function showAddress() {
    const address = {
        street: "Grace Baptist",
        city: "Lagos",
        zip: 110101
    }
}
// console.log(showAddress);


// Exercise 2

// Using factory function to initialize address object
function showAddress(street, city, zip) {
    return {
        street,
        city,
        zip
    }
}
const divineAddress = showAddress("David Anita", "Abuja", 410010)
// console.log(divineAddress);


// Using constructor functions to initialize an address object
function AnotherAddress(street, city, zip, country) {
    this.street = street;
    this.city = city;
    this.zip = zip;
    this.country = country;
}

const raphaelAddress = new AnotherAddress("Alinta Onor", "lagos", 210010)

// console.log(raphaelAddress);


// Exercise 3

const address1 = new AnotherAddress("Chijioke defokwu", "Lagos", 210110, "Nigeria")

const address2 = new AnotherAddress("Gida Aina", "Abuja", 401011)
console.log(address1);

function areEqual(address1, address2) {
    let address1Length = Object.keys(address1).length;
    let address2Length = Object.keys(address2).length;

    if (address1Length === address2Length) {
        console.log(true);
    } else {
        console.log(false);
    }
}

function areSame(a, b) {
        if (address1 === address2) {
          console.log(true);  
        } else {
            console.log(false);
        }
}

// console.log(areSame(address1, address2));


// Exercise 4

const blogPost = {
    title: "Graphic Liner",
    body: "'Graphic liner' is a term used to describe the decorative use of eyeliner, most makeup artists are including in their design these days",
    author: "Divine",
    views: 100,
    comments: {
        author: "Raphael",
        body: "Oh, so that's what it meant. thanks for this explanation. Much love"
    },
    isLive: "True"
}
// console.log(blogPost);


// Exercise 5

const programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes:"http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

programming.languages[3] = "GO";


programming.difficulty = 7;

delete programming.jokes

programming.isFun =  true;
// console.log(programming);

for (let key of Object.keys(programming));
    // console.log(programming[key]);
    // console.log(key);
