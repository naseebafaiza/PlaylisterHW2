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
                            <div id="title-input-"> Title </div>
                            <input id="title-input" type="text" onClick="this.select()"></input>
                            <div id="artist-input-"> Artist </div>
                            <input id="artist-input" type="text" onClick="this.select()"></input>
                            <div id="yt-input-"> YouTube Id </div>
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
