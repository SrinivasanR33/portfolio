import React from "react";
import resumePDF from "../../assets/Srinivasan Resume.pdf";

const PDFViewer = () => {
    const pdfURL = resumePDF;
    return (
        <object data={pdfURL} type="application/pdf" width="100%" height="100%">
            <p>Alternative text - include a link <a href={pdfURL}>to the PDF!</a></p>
        </object>
    );
};
export default PDFViewer;
