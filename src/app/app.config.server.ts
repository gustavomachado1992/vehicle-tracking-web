import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import {VehicleTrackingService} from "./core/services/vehicle-tracking.service";

const serverConfig: ApplicationConfig = {

  providers: [

    provideServerRendering()
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
