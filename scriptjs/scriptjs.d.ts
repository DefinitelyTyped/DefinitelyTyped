interface $script {
  (paths:string | string[], idOrDone:string | (() => void), optDone?:() => void): $script;
  get(path:string, fn:() => void);
  order(scripts:string[], id:string, done:() => void);
  path(p:string);
  urlArts(str:string);
  ready(deps:string | string[], ready:() => void, req?:(missing:string[]) => void): $script;
}

declare var $script: $script;

export = $script;
