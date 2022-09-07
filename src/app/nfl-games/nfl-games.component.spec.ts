import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NflGamesComponent } from './nfl-games.component';

describe('NflGamesComponent', () => {
  let component: NflGamesComponent;
  let fixture: ComponentFixture<NflGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NflGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NflGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
