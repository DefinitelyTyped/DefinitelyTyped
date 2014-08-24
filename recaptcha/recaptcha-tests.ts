/// <reference path="recaptcha.d.ts"/> 

var recaptchaOptions: RecaptchaOptions = {
    theme : 'custom',
    custom_theme_widget: 'recaptcha_widget'
 };

var recaptchaOptions: RecaptchaOptions = {
	custom_translations: { instructions_visual: "This is my text:" }
};

var recaptchaOptions: RecaptchaOptions = {
	custom_translations: {
		instructions_visual: "Scrivi le due parole:",
		instructions_audio: "Trascrivi ci\u00f2 che senti:",
		play_again: "Riascolta la traccia audio",
		cant_hear_this: "Scarica la traccia in formato MP3",
		visual_challenge: "Modalit\u00e0 visiva",
		audio_challenge: "Modalit\u00e0 auditiva",
		refresh_btn: "Chiedi due nuove parole",
		help_btn: "Aiuto",
		incorrect_try_again: "Scorretto. Riprova.",
	},
	lang: 'it',
	theme: 'red'
};

var recaptchaOptions: RecaptchaOptions = {
   theme : 'white',
   tabindex : 2
};

Recaptcha.create("public_key_a",
	"element_id_a",
	{
		theme: "red",
		callback: Recaptcha.focus_response_field
	}
);

Recaptcha.create("public_key_b",
	"element_id_b",
	recaptchaOptions
);

Recaptcha.switch_type("audio");
Recaptcha.get_challenge();
Recaptcha.get_response();
Recaptcha.reload();
Recaptcha.showhelp();
Recaptcha.focus_response_field();
Recaptcha.destroy();
