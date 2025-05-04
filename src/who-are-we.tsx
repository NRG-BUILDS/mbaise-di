import farmerPic from "@/assets/images/services/farmers.webp";
import schoolingPic from "@/assets/images/services/schooling.jpg";
import officePic from "@/assets/images/services/office.jpg";
import ceremoniesPic from "@/assets/images/services/ceremonies.webp";
import chiefsPic from "@/assets/images/services/chiefs.jpg";
import empowermentPic from "@/assets/images/services/empowerment.jpg";

const WhoWeAre = () => {
  const services = [
    {
      title: "Officials at Work",
      content:
        "Our dedicated leaders and representatives work tirelessly to uphold the values, governance, and progress of Mbaise-di.",
      image: officePic,
    },
    {
      title: "Traditional Functions",
      content:
        "We preserve and celebrate our rich cultural heritage through traditional ceremonies, festivals, and community gatherings.",
      image: ceremoniesPic,
    },
    {
      title: "Farm Work",
      content:
        "Agriculture is the backbone of our economy. We support local farmers with resources, training, and initiatives to boost food production.",
      image: farmerPic,
    },
    {
      title: "Schooling",
      content:
        "Education is a priority. We promote quality learning by supporting schools, students, and teachers in their pursuit of excellence.",
      image: schoolingPic,
    },
    {
      title: "Traditional Chiefs & Institutions",
      content:
        "Our revered chiefs and institutions uphold the customs, traditions, and leadership that guide our community toward unity and development.",
      image: chiefsPic,
    },
    {
      title: "Men & Women Empowerment",
      content:
        "We foster growth and opportunities for both men and women through economic programs, skill development, and community support initiatives.",
      image: empowermentPic,
    },
  ];

  return (
    <section className="bg-white no-dark:bg-gray-900" id="who-we-are">
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-center text-3xl font-semibold capitalize text-gray-800 no-dark:text-white lg:text-4xl">
          Who Are We?
        </h1>

        {/* <p className="mt-4 text-center text-gray-500 no-dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam
          voluptatibus
        </p> */}

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-12">
          {services.map((service, index) => (
            <div key={index}>
              <img
                className="h-96 w-full rounded-lg object-cover"
                src={service.image}
                alt={service.title}
              />
              <h2 className="mt-4 text-2xl font-semibold capitalize text-gray-800 no-dark:text-white">
                {service.title}
              </h2>
              <p className="mt-2 text-lg tracking-wider text-blue-500 no-dark:text-blue-400">
                {service.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
