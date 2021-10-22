import alex = require("alex");

// configs
const exemption = ["word", "noun"];
const deny = ["deny", "word"];
const config: alex.Config = {
    allow: exemption,
    deny,
    noBinary: true,
    profanitySureness: 1,
};
const denyConfig: alex.Config = {
    deny,
    noBinary: true,
};

// api
alex("We’ve confirmed his identity."); // $ExpectType VFile
alex("We’ve confirmed his identity.", exemption); // $ExpectType VFile
alex("We’ve confirmed his identity.", config); // $ExpectType VFile
alex("We’ve confirmed his identity.", denyConfig); // $ExpectType VFile

alex.markdown("### We’ve confirmed his **identity**."); // $ExpectType VFile
alex.markdown("### We’ve confirmed his **identity**.", exemption); // $ExpectType VFile
alex.markdown("### We’ve confirmed his **identity**.", config); // $ExpectType VFile
alex.markdown("### We’ve confirmed his **identity**.", denyConfig); // $ExpectType VFile

alex.html('<p class="black">He walked to class.</p>'); // $ExpectType VFile
alex.html('<p class="black">He walked to class.</p>', exemption); // $ExpectType VFile
alex.html('<p class="black">He walked to class.</p>', config); // $ExpectType VFile
alex.html('<p class="black">He walked to class.</p>', denyConfig); // $ExpectType VFile

alex.text("The `boogeyman`."); // $ExpectType VFile
alex.text("The `boogeyman`.", exemption); // $ExpectType VFile
alex.text("The `boogeyman`.", config); // $ExpectType VFile
alex.text("The `boogeyman`.", denyConfig); // $ExpectType VFile

alex.mdx("The `boogeyman`.", denyConfig); // $ExpectType VFile
alex.mdx("<Component>He walked to class.</Component>"); // $ExpectType VFile
alex.mdx("<Component>He walked to class.</Component>", config); // $ExpectType VFile
