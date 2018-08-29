/// <reference types='ojs/ojprogresslist'/>
/// <reference types='ojs/ojcomposite'/>
declare namespace oj {  
  interface FileUploadTransport {
    flush(): void;
    queue(fileList: FileList): Array<oj.ProgressItem>;
  }

}
declare namespace oj {  
  class ojFilePicker extends JetElement<ojFilePickerSettableProperties> {
    accept: Array<string>|null;
    selectOn: 'auto'|'click'|'drop'|'clickAndDrop';
    selectionMode: 'multiple'|'single';
    onAcceptChanged: (event: CustomEvent)=> any;
    onSelectOnChanged: (event: CustomEvent)=> any;
    onSelectionModeChanged: (event: CustomEvent)=> any;
    onOjSelect: (event: oj.ojFilePicker.ojSelect)=> any;

    addEventListener<T extends keyof ojFilePickerEventMap>(type: T, listener: (this: HTMLElement, ev: ojFilePickerEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    getProperty(property: string): any;
    setProperties(properties: object): void;
    setProperty(property: string, value: any): void;
  }
  namespace ojFilePicker {
    class ojSelect extends CustomEvent<{files: FileList, [propName: string]: any}> {
      
    }
  }
  interface ojFilePickerEventMap extends oj.JetElementEventMap {
    'ojSelect': oj.ojFilePicker.ojSelect;
    'acceptChanged': CustomEvent;
    'selectOnChanged': CustomEvent;
    'selectionModeChanged': CustomEvent;
  }
  interface ojFilePickerSettableProperties extends JetSettableProperties {
    accept: Array<string>|null;
    selectOn: 'auto'|'click'|'drop'|'clickAndDrop';
    selectionMode: 'multiple'|'single'; 
  }

}
