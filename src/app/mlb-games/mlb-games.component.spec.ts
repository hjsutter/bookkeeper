import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlbGamesComponent } from './mlb-games.component';

describe('MlbGamesComponent', () => {
  let component: MlbGamesComponent;
  let fixture: ComponentFixture<MlbGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlbGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlbGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
