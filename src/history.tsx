const History = () => {
  return (
    <section className="bg-white no-dark:bg-gray-900" id="history">
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-center text-3xl font-semibold capitalize text-gray-800 no-dark:text-white lg:text-4xl">
          Our History
        </h1>

        <div className="mx-auto mt-6 flex justify-center">
          <span className="inline-block h-1 w-40 rounded-full bg-beige-500"></span>
          <span className="mx-1 inline-block h-1 w-3 rounded-full bg-beige-500"></span>
          <span className="inline-block h-1 w-1 rounded-full bg-beige-500"></span>
        </div>

        <div className="mx-auto mt-16 flex max-w-6xl items-start">
          <div>
            <p className=" text-center text-gray-500 lg:mx-8">
              <b className="text-bold">Mbaise </b>
              is a community rooted in unity, tradition, and progress. Formed by
              the coming together of five great kingdoms, our people share a
              rich cultural heritage, deep ancestral values, and a commitment to
              collective growth.
              <p className=" text-center text-gray-500 lg:mx-8">
                For generations, Mbaise-di has been a beacon of resilience and
                excellence, known for its strong leadership, vibrant traditions,
                and hardworking people. From our early days of communal living
                and farming to our embrace of modern development, we have
                continued to evolve while preserving the customs that define us.
              </p>
              <p>
                Through traditional institutions, governance, and cultural
                practices, we uphold the legacy of our ancestors while paving
                the way for a thriving future. Mbaise-di remains committed to
                the prosperity of its people, fostering education, economic
                empowerment, and social unity.
              </p>
            </p>

            {/* <div className="mt-8 flex flex-col items-center justify-center">
              <img
                className="h-14 w-14 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div className="mt-4 text-center">
                <h1 className="font-semibold text-gray-800 no-dark:text-white">
                  Mia Brown
                </h1>
                <span className="text-sm text-gray-500 no-dark:text-gray-400">
                  Marketer
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
