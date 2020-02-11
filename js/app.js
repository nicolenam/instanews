$(function() {
  $("#loader").hide();

  $(".content").on("change", function(e) {
    // let section = $(".content option:selected").text();
  
    let section = $(".content option:selected").val();
    console.log(section);
    $("#loader").show();
    $.ajax({
      dataType: "json",
      method: "GET",
      url: `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=qZeF0WlVIE49aaMuTGpSM5bAxYeDLSyT`
    }).done(function(data) {
      $("#loader").hide();
      $(".news").empty();
console.log(data)
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