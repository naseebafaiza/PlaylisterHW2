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
    constructor(initApp, id) {
        super();
        this.app = initApp;
        this.id = this.app.state.currentList.songs[id];
    }

    doTransaction() {
        this.app.deleteSong(this.id);
    }
    
    undoTransaction() {
        this.app.insertSongAtId(this.id, this.song);
    }
}