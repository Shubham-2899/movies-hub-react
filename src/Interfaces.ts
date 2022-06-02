
// {"original_language":"en","name":"Stranger Things","first_air_date":"2016-07-15","original_name":"Stranger Things","origin_country":["US"],"vote_average":8.6,"id":66732,"vote_count":10177,"poster_path":"/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg","backdrop_path":"/rcA17r3hfHtRrk3Xs3hXrgGeSGT.jpg","overview":"When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.","genre_ids":[18,9648,10765],"popularity":3587.573,"media_type":"tv"}


// {"original_language":"en","original_title":"Top Gun: Maverick","poster_path":"/wxP2Mzv9CdjOK6t4dNnFGqIQl0V.jpg","video":false,"vote_average":8.2,"id":361743,"release_date":"2022-05-24","vote_count":345,"title":"Top Gun: Maverick","adult":false,"backdrop_path":"/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg","overview":"After more than thirty years of service as one of the Navy’s top aviators, and who will be chosen to fly it.","genre_ids":[28,18],"popularity":1710.586,"media_type":"movie"}


export interface trendingFormat{
    original_language:string,
    name:string | null,
    first_air_date:string | null,
    original_name:string,
    origin_country:string[],
    original_title:string |null,
    poster_path:string,
    video:boolean,
    vote_average:number,
    id:number,
    vote_count:number,
    release_date:string | null,
    title:string| null,
    adult:boolean,
    backdrop_path:string,
    overview:string,
    genre_ids:number[],
    popularity:number,
    media_type:string,
}

export interface GenreFormat{
    id: number,
     name:string,
}

export interface mediaFormat{
    adult:string,
    backdrop_path:string,
    poster_path:string,
    name:string | null,
    title:string | null,
    first_air_date:string |null,
    release_date:string |null,
    overview:string,
    tagline:string | null,
}

export interface style{
    styles:React.CSSProperties;
}