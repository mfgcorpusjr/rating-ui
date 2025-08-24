import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import Star from "@/components/Star";
import Submit from "@/components/Submit";

type RatingProps = {
  title: string;
  feedbacks: string[];
};

export default function Rating({ title, feedbacks }: RatingProps) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleCloseModal = () => {
    setRating(0);
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardContent className="flex flex-col items-center gap-4">
        <h2 className="text-xl text-center font-semibold">{title}</h2>

        <div className="flex gap-4">
          {feedbacks.map((feedback, index) => (
            <Star
              key={feedback}
              isSelected={index + 1 <= rating || index + 1 <= hover}
              onClick={() => setRating(index + 1)}
              onMouseEnter={() => setHover(index + 1)}
              onMouseLeave={() => setHover(0)}
            />
          ))}
        </div>

        {rating > 0 && <p className="font-semibold">{feedbacks[rating - 1]}</p>}

        <Submit rating={rating} onCloseModal={handleCloseModal} />
      </CardContent>
    </Card>
  );
}
