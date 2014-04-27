$(document).ready(function(){
  var title_text = $('#title-content-info').text();
  
  $('.album-song-wrapper').click(
    function()
    {
      $('.album-song-wrapper').removeClass('selected');
      $(this).addClass('selected');
      var song_name = $(this).find('.album-song-name').text();
      $('#curr-playing').text(song_name);
    }
  );
  
  $('.song-wrapper').click(
    function()
    {
      $('.song-wrapper').removeClass('selected');
      $(this).addClass('selected');
    }
  );
  
  $('#submit-button').click(function(e){
    e.preventDefault();
    hideHomePage(showResultsPage);
    resetSelectedPage();
    setSelectedPage($('#result-page'));
  });
  
  $('#hero').click(function(){
    if(isSelectedPage($('#home-page')))
    {
      hideHomePage(showAboutPage);
      resetSelectedPage();
      setSelectedPage($('#about-page'));
    }
    else if (isSelectedPage($('#about-page')))
    {
      hideAboutPage(showHomePage);
      resetSelectedPage();
      setSelectedPage($('#home-page'));
    }
    else
    {
      hideResultsPage(showAboutPage);
      resetSelectedPage();
      setSelectedPage($('#about-page'));
    }
  });
  
    $('#hero-hover').click(function(){
    if(isSelectedPage($('#home-page')))
    {

    }
    else if (isSelectedPage($('#about-page')))
    {
      hideAboutPage(showHomePage);
      resetSelectedPage();
      setSelectedPage($('#home-page'));
    }
    else
    {
      hideResultsPage(showHomePage);
      resetSelectedPage();
      setSelectedPage($('#home-page'));
    }
  });
  
    $('#about-hover').click(function(){
    if(isSelectedPage($('#home-page')))
    {
      hideHomePage(showAboutPage);
      resetSelectedPage();
      setSelectedPage($('#about-page'));
    }
    else if (isSelectedPage($('#about-page')))
    {

    }
    else
    {
      hideResultsPage(showAboutPage);
      resetSelectedPage();
      setSelectedPage($('#about-page'));
    }
  });
  
 $('.button').click(function(){
   //shows the form
   var form = $('#form');
   var selected_button = $(this);
   
   if(form.hasClass('visible'))
   {
     form.removeClass('visible');
     form.fadeOut(900);
     
     selected_button.stop(true, false).animate({
      width: "44px",
      }, 500, function(){
        $(this).stop().fadeOut(200, function(){
          selected_button.fadeOut(200, function(){
             $('.button').fadeIn();
             $('#title-content-info').fadeIn();
             $('#title-content-info').text(title_text);
          });
        });
      });     
     
     $('.button').removeClass('selected-button');
   }
   else
   {
     form.addClass('visible');
     form.fadeIn();
     
     //hides all buttons
     $('.button').hide();

     selected_button = $(this);
     selected_button.show();
     selected_button.stop(true, false).animate({
      width: "200px",
      }, 700 );
     selected_button.addClass('selected-button');
     
     var selected_text = selected_button.contents().text();
     if ($('#title-content-info').text() == title_text)
     {
        $('#title-content-info').text(" ");
     }
   }
 });
});

function getElementsByClass(searchClass,node,tag) {

	var classElements = new Array();

	if ( node == null )

		node = document;

	if ( tag == null )

		tag = '*';

	var els = node.getElementsByTagName(tag);

	var elsLen = els.length;

	var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");

	for (i = 0, j = 0; i < elsLen; i++) {

		if ( pattern.test(els[i].className) ) {

			classElements[j] = els[i];

			j++;

		}

	}

	return classElements;

}

function resetSelectedPage()
{
  $('.page').removeClass('selected-page');
}

function setSelectedPage(page)
{
  page.addClass('selected-page');
}

function showResultsPage()
{
    $('#result-page').children().hide();
    $('#result-page').css("visibility", "visible");
    $('#song-header-bar').fadeIn(725,
      function()
      {
        $('#song-side-bar').fadeIn(725, 
        function()
          {
            $('#song-main').fadeIn(725);
          });
      }
    );   
}

function hideResultsPage(next)
{
    $('#song-header-bar').fadeOut(500);
    $('#song-side-bar').fadeOut(500);
    $('#song-main').fadeOut(500, function(){
      $('#result-page').css("visibility", "hidden");
      next();
    });
}

function showAboutPage()
{
  $('#about-header-bar').hide();
  $('#description-centerer').hide();
  $('#about-page').css("visibility", "visible");
  $('#about-header-bar').fadeIn(500,
    function()
    {
      $('#description-centerer').fadeIn(500);
    }
  );
}

function hideAboutPage (next)
{
  $('#about-header-bar').fadeOut(500);
  $('#description-centerer').fadeOut(500, function(){ 
    $('#about-page').css("visibility", "hidden");
    next();});  
}

function showHomePage()
{
  $('#home-page').hide();
  $('#home-page').css("visibility", "visible");
  $('#home-page').fadeIn(500);
}

function hideHomePage (next)
{
  $('#home-page').fadeOut(500, function(){
    $('#home-page').css("visibility","hidden");
    next();
  });  
}

function isSelectedPage(page)
{
  return page.hasClass('selected-page');
}