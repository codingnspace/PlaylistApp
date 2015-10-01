var songs = [];

var Song = function(title, artist, genre){
  this.title = title;
  this.artist = artist;
  this.genre = genre;
}
var songCard;
var wonderwall = new Song("Wonderwall","Oasis", "Pop");
var impossible = new Song("Impossible", "Angel Haze", "Hip Hop");
var thriller = new Song("Thriller", "Michael Jackson", "Pop");
songs.push(wonderwall,impossible,thriller);

$(document).ready(function () {
$('#submit').on('click', function () {

    var songs = new Song(
    $('#songTitle').val(),
    $('#songArtist').val(),
    $('#songGenre').val(),
    );


    songs.push(song);

});
function displaySongs(){
