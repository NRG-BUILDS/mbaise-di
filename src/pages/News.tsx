import { news } from "@/ads";
import Footer from "@/components/footer";
import { Logo } from "@/components/logo";
import NewsCard from "@/components/NewsCard";
import Nav from "@/nav";

const News = () => {
  return (
    <main>
      <section className="bg-white no-dark:bg-gray-900">
        <Nav />
      </section>
      <section className="bg-white no-dark:bg-gray-900">
        <div className="container mx-auto px-6 py-10">
          <div className="text-center">
            <Logo className="size-72 mx-auto" />

            <h1 className="text-3xl font-semibold capitalize text-gray-800 no-dark:text-white lg:text-4xl">
              NEWS
            </h1>

            <p className="mx-auto mt-4 max-w-lg text-gray-500">
              News of significant importance happening in Mbaise Nation.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
            {news.map((news, i) => (
              <NewsCard news={news} key={i} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default News;
