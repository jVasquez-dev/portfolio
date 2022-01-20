import React from 'react';
import { saveAs } from "file-saver";
import pdf from '../../assets/documents/resume.pdf';

export const DownloadButton = () => {

    const saveFile = () => {
        saveAs(
          pdf,
          "resume.pdf"
        );
      };

    return (
        <div className='center-footer my-1'>
            <button className='button button-simple' onClick={saveFile}>Download</button>
        </div>
    )
}
