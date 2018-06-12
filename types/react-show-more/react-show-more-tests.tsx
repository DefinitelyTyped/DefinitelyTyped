import ShowMore from 'react-show-more';
import * as React from 'react';

let longText = "scenester Banksy single-origin coffee squid flannel XOXO chillwave Helvetica plaid slow-carb drinking vinegar Wes Anderson gastropub gluten-free Tonx you probably haven't heard of them sriracha Tumblr skateboard crucifix tousled pop-up tote bag asymmetrical Pitchfork DIY sartorial Thundercats mumblecore occupy Portland hella synth butcher Godard 8-bit fanny pack salvia organic stumptown High Life biodiesel letterpress aesthetic semiotics Shoreditch flexitarian irony fashion axe typewriter ethical sustainable Blue Bottle pork belly wayfarers heirloom Pinterest Vice raw denim cornhole kogi dreamcatcher church-key four loko cred selfies Etsy beard hashtag quinoa actually next level farm-to-table PBR&B cardigan blog leggings deep v cray locavore McSweeney's vinyl selvage photo booth Kickstarter freegan viral tofu hoodie jean shorts American Apparel ugh Schlitz PBR wolf Odd Future YOLO put a bird on it before they sold out pickled pour-over trust fund distillery Echo Park Cosby sweater seitan literally art party Williamsburg banh mi tattooed Intelligentsia ennui Brooklyn fap narwhal paleo mustache 3 wolf moon banjo yr pug forage mixtape keffiyeh direct trade  Bushwick cliche small batch twee Neutra Marfa Carles kale chips VHS craft beer bespoke messenger bag roof party artisan mlkshk shabby chic chambray kitsch disrupt try-hard readymade post-ironic bicycle rights whatever meh street art fingerstache brunch lomo fixie master cleanse meggings keytar authentic gentrify chia 90's Truffaut iPhone umami food truck Austin +1 vegan swag bitters polaroid normcore retro lo-fi";

<ShowMore
	lines={3}
	more='Show more'
	less='Show less'
	anchorClass=''
>
	{longText}
</ShowMore >