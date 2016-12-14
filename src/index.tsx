import * as _ from 'lodash';
import * as React from "react";
import * as ReactDOM from 'react-dom'
import SearchBar from './components/search_bar';
import * as YTSearch from 'youtube-api-search'
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
import {API_KEY} from './api_key';

interface AppProps {};
interface AppState {videos:Array<any>, selectedVideo:any};

class App extends React.Component<AppProps,AppState> {
    constructor(props){
        super(props);

        this.state = {videos: [],selectedVideo: null};

        this.videoSearch('surfboards');
    }

    videoSearch(term){
            YTSearch({key: API_KEY, term: term},
                (videos) => {
                    this.setState({videos: videos, selectedVideo: videos[0]})
                }
            );

    }

    render(){
    const videoSearch = _.debounce((term)=> {this.videoSearch(term)},300)

    return ( 
    <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList onVideoSelect={selectedVideo => this.setState({videos:this.state.videos, selectedVideo})} videos={this.state.videos} />
    </div>
    );
    }
}

ReactDOM.render(<App />,document.querySelector('.container'));