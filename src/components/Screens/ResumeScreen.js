import React from 'react';
import { DownloadButton } from '../pdf/DownloadButton';
import { PDF } from '../pdf/PDF';

export const ResumeScreen = () => {
    return (
        <div className="w-100">
            <DownloadButton />
            <div className="container w-100 ">
                <PDF />
            </div> 
        </div>
    )
}
