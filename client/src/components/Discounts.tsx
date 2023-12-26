import CategoryCard from "./subcomponents/CategoryCard";

const Discounts = () => {
  return (
    <section className="flex flex-col justify-center items-center p-10">
      <div className={`w-[1240px]`}>
        <h2>Beli Tanpa Mikir</h2>
        <div className={`relative`}>
          <div className={`bg-primary-2 w-72 h-80 text-white flex items-center p-10 rounded-xl`}>
            Diskon Akhir Tahun
            <br />
            Sampai 90%
          </div>
          <div className={`absolute top-10 bottom-10 flex gap-5 right-5`}>
            <CategoryCard name="Mammalia" />
            <CategoryCard name="Mammalia" />
            <CategoryCard name="Mammalia" />
            <CategoryCard name="Mammalia" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discounts;
