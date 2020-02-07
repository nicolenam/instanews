$(function() {
  $(".content").on("change", function(e) {
    let section = $(".content option:selected").text();

    $.ajax({
      dataType: "json",
      method: "GET",
      url: `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=qZeF0WlVIE49aaMuTGpSM5bAxYeDLSyT`
    }).done(function(data) {
      console.log(data);
      $.each(data, function(index, value) {
        for (let i = 0; i < 11; i++) {
          let multimedia = data.results[i].multimedia[2].url;
          let abstract = data.results[i].abstract;
          console.log(multimedia);
          console.log(abstract);
          $("#news").append(`<img src="${multimedia}"><br><span>${abstract}</span>`);
        }
      });
    });
  });
});
