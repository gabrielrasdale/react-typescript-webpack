import * as React from 'react';


export interface SearchBarProps {onSearchTermChange(term:string)};
export interface SearchBarState {term: string;};

class SearchBar extends React.Component<SearchBarProps,SearchBarState> {
    constructor(props){
        super(props);

        this.state = {term: ''}
    }

    render(){
        return(
            <div className="search-bar">
             <input 
             value={this.state.term}
             onChange={event => this.onInputChange(event.currentTarget.value)} />
            </div>
             )
    }

    onInputChange(term)
    {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}
export default SearchBar;