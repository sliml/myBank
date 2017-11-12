package com.mybank.bankAccount.dto;

import java.time.LocalDateTime;

/**
 * Deal
 * 
 * @author slim.lassoued
 *
 */
public class Deal {
	
	
	private LocalDateTime  date;
	
	private double amount;
	
	
	/**
	 * @return the date
	 */
	public LocalDateTime getDate() {
		return date;
	}
	/**
	 * @param date the date to set
	 */
	public void setDate(LocalDateTime date) {
		this.date = date;
	}
	/**
	 * @return the amount
	 */
	public double getAmount() {
		return amount;
	}
	/**
	 * @param amount the amount to set
	 */
	public void setAmount(double amount) {
		this.amount = amount;
	}
	
	/**
	 * 
	 */
	public Deal() {
		
	}
	
	/**
	 * 
	 * @param date
	 * @param amount
	 */
	public Deal(LocalDateTime date, double amount) {
		this.date = date;
		this.amount = amount;
	}
	
	@Override
	public String toString() {
		StringBuilder st = new StringBuilder();
		st.append(date.toString()).append(" : ").append(String.valueOf(amount));
		return st.toString();
	}

}
