


interface Payment {
    date: string;
    quantity: number;
    total: number;
    tip: number;
    type: string;
}

var payments = crossfilter<Payment>([
  { date: "2011-11-14T16:17:54Z", quantity: 2, total: 190, tip: 100, type: "tab" },
  { date: "2011-11-14T16:20:19Z", quantity: 2, total: 190, tip: 100, type: "tab" },
  { date: "2011-11-14T16:28:54Z", quantity: 1, total: 300, tip: 200, type: "visa" },
  { date: "2011-11-14T16:30:43Z", quantity: 2, total: 90, tip: 0, type: "tab" },
  { date: "2011-11-14T16:48:46Z", quantity: 2, total: 90, tip: 0, type: "tab" },
  { date: "2011-11-14T16:53:41Z", quantity: 2, total: 90, tip: 0, type: "tab" },
  { date: "2011-11-14T16:54:06Z", quantity: 1, total: 100, tip: 0, type: "cash" },
  { date: "2011-11-14T16:58:03Z", quantity: 2, total: 90, tip: 0, type: "tab" },
  { date: "2011-11-14T17:07:21Z", quantity: 2, total: 90, tip: 0, type: "tab" },
  { date: "2011-11-14T17:22:59Z", quantity: 2, total: 90, tip: 0, type: "tab" },
  { date: "2011-11-14T17:25:45Z", quantity: 2, total: 200, tip: 0, type: "cash" },
  { date: "2011-11-14T17:29:52Z", quantity: 1, total: 200, tip: 100, type: "visa" }
]);

var total_payments: number = payments.groupAll<number>().reduce(
    function(p: number, v: any) { return p += v.total; },
    function(p: number, v: any) { return p -= v.total; },
    function() { return 0; }).value();

var paymentsByTotal = payments.dimension((d) => d.total);

// Filters
paymentsByTotal.filter([100, 200]);         // selects payments whose total is between 100 and 200
paymentsByTotal.filter(120);                // selects payments whose total equals 120
paymentsByTotal.filter(d => d % 2);         // selects payments whose total is odd
paymentsByTotal.filter(null);               // selects all payments

paymentsByTotal.filterExact(120);           // selects payments whose total equals 120

paymentsByTotal.filterRange([100, 200]);    // selects payments whose total is between 100 and 200

paymentsByTotal.filterFunction(d => d % 2); // selects payments whose total is odd

// Selects payments whose total is between 0 and 10 or 20 and 30:
paymentsByTotal.filterFunction(d => 0 <= d && d < 10 || 20 <= d && d < 30);

paymentsByTotal.filterAll();                // selects all payments

var topPayments = paymentsByTotal.top(4);   // the top four payments, by total
{ var p: Payment = topPayments[0]; }          // the biggest payment
topPayments[1];                             // the second-biggest payment

var allPayments = paymentsByTotal.top(Infinity);

var bottomPayments = paymentsByTotal.bottom(4); // the bottom four payments, by total
{ var p: Payment = bottomPayments[0]; }           // the smallest payment
bottomPayments[1];                              // the second-smallest payment

var paymentGroupsByTotal = paymentsByTotal.group(total => Math.floor(total / 100));

paymentGroupsByTotal.size();

// bug of TS 0.9.5 https://typescript.codeplex.com/discussions/471751
//paymentGroupsByTotal.reduce((p, v) => p + 1, (p, v) => p - 1, () => 0);
paymentGroupsByTotal.reduce<number>((p, v) => p + 1, (p, v) => p - 1, () => 0);

paymentGroupsByTotal.reduceCount();

var paymentsByType = payments.dimension(d => d.type),
    paymentVolumeByType = paymentsByType.group().reduceSum(d => d.total),
    topTypes = paymentVolumeByType.top(1);
{ var s: string = topTypes[0].key; }   // the top payment type (e.g., "tab")
{ var n: number = topTypes[0].value; } // the payment volume for that type (e.g., 900)

interface Group {
    count: number;
    total: number;
}

function reduceAdd(p: Group, v: Payment) {
  ++p.count;
  p.total += v.total;
  return p;
}

function reduceRemove(p: Group, v: Payment) {
  --p.count;
  p.total -= v.total;
  return p;
}

function reduceInitial(): Group {
  return { count: 0, total: 0 };
}

function orderValue(p: Group) {
  return p.total;
}

var topTotals = paymentVolumeByType
    .reduce(reduceAdd, reduceRemove, reduceInitial)
    .order(orderValue)
    .top(2);
topTotals[0].key;   // payment type with highest total (e.g., "tab")
topTotals[0].value; // reduced value for that type (e.g., {count:8, total:920})

paymentGroupsByTotal.orderNatural();

var paymentCountByType = paymentsByType.group().reduceCount();
topTypes = paymentCountByType.top(1);
topTypes[0].key;   // the top payment type (e.g., "tab")
topTypes[0].value; // the count of payments of that type (e.g., 8)

var types = paymentCountByType.all();

paymentsByTotal.dispose();

crossfilter.bisect([], null, 0, 0);
var bisectBy = crossfilter.bisect.by<{value: string}, string>(t => t.value);
bisectBy([{value: 'a'}, {value: 'b'}], 'c', 0, 0); // 2
bisectBy.left([], 'string', 0, 0); // 0
bisectBy.right([], 'string', 0, 0); // 0

crossfilter.heap([], 0, 0);
var heapBy = crossfilter.heap.by(t => t);
heapBy([], 0, 0);
heapBy.sort([], 0, 0);

crossfilter.heapselect([], 0, 0, 0);
var heapselectBy = crossfilter.heapselect.by<Payment>(t => t);
heapselectBy([], 0, 0, 0);

crossfilter.insertionsort([], 0, 0);
var insertionsortBy = crossfilter.insertionsort.by<Payment>(t => t);
insertionsortBy([], 0, 0);

crossfilter.quicksort([], 0, 0);
var quicksortBy = crossfilter.quicksort.by<Payment>(t => t);
quicksortBy([], 0, 0);

crossfilter.permute([], []);
