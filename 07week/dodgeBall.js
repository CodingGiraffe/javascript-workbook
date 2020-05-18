const arrOfPeople = [
    {
      id: 2,
      name: "Charles Young",
      age: 55,
      skillSet: "welding",
      placeBorn: "Omaha, Nebraska"
    },
    {
      id: 3,
      name: "Judy Twilight",
      age: 35,
      skillSet: "fishing",
      placeBorn: "Louisville, Kentucky"
    },
    {
      id: 4,
      name: "Cynthia Doolittle",
      age: 20,
      skillSet: "tic tac toe",
      placeBorn: "Pawnee, Texas"
    },
    {
      id: 5,
      name: "John Willouby",
      age: 28,
      skillSet: "pipe fitting",
      placeBorn: "New York, New York"
    },
    {
      id: 6,
      name: "Stan Honest",
      age: 20,
      skillSet: "boom-a-rang throwing",
      placeBorn: "Perth, Australia"
    },
    {
      id: 7,
      name: "Mia Watu",
      age: 17,
      skillSet: "acrobatics",
      placeBorn: "Los Angeles, California"
    },
    {
      id: 8,
      name: "Walter Cole",
      age: 32,
      skillSet: "jump rope",
      placeBorn: "New Orleans, Louisiana"
    },
  ]
  
  const listOfPlayers = []
  const blueTeam = []
  const redTeam = []
  
  //creating a class for the player
  class Player {
    constructor(id, name, age){
        this.id = id
        this.name = name
        this.age = age
    }
  }
  
  //class that exteneds the player
  class Teammate extends Player {
    constructor(id, name, age, color){
        super(id, name, age)
        this.color = color
    }
}

//this function will will move players from players array to assigned team color
const makeTeammate = (id, color) => {
  console.log(`make teammate: li ${id} was clicked`)
  //identify element by id
  li = document.getElementById(id)
  //remove child from parent node
  li.parentNode.removeChild(li)

  //loop through all the players and find player by id
  listOfPlayers.forEach((player) => {
    //create a conditional to make teammate
      if(player.id == id) {
        //create a new teammate instance 
          let newTeammate = new Teammate(player.id, player.name, player.age, color)
          //add player to the correct team color array
          if(color == 'Red') {
              redTeam.push(newTeammate)
          } else { 
              blueTeam.push(newTeammate)
          }

        //add to the dom
        addTeammate(newTeammate)
      }
  })

  //remove player from list of players
  listOfPlayers.filter((player) => {
      player.id !== id
  })
}

  //add teammate element to the dom
  const addTeammate = (teammate) => {
    console.log("my new teammate = " + teammate)
    //make a variable to to get element by id
    const listElement = document.getElementById(teammate.color.toLowerCase())
    //create an li to hold new teammates
    const li = document.createElement("li")
    li.id = teammate.id
    //create text so information is readable for user
    li.appendChild(document.createTextNode(teammate.name + " - " + teammate.age+" years old"))
    //attach information to the dom
    listElement.append(li)
}
  
  //add player to the dom
  const addPlayer = (player) => {    
      //we need to get the id from the dom for the players
      const listElement = document.getElementById('players')
      //create a list items
      const li = document.createElement("li")
      //make the li id equal to the player id
      li.id = player.id
      //create a button for the red team
      const redButton = document.createElement("button")
      //button needs to say "make red"
      redButton.innerHTML = "Make Red"
      //when the red button is clicked it will invoke the makeTeammate function
      redButton.addEventListener('click', function () {makeTeammate(player.id, 'Red')} )
      //add button to the dom
      li.appendChild(redButton)
      
      //same thing with the blue button as red button
      const blueButton = document.createElement("button")
      blueButton.innerHTML = "Make Blue"
      blueButton.addEventListener('click', function () {makeTeammate(player.id, 'Blue')} )
      li.appendChild(blueButton)

      //we need to add the information to the dom so it is user friendly, easy to read and understand
      li.appendChild(document.createTextNode(player.name + " - " + player.age+" years old"))
      //add information to dom
      listElement.append(li)
  }

  //this function will take the people from the list of people array and add them to listOfPlayers array
  const makePlayer = (id) => {
    console.log(`li ${id} was clicked for makePlayer function`)
    //we need to identify element by id
      li = document.getElementById(id)
      //remove child from parent node
      li.parentNode.removeChild(li)

      //now we need to loop through each person in the arrOfPeople 
      arrOfPeople.forEach((person) => {
        //get info from the arrayOfPeople
          if(person.id == id) {
              //create an instance to gather information
              let newPlayer = new Player(person.id, person.name, person.age)
              //add Player to listOfPlayers array 
              listOfPlayers.push(newPlayer)
              //this log is showing objects added to the array listOfPlayers
              console.log(`here is the list of player ${listOfPlayers}`)
              //now put each player in teh listOfPlayers array in the addPlayer function
              addPlayer(newPlayer)
          }
      })

      //remove player from List of People
      arrOfPeople.filter ((person) => {
          person.id != id
      })
  }

  //this function will add people from the arrOfPeople to the dom by clicking the list people button by using an onclick method 
  const listPeopleChoices = () => {
    //this will get the "list of people" from html using id = people 
    const listElement = document.getElementById('people')
    //now we need to go through each person and add name and skill set to the dom
    arrOfPeople.map(person => {
      //this will create list items on the dom 
        const li = document.createElement("li")
        //this will identify each person by their id
        li.id = person.id
        console.log("the persons id = " + person.id)
        //now we need to create a button to move players from people list to player list
        const button = document.createElement('button')
        //this button will need to say "make player"
        button.innerHTML = "Make Player"
        //now we need to add functionality to the button by doing something when it is clicked on in the dom
        //when the button is clicked it will move the player from the people list to the player list by using the makePlayer function
        button.addEventListener('click', function () {makePlayer(person.id)} )
        //adding the button to the dom
        li.appendChild(button)
        //adding name and skill set to the dom
        li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
        //adding the people from arrOfPeople to the dom
        listElement.append(li)
    })
}

  