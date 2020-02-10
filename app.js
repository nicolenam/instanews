$(function() {
  $(".content").on("change", function(e) {
    let section = $(".content option:selected").text();

    $.ajax({
      dataType: "json",
      method: "GET",
      url: `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=qZeF0WlVIE49aaMuTGpSM5bAxYeDLSyT`
    }).done(function(data) {
      // console.log(data);
      // $.each(data, function(index, value) {

      // });
      for (let i = 0; i <= 11; i++) {
        let multimedia = data.results[i].multimedia[0].url;
        let abstract = data.results[i].abstract;
        let url = data.results[i].url;
        // console.log(multimedia);
        // console.log(abstract);
        $(".news").append(
          `<img class="thumbnail" src="${multimedia}"><br><p class="abstract"><a href="${url}">${abstract}</a></p>`
        );
      }
      //find the position of the first <p>
      //place the next <p> according to the first <p> position
      let p = $(".link").first();
      // console.log(p);
      let position = p.position();
      console.log(position)
      // $(".link").append()
    });
  });
});
