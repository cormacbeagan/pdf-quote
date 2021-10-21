import jsPDF from "jspdf";
import addFonts from "setup/addFonts";
import drawHeader from "components/header";
import drawFooter from "components/footer";
import { IData } from "data/dataTypes";
import drawAddress from "components/address";
import drawOwnAddress from "components/ownAddress";
import { colors } from "resources/colors/colors";
import drawInvoiceDetails from "components/invoiceDetails";
import drawTable from "components/table";
import drawBankDetails from "components/bankDetails";

export const margins = {
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

const createInvoice = (jsonData: IData): void => {
  const doc: jsPDF = new jsPDF({
    orientation: "p",
    unit: "mm",
    format: "a4",
    compress: true,
  });
  addFonts(doc);
  doc.setTextColor(colors.dark);
  let posX = margins.left;
  let posY = margins.top;
  drawHeader(doc, jsonData.title);
  drawFooter(doc, jsonData);

  posY += 15;
  drawOwnAddress(doc, posX + 5, posY, jsonData.ownDetails);
  posY += 5;

  posY = drawAddress(doc, posX + 5, posY, jsonData.client);

  drawInvoiceDetails(doc, posY, jsonData.invoiceDetails);
  posY += 15;
  doc.setFont("KanitLight", "normal");
  doc.setFontSize(12);
  doc.text(
    "Thank you for our working collaberation - as per our agreement I am sending you the following invoice.",
    margins.left,
    posY,
    {
      maxWidth: margins.pageWidth - 40,
    }
  );
  posY += 10;
  posY = drawTable(doc, posY, jsonData.work);
  posY += 20;
  doc.setFontSize(12);
  doc.setFont("KanitLight", "normal");
  doc.text(
    "Payment is due within 14 days of receipt of this invoice and should be paid in full to the following bank account:",
    margins.left,
    posY,
    {
      maxWidth: margins.pageWidth - 40,
    }
  );
  posY += 15;
  posY = drawBankDetails(doc, posY, jsonData.bankDetails);

  doc.text(
    `Please quote your company name and the invoice number with the transfer (${jsonData.client.name}-${jsonData.invoiceDetails.invoiceNr})`,
    margins.left,
    posY + 5,
    { maxWidth: margins.pageWidth - 40 }
  );
  doc.save(`${jsonData.client.name}-${jsonData.invoiceDetails.invoiceNr}.pdf`);
};

export default createInvoice;
