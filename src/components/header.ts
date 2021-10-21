import { margins } from "../index";
import jsPDF from "jspdf";
import { colors } from "resources/colors/colors";

const drawHeader = (doc: jsPDF, title: string) => {
  doc.setDrawColor(colors.blue);
  doc.setLineWidth(0.18);
  doc.line(margins.left, margins.top, margins.posRight, margins.top);

  doc.setFontSize(22);
  doc.setFont("Abril", "normal");
  doc.text(title, margins.pageWidth / 2, 15, {
    align: "center",
    baseline: "middle",
  });
  doc.setFontSize(12);
  doc.setFont("KanitLight", "normal");
};

export default drawHeader;
