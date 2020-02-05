import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilecardPage } from './profilecard.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilecardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilecardPageRoutingModule {}
