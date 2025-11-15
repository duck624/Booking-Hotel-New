import SearchBar from "@/components/SearchBar";
import RoomCard from "@/components/RoomCard";

export default function Index() {
  const rooms = [
    {
      name: "Phòng Superior City View",
      size: "30 m²",
      bedType: "Giường Queen",
      guests: "2 người",
      description:
        "Căn phòng trần ngập ánh sáng với view toàn cảnh thành phố cùng những mảng xanh dịu mát. Bàn làm việc tiện dụng trong không gian thoải mái, là lựa chọn lý tưởng để cân bằn",
      amenities: [
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/348a4c3e78783180aabb7df9f070bad3b3f85485?width=40",
          label: "Cửa sổ",
        },
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/878dc9c47b68157b636b1f507f26f8aa3c749c4e?width=40",
          label: "Bàn làm việc",
        },
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/baf4eaa90d5e41f294aa7213a502cc16d0499a5a?width=40",
          label: "View thành phố",
        },
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/5e6023252a697aaf535fd0e447a8f03e64e5f0e5?width=40",
          label: "Phòng tắm đứng",
        },
      ],
      price: "1.050.000",
      availability: "Chỉ còn 2 phòng",
      images: [
        "https://cdn.pixabay.com/photo/2019/09/11/04/45/interior-design-4467771_1280.jpg",
        "https://cdn.pixabay.com/photo/2019/09/11/04/43/interior-design-4467768_1280.jpg",
        "https://cdn.pixabay.com/photo/2019/09/11/04/43/interior-design-4467769_1280.jpg",
        "https://cdn.pixabay.com/photo/2019/09/11/04/45/interior-design-4467770_1280.jpg",
      ],
    },
    {
      name: "Phòng Deluxe With Balcony City View",
      size: "30 m²",
      bedType: "Giường Queen",
      guests: "2 người",
      description:
        "Với ban công riêng có view thành phố được điểm xuyết bởi nhiều mảng xanh, phòng có không gian bên trong sáng thoáng, gọn gàng và kết hợp cùng bàn làm việc tiện dụng, lý",
      amenities: [
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/348a4c3e78783180aabb7df9f070bad3b3f85485?width=40",
          label: "Cửa sổ",
        },
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/d26a9eb822a366c68e0d2b37596c8c19159c59f6?width=40",
          label: "Ban công",
        },
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/878dc9c47b68157b636b1f507f26f8aa3c749c4e?width=40",
          label: "Bàn làm việc",
        },
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/baf4eaa90d5e41f294aa7213a502cc16d0499a5a?width=40",
          label: "View thành phố",
        },
      ],
      price: "1.350.000",
      availability: "PHÒNG CUỐI",
      images: [
        "https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_1280.jpg",
        "https://cdn.pixabay.com/photo/2024/12/24/10/04/kitchen-9288111_1280.jpg",
        "https://cdn.pixabay.com/photo/2020/12/16/00/10/home-5835289_1280.jpg",
      ],
    },
    {
      name: "Phòng Standard",
      size: "20 m²",
      bedType: "Giường Queen",
      guests: "2 người",
      description:
        "Không gian tối giản, yên tĩnh mang đến sự thoải mái cho mọi kỳ lưu trú. Thiết kế thông minh với tủ chứa đồ gọn gàng và bàn làm việc giúp ngày của bạn luôn gọn gàng và ngăn",
      amenities: [
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/878dc9c47b68157b636b1f507f26f8aa3c749c4e?width=40",
          label: "Bàn làm việc",
        },
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/5e6023252a697aaf535fd0e447a8f03e64e5f0e5?width=40",
          label: "Phòng tắm đứng",
        },
      ],
      soldOut: true,
      images: [
        "https://api.builder.io/api/v1/image/assets/TEMP/97d4df5c8a81315058f1aba3c727ba44e3a8bbcc?width=580",
        "https://api.builder.io/api/v1/image/assets/TEMP/28e1dd175c32cf785cf14bd4ccfa6656decf6721?width=580",
        "https://api.builder.io/api/v1/image/assets/TEMP/28e1dd175c32cf785cf14bd4ccfa6656decf6721?width=580",
      ],
    },
    {
      name: "Phòng Standard With Window",
      size: "20 m²",
      bedType: "Giường Queen",
      guests: "2 người",
      description:
        "Không gian tiện nghi với cửa sổ đón nắng và tầm nhìn thành phố thoáng đãng. Phòng được trang bị đầy đủ tiện ích, gần các khu vực chung - là lựa chọn lý tưởng cho những ai",
      amenities: [
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/348a4c3e78783180aabb7df9f070bad3b3f85485?width=40",
          label: "Cửa sổ",
        },
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/878dc9c47b68157b636b1f507f26f8aa3c749c4e?width=40",
          label: "Bàn làm việc",
        },
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/baf4eaa90d5e41f294aa7213a502cc16d0499a5a?width=40",
          label: "View thành phố",
        },
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/5e6023252a697aaf535fd0e447a8f03e64e5f0e5?width=40",
          label: "Phòng tắm đứng",
        },
      ],
      soldOut: true,
      images: [
        "https://api.builder.io/api/v1/image/assets/TEMP/3894c75e9ba50894104394d1326e231ad0e1f4bf?width=580",
        "https://api.builder.io/api/v1/image/assets/TEMP/28e1dd175c32cf785cf14bd4ccfa6656decf6721?width=580",
        "https://api.builder.io/api/v1/image/assets/TEMP/28e1dd175c32cf785cf14bd4ccfa6656decf6721?width=580",
        "https://api.builder.io/api/v1/image/assets/TEMP/28e1dd175c32cf785cf14bd4ccfa6656decf6721?width=580",
        "https://api.builder.io/api/v1/image/assets/TEMP/28e1dd175c32cf785cf14bd4ccfa6656decf6721?width=580",
      ],
    },
    {
      name: "Phòng Superior",
      size: "30 m²",
      bedType: "Giường Queen",
      guests: "2 người",
      description:
        "Không gian tiện nghi với ánh sáng tự nhiên và bố cục gọn gàng, mang lại sự thoải mái cho mọi kỳ lưu trú dù ngắn hoặc dài ngày. Ghế bành thư giãn cùng bàn làm việc tiện dụng giú",
      amenities: [
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/348a4c3e78783180aabb7df9f070bad3b3f85485?width=40",
          label: "Cửa sổ",
        },
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/6d95958b2b8ee7358ad2628f7f66873371038137?width=40",
          label: "Ghế bành",
        },
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/878dc9c47b68157b636b1f507f26f8aa3c749c4e?width=40",
          label: "Bàn làm việc",
        },
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/5e6023252a697aaf535fd0e447a8f03e64e5f0e5?width=40",
          label: "Phòng tắm đứng",
        },
      ],
      soldOut: true,
      images: [
        "https://api.builder.io/api/v1/image/assets/TEMP/2da833d5ceda68fb309d92d8ad895c9b97c88eca?width=580",
        "https://api.builder.io/api/v1/image/assets/TEMP/28e1dd175c32cf785cf14bd4ccfa6656decf6721?width=580",
        "https://api.builder.io/api/v1/image/assets/TEMP/28e1dd175c32cf785cf14bd4ccfa6656decf6721?width=580",
        "https://api.builder.io/api/v1/image/assets/TEMP/28e1dd175c32cf785cf14bd4ccfa6656decf6721?width=580",
      ],
    },
    {
      name: "Phòng Deluxe",
      size: "30 m²",
      bedType: "Giường Queen",
      guests: "2 người",
      description:
        "Với hai cửa sổ lớn, phòng Deluxe tràn ngập ánh sáng tự nhiên cùng không gian mở, mang lại cảm giác thoáng mát và dễ chịu. Bố cục gọn gàng cùng bàn làm việc tiện dụng, là lựa",
      amenities: [
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/348a4c3e78783180aabb7df9f070bad3b3f85485?width=40",
          label: "Cửa sổ",
        },
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/878dc9c47b68157b636b1f507f26f8aa3c749c4e?width=40",
          label: "Bàn làm việc",
        },
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/5e6023252a697aaf535fd0e447a8f03e64e5f0e5?width=40",
          label: "Phòng tắm đứng",
        },
      ],
      soldOut: true,
      images: [
        "https://api.builder.io/api/v1/image/assets/TEMP/f373a0bdea5fe1532775962c8d34f7e850d549d8?width=580",
        "https://api.builder.io/api/v1/image/assets/TEMP/28e1dd175c32cf785cf14bd4ccfa6656decf6721?width=580",
        "https://api.builder.io/api/v1/image/assets/TEMP/28e1dd175c32cf785cf14bd4ccfa6656decf6721?width=580",
        "https://api.builder.io/api/v1/image/assets/TEMP/28e1dd175c32cf785cf14bd4ccfa6656decf6721?width=580",
        "https://api.builder.io/api/v1/image/assets/TEMP/28e1dd175c32cf785cf14bd4ccfa6656decf6721?width=580",
      ],
    },
    {
      name: "Phòng Deluxe with Terrace",
      size: "38 m²",
      bedType: "Queen Bed",
      guests: "2 người",
      description:
        "Là căn phòng rộng rãi nhất chi nhánh với sân hiên thoáng đãng. Ghế bành êm ái cho bạn tận hưởng sự thư giãn và tiện nghi rất đủ đầy đủ tạo nên không gian lý tưởng cho một",
      amenities: [
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/348a4c3e78783180aabb7df9f070bad3b3f85485?width=40",
          label: "Cửa sổ",
        },
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/8f8cbe846ced2c3f252f912f61d6702f60aae769?width=40",
          label: "Sân hiên",
        },
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/878dc9c47b68157b636b1f507f26f8aa3c749c4e?width=40",
          label: "Bàn làm việc",
        },
        {
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/5e6023252a697aaf535fd0e447a8f03e64e5f0e5?width=40",
          label: "Phòng tắm đứng",
        },
      ],
      soldOut: true,
      images: [
        "https://api.builder.io/api/v1/image/assets/TEMP/fb1201095bf2578156066f138b0d1193aaeca825?width=580",
        "https://api.builder.io/api/v1/image/assets/TEMP/28e1dd175c32cf785cf14bd4ccfa6656decf6721?width=580",
        "https://api.builder.io/api/v1/image/assets/TEMP/28e1dd175c32cf785cf14bd4ccfa6656decf6721?width=580",
        "https://api.builder.io/api/v1/image/assets/TEMP/28e1dd175c32cf785cf14bd4ccfa6656decf6721?width=580",
        "https://api.builder.io/api/v1/image/assets/TEMP/28e1dd175c32cf785cf14bd4ccfa6656decf6721?width=580",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-full max-w-[1240px] mx-auto px-4 lg:px-0 py-8">
        <div className="mb-8 pt-8">
          <h1 className="text-gray-dark text-4xl font-medium leading-[44px]">
            Lựa chọn phòng
          </h1>
        </div>

        <div className="mb-12">
          <SearchBar />
        </div>

        <div className="flex flex-col gap-4">
          {rooms.map((room, index) => (
            <RoomCard key={index} {...room} />
          ))}
        </div>
      </div>
    </div>
  );
}
