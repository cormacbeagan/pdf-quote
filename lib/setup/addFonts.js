"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abril_1 = __importDefault(require("../resources/fonts/abril"));
const kanitBold_1 = __importDefault(require("../resources/fonts/kanitBold"));
const kanitLight_1 = __importDefault(require("../resources/fonts/kanitLight"));
const kanitSemiBold_1 = __importDefault(require("../resources/fonts/kanitSemiBold"));
const addFonts = (doc) => {
    // Add Trauma fonts to jsPDF
    doc.addFileToVFS("KanitBold.ttf", kanitBold_1.default);
    doc.addFont("KanitBold.ttf", "KanitBold", "bold");
    doc.addFileToVFS("KanitLight.ttf", kanitLight_1.default);
    doc.addFont("KanitLight.ttf", "KanitLight", "normal");
    doc.addFileToVFS("KanitSemiBold.ttf", kanitSemiBold_1.default);
    doc.addFont("KanitSemiBold.ttf", "KanitMedium", "normal");
    doc.addFileToVFS("Abril_Fatface.ttf", abril_1.default);
    doc.addFont("Abril_Fatface.ttf", "Abril", "normal");
    // Set starting font for PDF
    doc.setFont("KanitLight", "normal");
};
exports.default = addFonts;
