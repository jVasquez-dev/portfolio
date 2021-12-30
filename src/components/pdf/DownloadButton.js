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
        <div>
            <button onClick={saveFile}>download</button>
        </div>
    )
}
