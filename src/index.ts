import jsPDF from "jspdf";
import addFonts from "setup/addFonts";
import drawHeader from "components/header";
import drawFooter from "components/footer";
import { IData } from "data/dataTypes";
import drawAddress from "components/address";
import drawOwnAddress from "components/ownAddress";
import { colors } from "resources/colors/colors";
import drawTable from "components/table";

import data from "../testData.json";

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
  third: (210 - 40) / 3,
};

const createPDFQuote = (jsonData: IData): void => {
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
  doc.setFontSize(10);
  doc.setTextColor(colors.blue);
  doc.setFont("KanitMedium", "normal");
  doc.text(new Date().toLocaleDateString(), margins.posRight - 5, posY, {
    align: "right",
  });
  doc.setFontSize(12);
  doc.setTextColor(colors.dark);

  posY += 5;

  posY = drawAddress(doc, posX + 5, posY, jsonData.client);
  posY += 15;

  doc.setFont("KanitLight", "normal");
  doc.setFontSize(12);
  doc.text(
    "Thank you for your interest in starting a collaberation. Please find the detailed implementation and costing below.",
    margins.left,
    posY,
    {
      maxWidth: margins.pageWidth - 40,
    }
  );
  posY += 10;
  posY = drawTable(doc, posY, jsonData.work, jsonData);
  doc.setFontSize(12);
  doc.setFont("KanitLight", "normal");
  posY += 15;
  doc.text(
    `This quote is valid for 30 days from the day of receipt`,
    margins.left,
    posY + 5,
    { maxWidth: margins.pageWidth - 40 }
  );
  doc.save(`Mac Beagan Development Quote.pdf`);
};

createPDFQuote(data);

export default createPDFQuote;
