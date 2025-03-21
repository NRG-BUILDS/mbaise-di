const Goals = () => {
  return (
    <div className="bg-white no-dark:bg-gray-900">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-center text-3xl font-semibold capitalize text-gray-800 no-dark:text-white lg:text-4xl">
          Our Mandate
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500 no-dark:text-gray-300 xl:mt-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quas
          magni libero consequuntur voluptatum velit amet id repudiandae ea,
          deleniti laborum in neque eveniet.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:mt-12 xl:gap-12">
          <div className="w-full space-y-8 rounded-lg border border-gray-200 p-8  no-dark:border-gray-700">
            <p className="font-medium uppercase text-gray-500 no-dark:text-gray-300">
              Vision
            </p>

            <ol className="list-disc list-inside">
              <li className="text-xl font-bold uppercase no-dark:text-gray-100">
                Prosperity
              </li>
              <li className="text-xl font-bold uppercase no-dark:text-gray-100">
                Peace
              </li>
              <li className="text-xl font-bold uppercase no-dark:text-gray-100">
                Progress
              </li>
            </ol>
          </div>

          <div className="w-full space-y-8 rounded-lg bg-blue-600 p-8 ">
            <p className="font-medium uppercase text-gray-200">Motto</p>
            <ol className="list-disc list-inside">
              <li className="text-xl font-bold uppercase text-white no-dark:text-gray-100">
                Brotherhood
              </li>
              <li className="text-xl font-bold uppercase text-white no-dark:text-gray-100">
                Frendship
              </li>
              <li className="text-xl font-bold uppercase text-white no-dark:text-gray-100">
                Idinotu na Obinwanne
              </li>
            </ol>
          </div>

          <div className="w-full space-y-8 rounded-lg border border-gray-200 p-8  no-dark:border-gray-700">
            <p className="font-medium uppercase text-gray-500 no-dark:text-gray-300">
              Mission
            </p>

            <h2 className="text-xl font-bold uppercase text-gray-800 no-dark:text-gray-100">
              Joint and collaborative efforts towards a good and progressive
              Mbaise society
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
