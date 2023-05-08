const SWEETS = Object.freeze({
    "Cupcake": "https://s.cdpn.io/24822/sidebar-cupcake.png",
    "Coffee": "https://s.cdpn.io/24822/ponytails-coffee-time-coffee-cup3.png",
    "Chocolate": "https://s.cdpn.io/24822/Chocolate.png",
    "Waffle": "https://s.cdpn.io/24822/waffle-homestyle.png",
    "Donuts": "https://s.cdpn.io/24822/donuts.jpg",
    "Sorbet": "https://s.cdpn.io/24822/raspberry-sorbet.gif",
    "French Croissant": "https://s.cdpn.io/24822/croissant-psd49504.png",
    "Macaron": "https://s.cdpn.io/24822/Macaron.png",
    "Mille-feuille": "https://s.cdpn.io/24822/millefeuille-vanille.jpg",
    "Lemon Pie": "https://s.cdpn.io/24822/tarte-au-citron.jpg",
});

$(function() {
    for (var sweet in SWEETS) {
        addSweetToProductList(sweet);
    }

    $(".sweet").click(function() {
        var t = $(this);

        var name = t.find(".sweet-name-wrapper p").text();
        addSweetToShoppingList(name);
    });

    $(".send-btn").click(function() {
        alert(`${$(".shopping-list > *").length} guloseimas foram compradas!`)
    });
});


function addSweetToProductList(name) {
    if (!(name in SWEETS)) throw new Error("Unknown sweet name.");

    var sweet = $("<li>").addClass("sweet");

    var imageWrapper = $("<div>").addClass("sweet-image-wrapper");
    var nameWrapper = $("<div>").addClass("sweet-name-wrapper");

    imageWrapper.append(
        $("<img>").attr("src", SWEETS[name]).attr("alt", name)
    );

    nameWrapper.append($("<p>").text(name));

    sweet.append(imageWrapper, nameWrapper);
    $(".sweets-list").append(sweet);
}


function addSweetToShoppingList(name) {
    if (!(name in SWEETS)) throw new Error("Unknown sweet name.");

    var sweet = $("<li>").addClass("shopping-list-sweet");
    
    var del = $("<div>").addClass("del");
    del.click(() => sweet.remove());

    sweet.append($("<p>").text(name), del);
    $(".shopping-list").append(sweet);
}
