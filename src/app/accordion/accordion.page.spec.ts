import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccordionPage } from './accordion.page';

describe('AccordionPage', () => {
  let component: AccordionPage;
  let fixture: ComponentFixture<AccordionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccordionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
