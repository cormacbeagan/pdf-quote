"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const drawInvoiceDetails = (doc, y, data) => {
    let posX = index_1.margins.left + index_1.margins.quarter * 2;
    let posY = y;
    doc.setFontSize(12);
    doc.setFont("KanitLight", "normal");
    doc.text("Invoice Number", posX, posY, { align: "right" });
    doc.text("Supply Date", posX + index_1.margins.quarter, posY, { align: "right" });
    doc.text("Invoice Date", posX + index_1.margins.quarter * 2, posY, {
        align: "right",
    });
    let lineHeight = doc.getTextDimensions("Somet").h;
    doc.setFont("KanitMedium", "normal");
    posY += lineHeight;
    doc.text(data.invoiceNr, posX, posY, { align: "right" });
    doc.text(data.supplyDate, posX + index_1.margins.quarter, posY, { align: "right" });
    doc.text(data.date, posX + index_1.margins.quarter * 2, posY, { align: "right" });
};
exports.default = drawInvoiceDetails;
