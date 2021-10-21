import { IBankDetails } from "../data/dataTypes";
import jsPDF from "jspdf";
declare const drawBankDetails: (doc: jsPDF, y: number, data: IBankDetails) => number;
export default drawBankDetails;
