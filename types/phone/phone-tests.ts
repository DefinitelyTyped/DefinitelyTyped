import phone = require('phone');

phone('+852 6569-8900'); // return ['+85265698900', 'HKG']
phone('(817) 569-8900'); // return ['+18175698900, 'USA']
phone('(817) 569-8900', ''); // return ['+18175698900, 'USA']
phone('(817) 569-8900', 'USA'); // return ['+18175698900', 'USA']
phone('(817) 569-8900', 'HKG'); // return []
phone('+1(817) 569-8900', 'HKG'); // return [], as it is not a valid HKG mobile phone number
phone('+1(817) 569-8900', ''); // return ['+18175698900', 'USA']
phone('(817) 569-8900', ''); // return ['+18175698900', 'USA']
phone('6123-6123', ''); // return [], as default country is USA
phone('6123-6123', 'HKG'); // return ['+85261236123', 'HKG']
