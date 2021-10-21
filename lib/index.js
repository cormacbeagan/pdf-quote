"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.margins = void 0;
const jspdf_1 = __importDefault(require("jspdf"));
const addFonts_1 = __importDefault(require("./setup/addFonts"));
const header_1 = __importDefault(require("./components/header"));
const footer_1 = __importDefault(require("./components/footer"));
const address_1 = __importDefault(require("./components/address"));
const ownAddress_1 = __importDefault(require("./components/ownAddress"));
const colors_1 = require("./resources/colors/colors");
const invoiceDetails_1 = __importDefault(require("./components/invoiceDetails"));
const table_1 = __importDefault(require("./components/table"));
const bankDetails_1 = __importDefault(require("./components/bankDetails"));
exports.margins = {
    top: 22,
    left: 20,
    right: 20,
    bottom: 20,
    posRight: 210 - 20,
    posBottom: 297 - 30,
    pageWidth: 210,
    pageHeight: 297,
    middle: 210 / 2,
    quarter: (210 - 40) / 4,
};
const createInvoice = (jsonData) => {
    const doc = new jspdf_1.default({
        orientation: "p",
        unit: "mm",
        format: "a4",
        compress: true,
    });
    addFonts_1.default(doc);
    doc.setTextColor(colors_1.colors.dark);
    let posX = exports.margins.left;
    let posY = exports.margins.top;
    header_1.default(doc, jsonData.title);
    footer_1.default(doc, jsonData);
    posY += 15;
    ownAddress_1.default(doc, posX + 5, posY, jsonData.ownDetails);
    posY += 5;
    posY = address_1.default(doc, posX + 5, posY, jsonData.client);
    invoiceDetails_1.default(doc, posY, jsonData.invoiceDetails);
    posY += 15;
    doc.setFont("KanitLight", "normal");
    doc.setFontSize(12);
    doc.text("Thank you for our working collaberation - as per our agreement I am sending you the following invoice.", exports.margins.left, posY, {
        maxWidth: exports.margins.pageWidth - 40,
    });
    posY += 10;
    posY = table_1.default(doc, posY, jsonData.work);
    posY += 20;
    doc.setFontSize(12);
    doc.setFont("KanitLight", "normal");
    doc.text("Payment is due within 14 days of receipt of this invoice and should be paid in full to the following bank account:", exports.margins.left, posY, {
        maxWidth: exports.margins.pageWidth - 40,
    });
    posY += 15;
    posY = bankDetails_1.default(doc, posY, jsonData.bankDetails);
    doc.text(`Please quote your company name and the invoice number with the transfer (${jsonData.client.name}-${jsonData.invoiceDetails.invoiceNr})`, exports.margins.left, posY + 5, { maxWidth: exports.margins.pageWidth - 40 });
    doc.save(`${jsonData.client.name}-${jsonData.invoiceDetails.invoiceNr}.pdf`);
};
exports.default = createInvoice;
