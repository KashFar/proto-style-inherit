// Here is the Speaker constructor

function Speaker (givenName, surname, email, biography){
  this.givenName = givenName;
  this.surname = surname;
  this.email = email;
  this.biography = biography;
  this.isActive = true;

  this.getBiography()
  }

Speaker.prototype.getBiography = function (){
  console.log(this.givenName)
  console.log(this.surname)
  console.log(this.biography)
}

Speaker.prototype.markInactive = function (date){
  this.isActive = false;
  this.inactiveDate = date;
}

function KeynoteSpeaker (websites, keynoteTopics, breakouts, givenName, surname, email, biography){
Speaker.call(this, this, this, givenName, surname, email, biography);
this.websites = websites;
this.keynoteTopics = keynoteTopics;
this.breakouts = breakouts;
}

KeynoteSpeaker.prototype = Object.create(Speaker.prototype);
KeynoteSpeaker.prototype.constructor = KeynoteSpeaker;

function WorkshopSpeaker (workshopTopics, givenName, surname, email, biography){
Speaker.call(this, givenName, surname, email, biography);
this.workshopTopics = workshopTopics;
}

WorkshopSpeaker.prototype = Object.create(Speaker.prototype);
WorkshopSpeaker.prototype.constructor = WorkshopSpeaker;

let Alex = new Speaker ("Alex", "Manuel", "gmail", "Hi, how are you?")

let Tom = new KeynoteSpeaker ("Keynote.com", "Entrepreneurship", "14 minute breakouts", "Tom", "Sanchesto", "Hotmail", "You, Don't know me!")

let Sam = new WorkshopSpeaker  ("personal Finance", "Sam", "Samanathanos", "Verizon.net", "They call me Sam, Destroyer of Worlds.")