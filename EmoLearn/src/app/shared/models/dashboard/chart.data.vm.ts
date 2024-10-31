import { DatasetDataVM } from "./dataset.data.vm";

export interface ChartDataVM {
    datasets?: DatasetDataVM;
    name?: string;
    date?: string;
    labels?: string[];
}