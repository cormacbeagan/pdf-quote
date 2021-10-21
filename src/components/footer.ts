import { IData } from "data/dataTypes";
import { margins } from "../index";
import jsPDF from "jspdf";
import { colors } from "resources/colors/colors";

const drawFooter = (doc: jsPDF, data: IData) => {
  let posY = margins.posBottom;
  let posX = margins.left + 8;
  const lineHeight = 3.5;
  doc.setDrawColor(colors.blue);
  doc.setLineWidth(0.18);
  doc.line(margins.left, posY, margins.posRight, posY);
  posY += 5;
  doc.setFont("KanitMedium", "normal");
  doc.setFontSize(8);
  doc.text(data.ownDetails.name, posX, posY);
  posY += lineHeight;
  doc.text(data.ownDetails.fullName, posX, posY);
  posY += lineHeight;
  doc.text(data.ownDetails.address.line1, posX, posY);
  posY += lineHeight;
  doc.text(
    `${data.ownDetails.address.postcode} ${data.ownDetails.address.line2}`,
    posX,
    posY
  );
  posY += lineHeight;
  doc.text(data.ownDetails.address.country, posX, posY);
  posY = margins.posBottom + 5;
  posX = margins.left + 50;
  doc.text(`Tel: ${data.ownDetails.tel}`, posX, posY);
  posY += lineHeight;
  doc.text(`Email: ${data.ownDetails.email}`, posX, posY);
  posY += lineHeight;
  doc.text(`Web: ${data.ownDetails.homepage}`, posX, posY);
  posY = margins.posBottom + 5;
  posX += 50;
  doc.text(`IBAN: ${data.bankDetails.IBAN}`, posX, posY);
  posY += lineHeight;
  doc.text(`BIC: ${data.bankDetails.BIC}`, posX, posY);
  posY += lineHeight;
  doc.text(`Owner: ${data.bankDetails.inhaber}`, posX, posY);
  posY += 10;
  doc.line(margins.left, posY, margins.posRight, posY);
};

export default drawFooter;
