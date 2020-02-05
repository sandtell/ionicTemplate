import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfilecardPage } from './profilecard.page';

describe('ProfilecardPage', () => {
  let component: ProfilecardPage;
  let fixture: ComponentFixture<ProfilecardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilecardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilecardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
