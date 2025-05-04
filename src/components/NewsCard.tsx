import { useState } from "react";

interface Props {
  news: any;
}

const NewsCard = ({ news }: Props) => {
  const [showAll, setShowAll] = useState(false);
  return (
    <div>
      <div className="relative">
        <img
          className="h-64 w-full rounded-lg object-cover object-center lg:h-80"
          src={news.image}
          alt=""
        />
      </div>

      <h1 className="mt-6 text-xl font-semibold text-gray-800 no-dark:text-white">
        {news.title}
      </h1>

      <hr className="my-6 w-32 text-red-500" />

      <p
        className={`text-sm text-gray-500 no-dark:text-gray-400 ${
          !showAll ? "w-full truncate" : ""
        }`}
      >
        {news.content}
      </p>

      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-4 inline-block text-red-500 underline hover:text-red-400"
      >
        Read more
      </button>
    </div>
  );
};

export default NewsCard;
