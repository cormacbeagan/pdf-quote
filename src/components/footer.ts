import { IData } from "data/dataTypes";
import { margins } from "../index";
import jsPDF from "jspdf";
import { colors } from "resources/colors/colors";

const drawFooter = (doc: jsPDF, data: IData) => {
  let posY = margins.posBottom;
  let posX = margins.left;
  const lineHeight = 3.5;
  doc.setDrawColor(colors.blue);
  doc.setLineWidth(0.18);
  doc.line(margins.left, posY, margins.posRight, posY);

  doc.text(
    `${data.ownDetails.name} - ${data.ownDetails.fullName}`,
    margins.middle,
    posY + 5,
    {
      align: "center",
    }
  );
  posY += 10;
  doc.setFont("KanitMedium", "normal");
  doc.setFontSize(8);
  doc.text(data.ownDetails.address.line1, posX, posY);
  posY += lineHeight;
  doc.text(
    `${data.ownDetails.address.postcode} ${data.ownDetails.address.line2}`,
    posX,
    posY
  );
  posY += lineHeight;
  doc.text(data.ownDetails.address.country, posX, posY);
  posY = margins.posBottom + 10;
  posX = margins.middle;
  doc.text(`Tel: ${data.ownDetails.tel}`, posX, posY, { align: "center" });
  posY += lineHeight;
  doc.text(`Email: ${data.ownDetails.email}`, posX, posY, { align: "center" });
  posY += lineHeight;
  doc.text(`Web: ${data.ownDetails.homepage}`, posX, posY, { align: "center" });
  posY += lineHeight;
  doc.text(`St. -Nr. / Tax Nr. : ${data.ownDetails.steuerId}`, posX, posY, {
    align: "center",
  });

  posY = margins.posBottom + 10;
  posX = margins.pageWidth - margins.right;

  doc.text(`IBAN: ${data.bankDetails.IBAN}`, posX, posY, { align: "right" });
  posY += lineHeight;
  doc.text(`BIC: ${data.bankDetails.BIC}`, posX, posY, { align: "right" });
  posY += lineHeight;
  doc.text(`Owner: ${data.bankDetails.inhaber}`, posX, posY, {
    align: "right",
  });
  posY += 5;
  doc.line(margins.left, posY, margins.posRight, posY);
};

export default drawFooter;
