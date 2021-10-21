import { IBankDetails } from "data/dataTypes";
import { margins } from "../index";
import jsPDF from "jspdf";

const drawBankDetails = (doc: jsPDF, y: number, data: IBankDetails): number => {
  let posY = y;
  let posX = margins.left + 12;

  doc.setFont("KanitLight", "normal");
  doc.text("Account owner", posX, posY);
  doc.text(data.inhaber, posX + margins.quarter, posY);
  posY += 5;
  doc.text("IBAN", posX, posY);
  doc.text(data.IBAN, posX + margins.quarter, posY);
  posY += 5;
  doc.text("BIC", posX, posY);
  doc.text(data.BIC, posX + margins.quarter, posY);
  posY += 5;
  doc.text("Bank", posX, posY);
  doc.text(data.bank, posX + margins.quarter, posY);
  posY += 5;
  return posY;
};

export default drawBankDetails;
