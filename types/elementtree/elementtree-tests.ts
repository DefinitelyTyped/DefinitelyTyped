import * as et from 'elementtree';

// Example 1
// https://github.com/racker/node-elementtree#example-1--creating-an-xml-document

const XML = et.XML;
const ElementTree = et.ElementTree;
const element = et.Element;
const subElement = et.SubElement;

const root = element('entry');
root.set('xmlns', 'http://www.w3.org/2005/Atom');

const tenantId = subElement(root, 'TenantId');
tenantId.text = '12345';

const serviceName = subElement(root, 'ServiceName');
serviceName.text = 'MaaS';

const resourceId = subElement(root, 'ResourceID');
resourceId.text = 'enAAAA';

const usageId = subElement(root, 'UsageID');
usageId.text = '550e8400-e29b-41d4-a716-446655440000';

const eventType = subElement(root, 'EventType');
eventType.text = 'create';

const category = subElement(root, 'category');
category.set('term', 'monitoring.entity.create');

const dataCenter = subElement(root, 'DataCenter');
dataCenter.text = 'global';

const region = subElement(root, 'Region');
region.text = 'global';

const startTime = subElement(root, 'StartTime');
startTime.text = new Date();

const resourceName = subElement(root, 'ResourceName');
resourceName.text = 'entity';

const etree1 = new ElementTree(root);
const xml = etree1.write({ xml_declaration: false });

// Example 2
// https://github.com/racker/node-elementtree#example-2--parsing-an-xml-document

const data = '<xml></xml>';
const etree2 = et.parse(data);

etree2.findall('./entry/TenantId').length; // 2
etree2.findtext('./entry/ServiceName'); // MaaS
etree2.findall('./entry/category')[0].get('term'); // monitoring.entity.create
etree2.findall('*/category/[@term="monitoring.entity.update"]').length; // 1
