export const general = {
	"invested_assets": {
		"display_name": "Invested Assets",
		"tooltip_display_name": "Total nominal value of all assets held in your linked accounts.",
		"value": {
			"amount": 335.43,
			"currency_code": "EUR"
		}
	},
	"reserved_funds": {
		"display_name": "Reserved Funds",
		"tooltip_display_name": "The part of Invested Assets, which are dedicated to specific loans that are not yet issued.",
		"value": {
			"amount": 24.01,
			"currency_code": "EUR"
		}
	},
	"cash": {
		"display_name": "Cash",
		"tooltip_display_name": "The total cash balance on all your linked accounts. You should use this balance to invest in assets to reduce Cash Drag.",
		"value": {
			"amount": 81.01,
			"currency_code": "EUR"
		}
	},  
	"nar_past_365_days": {
		"display_name": "Net Annual Yield",
		"tooltip_display_name": "",
		"icon": "icon-win-airplay",
		"default_graph" : true,
		"graph_data": [
			{
				"url": "/v1/globaldashboards/graphics/netreturnpast365days/?period=year",
				"option_display_name": "Last Year",
				"default": true
			},
			{
				"url": "/v1/globaldashboards/graphics/netreturnpast365days/?period=all",
				"option_display_name": "All",
				"default": true 
			}
		]
	}, 
	"nar_past_year": {
		"display_name": "Net Annual Yield",
		"tooltip_display_name": "Net Annual Return past year",
		"icon": "icon-win-airplay",
		"graph_data": [
			{
				"url": "/v1/globaldashboards/graphics/netreturnpastyear/?period=year",
				"option_display_name": "Last Year",
				"default": true
			},
			{
				"url": "/v1/globaldashboards/graphics/netreturnpastyear/?period=all",
				"option_display_name": "All",
				"default": true 
			}
		]
	},
	"nar_total_funds": {  
		"display_name": "Total Funds",
		"tooltip_display_name": "This is a tooltip for the Nar Total funds fo teh global dashboard",
		"icon": "icon-win-airplay",
		"value": {
			"amount": 1232500.01,
			"currency_code": "EUR"
		}, 
		"graph_data": [
			{
				"url": "/v1/globaldashboards/graphics/netreturntotalfunds/?period=year",
				"option_display_name": "Last Year",
				"default": true
			},
			{
				"url": "/v1/globaldashboards/graphics/netreturntotalfunds/?period=all",
				"option_display_name": "All",
				"default": false 
			}
		]
	}, 
	"active_investments": {
		"display_name": "Active Investments",
		"tooltip_display_name": "Number of individual loans or assets that you currently own. The higher the sum, the better diversified your portfolio is.",
		"icon": "icon-win-airplay",
		"graph_data": [
			{
				"url": "/v1/globaldashboards/graphics/activeinvestments/?period=year",
				"option_display_name": "Year",
				"default": true
			},
			{
				"url": "/v1/globaldashboards/graphics/activeinvestments/?period=all",
				"option_display_name": "All",
				"default": true 
			}
		]
	},
	"net_deposits": {
		"display_name": "Net Deposits",
		"tooltip_display_name": "All transfers from your bank account to all linked platforms minus the withdrawals from these platforms.",
		"icon": "icon-win-airplay",
		"value": {
			"amount": 1232500.01,
			"currency_code": "EUR"
		},
		"graph_data": [
			{
				"url": "/v1/globaldashboards/graphics/net-deposits/?period=year",
				"option_display_name": "Last Year",
				"default": true
			},
			{
				"url": "/v1/globaldashboards/graphics/net-deposits/?period=all",
				"option_display_name": "All",
				"default": false
			}
		]
	}, 
	"cash_drag": {
		"display_name": "Cash Drag",
		"tooltip_display_name": "The percentage of your Total Volume, which is not invested in assets and therefore does not yield any interest currently.",
		"percent": 33.1,
		"icon": "icon-win-airplay",
		"graph_data": [
			{
				"url": "/v1/globaldashboards/graphics/cashdrag/?period=year",
				"option_display_name": "Year",
				"default": true
			},
			{
				"url": "/v1/globaldashboards/graphics/cashdrag/?period=all",
				"option_display_name": "All",
				"default": true 
			}
		]
	},
	"net_earnings_past_365days": {
		"display_name": "Net Return",
		"tooltip_display_name": "Net Return",
		"icon": "icon-win-airplay",
		"default_graph" : true,
		"graph_data": [
			{
				"url": "/v1/globaldashboards/graphics/netearningspast365days?period=year",
				"option_display_name": "Last Year",
				"default": true
			},
			{
				"url": "/v1/globaldashboards/graphics/netearningspast365days?period=all",
				"option_display_name": "All",
				"default": true 
			}
		]
	},
	"net_earnings_past_year": {
		"display_name": "Net Return",
		"tooltip_display_name": "Your total interest and other income on all linked platforms minus fees, tax and write-offs.",
		"value": {
			"amount": "2453.00",
			"currency_code": "EUR"
		},
		"icon": "icon-win-airplay",
		"graph_data": [
			{
				"url": "/v1/globaldashboards/graphics/netearningspastyear/?period=year",
				"option_display_name": "Last Year",
				"default": true
			},
			{
				"url": "/v1/globaldashboards/graphics/earningspastyear/?period=all",
				"option_display_name": "All",
				"default": true 
			}
		]
	},
	"net_earnings_total_funds": {
		"display_name": "Net Return",
		"tooltip_display_name": "Your total interest and other income on all linked platforms minus fees, tax and write-offs.",
		"value": {
			"amount": 2453.00,
			"currency_code": "EUR"
		},
		"icon": "icon-win-airplay",
		"graph_data": [
			{
				"url": "/v1/globaldashboards/graphics/netearningstotalfunds/?period=year",
				"option_display_name": "Year",
				"default": true
			},
			{
				"url": "/v1/globaldashboards/graphics/netearningstotalfunds/?period=all",
				"option_display_name": "All",
				"default": false
			}
		]
	},    
	"kpis": {
		"display_name": "Key Performance Indicators",
		"tooltip_display_name": "This displays the most importante KPI's",
		"table_header": [
			{
				"display_name": "Platform/UserName",
			},
			{
				"display_name": "Yield",
				"tooltip_display_name": "The standardized yield of the platform"
			},
			{
				"display_name": "Total Volume",
				"tooltip_display_name": "Total Volume tooltip"
			},
			{
				"display_name": "Cash"
			},
			{
				"display_name": "Exposure",
				"tooltip_display_name": "Exposure tooltip"
			},
			{
				"display_name": "Current",
				"tooltip_display_name": "Current tooltip"
			}
		],
		"table_data": [
			[
				{
					"datum": "Mintos",
					"issue_text": "It was not possible to update the data of this platform. This will be retried again during the next night. No action is required from you."
				},
				{
					"datum": "Antoine@winvestify.com"
				},
				{
					"datum": {
						"percent": 11.3
					}
				},
				{
					"datum": {
						"amount": 225700.88,
						"currency_code": "EUR"
					}
				},
				{
					"datum": {
						"amount": 5563.42,
						"currency_code": "EUR"
					}
				},
				{
					"datum": {
						"percent": 28.3
					}
				},
				{
					"datum": {
						"percent": 98.12
					}
				}
			],
			[
				{
					"datum": "Twino"
				},
				{
					"datum": "Antoine@gmail.com"
				},
				{
					"datum": {
						"percent": 9.8
					}
				},
				{
					"datum": {
						"amount": 24200,
						"currency_code": "EUR"
					}
				},
				{
					"datum": {
						"amount": 551.42,
						"currency_code": "EUR"
					}
				},
				{
					"datum": {
						"percent": 17.3
					}
				},
				{
					"datum": {
						"percent": 99.6
					}
				}
			],
			[
				{
					"datum": "Bondora",
					"issue_text": "Our system detected a new concept payment concept in the account of this PFP which was not understood. This problem will be rectified during the course of the day and incorporated during the regular update of the next night. No action is required from you."
				},
				{
					"datum": "Charly@winvestify.com"
				},
				{
					"datum": {
						"percent": 9.8
					}
				},
				{
					"datum": {
						"amount": 24200,
						"currency_code": "EUR"
					}
				},
				{
					"datum": {
						"amount": 551.42,
						"currency_code": "EUR"
					}
				},
				{
					"datum": {
						"percent": 17.3
					}
				},
				{
					"datum": {
						"percent": 99.6
					}
				}
			],
			[
				{
					"datum": "Bondora"
				},
				{
					"datum": "My BusinessAccount on Bondora"
				},
				{
					"datum": {
						"percent": 12.5
					}
				},
				{
					"datum": {
						"amount": 924200,
						"currency_code": "EUR"
					}
				},
				{
					"datum": {
						"amount": 71.42,
						"currency_code": "EUR"
					}
				},
				{
					"datum": {
						"percent": 4.3
					}
				},
				{
					"datum": {
						"percent": 99.0
					}
				}
			] 
		],
		"payment_delay": {
			"display_name": "Payment Delay",
			"display_name1 ": "More than 91 days",
			"delinquency_rate": {
				"display_name": "Delinquency Rate",
				"percent": 0.3
			},
			"outstanding_debt": {
				"display_name": "Outstanding Debt",
				"amount": {
					"value": 563.77,
					"currency_code": "EUR"
				}
			},
			"written_off": {
				"display_name": "Written Off",
				"amount": {
					"value": 3424.66,
					"currency_code": "EUR"
				}
			},
			"tooltip_display_name": "A breakdown of the payment delays of your investments.",
			"graph_data": [
				{
					"url": "/v1/globaldashboards/graphics/paymentdelay",
					"default": true
				}
			]
		},
		"current_situation": {
			"display_name": "Current",
			"tooltip_display_name": "The current situation of your investments.",
			"graph_data": [
				{
					"url": "/v1/globaldashboards/graphics/current",
					"default": true
				}
			]
		},
		"exposure": {
			"display_name": "Exposure",
			"tooltip_display_name": "The ratio of this platform in your total P2P investment portfolio.",
			"graph_data": [
				{
					"url": "/v1/globaldashboards/graphics/exposure",
					"default": true
				}
			]
		},
		"links": [
			{
				"href": "/dashboard/4422",
				"rel": "list",
				"method": "GET"
			},
			{
				"href": "/dashboard/238989",
				"rel": "list",
				"method": "GET"
			},
			{
				"href": "/dashboard/189",
				"rel": "list",
				"method": "GET"
			},
		]
	}
}
