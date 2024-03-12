import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionSummaryComponent } from './transaction-summary.component';

describe('TransactionSummaryComponent', () => {
  let component: TransactionSummaryComponent;
  let fixture: ComponentFixture<TransactionSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionSummaryComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TransactionSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('type()', () => {
    it('should print error, when not initialized', () => {
      expect(component.type).toBe('ERROR ERROR ERROR');
    })

    it('should print credit, when to_account_id is the same as accountId', () => {
      component.transaction = { to_account_id: 123 };
      component.accountId = 123;
      fixture.detectChanges();

      expect(component.type).toBe('credit');
    })

    it('should print debit, when from_account_id is the same as accountId', () => {
      component.transaction = { from_account_id: 123 };
      component.accountId = 123;
      fixture.detectChanges();

      expect(component.type).toBe('debit');
    })
  })
});
