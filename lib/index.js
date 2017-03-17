var $ = require('jquery');

$(function() {
  /*when user clicks ABOUT, menu should expand to reveal about-menu*/

  //use jquery to select the about button
  let $aboutButton = $('[data-js="dropdown-about"]');

  //select list items that make up the about-menu
  let $aboutMenu = $('[data-js="about-menu"]');

  //when about button is clicked, change orange, and display additional menu options*/
  $aboutButton.on("click", function(){

    if(!($aboutButton.hasClass("menu__item--aboutmenu"))) {
      $aboutButton.addClass("menu__item--aboutmenu");
      $aboutMenu.removeClass("menu__item--aboutmenu--hidden").addClass("menu__item--aboutmenu");
    }else if($aboutButton.hasClass("menu__item--aboutmenu")) {
      $aboutButton.removeClass("menu__item--aboutmenu");
      $aboutMenu.addClass("menu__item--aboutmenu--hidden");
    }

  })
})
