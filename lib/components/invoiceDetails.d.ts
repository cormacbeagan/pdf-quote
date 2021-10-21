import { IInvoiceDetails } from "../data/dataTypes";
import jsPDF from "jspdf";
declare const drawInvoiceDetails: (doc: jsPDF, y: number, data: IInvoiceDetails) => void;
export default drawInvoiceDetails;
