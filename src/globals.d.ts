declare module "youtube-api-search" {

    interface options {key:string, term:string}
    interface callback {(data)}
    interface YTSearch  {(options:options,callback:callback)}

    var YTSearch: YTSearch;
    export = YTSearch;
}

