import { IOwnDetails } from "data/dataTypes";
import jsPDF from "jspdf";
import { colors } from "resources/colors/colors";

const drawOwnAddress = (
  doc: jsPDF,
  x: number,
  y: number,
  data: IOwnDetails
) => {
  let posX = x;
  let posY = y;
  doc.setFontSize(10);
  doc.setTextColor(colors.blue);
  doc.setFont("KanitMedium", "normal");
  doc.text(data.name + " | ", posX, posY);
  posX += doc.getTextDimensions(data.name + " | ").w;
  doc.text(data.address.line1 + " | ", posX, posY);
  posX += doc.getTextDimensions(data.address.line1 + " | ").w;
  doc.text(data.address.postcode + ", ", posX, posY);
  posX += doc.getTextDimensions(data.address.postcode + ", ").w;
  doc.text(data.address.line2, posX, posY);
  posX += doc.getTextDimensions(data.address.line2).w;
  doc.setFontSize(12);
  doc.setTextColor(colors.dark);
};

export default drawOwnAddress;
