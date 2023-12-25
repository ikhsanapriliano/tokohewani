import FeatureCard from "./subcomponents/FeatureCard";
import ShoppingCartIcon from "@heroicons/react/16/solid/ShoppingCartIcon";
import TruckIcon from "@heroicons/react/16/solid/TruckIcon";
import ScaleIcon from "@heroicons/react/16/solid/ScaleIcon";
import TagIcon from "@heroicons/react/16/solid/TagIcon";

const Features = () => {
  return (
    <section className={`flex justify-center items-center p-10`}>
      <div className={`w-[1240px] grid grid-cols-4 gap-5`}>
        <FeatureCard icon={<ShoppingCartIcon />} title="Ada lebih dari 1 jenis hewan yang dijual" description="Jika anda bosan dengan hewan yang gitu-gitu saja, anda dapat melihat bahwa kami menyediakan banyak jenis hewan untuk anda." />
        <FeatureCard icon={<ScaleIcon />} title="Jual hewan apapun yang anda punya" description="Anda juga dapat menjual hewan apapun pada platform ini dengan harga yang anda tentukan sendiri." />
        <FeatureCard icon={<TruckIcon />} title="Gratis ongkir jika harga di atas 1 miliar rupiah" description="Tidak perlu bingung lagi masalah ongkos kirim. Kami akan menanggungnya dengan syarat dan ketentuan berlaku." />
        <FeatureCard icon={<TagIcon />} title="Diskon hingga 90% di akhir tahun" description="Jangan jual hewan anda di akhir tahun, karena kami akan memotong harganya hingga 90%." />
      </div>
    </section>
  );
};

export default Features;
