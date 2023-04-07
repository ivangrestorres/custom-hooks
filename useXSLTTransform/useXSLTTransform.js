// hooks/useXSLTTransform.js
import { useState, useEffect } from "react";
import { DOMParser } from "xmldom";

export const useXSLTTransform = (xmlString, xslString) => {
    const [html, setHtml] = useState("");

    useEffect(() => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, "application/xml");
        const xslDoc = parser.parseFromString(xslString, "application/xml");

        if (window.ActiveXObject || "ActiveXObject" in window) {
            // Para navegadores Internet Explorer
            const transformed = xmlDoc.transformNode(xslDoc);
            setHtml(transformed);
        } else if (document.implementation && document.implementation.createDocument) {
            // Para navegadores modernos
            const xsltProcessor = new XSLTProcessor();
            xsltProcessor.importStylesheet(xslDoc);
            const transformed = xsltProcessor.transformToFragment(xmlDoc, document);
            setHtml(transformed.outerHTML);
        } else {
            console.error("El navegador no soporta transformaciones XSLT.");
        }
    }, [xmlString, xslString]);

    return html;
};
