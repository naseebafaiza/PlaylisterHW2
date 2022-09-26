import React, { Component } from 'react';

export default class DeleteSongModal extends Component {
    render() {
        const { currentList, songCardId, deleteSongCallback, hideDeleteModalCallback} = this.props;
        let songName = "";
        if(currentList !== null && songCardId !== null){
            songName = currentList.songs[songCardId].title;
        }
        
        return (
            <div 
                class="modal" 
                id="delete-song-modal" 
                data-animation="slideInOutLeft">
                    <div class="modal-root" id='verify-delete-song-root'>
                        <div class="modal-north">
                            Delete Song?
                        </div>
                        <div class="modal-center">
                            <div class="modal-center-content">
                            Are you sure you wish to remove <span>{songName}</span> from the playlist?
                            </div>
                        </div>
                        <div class="modal-south">
                            <input type="button" 
                                id="delete-song-confirm-button" 
                                class="modal-button" 
                                onClick={deleteSongCallback}
                                value='Confirm' />
                            <input type="button" 
                                id="delete-song-cancel-button" 
                                class="modal-button" 
                                onClick={hideDeleteModalCallback}
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        );
    }
}
