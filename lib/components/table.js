"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const colors_1 = require("../resources/colors/colors");
const drawTable = (doc, y, data) => {
    const tableColumns = {
        first: index_1.margins.left + 15,
        second: index_1.margins.middle,
        third: index_1.margins.middle + 18,
        fourth: index_1.margins.posRight - 25,
    };
    let posY = y;
    // line
    doc.setDrawColor(colors_1.colors.grey);
    doc.setLineWidth(0.3);
    doc.line(index_1.margins.left, posY, index_1.margins.posRight, posY);
    posY += 5;
    doc.setFont("KanitMedium", "normal");
    doc.setFontSize(12);
    doc.text("Pos.", index_1.margins.left, posY);
    doc.text("Description", tableColumns.first, posY);
    doc.text("Amount", tableColumns.second, posY);
    doc.text("Single", tableColumns.fourth, posY, { align: "right" });
    doc.text("Total", index_1.margins.posRight, posY, { align: "right" });
    posY += 2;
    doc.line(index_1.margins.left, posY, index_1.margins.posRight, posY);
    posY += 8;
    // table entries
    let pos = 1;
    data.forEach((item) => {
        doc.text(`${pos}`, index_1.margins.left + 3, posY, { align: "right" });
        doc.text(item.description, tableColumns.first + 3, posY);
        doc.text(`${item.hours} hrs`, tableColumns.second + 3, posY);
        doc.text(`${item.currency === "euro" ? "€" : "£"}${item.rate.toFixed(2)}`, tableColumns.fourth, posY, { align: "right" });
        let total = (item.rate * item.hours).toFixed(2);
        doc.text(`${item.currency === "euro" ? "€" : "£"}${total}`, index_1.margins.posRight, posY, { align: "right" });
        posY += 5;
        pos += 1;
    });
    doc.line(index_1.margins.left, posY, index_1.margins.posRight, posY);
    posY += 8;
    let totalCost = 0;
    data.forEach((item) => (totalCost += item.rate * item.hours));
    doc.text("Total", tableColumns.fourth, posY, { align: "right" });
    doc.text(`${data[0].currency === "euro" ? "€" : "£"}${totalCost.toFixed(2)}`, index_1.margins.posRight, posY, { align: "right" });
    posY += 5;
    doc.setDrawColor(colors_1.colors.blue);
    doc.line(tableColumns.third, posY, index_1.margins.posRight, posY);
    return posY;
};
exports.default = drawTable;
