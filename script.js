function getData(URL) {
  fetch(URL)
    .then((response) => response.json())
    .then((json) => {
      makeShowPage(json);
      selectShow(json);
      search();
      result();
      home();
      updateResult();
      selectEpisode(json);
    });
}


function setup(URL) {
  fetch(URL)
    .then((response) => response.json())
    .then((json) => {
      makeEpisodePage(json);
      selectEpisode(json);
    });
}