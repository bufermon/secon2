document.addEventListener('DOMContentLoaded', function () {
    const consentBanner = document.getElementById('cookieConsentBanner');
    const acceptButton = document.getElementById('acceptCookiesBtn');

    const consentGiven = localStorage.getItem('lisboaHairstyleCookieConsent');

    if (!consentGiven || consentGiven !== 'true') {
        if (consentBanner) {
            consentBanner.classList.remove('hidden');
        }
    }

    if (acceptButton) {
        acceptButton.addEventListener('click', function () {
            localStorage.setItem('lisboaHairstyleCookieConsent', 'true');
            if (consentBanner) {
                consentBanner.classList.add('hidden');
            }
        });
    }
});
