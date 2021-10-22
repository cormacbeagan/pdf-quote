import { IWork } from "data/dataTypes";
import { margins } from "../index";
import jsPDF from "jspdf";
import { colors } from "resources/colors/colors";

const drawTable = (doc: jsPDF, y: number, data: IWork[]): number => {
  const tableColumns = {
    first: margins.left + 25,
    second: margins.left + 37,
    third: margins.middle - 30,
    fourth: margins.middle + 5,
  };
  let posY = y;
  // line
  doc.setDrawColor(colors.grey);
  doc.setLineWidth(0.3);
  // doc.line(margins.left, posY, margins.posRight, posY);

  data.forEach((workItem) => {
    posY += 5;
    doc.setFont("KanitMedium", "normal");
    doc.setFontSize(12);
    doc.text(workItem.stage, margins.left, posY);
    doc.text("Cost: ", tableColumns.first, posY);
    doc.text(
      `${workItem.currency === "euro" ? "€" : "£"}${workItem.cost}`,
      tableColumns.second,
      posY
    );
    doc.text("Estimated Time: ", tableColumns.third, posY);
    doc.text(workItem.estimatedTime, tableColumns.fourth, posY);
    posY += 2;
    doc.line(margins.left, posY, margins.posRight, posY);
    posY += 8;

    doc.setFont("KanitLight", "normal");
    doc.setFontSize(15);
    doc.setTextColor(colors.blue);

    doc.text(workItem.title, margins.left, posY);

    posY += 8;
    doc.setFontSize(11);
    doc.setTextColor(colors.dark);

    doc.text(workItem.description, margins.left, posY, {
      maxWidth: margins.pageWidth - margins.left * 2,
    });
    posY += doc.getTextDimensions(workItem.description, {
      maxWidth: margins.pageWidth - margins.left * 2,
    }).h;
  });

  doc.line(margins.left, posY, margins.posRight, posY);
  posY += 8;
  doc.setFont("KanitMedium", "normal");
  let totalCost: number = 0;
  data.forEach((item) => (totalCost += item.cost));
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
