const instructors = [
    {name: "Elia", isInstructor: true},
    {name: "Tim", isInstructor: true},
    {name: "Matt", isInstructor: true}
];

function extractKey(obj, user) {
    let newArr = [];
    obj.forEach((person) => {
        newArr.push(person[user]);
    });
    return newArr;
} 
// console.log(extractKey(instructors, "name"));


const letters = ["a","a","b","c","A"]

function firstLetters(arr, query) {
    return arr.filter((al) => 
    al.toLowerCase().includes(query.toLowerCase()))
}

// console.log(firstLetters(letters, "a"));


const words = ['awesome','example','of','forEach'];

function printFirstAndLast(str) {
    let newString = "";
    str.forEach((val) => {
        newString = val[0] + val[val.length-1]
        console.log(newString);
    });
    
}
// console.log(printFirstAndLast(words));


const numbers = [1, 2, 3, 4];

function valTimesIndex(arr) {
    return arr.map((num, ind) => {
        return num * ind;
    })
}
// console.log(valTimesIndex(numbers));


function addKeyAndValue(obj, key, value){
    return obj.reduce((acc, val) => {
        acc = Object.assign(obj)
        val[key] = value;
        return acc;
    }, [])
} 
// console.log(addKeyAndValue([{name:'Joshua'},{name:'Mark'},{name:'Arthur'}],"isInstructor", true));


let users = [
    {
      username: 'larry',
      email: 'larry@foo.com',
      yearsExperience: 22.1,
      favoriteLanguages: ['Perl', 'Java', 'C++'],
      favoriteEditor: 'Vim',
      hobbies: ['Fishing', 'Sailing', 'Hiking'],
      hometown: {
        city: 'San Francisco',
        state: 'CA'
      }
    },
    {
      username: 'jane',
      email: 'jane@test.com',
      yearsExperience: 33.9,
      favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
      favoriteEditor: 'Emacs',
      hobbies: ['Swimming', 'Biking', 'Hiking'],
      hometown: {
        city: 'New York',
        state: 'NY'
      }
    },
    {
      username: 'sam',
      email: 'sam@test.com',
      yearsExperience: 8.2,
      favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
      favoriteEditor: 'Atom',
      hobbies: ['Golf', 'Cooking', 'Archery'],
      hometown: {
        city: 'Fargo',
        state: 'SD'
      }
    },
    {
      username: 'anne',
      email: 'anne@test.com',
      yearsExperience: 4,
      favoriteLanguages: ['C#', 'C++', 'F#'],
      favoriteEditor: 'Visual Studio Code',
      hobbies: ['Tennis', 'Biking', 'Archery'],
      hometown: {
        city: 'Albany',
        state: 'NY'
      }
    },
    {
      username: 'david',
      email: 'david@test.com',
      yearsExperience: 12.5,
      favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
      favoriteEditor: 'VS Code',
      hobbies: ['Volunteering', 'Biking', 'Coding'],
      hometown: {
        city: 'Los Angeles',
        state: 'CA'
      }
    }
  ];

let printEmails = () => {
    let emails = "";
    for (let user in users) {
        emails += users[user].email + "\n";
    }
    return emails;
}
// console.log(printEmails());


let printHobbies = function () {
    let hobbies = "";
    users.forEach(user => {
        for (let hobby of user.hobbies) {
            hobbies += hobby + "\n";
        }
    });
    return hobbies;
}
// console.log(printHobbies());

function findHometownByCase(hometown) {
    return users.find((user) => {
        return user.hometown.state == hometown;
    })
}
// console.log(findHometownByCase("SD"));


function allLanguages() {
    let languages = [];
    for (let user of users) {
        languages.push(...user.favoriteLanguages)
    }
    return languages.filter((lang, index, array) => {
        if (array.indexOf(lang) === index) {
            return lang;
        }
    })
}
// console.log(allLanguages());


function hasFavoriteEditor(user) {
    let div = users.find((editor) => {
        return editor.favoriteEditor == user ? true : false;
    })
    return div ? true : false;
}
// console.log(hasFavoriteEditor("VSCode"));


function findByUsername(name) {
    return users.find((user) => {
        return user.username == name;
    })
} 
// console.log(findByUsername("david"));


vowels = ["a", "e", "i", "o", "u"];

function vowelCount(str) {
    let vine = [];
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            vine.push(str[i])
        }
    }
    return vine.reduce((acc, value) => {
        acc[value] = vine.filter((ind) => ind == value).length
        return acc;
    },{})
}
// console.log(vowelCount("fun"));


function removeVowels(str) {
    let newString = [...str];
    return newString.filter((value) => {
        if (!vowels.includes(value)) {
            return value
        }
    })
}
console.log(removeVowels("silly"));