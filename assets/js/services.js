$(document).ready(function() {
    particlesJS.load('hero', 'assets/json/particlesjs-config-services.json', function() {});
    var animation2 = bodymovin.loadAnimation({
        container: document.getElementById('lottie-go-down'), // Required
        path: '/assets/json/lottie-go-down.json', // Required
        renderer: 'svg', // Required
        loop: true, // Optional
        autoplay: true, // Optional
        name: "Lottie Go Down", // Name for future reference. Optional.
    });
});

function writeText(val) {
    switch (val) {
        case 1:
            $(".card-title").text("Preventivazione");
            $(".card-text").text("Testo della preventivazione");
            break;
        case 2:
            $(".card-title").text("Realizzazione Impianti di Contabilizzazione");
            $(".card-text").text("Usufruisci delle detrazioni fiscali con la formula tradizionale della fornitura e posa in opera del tuo sistema di contabilizzazione. Affidati ad e-bs Enery Billing Service s.r.l. in ogni aspetto, dall'installazione fino al collaudo dell'impianto.");
            break;
        case 3:
            $(".card-title").text("Contabilizzazione Energetica dei consumi");
            $(".card-text").text("Un unico interlocutore per le tue spese di climatizzazione invernale, climatizzazione estiva e di acqua calda sanitaria. Un format innovativo e trasparente che ti permette di capire ");
            break;
        case 4:
            $(".card-title").text("Noleggio apparecchi di misurazione");
            $(".card-text").text("Usufruisci delle detrazioni fiscali con la formula tradizionale della fornitura e posa in opera del tuo sistema di contabilizzazione. Affidati ad e-bs Enery Billing Service s.r.l. in ogni aspetto, dall'installazione fino al collaudo dell'impianto.");
            break;

    }
}