import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              onClick={() => this.props.selectSong(song)}
              className="ui red button"
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

/**
 * Transfers app state to component state on-screen
 * via props (example above: this.props.selectSong(song))
 * (State -> Props) which is completed through connect()()
 */
const mapStateToProps = state => {
  return {
    songs: state.songs
  };
};

/**
 * connect()() is an example of nested functions()()()...()
 * connect is linking all components to the react-redux
 * Provider which then links to the redux store
 */
export default connect(mapStateToProps, {
  selectSong: selectSong
})(SongList);
