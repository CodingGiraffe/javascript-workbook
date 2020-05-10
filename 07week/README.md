<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Dodge Ball</title>
</head>
<body>
  <div>
    //this is where the people will be taken from the array called arrOfPeople and listed onto the dom
    //this will happen once a button called "list people" is clicked
    //once clicked the players will be removed from the list of people and put on the list of dodge ball players
      <h4>List Of People</h4>
      <ul id="people"></ul>
  </div>
  //this is the actual button you will click to add players to the list to become dodgeball players
  <button onclick="listPeopleChoices()">List People</button>
  <div>
  //this is where the list of people will go after they are clicked
  //these players were added from the list of people and will be moved to a red or blue team
  //i will need to create an li for the players to be listed on
  //player names will be removed from this list after they are moved to a red or blue team
      <h4>Dodge Ball Players</h4>
      <ul id="players"></ul>
  </div>
  <div>
  //this is the final stop for the players
  //each player will be assigned to either the red or the blue team and stay there unless page is refreshed...maybe add a delete button?
      <h4>Blue Team</h4>
      <ul id="blue"></ul>
  </div>
  <div>
  //this is the other team 
      <h4>Red Team</h4>
      <ul id="red"></ul>
  </div>
  <script src='./main.js'></script>
</body>
</html>