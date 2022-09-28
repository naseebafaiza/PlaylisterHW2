import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * AddSongTransaction
 * 
 * This class represents a transaction that works with adding a song.
 * It will be managed by the transaction stack.
 * 
 * @author Naseeba Faiza
 * @author ?
 */
 export default class AddSongTransaction extends jsTPS_Transaction {
    constructor(initApp, index) {
        super();
        this.app = initApp;
        this.index = this.app.getPlaylistSize();
    }

    doTransaction() {
        console.log("redo song did");
        this.app.addSong();
    }
    
    undoTransaction() {
        console.log("undo song done::"+this.index);
        this.app.deleteSongAtId(this.index);
    }
}