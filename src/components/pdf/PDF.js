import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import pdf from '../../assets/documents/resume.pdf';
import { useViewport } from '../../hooks/useViewport';

export const PDF = () => {

    const width = useViewport();
    const breakpoint = 767;

    return (
        <Document 
            file={pdf}
            className="pdfParent"  
        >
            <Page width={width > breakpoint ? "" : 360 } className="pdf" pageNumber={1}/>
        </Document>
    )
}
