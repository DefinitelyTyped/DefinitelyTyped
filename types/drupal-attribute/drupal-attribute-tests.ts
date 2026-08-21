import DrupalAttribute = require("drupal-attribute");

const drupalAttribute = new DrupalAttribute(new Map([["key1", "value1"], ["key2", "value2"]]));

const ret1: DrupalAttribute = drupalAttribute.addClass("myClass1", "myClass2", "myClass3");
const ret2: DrupalAttribute = drupalAttribute.removeClass("myClass2");
const ret3: boolean = drupalAttribute.hasClass("myClass1");
const ret4: DrupalAttribute = drupalAttribute.setAttribute("my-attribute", "the-value");
const ret5: DrupalAttribute = drupalAttribute.removeAttribute("my-attribute");
const ret6: string = drupalAttribute.toString();
