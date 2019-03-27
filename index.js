$('.project .frame-controls .control-item').click(function() {
  const clickedItem = $(this)
  const projectContainer = $(this).parent().parent()
  const frame = projectContainer.children("iframe")

  // reset size classes to avoid build up
  frame.removeClass("small-frame");
  frame.removeClass("medium-frame");
  frame.removeClass("large-frame");

  // reset control selection
  clickedItem.parent().children().removeClass("selected")

  if (clickedItem.hasClass("mobile")) {
    frame.addClass("small-frame");
  } else if (clickedItem.hasClass("tablet")) {
    frame.addClass("medium-frame");
  } else if (clickedItem.hasClass("desktop")) {
    frame.addClass("large-frame");
  }

  clickedItem.addClass("selected");
});