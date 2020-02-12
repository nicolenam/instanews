$(function() {
  $("#loader").hide();

  $(".content").on("change", function(e) {

    if ($(window).width() > 600) {
      $("#logo").animate({ width: "100px", height: "100px" }, 1000, "linear");
      $("#top").animate({ marginTop: "80px" }, 1000, "linear");
    }

    let section = $(".content option:selected").val();
    $(".news").empty();
    $("#loader").show();

    $.ajax({
      dataType: "json",
      method: "GET",
      url: `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=qZeF0WlVIE49aaMuTGpSM5bAxYeDLSyT`
    }).done(function(data) {
      $("#loader").hide();

      console.log(data);
      for (let i = 0; i <= 11; i++) {
        let multimedia = data.results[i].multimedia[0].url;
        let abstract = data.results[i].abstract;
        let url = data.results[i].url;

        $(".news").append(
          `  <a href="${url}">
              <figure>
                  <p class="abstract">${abstract}</p>
                  <img class="thumbnail" src="${multimedia}">
              </figure>
             </a>
          `
        );
      }
    });
  });
});
