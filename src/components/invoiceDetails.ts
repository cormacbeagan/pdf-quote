import { IInvoiceDetails } from "data/dataTypes";
import { margins } from "../index";
import jsPDF from "jspdf";

const drawInvoiceDetails = (doc: jsPDF, y: number, data: IInvoiceDetails) => {
  let posX = margins.left + margins.quarter * 2;
  let posY = y;

  doc.setFontSize(12);
  doc.setFont("KanitLight", "normal");
  doc.text("Invoice Number", posX, posY, { align: "right" });
  doc.text("Supply Date", posX + margins.quarter, posY, { align: "right" });
  doc.text("Invoice Date", posX + margins.quarter * 2, posY, {
    align: "right",
  });
  let lineHeight = doc.getTextDimensions("Somet").h;
  doc.setFont("KanitMedium", "normal");
  posY += lineHeight;
  doc.text(data.invoiceNr, posX, posY, { align: "right" });
  doc.text(data.supplyDate, posX + margins.quarter, posY, { align: "right" });
  doc.text(data.date, posX + margins.quarter * 2, posY, { align: "right" });
};

export default drawInvoiceDetails;
