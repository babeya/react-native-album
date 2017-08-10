import Axios from 'axios';
import React, { Component } from 'react'; // Keep react for compilation of jsx tags
import { ScrollView } from 'react-native';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  constructor() {
    super();

    this.state = { albums: [] };
  }

  /**
   * Call whenever the component is about to be displayed
   */
  componentWillMount() {
    Axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(({ data: albums }) => this.setState({ albums }))
      .catch(error => console.error(error));
  }

  renderAlbums() {
    return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
