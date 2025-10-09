// 1. Basic DOM Manipulation : How do you select an element with the ID main-title and change its text context to "Welcome to the DOM World"?

let mainTitle = document.getElementById('main-title')
mainTitle.innerText = 'Welcome to the DOM World'

// 2. Event Handling : Write the javascript code to listen for a click event on a button with the ID submit-button and alert "Button Clicked!".

let submitBtn = document.getElementById('submit-btn')

function alertfunction() {
    alert('Button Clicked!')
}

submitBtn.addEventListener('click', alertFunction)

// 3. Dynamic Styling : How can you change the background color of a <div> with the class highlight to yellow when a user hovers over it using javascrippt?

let colorDiv = document.querySelector('.highlight')

function yellowbackground() {
    colorDiv.computedStyleMap.background = 'yellow'
}

colorDiv.addEventListener('mouseover', yellowBackground)

// 4. Element Creation and Insertion: Describe hoe to create a new <li> element, set its text content to "New Item ", and append it to an existing <ul> with the ID list-container.


