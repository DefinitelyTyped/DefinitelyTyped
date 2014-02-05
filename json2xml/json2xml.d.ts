interface Json2XmlStatic
{
    (json:Object, opts?:any);
}


declare var json2xml:Json2XmlStatic;

declare module "json2xml"
{
    export = json2xml;
}