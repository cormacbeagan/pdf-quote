import jsPDF from "jspdf";
import drawFooter from "./footer";
import drawHeader from "./header";
import { IData } from "data/dataTypes";

export const addPage = (doc: jsPDF, data: IData, posY: number) => {
  doc.addPage();
  drawHeader(doc, data.title);
  drawFooter(doc, data);
  return posY;
};

export const checkPageHeight = (posY: number, doc: jsPDF, data: IData) => {
  if (posY > 220) {
    addPage(doc, data, posY);
    posY = 34;
  }
  return posY;
};
