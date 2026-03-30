import { Component, inject, input } from '@angular/core';
import { Expense, ExpenseCategory } from '../../models/expense';
import { FormsModule } from '@angular/forms';
import { ExpenseService } from '../../services/expense-service';

@Component({
  selector: 'app-edit-expense',
  imports: [FormsModule],
  templateUrl: './edit-expense.html',
  styleUrl: './edit-expense.css',
})
export class EditExpense {
  //inject service
  private expenseService = inject(ExpenseService)

  id = input.required<string>();

  expense: Partial<Expense> = {
    title: '',
    amount: 0,
    category: undefined
  };


  ngOnInit() {
    const foundExpense = this.expenseService.getExpenseById(this.id());
    
    if (foundExpense) {
      this.expense = foundExpense;
    } 
  }



  //inital expense placeholder


  categories = this.expenseService.categories();

  //When form is submited do this
  onSubmit() {
    //make it inot an expense
    const finalExpense: Expense = {title:this.expense.title, amount: this.expense.amount, category: this.expense.category, id:crypto.randomUUID()} as Expense;

    //actually add the expense
    this.expenseService.updateExpense(finalExpense.id, finalExpense);
  }
}
