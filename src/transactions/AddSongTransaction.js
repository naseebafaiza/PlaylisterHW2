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
    constructor(initApp) {
        super();
        this.app = initApp;
    }

    doTransaction() {
        this.app.addSong();
    }
    
    undoTransaction() {
        this.app.removeSong();
    }
}