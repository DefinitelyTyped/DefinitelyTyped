

var dynatree = $('element').dynatree();

dynatree.visit((node)=>{
    return false;
});

dynatree.visit((node)=>{
    return false;
}, true);

var node = dynatree.getActiveNode();

node.select(true);
