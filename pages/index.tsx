import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import useMovieList from "@/hooks/useMoviesList";
import useFavorites from "@/hooks/useFavorites";
import InfoModal from "@/components/InfoModal";
import useInfoModal from "@/hooks/useInforModal";
import CatList from "@/components/CatList";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModal();

  const series = [
    {
      name: "Thế thần: Ngự khí sư cuối cùng",
      thumbnailUrl:
        "https://image.tmdb.org/t/p/w500/u62XtaV8Iski2CgAUM8Yp0ZgKxD.jpg",
      data: [
        {
          name: "Tập 1",
          url: "",
        },
        {
          name: "Tập 2",
          url: "",
        },
        {
          name: "Tập 3",
          url: "",
        },
        {
          name: "Tập 4",
          url: "",
        },
        {
          name: "Tập 5",
          url: "",
        },
        {
          name: "Tập 6 (tập cuối)",
          url: "",
        },
      ],
    },
    {
      name: "Bá chủ bầu trời",
      thumbnailUrl:
        "https://image.tmdb.org/t/p/w500/6snBXmgkscLEJQmxx46qEIlqYlB.jpg",
      data: [
        {
          name: "Tập 1",
          url: "",
        },
        {
          name: "Tập 2",
          url: "",
        },
        {
          name: "Tập 3",
          url: "",
        },
        {
          name: "Tập 4",
          url: "",
        },
        {
          name: "Tập 5",
          url: "",
        },
        {
          name: "Tập 6 (tập cuối)",
          url: "",
        },
      ],
    },
    {
      name: "Nghịch lý kẻ sát nhân",
      thumbnailUrl:
        "https://image.tmdb.org/t/p/w185/e1HOt09BgYH5oZ8xfgi8TQiReYR.jpg",
      data: [
        {
          name: "Tập 1",
          url: "",
        },
        {
          name: "Tập 2",
          url: "",
        },
        {
          name: "Tập 3",
          url: "",
        },
        {
          name: "Tập 4",
          url: "",
        },
        {
          name: "Tập 5",
          url: "",
        },
        {
          name: "Tập 6 (tập cuối)",
          url: "",
        },
      ],
    },
    {
      name: "Halo phần 2",
      thumbnailUrl:
        "https://image.tmdb.org/t/p/w185/hmHA5jqxN3ESIAGx0jAwV7TJhTQ.jpg",
      data: [
        {
          name: "Tập 1",
          url: "",
        },
        {
          name: "Tập 2",
          url: "",
        },
        {
          name: "Tập 3",
          url: "",
        },
        {
          name: "Tập 4",
          url: "",
        },
        {
          name: "Tập 5",
          url: "",
        },
        {
          name: "Tập 6 (tập cuối)",
          url: "",
        },
      ],
    },
  ];
  const category = [
    {
      title: "Phim cổ trang",
      thumbnailUrl:
        "https://image.tmdb.org/t/p/original/7i6hcwFFjv8MpBHgdbaX3HHm0ze.jpg",
      url: "",
    },
    {
      title: "Phim tâm lý",
      thumbnailUrl:
        "https://lh3.googleusercontent.com/xX7Og1ohVaDu8JUZXfJdqG795u80xU3GXFL1IrpKwLGMt2uiocuAIuZugSvXB_P_sTH6CuCjJqygs9XgVnlbib84PNuKIW56Hj-9La5o-w=w622",
      url: "",
    },
    {
      title: "Phim tình cảm",
      thumbnailUrl:
        "https://cinema.momocdn.net/img/27194122555873293-9Rpzr3ViIcoPSDPdCy2pYFhRMqz.jpg",
      url: "",
    },
    {
      title: "Phim hành động",
      thumbnailUrl:
        "https://cdn1.tuoitre.vn/zoom/600_315/2021/3/25/godzilla-kong-2021-1read-only-1616683346023544460039-crop-16167262561311090577411.jpeg",
      url: "",
    },
    {
      title: "Phim võ thuật",
      thumbnailUrl: "https://i.imgur.com/UORWXHV.jpg",
      url: "",
    },
    {
      title: "Phim hài",
      thumbnailUrl:
        "data:image/jpeg;base64,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",
      url: "",
    },
    {
      title: "Phim chiếu rạp",
      thumbnailUrl:
        "https://image.bnews.vn/MediaUpload/Org/2023/04/24/lm6-2x3-layout-20230424144523.jpg",
      url: "",
    },
    {
      title: "Phim Netflix",
      thumbnailUrl:
        "https://bloganchoi.com/wp-content/uploads/2020/04/phim-netflix-hay-16.jpg",
      url: "",
    },
  ];
  const nations = [
    {
      title: "Hàn quốc",
      thumbnailUrl:
        "https://images.squarespace-cdn.com/content/v1/6130188e699d872ddba29e5d/1631209678653-AS0ZIYYT87AHH3NGHP8H/KDrama+Collage.jpg",
      url: "",
    },
    {
      title: "Nhật bản",
      thumbnailUrl:
        "https://external-preview.redd.it/MXU6Nz5NjmySaFCDXUcZdy-5VyilZJLIsm0stm7Gczo.jpg?width=640&crop=smart&auto=webp&s=ee002e7ce9437880df9179357b5309156904e4bd",
      url: "",
    },
    {
      title: "Trung quốc",
      thumbnailUrl:
        "https://qph.cf2.quoracdn.net/main-qimg-d990d3cbf163cd15ca88a235cf432c77-pjlq",
      url: "",
    },

    {
      title: "Mỹ",
      thumbnailUrl:
        "https://m.media-amazon.com/images/M/MV5BMzU5MzhmNGItMDU5YS00ODQ1LWJkODgtM2RmMDAxZGZkOWM0XkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_.jpg",
      url: "",
    },
    {
      title: "Thái lan",
      thumbnailUrl:
        "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1596005178/blog/nb7orcqfnobm7rpdsm5r.png",
      url: "",
    },
    {
      title: "Philipine",
      thumbnailUrl:
        "https://www.rappler.com/tachyon/2022/03/filipino-series-adapted-kdrama.jpg",
      url: "",
    },
    {
      title: "Thái lan",
      thumbnailUrl:
        "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1596005178/blog/nb7orcqfnobm7rpdsm5r.png",
      url: "",
    },
    {
      title: "Ấn độ",
      thumbnailUrl: "https://dnd.com.pk/wp-content/uploads/2022/11/IS2.jpg",
      url: "",
    },
  ];

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList
          title="Xu hướng"
          data={movies}
          desc="🔥 Yêu thích những bộ phim đang hot và đang gây sốt trên toàn thế giới, Đắm chìm vào thế giới của các siêu anh hùng và những cuộc phiêu lưu hành động đầy kịch tính, Mê mẩn với làn sóng phim Hàn Quốc đình đám, từ drama học đường đến thước phim hành động gay cấn!"
        />
        <CatList
          title="Phim bộ"
          data={series}
          desc="🎬 Khám phá thế giới đa dạng của phim bộ, những câu chuyện đầy kịch tính, hấp dẫn và sâu sắc về con người và xã hội!"
        />
        <CatList
          title="Phim theo thể loại"
          data={category}
          desc="🎭 Đắm chìm vào thế giới phiêu lưu và hành động với những cảnh quay mãn nhãn và kịch tính! Dành thời gian thư giãn với những câu chuyện tình yêu ngọt ngào và cảm động! Sẵn lòng đối diện với những cảnh kinh hoàng và bí ẩn đến từ thế giới kinh dị và Cười không ngớt với những bộ phim hài hước đầy sáng tạo và hài hước!"
        />
        <CatList
          title="Phim theo quốc gia"
          data={nations}
          desc="📽️ Tận hưởng vẻ đẹp và sức mạnh của điện ảnh Á Đông với những bộ phim từ Hàn Quốc, Trung Quốc, Nhật Bản và nhiều quốc gia khác! Đắm chìm vào thế giới của Hollywood và các nền điện ảnh phương Tây với những bộ phim từ Mỹ, Anh, Pháp, Ý, Đức và nhiều quốc gia khác!"
        />
      </div>
    </>
  );
}
