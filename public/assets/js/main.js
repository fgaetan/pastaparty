/*
addition des produits + total de la commande
*/

let prix = '';

function addition () {
    cmd = [];
    total = 2;
    for (i=0; i<cmd.length; i++) {
        cmd += prix;
    }
    return total;
}


/*
au clic de chaque produit, affiche les varietes dispo.
*/
$(document).ready(() => {
  $("#americain").click(() => {
    $("#produits").html(`
    <div id="americainMaxicanto"><img src="http://127.0.0.1:5500/public/assets/images/varietes/maxicanto.png" alt=""></div>
    <div id="americainFricadelle"><img src="http://127.0.0.1:5500/public/assets/images/varietes/fricadelle.png" alt=""></div>
`);
  });
});

$(document).ready(() => {
  $("#pates").click(() => {
    $("#produits").html(`
      <div id="patesMex"><img src="http://127.0.0.1:5500/public/assets/images/varietes/mexicaine.png" alt=""></div>
      <div id="patesAnda"><img src="http://127.0.0.1:5500/public/assets/images/varietes/andalouse.png" alt=""></div>
      <div id="patesCocktail"><img src="http://127.0.0.1:5500/public/assets/images/varietes/cocktail.png" alt=""></div>
      <div id="patesCurry"><img src="http://127.0.0.1:5500/public/assets/images/varietes/curry.png" alt=""></div>
      <div id="patesMayo"><img src="http://127.0.0.1:5500/public/assets/images/varietes/mayonnaise.png" alt=""></div>
  `);
  });
});

$(document).ready(() => {
  $("#panini").click(() => {
    $("#produits").html(`
        <div id="paniniMex"><img src="http://127.0.0.1:5500/public/assets/images/varietes/mexicaine.png" alt=""></div>
        <div id="paniniAnda"><img src="http://127.0.0.1:5500/public/assets/images/varietes/andalouse.png" alt=""></div>
        <div id="paniniCocktail"><img src="http://127.0.0.1:5500/public/assets/images/varietes/cocktail.png" alt=""></div>
        <div id="paniniCurry"><img src="http://127.0.0.1:5500/public/assets/images/varietes/curry.png" alt=""></div>
        <div id="paniniMayo"><img src="http://127.0.0.1:5500/public/assets/images/varietes/mayonnaise.png" alt=""></div>
    `);
  });
});

$(document).ready(() => {
  $("#petiteFaim").click(() => {
    /* doit ajouter directement tenders */
  });
});

$(document).ready(() => {
  $("#desserts").click(() => {
    $("#produits").html(`
          <div id="dessertsDaim"><img src="http://127.0.0.1:5500/public/assets/images/varietes/daim.png" alt=""></div>
          <div id="dessertsSpec"><img src="http://127.0.0.1:5500/public/assets/images/varietes/speculoos.png" alt=""></div>
      `);
  });
});

$(document).ready(() => {
    $("#boissons").click(() => {
      /* doit ajouter directement boissons */
    });
  });