import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import videojs from "video.js";

interface PlayerProps {
  data: any;
  className: string;
}

interface VideoPlayerProps {
  /**
   * Is autoplay enabled for this video?
   */
  autoplay: boolean;
  /**
   * Should this video have controls?
   */
  controls: boolean;
  /**
   * A list of video sources.
   */
  sources: {
    /**
     * The source url.
     */
    src: string;
    /**
     * The type of source
     */
    type: string;
  }[];
}

const VideoPlayer: React.FC<PlayerProps> = ({ data, className }) => {
  const [videoEl, setVideoEl] = useState<HTMLVideoElement | null>(null);
  const onVideo = useCallback((el: HTMLVideoElement) => {
    setVideoEl(el);
  }, []);

  useEffect(() => {
    if (videoEl == null) {
      return;
    } else {
      let player: any = null;
      if (data) {
        const options: VideoPlayerProps = {
          autoplay: true,
          controls: true,
          sources: [
            {
              src: data?.videoUrl,
              type: data?.videoExtension,
            },
          ],
        };
        player = videojs(videoEl, options);
      }

      return () => {
        if (player) player.dispose();
      };
    }
  }, [data, videoEl]);

  return (
    <div data-vjs-player>
      <video
        ref={onVideo}
        className={`video-js vjs-default-skin vjs-big-play-centered ${className}`}
        playsInline
        poster={data?.thumbnailUrl}
      />
    </div>
  );
};

export default VideoPlayer;
