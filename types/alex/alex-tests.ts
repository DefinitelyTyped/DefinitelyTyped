// configs
const exemption = ['word', 'noun'];
const config: alex.AlexOptions = {
    allow: exemption,
    noBinary: true,
    profanitySureness: 1,
};

// api

alex('We’ve confirmed his identity.'); // $ExpectType VFile
alex('We’ve confirmed his identity.', exemption); // $ExpectType VFile
alex('We’ve confirmed his identity.', config); // $ExpectType VFile
alex.markdown('### We’ve confirmed his **identity**.'); // $ExpectType VFile
alex.markdown('### We’ve confirmed his **identity**.', exemption); // $ExpectType VFile
alex.markdown('### We’ve confirmed his **identity**.', config); // $ExpectType VFile
alex.html('<p class="black">He walked to class.</p>'); // $ExpectType VFile
alex.html('<p class="black">He walked to class.</p>', exemption); // $ExpectType VFile
alex.html('<p class="black">He walked to class.</p>', config); // $ExpectType VFile
alex.text('The `boogeyman`.'); // $ExpectType VFile
alex.text('The `boogeyman`.', exemption); // $ExpectType VFile
alex.text('The `boogeyman`.', config); // $ExpectType VFile
