import { Component, input } from '@angular/core';
import { Expense } from '../../models/expense';

@Component({
  selector: 'app-expense-item',
  imports: [],
  templateUrl: './expense-item.html',
  styleUrl: './expense-item.css',
})
export class ExpenseItem {
  expense = input.required<Expense>();
}
