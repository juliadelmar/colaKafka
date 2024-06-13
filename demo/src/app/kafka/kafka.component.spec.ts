import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KafkaExampleComponent } from './kafka.component';

describe('KafkaComponent', () => {
  let component: KafkaExampleComponent;
  let fixture: ComponentFixture<KafkaExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KafkaExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KafkaExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
