import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChartDataVM, DashboardService, DatasetDataVM, ModuleDataVM, UpcomingDataVM } from 'src/app/shared';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

    datasetDataVMs: ChartDataVM[];
    moduleDataVMs: ModuleDataVM[];
    upcomingDataVMs: UpcomingDataVM[];
    options: any;

    constructor(
        private dashboardService: DashboardService
    ) { }

    ngOnInit(): void {
        this.options = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#495057'
                    }
                },
                tooltip: {
                    callbacks: {
                        label: (tooltipItem) => {
                            return `${tooltipItem.label}: ${tooltipItem.raw}`;
                        }
                    }
                }
            }
        };

        this.getDashboardMasterData();
    }

    getDashboardMasterData(): void {
        this.dashboardService.getDashboardMasterData(1).subscribe(data => {
            console.log("Data : ", data);
            this.datasetDataVMs = data.chartDataVMs;
            this.moduleDataVMs = data.moduleDataVMs;
            this.upcomingDataVMs = data.upcomingDataVMs;
        })
    }

}
