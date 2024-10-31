import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';
import { DashboardMasterDataVM } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private apiService: ApiService,
    private configService: ConfigService
  ) { }

  getPath(): string {
    return this.configService.getConfig()['apiURL'];
  }

  getDashboardMasterData(userId: number):Observable<DashboardMasterDataVM>{
    return this.apiService.get<DashboardMasterDataVM>(`assets/mocks/dashboard-master-data.json`)
  }
}
