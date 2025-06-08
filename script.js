 /* Jediny problem na ktery jsem narazil, v sekci What we do je posldni obrazek Auta, s textem "Car Trips", tento skript mi Cartrips spoji do jednoho slova. No clue.*/
 
 document.addEventListener("DOMContentLoaded", () => {
     document.querySelectorAll("p, h1, h2, h3, h4, h5, h6").forEach(element => {
         element.childNodes.forEach(node => {
             if (node.nodeType === Node.TEXT_NODE) {
                 let fragment = document.createDocumentFragment();
                 node.textContent.split(/(\s+)/).forEach(word => {
                     if (word.trim() === "") {
                         fragment.appendChild(document.createTextNode(word)); // zachovej mezery
                     } else {
                         let span = document.createElement("span");
                         span.textContent = word;
                         span.classList.add("hover-word");
                         span.addEventListener("mouseenter", () => {
                             span.classList.add("hover-red");
                         });
                         span.addEventListener("mouseleave", () => {
                             span.classList.remove("hover-red");
                         });
                         fragment.appendChild(span);
                     }
                 });
                 element.replaceChild(fragment, node);
             }
         });
     });
 });

 
// Až je dokument načten, spustí se tento kód
    document.addEventListener("DOMContentLoaded", function () {
      const hamburger = document.getElementById("hamburger");
      const menu = document.querySelector(".menu");

      // Kliknutí na hamburger – přepíná viditelnost nabídky
      hamburger.addEventListener("click", function (event) {
        event.stopPropagation(); // Zabráníme, aby se toto kliknutí "propagovalo" na dokument a ihned zavřelo menu
        menu.classList.toggle("hidden");
        hamburger.classList.toggle("active");
      });

      // Kliknutí mimo nabídku – zavře ji, pokud je otevřená
      document.addEventListener("click", function (event) {
        if (
          !menu.classList.contains("hidden") && // menu je otevřené
          !menu.contains(event.target) &&        // klik není uvnitř nabídky
          !hamburger.contains(event.target)      // ani klik není na samotném hamburger tlačítku
        ) {
          menu.classList.add("hidden");
          hamburger.classList.remove("active");
        }
      });
    });

    






















