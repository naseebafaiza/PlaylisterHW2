import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * DeleteSongTransaction
 * 
 * This class represents a transaction that works with deleting a song.
 * It will be managed by the transaction stack.
 * 
 * @author Naseeba Faiza
 * @author ?
 */
 export default class DeleteSongTransaction extends jsTPS_Transaction {
    constructor(initApp, index) {
        super();
        this.app = initApp;
        this.index = index;
        this.song = this.app.state.currentList.songs[index];
    }

    doTransaction() {
        this.app.deleteSongAtId(this.index);
    }
    
    undoTransaction() {
        this.app.insertSongAtId(this.index, this.song); 
    }
}