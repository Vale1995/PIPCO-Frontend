import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Settings } from './models/settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(
    private http: HttpClient
  ) { }

  getSettings(): Observable<Settings> {
    return this.http.get(environment.backendAdress + "/config", environment.backendHttpOptions);
  }

  changeSettings(newSettings: Settings): Observable<Settings> {
    return this.http.post(environment.backendAdress + "/config", newSettings, environment.backendHttpOptions);
  }

  downloadBackup(): Observable<ArrayBuffer> {
    return this.http.get(environment.backendAdress + "/backup", {
      responseType: 'arraybuffer'
    });
  }
}
