import React from 'react'

const SoundcloudEmbed= ({ trackId, user, title, url }) => {
  return (
    <>
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackId}&color=%231e2025&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
      ></iframe>
      <div
        style={{
          fontSize: "10px",
          color: "#cccccc",
          lineBreak: "anywhere",
          wordBreak: "normal",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          fontFamily:
            "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
          fontWeight: "100",
        }}
      >
        <a
          href={url}
          title={user}
          target="_blank"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          {user}
        </a>{" "}
        ·{" "}
        <a
          href={url}
          title={title}
          target="_blank"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          {title}
        </a>
      </div>
    </>
  );
}

export default SoundcloudEmbed