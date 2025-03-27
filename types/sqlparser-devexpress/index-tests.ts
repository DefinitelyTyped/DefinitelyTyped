import { convertSQLToAst, convertAstToDevextreme } from "sqlparser-devexpress";

const sqlQuery = "Product_Current_Inventory <> 0 OR (Product_Name like 'HD' AND Product_Cost < 200)";
const astRaw = convertSQLToAst(sqlQuery);
const devexpressFilter = convertAstToDevextreme(astRaw.ast, {});

// expected output
// const filter = [
//   ['Product_Current_Inventory', '<>', 0],
//   'or',
//   [
//     ['Product_Name', 'contains', 'HD'],
//     'and',
//     ['Product_Cost', '<', 200],
//   ],
// ];

if(!devexpressFilter)
    throw new Error("Assertion failed: devexpressFilter is null");

if (
    devexpressFilter[0][0] !== 'Product_Current_Inventory' ||
    devexpressFilter[0][1] !== '<>' ||
    devexpressFilter[0][2] !== 0 ||

    devexpressFilter[1] !== 'or' ||

    devexpressFilter[2][0][0] !== 'Product_Name' ||
    devexpressFilter[2][0][1] !== 'contains' ||
    devexpressFilter[2][0][2] !== 'HD' ||

    devexpressFilter[2][1] !== 'and' ||

    devexpressFilter[2][2][0] !== 'Product_Cost' ||
    devexpressFilter[2][2][1] !== '<' ||
    devexpressFilter[2][2][2] !== 200
  ) {
    throw new Error("Assertion failed: devexpressFilter does not match expectedFilter");
  } else {
    // Assertion passed! devexpressFilter matches expectedFilter.
  }
