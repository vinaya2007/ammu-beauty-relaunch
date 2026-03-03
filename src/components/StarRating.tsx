import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: number;
  showText?: boolean;
}

const StarRating = ({ rating, maxStars = 5, size = 18, showText = true }: StarRatingProps) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: maxStars }, (_, i) => (
        <Star
          key={i}
          size={size}
          className={i < Math.floor(rating) ? "fill-accent text-accent" : "text-accent/40"}
        />
      ))}
      {showText && (
        <span className="ml-1 font-body text-sm font-semibold text-foreground">
          {rating}/5
        </span>
      )}
    </div>
  );
};

export default StarRating;
