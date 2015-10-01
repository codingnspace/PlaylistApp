//songs app
var songs = [];

var Song = function(title, artist, genre) {
  this.title = title;
  this.artist = artist;
  this.genre = genre;
}

var wonderwall = new Song("wonderwall", 'Oasis', 'popishthing');
var stairway = new Song("Stairway to Heaven", "Led Zepp.", "Rock");
var toxic = new Song("Toxic", "Britney Spears", "pop");
songs.push(wonderwall, stairway, toxic);

function displaySongs() {
  var elemString = "";
  for(var i = 0; i < songs.length; i++) {
    elemString += getElemString(songs[i],i);
  }
  document.getElementById('songs').innerHTML = elemString;
}
displaySongs();

//when someone click the submit button, or hits enter on one of the inputs... run this function
document.getElementById('newSongForm').addEventListener('submit', function(event) {
  //do not refresh the page
  event.preventDefault();

  //get the values from the inputs and store them in variables
  var title = document.getElementById('songTitle').value;
  var artist = document.getElementById('songArtist').value;
  var genre = document.getElementById('songGenre').value;

  //create the mySong object by calling the Song constructor
  var mySong = new Song(title, artist, genre);

  //Add the created song into the song array
  songs.push(mySong);

  //append the new song to the end of the list already on the index page
  document.getElementById('songs').innerHTML += getElemString(mySong,songs.length - 1);

  //clear out the inputs
  document.getElementById('songTitle').value = "";
  document.getElementById('songArtist').value = "";
  document.getElementById('songGenre').value = "";
});

//pass in te song itself and the index of the song to get the elemString
function getElemString(song, z){
return  '<div class="well col-md-3>'
  + '<h3>' + song.title + '</h3>'
  + '<p>Artist: <i>' + song.artist + '</i></p><br/>'
  + '<p>Genre: <i>' + song.genre + '</i></p><br/>'
  //had to exit string to use js for z variable
  + '<div>'
      +  '<button class="btn btn-primary" onclick="editSong('+z+')">Edit</button>'
      +  '<button class="btn btn-danger" onclick="deleteSong('+z+')">Delete</button>'
  +'</div>'
  + '</div>';
}

function editSong(index){
  $('#editTitle').val(songs[index].title);
  $('#editArtist').val(songs[index].artist);
  $('#editGenre').val(songs[index].genre);

$('#editButton').html('<button onclick="saveChanges('+index+')" type="button" class="btn btn-primary">Save changes</button>');


$('#myModal').modal('toggle');

}

function saveChanges(index){
  var title = $('#editTitle').val();
  var artist = $('#editArtist').val();
  var genre = $('#editGenre').val();

  songs[index] = new Song(title,artist,genre);

  //Clear out all the inputs
$('#myModal').modal('toggle');

  displaySongs();
}
function deleteSong(index){
  songs.splice(index,1);
  displaySongs(); //could do animation to make it pretty
}
