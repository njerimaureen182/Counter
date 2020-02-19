// variable to select the 'counter class'
let counter = document.querySelector('.counter');
const addCount = document.querySelector('#addCountBtn');
const lowerCount = document.querySelector('#lowerCountBtn');

// variable to store our number
let count = 0;

// to add event listeners t our buttons
addCount.addEventListener('click', incrementCounter);
lowerCount.addEventListener('click', decrementCounter);

// to set up a callback function for incrementCounter:
function incrementCounter() {
    count++;
    counter.innerHTML = count;

    // to set the color if the values are positive:
    if (counter.innerHTML > 0) {
        counter.style.color = 'olive';
    } else if(counter.innerHTML == 0){
        counter.style.color = '#fff';

    }

    // to animate the counter:
    counter.animate(
        [
            {
                opacity:0.2
            },
            {
                opacity:0.8
            }
        ],
        {
            duration: 1000,
            fill:'forwards'

        }
    );
}

// to set up a callback functon for decrementCounter:
function decrementCounter() {
    count--;
    counter.innerHTML = count;

    // to set the color if the values are negative:
    if (counter.innerHTML < 0) {
        counter.style.color = 'tomato';
    } else if(counter.innerHTML == 0){
        counter.style.color = '#fff';

    }

    // animation to decrement:
    counter.animate([
        {
            opacity:0.2
        },
        {
            opacity:0.8
        }
    ],
    {
        duration: 1000,
        fill: "forwards"
    }

    );
}

