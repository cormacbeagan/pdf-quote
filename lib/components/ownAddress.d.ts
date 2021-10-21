import { IOwnDetails } from "../data/dataTypes";
import jsPDF from "jspdf";
declare const drawOwnAddress: (doc: jsPDF, x: number, y: number, data: IOwnDetails) => void;
export default drawOwnAddress;
