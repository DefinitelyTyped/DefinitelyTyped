let t1 = $('input').typeahead({
    order: "desc",
    source: {
        data: [
            "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
            "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh",
            "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia",
            "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma",
            "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad",
            "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic", "Congo, Republic of the",
            "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti",
            "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador",
            "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
            "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Greenland", "Grenada", "Guatemala", "Guinea",
            "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India",
            "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
            "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos",
            "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
            "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
            "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Mongolia", "Morocco", "Monaco",
            "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
            "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru",
            "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino",
            "Sao Tome", "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone",
            "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain",
            "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan",
            "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
            "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
            "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
        ]
    },
    callback: {
        onInit: (node) => {
            console.log('Typeahead Initiated');
        }
    }
});

let t2 = $.typeahead({
    input: '.js-typeahead-country_v2',
    minLength: 1,
    maxItem: 20,
    order: "asc",
    href: "https://en.wikipedia.org/?title={{display}}",
    template: "{{display}} <small style='color:#999;'>{{group}}</small>",
    source: {
        country: {
            ajax: {
                url: "/jquerytypeahead/country_v2.json",
                path: "data.country"
            }
        },
        capital: {
            ajax: {
                type: "POST",
                url: "/jquerytypeahead/country_v2.json",
                path: "data.capital",
                data: { myKey: "myValue" }
            }
        }
    },
    callback: {
        onNavigateAfter: (node, lis, a, item, query, event) => {
            if (~[38, 40].indexOf(event.keyCode)) {
                const resultList = node.closest("form").find("ul.typeahead__list");
                const activeLi = lis.filter("li.active");
                const offsetTop = activeLi[0] && activeLi[0].offsetTop - (resultList.height() / 2) || 0;

                resultList.scrollTop(offsetTop);
            }
        },
        onClickAfter: (node, a, item, event) => {
            console.log("Just log");
        },
        onResult: (node, query, result, resultCount) => {
            if (query === "") return;

            let text = "";
            if (result.length > 0 && result.length < resultCount) {
                text = `Showing <strong>${result.length}</strong> of <strong>${resultCount}</strong> elements matching "${query}"`;
            } else if (result.length > 0) {
                text = `Showing <strong>${result.length}</strong> elements matching "${query}"`;
            } else {
                text = 'No results matching';
            }
            $('#result-container').html(text);
        },
        onMouseEnter: (node, a, item, event) => {
            if (item.group === "country") {
                $(a).append(`<span class="flag-chart flag-${item.display.replace(' ', '-').toLowerCase()}"></span>`);
            }
        },
        onMouseLeave: (node, a, item, event) => {
            $(a).find('.flag-chart').remove();
        }
    }
});
