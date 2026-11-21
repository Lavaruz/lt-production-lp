/**
 * LT Pro landing page.
 * Semua tombol WhatsApp memakai atribut data-wa berisi pesan otomatis.
 * Nomor diatur di satu tempat: WA_NUMBER.
 */
(function () {
  "use strict";

  var WA_NUMBER = "6285740159888";

  document.querySelectorAll("[data-wa]").forEach(function (el) {
    var text = el.getAttribute("data-wa");
    el.setAttribute("href", "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(text));
  });

  var year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
})();
