import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhlGamesComponent } from './nhl-games.component';

describe('NhlGamesComponent', () => {
  let component: NhlGamesComponent;
  let fixture: ComponentFixture<NhlGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhlGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NhlGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
