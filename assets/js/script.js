// TODO: Declare any global variables we need
let headsRolls = 0
let tailsRolls = 0

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // Determine result using Math.random() which returns a value between 0 and 0.5
    // Therefore, it has a 50% chance to be below 0.5
        document.getElementById('flip').addEventListener('click', () => {
            let flippedHeads = Math.random() < 0.5
        })

    // Take different actions for heads vs tails flipped
    if(flippedHeads){
        // Display image and message as heads
        document.getElementById('penny-image').src = 'assets/image/penny-heads.jpg'
        document.getElementById('message').textContent = 'You Flipped Heads!'
    
        // Add one at the count of number of heads flipped
        headsRolls +=1
    } 
    else {
        // Display image and message as tails
        document.getElementById('penny-image').src = 'assets/image/penny-tails.jpg'
        document.getElementById('message').textContent = 'You Flipped Tails!'

        // Add one to the count of number of heads flipped
        tailsRolls += 1
    }
    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})