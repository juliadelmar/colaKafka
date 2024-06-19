import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarUsuarioComponent } from './insertar-usuarios.component';

describe('InsertarUsuariosComponent', () => {
  let component: InsertarUsuarioComponent;
  let fixture: ComponentFixture<InsertarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertarUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
