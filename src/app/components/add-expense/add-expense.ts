import { Component } from '@angular/core';
import { Expense, ExpenseCategory } from '../../models/expense';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-expense',
  imports: [FormsModule],
  templateUrl: './add-expense.html',
  styleUrl: './add-expense.css',
})
export class AddExpense {
  //categories to be selected
  categories: ExpenseCategory[] = ['Work', 'Personal', 'Grocery', 'Unitiles', 'Shopping', 'Travel', 'Food']

  expense: Partial<Expense> = {
    title: '',
    amount: 0,
    category: undefined
  };

  //When form is submited do this
  onSubmit() {
    const finalExpense: Expense = {
      ...this.expense,
      id: crypto.randomUUID()
    } as Expense

    //Go back to starting confingureation 
    this.expense = {title: '', amount: 0, category: undefined}
  }
}
