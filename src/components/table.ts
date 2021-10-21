import { IWork } from "data/dataTypes";
import { margins } from "../index";
import jsPDF from "jspdf";
import { colors } from "resources/colors/colors";

const drawTable = (doc: jsPDF, y: number, data: IWork[]): number => {
  const tableColumns = {
    first: margins.left + 15,
    second: margins.middle,
    third: margins.middle + 18,
    fourth: margins.posRight - 25,
  };
  let posY = y;
  // line
  doc.setDrawColor(colors.grey);
  doc.setLineWidth(0.3);
  doc.line(margins.left, posY, margins.posRight, posY);
  posY += 5;
  doc.setFont("KanitMedium", "normal");
  doc.setFontSize(12);
  doc.text("Pos.", margins.left, posY);
  doc.text("Description", tableColumns.first, posY);
  doc.text("Amount", tableColumns.second, posY);
  doc.text("Single", tableColumns.fourth, posY, { align: "right" });
  doc.text("Total", margins.posRight, posY, { align: "right" });
  posY += 2;
  doc.line(margins.left, posY, margins.posRight, posY);
  posY += 8;

  // table entries
  let pos = 1;
  data.forEach((item) => {
    doc.text(`${pos}`, margins.left + 3, posY, { align: "right" });
    doc.text(item.description, tableColumns.first + 3, posY);
    doc.text(`${item.hours} hrs`, tableColumns.second + 3, posY);
    doc.text(
      `${item.currency === "euro" ? "€" : "£"}${item.rate.toFixed(2)}`,
      tableColumns.fourth,
      posY,
      { align: "right" }
    );
    let total = (item.rate * item.hours).toFixed(2);
    doc.text(
      `${item.currency === "euro" ? "€" : "£"}${total}`,
      margins.posRight,
      posY,
      { align: "right" }
    );
    posY += 5;
    pos += 1;
  });

  doc.line(margins.left, posY, margins.posRight, posY);
  posY += 8;
  let totalCost: number = 0;
  data.forEach((item) => (totalCost += item.rate * item.hours));
  doc.text("Total", tableColumns.fourth, posY, { align: "right" });
  doc.text(
    `${data[0].currency === "euro" ? "€" : "£"}${totalCost.toFixed(2)}`,
    margins.posRight,
    posY,
    { align: "right" }
  );
  posY += 5;
  doc.setDrawColor(colors.blue);
  doc.line(tableColumns.third, posY, margins.posRight, posY);
  return posY;
};

export default drawTable;
