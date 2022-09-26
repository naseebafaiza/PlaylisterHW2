import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * EditSongTransaction
 * 
 * This class represents a transaction that works with editing a song.
 * It will be managed by the transaction stack.
 * 
 * @author Naseeba Faiza
 * @author ?
 */
 export default class EditSongTransaction extends jsTPS_Transaction {
    constructor(initApp, id) {
        super();
        this.app = initApp;
        this.id = id;
        this.prevTitle = this.app.state.currentList.songs[this.id].title; 
        this.newTitle = document.getElementById("title-input").value;
        this.prevArtist = this.app.state.currentList.songs[this.id].artist;
        this.newArtist = document.getElementById("artist-input").value;
        this.prevYouTubeId = this.app.state.currentList.songs[this.id].youTubeId;
        this.newYouTubeId = document.getElementById("yt-input").value;


    }

    doTransaction() {
        this.app.editSong(this.id, this.newTitle, this.newArtist, this.newYouTubeId);
    }
    
    undoTransaction() {
        this.app.editSong(this.id, this.prevTitle, this.prevArtist, this.prevYouTubeId);
    }
}