import { computed, Injectable, signal } from '@angular/core';
import { Expense, ExpenseCategory } from '../models/expense';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  readonly expenses = signal<Expense[]>([]);

  readonly categories = signal<ExpenseCategory[]>([
    'Work', 'Personal', 'Grocery', 'Unitiles', 'Shopping', 'Travel', 'Food'
  ])

  transactionCount = computed(() => this.expenses().length);

  totalExpense = computed(() => 
  this.expenses().reduce((sum, item) => sum + item.amount, 0));

  averageExpense = computed(() => {
    return this.transactionCount() > 0 ? this.totalExpense() / this.transactionCount() : 0;
  });

  highestExpense = computed(() => {
    return this.expenses().length > 0 ? Math.max(...this.expenses().map(e => e.amount)) : 0;
  });

  addExpense(expense : Expense){
    this.expenses.update(prev => [...prev, expense]);
  }

  deleteExpense(id : string){
    this.expenses.update(prev => prev.filter(e => e.id !== id));
  }
}
