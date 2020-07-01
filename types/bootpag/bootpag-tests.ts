var pagerSelector = ".bootpager";
var $pager = $(pagerSelector);

var pagerOptions: JqueryBootpag.Options = {
    total: 15,
    page: 1,
    maxVisible: 5,
    first: "<i class='fa fa-fw fa-fast-backward txt-sm'></i>",
    last: "<i class='fa fa-fw fa-fast-forward  txt-sm'></i>",
    prev: "<i class='fa fa-fw fa-step-backward txt-sm'></i>",
    next: "<i class='fa fa-fw fa-step-forward  txt-sm'></i>"
};

$pager.bootpag(pagerOptions);
