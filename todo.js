$(function () {
  "use strict";

  let change_Mood_Div = $(".change_mood");
  let number = 0;

  change_Mood_Div.click(function () {
    $(this).fadeIn(1000, function () {
      $("body").toggleClass("dark_mood_body_background"),
        $(".background_img").toggleClass("dark_mood_body_background_img"),
        $(this).find("img").toggle(),
        $("input").toggleClass("dark_mood_input"),
        $(".ul-style").toggleClass("dark_mood_ul");
    });
  });

  $("input").keypress(function (e) {
    let value = $(this).val();

    /* let todo_item = ""<li>
              <i class="uncheck far fa-circle"></i>
              <i class="check far fa-check-circle"></i>
              <p>words</p>
              <p>words</p><i class="fas fa-times"></i>
            <img class='cross' src='images/icon-cross.svg' alt='Delete' />
            </li>"";*/
    if (e.keyCode === 13 || e.which === 13) {
      if (value.length > 1) {
        $("ul").append(
          `<li class="todo_item"><i class='uncheck far fa-circle'></i><img class="check" src="images/icon-check.svg" alt="check"/><p class="p">${value}</p><img class='cross' src='images/icon-cross.svg' alt='Delete' /></li>`
        );
        $(this).val("");
        number++;
        if (number === 1) {
          return $(".number").text(number + " item left");
        }
        $(".number").text(number + " items left");
        console.log(number);
      }
    }
  });
  $("ul").click(function (e) {
    let target = e.target;
    console.log(target);
    //$(".check").css("display", "inline");

    if ($(target).hasClass("todo_item")) {
      $(target).find("p").toggleClass("line_through");
      $(target).find(".check").toggle();
      $(target).find(".uncheck").toggle();
    } else if (target.className === "cross") {
      $(target).parent().remove();
      number--;
      $(".number").text(number);
    } else if ($(target).hasClass("p")) {
      $(target).toggleClass("line_through");
      $(target).parent().find(".check").toggle();
      $(target).parent().find(".uncheck").toggle();
    } else if ($(target).hasClass("check") || $(target).hasClass("uncheck")) {
      $(target).parent().find(".check").toggle();
      $(target).parent().find(".uncheck").toggle();
      $(target).parent().find("p").toggleClass("line_through");
    }
  });

  $(".all").click(function () {
    $("ul").children().show();
  });

  $(".active").click(function () {
    $("ul").find("li").not(".line_through").show();
    $("ul").find(".line_through").parent().hide();
    // $("ul").find(".check").parent().hide();
  });

  $(".completed").click(function () {
    $("ul").find("li").not(".line_through").hide();
    $("ul").find("li").find(".line_through").parent().show();
  });

  $(".clear").click(function () {
    $("ul").find("li").find(".line_through").parent().remove();
    $("ul").find("li").not(".line_through").show();

    number = $("li").length;
    number === 1
      ? $(".number").text(number + " item left")
      : $(".number").text(number + " items left");
  });

  $("ul").on("click", function (e) {
    if (e.target.className === "ul") {
       $("ul").sortable();
       $("ul").disableSelection();
    }
   // $(".ul").sortable();
   // $(".ul").disableSelection();
  });
  //$(".ul").sortable();
  //$(".ul").disableSelection();

  if (window.console) console.log("foo");
});
