package com.mybank.bankAccount.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Scanner;

import com.mybank.bankAccount.dto.Deal;



public class TransactionsManager {

	/**
	 * deposit
	 * 
	 * @param scan
	 * @param dealTransactions
	 * @param amountBalance
	 * @return
	 */
	public double deposit(Scanner scan, List<Deal> dealTransactions, double amountBalance) {
		double amount = 0;

		// chose positive amount for deposit
		System.out.println("====================");
		System.out.println("Enter amount to deposit in the account: ");
		System.out.println("====================");

		do {
			System.out.println("Please chose a positive amount");
			while (!scan.hasNextDouble()) {
				scan.next();
				System.out.println("Please chose an amount");
			}
			amount = scan.nextDouble();
		} while (amount <= 0);

		int confirmTran = confirmeTransaction(scan);

		if (confirmTran == 1) {
			// Add deposit Transaction
			dealTransactions.add((new Deal(LocalDateTime.now(), amount)));
			amountBalance += amount;
			System.out.println("====================");
			System.out.println("Your savings account's balance is " + amountBalance);
			System.out.println("====================");
		} else {
			System.out.println("Transaction is canceled.");
		}

		return amountBalance;
	}

	/**
	 * withdrawl
	 * 
	 * @param scan
	 * @param dealTransactions
	 * @param amountBalance
	 * @return
	 */
	public double withdrawl(Scanner scan, List<Deal> dealTransactions, double amountBalance) {
		double amount = 0;
		// chose positive amount to be withdrawl
		System.out.println("====================");
		System.out.println("Enter amount to withdrawal: ");
		System.out.println("====================");

		do {
			System.out.println("Please chose a positive amount");
			while (!scan.hasNextDouble()) {
				scan.next();
				System.out.println("Please chose an amount");
			}
			amount = scan.nextDouble();
		} while (amount <= 0);

		int num2 = confirmeTransaction(scan);

		if (num2 == 1) { 
			// add transaction as withdrawl
			dealTransactions.add((new Deal(LocalDateTime.now(), -amount)));
			amountBalance -= amount;
			System.out.println("====================");
			System.out.println("Your savings account's balance is " + amountBalance);
			System.out.println("====================");
		} else {
			System.out.println("Transaction is canceled.");
		}
		return amountBalance;
	}

	/**
	 * @param scan
	 * @return
	 */
	private int confirmeTransaction(Scanner scan) {
		// confirm Transaction
		System.out.println("====================");
		System.out.println("Do you confirme this transaction?");
		System.out.println("1. Yes");
		System.out.println("2. No");
		System.out.println("====================");

		int num2 = 0;
		while (!scan.hasNextInt()) {
			scan.next();
			System.out.println("Please chose a number:[1/2]");
		}
		num2 = scan.nextInt();
		return num2;
	}

	/**
	 * 
	 * @param scan
	 * @return
	 */
	public int intiChoicePrint(Scanner scan) {
		System.out.println("====================");
		System.out.println("Chose a number please");
		System.out.println("1. Deposit");
		System.out.println("2. Withdrawal");
		System.out.println("3. Balance");
		System.out.println("4. Exit");
		System.out.println("====================");

		int num = 0;
		while (!scan.hasNextInt()) {
			scan.next();
			System.out.println("Please chose a number:[1/2/3/4]");
		}
		num = scan.nextInt();

		return num;
	}

	/**
	 * 
	 * @param scan
	 * @param dealTransactions
	 * @param amountBalance
	 */
	public void balance(Scanner scan, List<Deal> dealTransactions, double amountBalance) {
		// print balance
		System.out.println("====================");
		System.out.println("Your balance is: " + amountBalance);
		System.out.println("Transactions:");
		for (Deal deal : dealTransactions) {
			System.out.println(deal.toString());
		}
		System.out.println("====================");
	}

}
