
function calq_base()
{
    calq.init("bfff14a4e0225789be3d9d22c4bb42a1");

    calq.init("bfff14a4e0225789be3d9d22c4bb42a1", { your: "config" });

    calq.action.track("Product Review", {"Rating": 9.0});

    calq.action.trackSale("Product Sale", { "Product Id": 149, "Product Name": "Dinosaur T-Shirt XL" }, "USD",10);

    calq.action.trackHTMLLink('Link', { 'Target': 'Calq'});

    calq.action.trackPageView();

    calq.action.trackPageView("Custom Action");

    calq.action.setGlobalProperty("Referral Source", "Google Campaign");
}

function calq_people()
{
    calq.user.identify("1001");

    calq.user.clear();

    calq.user.profile( { "Company": "MegaCorp", "$email": "super_customer1@notarealemail.com" });
}
