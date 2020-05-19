import React from "react";
import { connect } from "react-redux";

const SongDetail = props => {
  if (!props.selectedSong) {
    return <div>Select a Song</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>Title: {props.selectedSong.title}</p>
      <p>Duration: {props.selectedSong.duration}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return { selectedSong: state.selectedSong };
};

// wiring up state to PROPS! Chosen component is second argument
export default connect(mapStateToProps)(SongDetail);
