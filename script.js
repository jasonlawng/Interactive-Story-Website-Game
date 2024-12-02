const story = document.getElementById("story-text");
const gameContainer = document.getElementById("game-container");
const buttonContainer = document.getElementById("button-container");

//first scene after clicking "Play"
function scene1 () {
	story.innerHTML = "You wake up. What do you want to do now?"; 

	buttonContainer.innerHTML = "<button onclick= 'scene2()'>Hit the snooze button</button><button onclick= 'scene3()'   >Turn off the alarm and get up</button>";	

	gameContainer.style.backgroundImage = "url('https://media.istockphoto.com/id/1145215349/photo/man-reaching-to-turning-off-digital-alarm-clock-in-the-morning-at-07-00-a-m.jpg?s=612x612&w=0&k=20&c=Va4etGsqQm3WGD0nMTwZVOoahsna6fYDBjyqJmVpgzQ=')"; 
}  

//second scene
function scene2 () {
	story.innerHTML = "You decide to hit snooze and sleep for a little longer. What now?";   

	buttonContainer.innerHTML = "<button onclick= 'scene3()'>Get out of bed</button><button onclick= 'gameOver()'>Sleep for even longer</button>";

	gameContainer.style.backgroundImage = "url('https://media.istockphoto.com/id/1145215349/photo/man-reaching-to-turning-off-digital-alarm-clock-in-the-morning-at-07-00-a-m.jpg?s=612x612&w=0&k=20&c=Va4etGsqQm3WGD0nMTwZVOoahsna6fYDBjyqJmVpgzQ=')"; 
} 

//third scene
function scene3 () {
	story.innerHTML = "You wake up. Do you get ready for school, or stay in bed for longer?";   

	buttonContainer.innerHTML = "<button onclick= 'win()'>Get ready for school</button><button onclick= 'gameOver()'>Stay in bed longer</button>";   

	gameContainer.style.backgroundImage = "url('https://img.freepik.com/free-photo/medium-shot-man-waking-up_23-2149019670.jpg?w=2000')";  
} 

//"game over" scene
function gameOver() {
	story.innerHTML = "You are now late for school."; 

	buttonContainer.innerHTML =  "<button onclick= 'scene1()'>Try again</button>";

	gameContainer.style.backgroundImage = "url('https://previews.123rf.com/images/rawpixel/rawpixel1711/rawpixel171107632/90814995-young-student-late-for-school.jpg')"; 
}

//"win" scene
function win() {
	story.innerHTML = "You get to school on time.";

	buttonContainer.innerHTML = "<button onclick= 'scene1()'>Play again</button>"; 

	gameContainer.style.backgroundImage = "url('https://theeventscalendar.com/content/uploads/2016/09/Back-to-school-alarm-clock.jpeg')"; 
}
