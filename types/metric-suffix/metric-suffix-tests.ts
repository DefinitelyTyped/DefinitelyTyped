metric_suffix(42) // 42 
metric_suffix(999) // 999 
metric_suffix(1000) // 1.0k 
 
metric_suffix(1234, 2) // 1.2k 
metric_suffix(12345, 2) // 12k 
metric_suffix(123456, 2) // 123k 
 
metric_suffix(1234, 3) // 1.23k 
metric_suffix(12345, 3) // 12.3k 
metric_suffix(123456, 3) // 123k 
 
metric_suffix(1234, 4) // 1.234k 
metric_suffix(12345, 4) // 12.35k 
metric_suffix(123456, 4) // 123.5k 
 
metric_suffix(986725) // 987k 
metric_suffix(986725, 4) // 986.7k 
metric_suffix(986725123) // 987M 
metric_suffix(986725123, 5) // 986.73M 
