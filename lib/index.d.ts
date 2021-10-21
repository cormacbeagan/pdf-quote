import { IData } from "./data/dataTypes";
export declare const margins: {
    top: number;
    left: number;
    right: number;
    bottom: number;
    posRight: number;
    posBottom: number;
    pageWidth: number;
    pageHeight: number;
    middle: number;
    quarter: number;
};
declare const createInvoice: (jsonData: IData) => void;
export default createInvoice;
