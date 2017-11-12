package com.mybank.bankAccount;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import com.mybank.bankAccount.dto.Deal;
import com.mybank.bankAccount.service.TransactionsManager;



/**
 * @author slim.lassoued
 *
 */

public class BankAcount {

	/**
	 * 
	 * @param args
	 */
	public static void main(String[] args) {

		// Scanner
		Scanner scan = new Scanner(System.in);
		// Transaction that we can store if we want
		List<Deal> dealTransactions = new ArrayList<Deal>();
		int numChoice = 0;
		double amountBalance = 0;

		
		TransactionsManager tm = new TransactionsManager();

		do {
			numChoice = tm.intiChoicePrint(scan);
			if (numChoice == 1) {
				// DEPOSIT
				amountBalance = tm.deposit(scan, dealTransactions, amountBalance);
			} else if (numChoice == 2) {
				// WITHDRAWAL
				amountBalance = tm.withdrawl(scan, dealTransactions, amountBalance);
			} else if (numChoice == 3) {
				// BALANCE
				tm.balance(scan, dealTransactions, amountBalance);
			}
		} while (numChoice != 4);

		scan.close();
		System.out.println("====================");
		System.out.println("Good Bye!");
		System.out.println("====================");

	}

}
