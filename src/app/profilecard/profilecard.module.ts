import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilecardPageRoutingModule } from './profilecard-routing.module';

import { ProfilecardPage } from './profilecard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilecardPageRoutingModule
  ],
  declarations: [ProfilecardPage]
})
export class ProfilecardPageModule {}
