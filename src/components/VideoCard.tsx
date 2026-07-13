
import React from 'react';
import { Video } from '../types/video';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VideoCardProps {
  video: Video;
  isWatched: boolean;
  onToggleWatched: () => void;
}

const VideoCard = ({ video, isWatched, onToggleWatched }: VideoCardProps) => {
  return (
    <div className="bg-[#111a2e] border border-[#1f2a44] rounded-lg shadow-lg overflow-hidden">
      <div className="aspect-video w-full">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start gap-3 mb-3">
          <h3 className="text-lg font-semibold text-[#e6f7ff]">{video.title}</h3>
          <button
            onClick={onToggleWatched}
            className={cn(
              "p-2 rounded-full transition-colors shrink-0",
              isWatched
                ? "bg-[#22d3ee]/15 text-[#22d3ee]"
                : "bg-[#1f2a44] text-[#9aa7bd] hover:bg-[#2a3760]"
            )}
          >
            <Check className="w-5 h-5" />
          </button>
        </div>
        <div className="space-y-1">
          <p className="text-[#e6f7ff] text-sm font-medium">{video.presenter}</p>
          <p className="text-[#9aa7bd] text-xs">{video.designation}</p>
          {video.event && (
            <span className="inline-block mt-2 px-2 py-0.5 rounded-full text-xs font-medium bg-[#22d3ee]/10 text-[#22d3ee] border border-[#22d3ee]/30">
              {video.event}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
