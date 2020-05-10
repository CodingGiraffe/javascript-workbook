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

const makeTeammate = (id, color) => {
  console.log(`make teammate: li ${id} was clicked`)
  li = document.getElementById(id)
  li.parentNode.removeChild(li)

  //loop through all the players and find player by id
  listOfPlayers.forEach((player) => {
      if(player.id == id) {
          let newTeammate = new Teammate(player.id, player.name, player.age, color)
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
    console.log(teammate)
    const listElement = document.getElementById(teammate.color.toLowerCase())
    const li = document.createElement("li")
    li.id = teammate.id
    li.appendChild(document.createTextNode(teammate.name + " - " + teammate.age+" years old"))
    listElement.append(li)
}
  
  //add player to the dom
  const addPlayer = (player) => {    
      const listElement = document.getElementById('players')
      const li = document.createElement("li")
      li.id = player.id
      const redButton = document.createElement("button")
      redButton.innerHTML = "Make Red"
      redButton.addEventListener('click', function () {makeTeammate(player.id, 'Red')} )
      li.appendChild(redButton)
  
      const blueButton = document.createElement("button")
      blueButton.innerHTML = "Make Blue"
      redButton.addEventListener('click', function () {makeTeammate(player.id, 'Blue')} )
      li.appendChild(blueButton)
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

   //this function will take the people from the list of people array and add them to players array
   const makePlayer = (id) => {
    console.log(`li ${id} was clicked for makePlayer function`)
    //we need to identify each person on the list by id
      li = document.getElementById(id)
      //and remove the people from the arrOfPeoploe 
      li.parentNode.removeChild(li)

      //now we need to loop through each person in the arrOfPeople 
      arrOfPeople.forEach((person) => {
          if(person.id == id) {
              let newPlayer = new Player(person.id, person.name, person.age)
              //add Player to listOfPlayers array 
              listOfPlayers.push(newPlayer)
              
              console.log(`here is the list of player ${listOfPlayers}`)
              addPlayer(newPlayer)
          }
      })
      arrOfPeople.filter ((person) => {
          person.id != id
      })
  }