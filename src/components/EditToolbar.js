import React from "react";

export default class EditToolbar extends React.Component {
    render() {
        const { canAddSong, canUndo, canRedo, canClose, 
                undoCallback, redoCallback, closeCallback, addSongCallback} = this.props;
        let addSongClass = "playlister-button";
        let undoClass = "playlister-button";
        let redoClass = "playlister-button";
        let closeClass = "playlister-button";

        if (!canAddSong) {
            addSongClass += "-disabled";
        } 

        if (!canUndo) {
            undoClass += "-disabled";
        } 

        if (!canRedo){
            redoClass += "-disabled";
        } 

        if (!canClose){
            closeClass += "-disabled";
        } 
        
        return (
            <div id="edit-toolbar">
            <input 
                type="button" 
                id='add-song-button' 
                value="+" 
                className={addSongClass}
                onClick={addSongCallback}
            
            />
            <input 
                type="button" 
                id='undo-button' 
                value="⟲" 
                className={undoClass} 
                onClick={undoCallback}
            />
            <input 
                type="button" 
                id='redo-button' 
                value="⟳" 
                className={redoClass} 
                onClick={redoCallback}
            />
            <input 
                type="button" 
                id='close-button' 
                value="&#x2715;" 
                className={closeClass} 
                onClick={closeCallback}
            />
        </div>
        )
    }
}