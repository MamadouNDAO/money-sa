import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HostPage } from './host.page';
import {PrincipalPage} from '../principal/principal.page';
import {DepotPage} from '../depot/depot.page';

const routes: Routes = [
  {
    path: '',
    component: HostPage,
    children: [
      {path: 'principal', component: PrincipalPage}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HostPageRoutingModule {}
