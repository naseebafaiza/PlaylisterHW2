import React, { Component } from 'react';

export default class EditSongModal extends Component {
    render() {
        const { editSongCallback, hideEditSongModalCallback } = this.props;
        
        return (
            <div 
                class="modal" 
                id="edit-song-modal" 
                data-animation="slideInOutLeft">
                    <div class="modal-root" id='verify-edit-song-root'>
                        <div class="modal-north">
                            Edit Song
                        </div>
                        <div class="modal-center">
                            <div class="modal-center-content">
                            
                            <label for="title-input"> Title </label>
                            <input id="title-input" type="text" onClick="this.select()"></input>
                            <label for="artist-input"> Artist </label>
                            <input id="artist-input" type="text" onClick="this.select()"></input>
                            <label for="yt-input"> Youtube ID </label>
                            <input id="yt-input" type="text" onClick="this.select()"></input>
                            </div>
                        </div>
                        <div class="modal-south">
                            <input type="button" 
                                id="edit-song-confirm-button" 
                                class="modal-button" 
                                onClick={editSongCallback}
                                value='Confirm' />
                            <input type="button" 
                                id="edit-song-cancel-button" 
                                class="modal-button" 
                                onClick={hideEditSongModalCallback}
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        );
    }
}
/*

<!-- MODAL (i.e. dialog) FOR VERIFYING THE EDITING OF A SONG -->
        <div class="modal" id="edit-song-modal" data-animation="slideInOutLeft">
            <div class="modal-root" id='verify-edit-song-card'>
                <div class="modal-north">
                    Edit song?
                </div>                
                <div class="modal-center">
                <label for="newSongTitle" style="font-size:xx-large;"> Title </label>
                <input id="newSongTitle" type="text" name ="newSongTitle"/>
                <label for="newSongArtist" style="font-size: xx-large;"> Artist </label>
                <input id="newSongArtist" type="text" name ="newSongArtist"/>
                <label for="newYouTubeId" style="font-size: large;"> Youtube ID </label>
                <input id="newYouTubeId" type="text" name ="newYouTubeId"/>
                </div>
                <div class="modal-south">
                    <input type="button" id="edit-song-confirm-button" class="modal-button" value='Confirm' />
                    <input type="button" id="edit-song-cancel-button" class="modal-button" value='Cancel' />
                </div>
            </div>
        </div>
*/