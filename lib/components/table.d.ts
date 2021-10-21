import { IWork } from "../data/dataTypes";
import jsPDF from "jspdf";
declare const drawTable: (doc: jsPDF, y: number, data: IWork[]) => number;
export default drawTable;
