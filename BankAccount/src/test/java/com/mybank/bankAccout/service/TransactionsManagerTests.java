package com.mybank.bankAccout.service;

import static org.junit.Assert.assertEquals;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import org.junit.Test;

import com.mybank.bankAccount.dto.Deal;
import com.mybank.bankAccount.service.TransactionsManager;

public class TransactionsManagerTests {

	@Test
	public void depositTest() {
		Scanner scan = new Scanner(System.in);
		TransactionsManager tm = new TransactionsManager();
		List<Deal> dealTransactions = new ArrayList<Deal>();
		dealTransactions.add((new Deal(LocalDateTime.now(), 0)));

		tm.deposit(scan, dealTransactions, 0);
		assertEquals(dealTransactions.size(), 2, 0);
	}
	
	@Test
	public void withdrawlTest() {
		Scanner scan = new Scanner(System.in);
		TransactionsManager tm = new TransactionsManager();
		List<Deal> dealTransactions = new ArrayList<Deal>();
		dealTransactions.add((new Deal(LocalDateTime.now(), 0)));

		tm.withdrawl(scan, dealTransactions, 0);
		assertEquals(dealTransactions.size(), 2, 0);
	}
	
}
