// components/SoundcloudPlayer.js

import React from 'react';

const SoundcloudPlayer = () => (
  <div>
    <iframe 
      width="100%" 
      height="300" 
      scrolling="no" 
      frameBorder="no" 
      allow="autoplay" 
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1066588501&color=%231e2025&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
    </iframe>
    <div style={{
      fontSize: '10px',
      color: '#cccccc',
      lineBreak: 'anywhere',
      wordBreak: 'normal',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
      fontWeight: '100',
    }}>
      <a 
        href="https://soundcloud.com/lucaoskaique" 
        title="Lucaos Kaíque" 
        target="_blank" 
        style={{
          color: '#cccccc', 
          textDecoration: 'none'
        }}
      >
        Lucaos Kaíque
      </a> 
      · 
      <a 
        href="https://soundcloud.com/lucaoskaique/sets/mixes" 
        title="MIXES" 
        target="_blank" 
        style={{
          color: '#cccccc', 
          textDecoration: 'none'
        }}
      >
        MIXES
      </a>
    </div>
  </div>
);

export default SoundcloudPlayer;
