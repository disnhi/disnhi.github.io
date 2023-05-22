var character = document.getElementById("character");
var block = document.getElementById("block");

function jump(){

    // Only want the character to jump if you're not already in the air
    if(character.classList != "animate"){
        character.classList.add("animate");
    }

    // To allow the animate class to go again
    setTimeout(function(){
        character.classList.remove("animate");
    },500)
}

// To generate a random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function startGame() {
    block.style.position = "relative";
    block.style.left = "480px";
    block.style.animation = "block 1s infinite linear";
    block.style.backgroundColor = getRandomColor();
}


// will run every 10 seconds to see if you're dead or not
var checkDead = setInterval(function(){
    // Get the top position of the character
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    // Get the bottom position of the character
    var characterBottom = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));
    // Get left position of the block
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft < 50 && blockLeft > -40 && characterTop >= 130 && characterBottom <= 30) {
        
        //To restart the block 
        block.style.animation = "none";
        let text;
        if (confirm("You lost. Keep going?") == true) {
            block.style.position = "relative";
            block.style.left = "480px";
            block.style.animation = "block 1s infinite linear";
            // block.style.backgroundColor = getRandomColor();
        } else {
            block.style.animation = "none";
            block.style.display = "none";
        }
        

    }

},10);