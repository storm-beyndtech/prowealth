import CheckList from './CheckList';

type SecData = {
  title: string;
  desc: string;
  imgUrl: string;
  url?: string;
  btnLabel?: string;
  pdf?: boolean;
};

export default function LightSection({ secData }: { secData: SecData }) {
  return (
    <section>
      <div className="max-ctn pad-y pad-x flex flex-wrap-reverse justify-between items-center gap-16">
        <div className="w-full max-w-lg">
          <h3 className="text-3xl font-bold mb-6 max-md:!text-2xl ">
            {secData.title}
          </h3>
          <p className="desc mb-4 md:mb-10 lg:mb-6 font-normal max-md:!text-lg">
            {secData.desc}
          </p>

          {secData.pdf && (
            <ul role="list" className="space-y-2 sm:space-y-3 mb-4">
              <li className="flex space-x-3">
                <CheckList />
                <span className="text-sm sm:text-base text-gray-500">
                  Copy successful traders from around the world
                </span>
              </li>

              <li className="flex space-x-3">
                <CheckList />
                <span className="text-sm sm:text-base text-gray-500">
                  Highly rated 24/7 customer service
                </span>
              </li>

              <li className="flex space-x-3">
                <CheckList />
                <span className="text-sm sm:text-base text-gray-500">
                  Globally regulated & licensed
                </span>
              </li>
            </ul>
          )}
          {!secData.pdf && (
            <a href="#" className="primaryBtn">
              Explore Copy Trading <span className="ml-3">&rarr;</span>
            </a>
          )}
          {secData.pdf && (
            <a
              href={secData.url}
              target="_blank"
              rel="noopener noreferrer"
              className="primaryBtn"
            >
              {secData.btnLabel} <span className="ml-3">&rarr;</span>
            </a>
          )}
        </div>

        <div className="w-full max-w-md">
          {!secData.pdf && (
            <img src={secData.imgUrl} alt="copy trade" className="w-full" />
          )}
          {secData.pdf && (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full object-cover"
            >
              <source
                src="https://videos.pexels.com/video-files/7652013/7652013-uhd_3840_2160_30fps.mp4"
                type="video/mp4"
              />
              video
            </video>
          )}
        </div>
      </div>
    </section>
  );
}
