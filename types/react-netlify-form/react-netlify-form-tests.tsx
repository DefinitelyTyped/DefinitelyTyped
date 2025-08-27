import * as React from "react";
import NetlifyForm from "react-netlify-form";

class BasicForm extends React.Component {
    render() {
        return (
            <NetlifyForm name="Contact Form">
                {({ loading, error, success }) => (
                    <div>
                        {loading && <div>Loading...</div>}
                        {error && <div>Your information was not sent. Please try again later.</div>}
                        {success && <div>Thank you for contacting us!</div>}
                        {!loading && !success && (
                            <div>
                                <input type="text" name="Name" required />
                                <textarea name="Message" required />
                                <button>Submit</button>
                            </div>
                        )}
                    </div>
                )}
            </NetlifyForm>
        );
    }
}

class RecaptchaV2Form extends React.Component {
    render() {
        return (
            <NetlifyForm
                name="Form With Recaptcha"
                recaptcha={{
                    sitekey: "my_recaptcha_site_key",
                    size: "normal",
                }}
            >
                {({ loading, error, recaptchaError, success, recaptcha }) => (
                    <div>
                        {loading && <div>Loading...</div>}
                        {error && <div>Your information was not sent. Please try again later.</div>}
                        {recaptchaError && <div>Recaptcha did not match. Please make sure the box is checked.</div>}
                        {success && <div>Thank you for contacting us!</div>}
                        {!loading && !success && (
                            <div>
                                <input type="text" name="Name" required />
                                <textarea name="Message" required />
                                {recaptcha}
                                <button>Submit</button>
                            </div>
                        )}
                    </div>
                )}
            </NetlifyForm>
        );
    }
}

class InvisibleRecaptchaForm extends React.Component {
    render() {
        return (
            <NetlifyForm
                name="Form With Invisible Recaptcha"
                recaptcha={{
                    sitekey: "my_recaptcha_site_key",
                    size: "invisible",
                }}
            >
                {({ loading, error, recaptchaError, success, recaptcha }) => (
                    <div>
                        {loading && <div>Loading...</div>}
                        {error && <div>Your information was not sent. Please try again later.</div>}
                        {recaptchaError && <div>Recaptcha did not match. Please make sure the box is checked.</div>}
                        {success && <div>Thank you for contacting us!</div>}
                        {!loading && !success && (
                            <div>
                                <input type="text" name="Name" required />
                                <textarea name="Message" required />
                                <button>Submit</button>
                            </div>
                        )}
                        {/* Invisible reCAPTCHA must be kept outside of conditionals */}
                        {recaptcha}
                    </div>
                )}
            </NetlifyForm>
        );
    }
}
