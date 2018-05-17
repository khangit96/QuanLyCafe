/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ThemBanTestComponent } from './them-ban-test.component';

describe('ThemBanTestComponent', () => {
  let component: ThemBanTestComponent;
  let fixture: ComponentFixture<ThemBanTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemBanTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemBanTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
