import { supabase } from "utils/supabase";
import Layout from "../../layouts/Layout.jsx";
import Link from "next/link";
import Slider from "react-slick";

export default function Room({ room }) {
    const description = room.description.replace(/,|\./g, "");
    // console.log(room);

    const settings = {
        customPaging: function(i) {
          return (
            <a>
              <img src='' alt="" />
            </a>
          );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
      };

    return (
        <Layout>
            <div className="flex flex-col lg:flex-row justify-center mx-auto max-w-7xl py-10 lg:px-10">
                <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0 text-brand-green">
                    <h2 className=" text-4xl font-bold mb-4">{room.name}</h2>
                    <div>
                        <ul className="flex -ml-16 max-w-fit my-4 pl-4 py-2 rounded-xl bg-gray-50 shadow-lg">
                            <li className="mr-2">
                                {room.capacity} huespedes -
                            </li>
                            <li className="mr-2">{room.rooms} dormitorio -</li>
                            <li className="mr-2">{room.beds} camas -</li>
                            <li className="mr-4">{room.bathroom} baño</li>
                        </ul>
                    </div>
                    <p className="whitespace-pre-wrap mb-6">{description}</p>
                    <div className="flex justify-center">
                        <Link href="#">
                            <span className="btn-yellow">Reservar</span>
                        </Link>
                    </div>
                </div>
                <div className="lg:w-1/2 flex flex-col">
                    <div className="max-w-full w-[600px] h-[450px] bg-slate-400 rounded-2xl"><img src="https://scontent.ftlc1-1.fna.fbcdn.net/v/t39.30808-6/305238709_501510608644888_1080000614403145010_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=kD0-e9GO4nIAX8ssVIV&_nc_ht=scontent.ftlc1-1.fna&oh=00_AfDijIKB6vpvmwAGpz7svsJToaLa95bLsOOgnO_gUail8Q&oe=645524D2" alt=""/></div>
                    <div className="flex mt-4 max-w-full gap-4">
                        <div className="max-w-full w-1/4 h-24 bg-slate-400"><img src="https://scontent.ftlc1-1.fna.fbcdn.net/v/t39.30808-6/269785700_4739608622784409_2281169200913803942_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0debeb&_nc_ohc=w1BqihZtvZoAX8r-Hl6&_nc_ht=scontent.ftlc1-1.fna&oh=00_AfAFJ6tW8Xr03DFcRQmQlBANckNXBMSMEdb5O5M3N_h6sg&oe=64555BB5" alt=""/></div>
                        <div className="max-w-full w-1/4 h-24 bg-slate-400"><img src="https://scontent.ftlc1-1.fna.fbcdn.net/v/t39.30808-6/269832444_4739608342784437_8956645326949175077_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0debeb&_nc_ohc=7aH5_NMCs58AX83vIef&_nc_ht=scontent.ftlc1-1.fna&oh=00_AfD9MUv4aLPLDYWXJn5fbDSgZE50TUD2V2FgXKM7CQ_EKA&oe=64552D3A" alt=""/></div>
                        <div className="max-w-full w-1/4 h-24 bg-slate-400"><img src="https://scontent.ftlc1-1.fna.fbcdn.net/v/t39.30808-6/269750528_4739587859453152_5372360894765460070_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0debeb&_nc_ohc=qwwSJXruViMAX9XYToo&_nc_ht=scontent.ftlc1-1.fna&oh=00_AfA5TGD1g718Jg8ZNHwexPaUdY8B3syoWnVqcQ3tppmwWg&oe=64559D85" alt=""/></div>
                        <div className="max-w-full w-1/4 h-24 bg-slate-400"><img src="https://scontent.ftlc1-1.fna.fbcdn.net/v/t39.30808-6/269833466_4739587686119836_925338458741822043_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_ohc=8rCGSEWxtBgAX8yIOFo&_nc_ht=scontent.ftlc1-1.fna&oh=00_AfCGgZvcGkGBDdCy96q-vrh4O2bClhI1Vz3OrzgHpe2aJQ&oe=6454B370" alt=""/></div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export async function getServerSideProps({ params }) {
    const { id } = params;

    const { data: room, error } = await supabase
        .from("rooms")
        .select("*")
        .eq("id", id);
    // .single();

    if (error) {
        // console.log(`Error al obtener el room con uuid ${id}`);
        // console.log(error);
        return {
            notFound: true,
        };
    }

    return {
        props: {
            room: room[0],
        },
    };
}
