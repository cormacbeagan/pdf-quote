import { IClient } from "../data/dataTypes";
import jsPDF from "jspdf";
declare const drawAddress: (doc: jsPDF, x: number, y: number, data: IClient) => number;
export default drawAddress;
