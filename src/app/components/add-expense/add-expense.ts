import { Component, inject } from '@angular/core';
import { Expense, ExpenseCategory } from '../../models/expense';
import { FormsModule } from '@angular/forms';
import { ExpenseService } from '../../services/expense-service';

@Component({
  selector: 'app-add-expense',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-expense.html',
  styleUrl: './add-expense.css',
})
export class AddExpense {
  //inject service
  private expenseService = inject(ExpenseService)

  //inital expense placeholder
  expense: Partial<Expense> = {
    title: '',
    amount: 0,
    category: undefined
  };

  categories = this.expenseService.categories();

  //When form is submited do this
  onSubmit() {
    //make it inot an expense
    const finalExpense: Expense = {title:this.expense.title, amount: this.expense.amount, category: this.expense.category, id:crypto.randomUUID()} as Expense;

    //actually add the expense
    this.expenseService.addExpense(finalExpense);

    //reset to initial
    this.expense = {title: '', amount: 0, category: undefined}
  }
}
