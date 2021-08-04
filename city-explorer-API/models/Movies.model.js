class Movies {
    constructor(item){
        this.title=item.original_title;
        this.overview=item.overview;
        this.votes=item.vote_count
        this.img=item.poster_path;
        this.popularity=item.popularity;
       
        this.released_on=item.release_date;
    }
}

module.exports = Movies;