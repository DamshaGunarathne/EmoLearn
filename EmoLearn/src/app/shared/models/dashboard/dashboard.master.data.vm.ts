import { ChartDataVM } from "./chart.data.vm";
import { ModuleDataVM } from "./module.data.vm";
import { UpcomingDataVM } from "./upcoming.data.vm";

export interface DashboardMasterDataVM {
    chartDataVMs?: ChartDataVM[];
    moduleDataVMs?: ModuleDataVM[];
    upcomingDataVMs?: UpcomingDataVM[];
}