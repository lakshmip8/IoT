import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DeviceComponent } from "./device/device.component";
import { CertificateComponent } from "./certificate/certificate.component";
import { BlockedDeviceComponent } from "./blocked-device/blocked-device.component";
import { SettingsComponent } from "./settings/settings.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: 'devices',
    component: DeviceComponent
  },
  {
    path: 'certificates',
    component: CertificateComponent
  },
  {
    path: 'blockedDevices',
    component: BlockedDeviceComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: '',
    redirectTo: 'devices',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
