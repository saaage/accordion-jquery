var $ = require('jquery');

$(function() {
  // when user clicks ABOUT, menu should expand to reveal about-menu

  // use jquery to select the about button
  let $aboutButton = $('[data-js="dropdown-about"]');

  // select list items that make up the about-menu
  let $aboutMenu = $('[data-js="about-menu"]');

  // when about button is clicked, change orange, and display additional menu options*/
  $aboutButton.on("click", function(){

    // when about button is clicked, toggle class menu__item--aboutmenu
    $aboutButton.toggleClass("menu__item--aboutmenu");
    $aboutMenu.toggleClass("menu__item--aboutmenu--hidden");
  });
});
