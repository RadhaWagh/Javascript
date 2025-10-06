// 1. Array Filtering : Write a function that filters out all the even numbers from an array of integers.

let integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function arrayFilter(arr) {
    let new_array = []

    for (let i=0; i<arr.length; i++) {
        if (arr[i] % 2 === 0) {
            continue
        }
        new_array.push(arr[i])
    }
    return new_array
}

let filtered_array = arrayFilter(integers)
console.log(filtered_array)

// 2. Object Manipulation: Given an array of objects representing people with names and ages, write a function to find the person with the highest age.

const names_and_ages = [
    { name: 'james', age:27 },
    { name: 'lucy', age:31 },
    {name: 'juan', age: 102}
]

function findOldestPerson(arr) {
    let oldest_person = arr[0]

    for (let i=1; i<arr.length; i++) {
        let new_person = arr[i]
        if (new_person['age'] > oldest_person.age) {
            oldest_person = new_person
        }
    }
    return oldest_person
}

let found_oldest_person = findOldestPerson(names_and_ages)
console.log(found_oldest_person)

// 3. Data Transformation: Convert an array of strings containing numbers into an array of actual number values.

let array_of_strings = ['4', '8', '2', '10', '5']
let new_array_of_numbers = []

for (let i=0; i<array_of_strings.length; i++) {
    let converted_string_value = parseInt(array_of_strings[i])
    new_array_of_numbers.push(converted_string_value)
}

console.log(new_array_of_numbers)

// 4. Array Sorting: Write a function that sorts an array of objects based on a specific property (e.g., 'price') in ascending order.

let array_of_objects = [
    { price: 4.2 },
    { price: 8.3 },
    { price: 2.2 }
]

array_of_objects.sort(function(a,b){
    return a.price - b.price 
})

console.log(array_of_objects)

// 5. Array Manipulation: Write a function that removes the first and last elements from an array and returns the modified array.

let demo_array = [0, 1, 2, 3, 4, 5]
function trimArray(arr) {
    let array_length = arr.length
    const trimmed_array = arr.slice(1, array_length -1 )
    return(trimmed_array)
}

console.log(trimArray(demo_array))