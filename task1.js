class Movie {
    constructor(title, studio, rating = "PG"){
      this.title = title;
      this.studio = studio;
      if(rating === "")
      {
        this.rating = "PG";
      }
      else {
        this.rating = rating;
      }
    }
    
    getPG(arr) {
      return;
    }
  }
  
  let film = new Movie("Casino Royale", "Eon Productions", "PG13");
  let ipArr = [{title:"Casino Royale", studio: "Eon Productions", rating: "PG13"},
                {title:"Casino Royale", studio: "Eon Productions", rating: "PG13"},
                {title:"Casino Royale", studio: "Eon Productions", rating: "PG13"}];
  film.getPG(ipArr);