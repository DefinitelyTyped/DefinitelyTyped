///<reference path="xml2json.d.ts" />

// Create x2js instance with default config
var x2js = new X2JS();

// JSON to DOM
var xmlDoc = x2js.json2xml(
  {
    MyRoot: {
      MyChild: 'my_child_value',
      MyAnotherChild: 10,
      MyArray: [ 'test', 'test2' ],
      MyArrayRecords: [
        {
          ttt: 'vvvv'
        },
        {
          ttt: 'vvvv2'
        }
      ]
    }
  }
);


// JSON to XML string
var xmlDocStr = x2js.json2xml_str(
  {
    MyRoot: {
      MyChild: 'my_child_value',
      MyAnotherChild: 10,
      MyArray: [ 'test', 'test2' ],
      MyArrayRecords: [
        {
          ttt: 'vvvv'
        },
        {
          ttt: 'vvvv2'
        }
      ]
    }
  }
);

console.log(xmlDocStr);

// JSON arrays to string
var xmlDocStr = x2js.json2xml_str(
  {
    MyRoot: {
      namedItemArray: {
        item: [
          { first: 'success1' } ,
          { first: 'success2' }
        ]
      },
      namedArray: [
        { first: 'success1' } ,
        { first: 'success2' }
      ],
      justArray: [ 'just success1', 'just success2' ],
      arrayWithAttrs: [
        {
          _test: 'successAttr',
          __text: 'success',
          temp: 'successTemp'
        },
        {
          _test: 'successAttr2',
          __text: 'success2',
          temp: 'successTemp2'
        }
      ]
    }
  }
);

console.log(xmlDocStr);

// XML string to JSON    
var xmlText = "<MyOperation><test>Success</test><test2><item>ddsfg</item><item>dsdgfdgfd</item></test2></MyOperation>";
var jsonObj = x2js.xml_str2json<any>(xmlText);
console.log(jsonObj.MyOperation.test);

// Array access form examples
console.log(x2js.asArray(jsonObj.MyOperation.test)[0]);
// Or old style (1.0.+):
var x2jsOld = new X2JS({arrayAccessForm: "property"});
jsonObj = x2jsOld.xml_str2json(xmlText);
console.log("Old is " + jsonObj.MyOperation.test_asArray[0]);

// XML/DOM to JSON    
var xmlText = " <MyOperation> <test>- Success -</test> <test2> TestText <item> ddsfg </item> TestText2 <item>dsdgfdgfd</item></test2></MyOperation>"
xmlDoc = x2js.parseXmlString(xmlText);

var jsonObj = x2js.xml2json<any>(xmlDoc);
console.log(jsonObj.MyOperation.test);

// Parsing XML attrs
var xmlText = "<MyOperation myAttr='SuccessAttrValue'><txtAttrChild sAttr='SUCCESS TXT ATTR CHILD'>SUCCESS TXT</txtAttrChild><test>Success</test><test2 myAttr='SuccessAttrValueTest2'><item>ddsfg</item><item>dsdgfdgfd</item></test2></MyOperation>";
var jsonObj = x2js.xml_str2json<any>(xmlText);
console.log(jsonObj.MyOperation._myAttr);
console.log(jsonObj.MyOperation.test2._myAttr);
console.log(jsonObj.MyOperation.txtAttrChild._sAttr);
console.log(jsonObj.MyOperation.txtAttrChild.__text);
console.log(jsonObj.MyOperation.txtAttrChild.toString());

// JSON to XML attrs
var xmlDocStr = x2js.json2xml_str(
  {
    TestAttrRoot: {
      _myAttr: 'myAttrValue',
      MyChild: 'my_child_value',
      MyAnotherChild: 10,
      MyTextAttrChild: {
        _myTextAttr: 'myTextAttrValue',
        __text: 'HelloText'
      }
    }
  }
);

console.log(xmlDocStr);

//Change prefix for attributes
var x2jsChangedAttrs = new X2JS({
  // XML attributes. Default is "_"
  attributePrefix: "$"
});
jsonObj = x2jsChangedAttrs.xml_str2json(xmlText);
console.log(jsonObj.MyOperation.$myAttr);
console.log(jsonObj.MyOperation.test2.$myAttr);
console.log(jsonObj.MyOperation.txtAttrChild.$sAttr);

xmlDocStr = x2jsChangedAttrs.json2xml_str({
    TestAttrRoot: {
      _myAttr: 'myAttrValue',
      MyChild: 'my_child_value',
      MyAnotherChild: 10,
      MyTextAttrChild: {
        $myTextAttr: 'myTextAttrValue',
        __text: 'HelloText'
      }
    }
  }
);

console.log(xmlDocStr);


// Parse XML with namespaces
var xmlText = "<testns:MyOperation xmlns:testns='http://www.example.org'><test>Success</test><test2 myAttr='SuccessAttrValueTest2'><item>ddsfg</item><item>dsdgfdgfd</item><item2>testArrSize</item2></test2></testns:MyOperation>";
var jsonObj = x2js.xml_str2json<any>(xmlText);
console.log(jsonObj.MyOperation.test);
if (jsonObj.MyOperation.test2.item.length > 2)
  console.log("Error! Incorrect array len!");

var testObjC = {
  'm:TestAttrRoot': {
    '_tns:m': 'http://www.example.org',
    '_tns:cms': 'http://www.example.org',
    MyChild: 'my_child_value',
    'cms:MyAnotherChild': 'vdfd'
  }
}

// Parse JSON object with namespaces
var xmlDocStr = x2js.json2xml_str(
  testObjC
);

console.log(xmlDocStr);

// Parse JSON object constructed with another NS-style
var testObjNew = {
  TestAttrRoot: {
    __prefix: 'm',
    '_tns:m': 'http://www.example.org',
    '_tns:cms': 'http://www.example.org',
    MyChild: 'my_child_value',
    MyAnotherChild: {
      __prefix: 'cms',
      __text: 'vdfd'
    }
  }
}

// Parse JSON object with namespaces
var xmlDocStr = x2js.json2xml_str(
  testObjNew
);

console.log(xmlDocStr);

// Parse XML with header
var xmlText = "<?xml version='1.0' encoding='utf-8' ?>\n" +
  "<test>XML HEADER SUCCESS!</test>";

var jsonObj = x2js.xml_str2json<any>(xmlText);
console.log(jsonObj.test);

// Parse XML with CDATA
var xmlText = "<test><simple>simple success</simple><data><![CDATA[<success/>]]></data> </test>";

var jsonObj = x2js.xml_str2json<any>(xmlText);
console.log(jsonObj.test.data.toString());
console.log(jsonObj.test.data.__cdata);
console.log(jsonObj.test.simple);


// Parse JSON object with CDATA
var xmlDocStr = x2js.json2xml_str(
  jsonObj
);
console.log(xmlDocStr);

// Parse JSON with emtpy attributes
var xmlDocStr = x2js.json2xml_str(
  {
    MyRoot: {
      MyNullChild: null,
      MyNullChild2: undefined,
      MyAnotherChild: 10,
      MyEmptyChild: {
        _attr: "test"
      },
      MyEmptyChild2: {
        _attr: "test",
        __text: "Empty Nodes Test"
      }
    }
  }
);

console.log(xmlDocStr);

// Escaping XML characters
xmlDocStr = x2js.json2xml_str(
  {
    MyRoot: {
      MyEscapeXmlChild: "<success> & \" ' / </success>",
      MyEscapeXmlChild2: {
        _attr: "success",
        __text: "<success> & \" ' / </success>"
      },
      MyEscapeXmlChildNonString: false
    }
  }
);

console.log(xmlDocStr);

jsonObj = x2js.xml_str2json(xmlDocStr);
console.log(jsonObj.MyRoot.MyEscapeXmlChild);
console.log(jsonObj.MyRoot.MyEscapeXmlChild2.toString());

console.log(x2js.getVersion());

// Array access path demos
x2js = new X2JS({
  arrayAccessFormPaths: [
    "MyArrays.test4.item",
    /.*\.test3\.item/
  ]
});

xmlText = "<MyArrays>" +
  "<test2><item>success</item><item>second</item></test2>" +
  "<test3><item>success</item></test3>" +
  "<test4><item>success</item></test4>" +
  "<test5><item>success</item></test5>" +
  "</MyArrays>";


jsonObj = x2js.xml_str2json(xmlText);
console.log(jsonObj.MyArrays.test3.item[0]);
console.log(jsonObj.MyArrays.test4.item[0]);
console.log(jsonObj.MyArrays.test5.item);

// Working with datetimes
x2js = new X2JS({
  datetimeAccessFormPaths: [
    "MyDts.testds",
    /.*\.testdt.*/
  ]
});

xmlText = "<MyDts>" +
  "<testds>2002-10-10T12:00:00+04:00</testds>" +
  "<testdt1>2002-10-10T12:00:00Z</testdt1>" +
  "<testdt2>2002-10-10T12:00:00</testdt2>" +
  "<testdc>2002-10-10T12:00:00Z</testdc>" +
  "</MyDts>";
jsonObj = x2js.xml_str2json(xmlText);

console.log(jsonObj.MyDts.testds);
console.log(jsonObj.MyDts.testdt1);
console.log(jsonObj.MyDts.testdt2);
console.log(x2js.asDateTime(jsonObj.MyDts.testdc));

