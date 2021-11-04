
Satnav({})
.navigate({
    path: 'product/{required}/?{optional}',
    directions: (params) => {
        // Logic for product route
        console.log(params.required);
        console.log(params.hasOwnProperty('optional'));
    }
})
.otherwise('/product/1')
.change(function (hash, params, old) {
    // Logic for any change
    console.log(hash);
    console.log(params);
    console.log(old);
})
.go(); //Resolve current route
