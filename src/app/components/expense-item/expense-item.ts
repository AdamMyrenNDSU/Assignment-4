import { Component, inject, input } from '@angular/core';
import { Expense } from '../../models/expense';
import { ExpenseService } from '../../services/expense-service';
import { NgClass } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-expense-item',
  imports: [NgClass, RouterLink, RouterOutlet],
  templateUrl: './expense-item.html',
  styleUrl: './expense-item.css',
})
export class ExpenseItem {
  expense = input.required<Expense>();

  expenseService = inject(ExpenseService)

  getColor: Record<string, string> = {
    'Work' : 'text-primary',
    'Personal' : 'text-secondary',
    'Grocery' : 'text-success',
    'Utilites' : 'text-danger',
    'Shopping' : 'text-warning',
    'Travel' : 'text-info',
    'Food' : 'text-dark'
  }

}
