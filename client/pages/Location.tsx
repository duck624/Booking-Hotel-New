import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X, MapPin, Star, Wifi, Coffee, Car, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const locations = [
  {
    id: 1,
    label: "HÀ NỘI",
    title: "HotelHub Kim Mã",
    description:
      "Nằm tại trung tâm khu vực Kim Mã sầm uất của Hà Nội, HotelHub Kim Mã mang đến không gian nghỉ dưỡng hiện đại và thanh lịch giữa nhịp sống thủ đô. Với thiết kế tinh tế, dịch vụ chu đáo và vị trí thuận tiện kết nối các điểm văn hóa, mua sắm và ẩm thực, đây là lựa chọn hoàn hảo cho những ai muốn trải nghiệm Hà Nội một cách trọn vẹn.",
    image:
      "https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839184_1280.jpg",
  },
  {
    id: 2,
    label: "HỒ CHÍ MINH",
    title: "HotelHub Thảo Điền",
    description:
      "Tọa lạc tại trung tâm Thảo Điền – khu vực sôi động bậc nhất của Thành phố Hồ Chí Minh, HotelHub Thảo Điền mang đến không gian nghỉ dưỡng hiện đại hòa cùng thiên nhiên xanh mát. Với thiết kế tinh tế, tiện nghi sang trọng và vị trí thuận lợi cho cả làm việc lẫn thư giãn, đây là điểm đến lý tưởng cho những ai muốn tận hưởng nhịp sống thành phố theo cách riêng.",
    image:
      "https://cdn.pixabay.com/photo/2020/03/13/18/17/the-living-room-of-a-photographer-4928794_1280.jpg",
  },
  {
    id: 3,
    label: "ĐÀ NẴNG",
    title: "HotelHub Mỹ Khê",
    description:
      "Nằm bên bờ biển Mỹ Khê – một trong những bãi biển đẹp nhất Đà Nẵng, HotelHub Mỹ Khê mang đến không gian nghỉ dưỡng thanh bình cùng tầm nhìn hướng biển tuyệt đẹp. Với thiết kế hiện đại, tiện nghi đẳng cấp và vị trí thuận lợi để khám phá thành phố, đây là nơi lý tưởng để tận hưởng kỳ nghỉ trọn vẹn.",
    image:
      "https://cdn.pixabay.com/photo/2018/03/29/17/00/bathroom-3272780_1280.jpg",
  },
  {
    id: 4,
    label: "PHÚ QUỐC",
    title: "HotelHub Bãi Trường",
    description:
      "Tọa lạc ngay bên bãi biển Bãi Trường tuyệt đẹp, HotelHub Phú Quốc là thiên đường nghỉ dưỡng lý tưởng với làn nước trong xanh và cát trắng mịn màng. Không gian sang trọng kết hợp với thiên nhiên hoang sơ tạo nên trải nghiệm đáng nhớ cho mọi du khách.",
    image:
      "https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839184_1280.jpg",
  },
  {
    id: 5,
    label: "NHA TRANG",
    title: "HotelHub Trần Phú",
    description:
      "Nằm dọc bờ biển Trần Phú nổi tiếng, HotelHub Nha Trang mang đến tầm nhìn panorama tuyệt đẹp ra biển cả. Với thiết kế hiện đại, tiện nghi cao cấp và dịch vụ tận tâm, đây là điểm dừng chân hoàn hảo cho kỳ nghỉ biển.",
    image:
      "https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839184_1280.jpg",
  },
  {
    id: 6,
    label: "ĐÀ LẠT",
    title: "HotelHub Xuân Hương",
    description:
      "Nép mình bên hồ Xuân Hương thơ mộng, HotelHub Đà Lạt là không gian nghỉ dưỡng yên bình giữa thành phố ngàn hoa. Khí hậu mát mẻ quanh năm cùng thiết kế ấm cúng tạo nên nơi trú ẩn lý tưởng khỏi guồng quay cuộc sống.",
    image:
      "https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839184_1280.jpg",
  },
];

const places = [
  {
    id: 1,
    name: "Hanoi",
    desc: "Thủ đô với nhiều điểm tham quan.",
    img: "https://cellphones.com.vn/sforum/wp-content/uploads/2024/01/dia-diem-du-lich-o-ha-noi-1.jpg",
    rooms: [
      {
        id: 1,
        name: "Phòng View Hồ Hoàn Kiếm",
        view: "Nhìn ra Hồ Hoàn Kiếm",
        location: "Trung tâm thành phố",
        price: 2500000,
        image: "https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839184_1280.jpg",
        amenities: ["Wifi miễn phí", "Breakfast", "Gym", "Bãi đỗ xe"],
        rating: 4.8
      },
      {
        id: 2,
        name: "Phòng View Phố Cổ",
        view: "Nhìn ra Phố Cổ Hà Nội",
        location: "Khu phố cổ",
        price: 2000000,
        image: "https://cdn.pixabay.com/photo/2020/03/13/18/17/the-living-room-of-a-photographer-4928794_1280.jpg",
        amenities: ["Wifi miễn phí", "Breakfast", "Mini bar"],
        rating: 4.7
      },
      {
        id: 3,
        name: "Phòng View Đường Lớn",
        view: "Nhìn ra đại lộ Kim Mã",
        location: "Gần trung tâm thương mại",
        price: 1800000,
        image: "https://cdn.pixabay.com/photo/2018/03/29/17/00/bathroom-3272780_1280.jpg",
        amenities: ["Wifi miễn phí", "Breakfast", "Bãi đỗ xe"],
        rating: 4.5
      }
    ]
  },
  {
    id: 2,
    name: "Da Nang",
    desc: "Bãi biển đẹp và cầu Rồng.",
    img: "https://vcdn1-dulich.vnecdn.net/2022/06/03/cauvang-1654247842-9403-1654247849.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Swd6JjpStebEzT6WARcoOA",
    rooms: [
      {
        id: 4,
        name: "Phòng View Biển Mỹ Khê",
        view: "Nhìn ra biển Mỹ Khê",
        location: "Bãi biển Mỹ Khê",
        price: 3000000,
        image: "https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839184_1280.jpg",
        amenities: ["Wifi miễn phí", "Breakfast", "Hồ bơi", "Spa"],
        rating: 4.9
      },
      {
        id: 5,
        name: "Phòng View Sông Hàn",
        view: "Nhìn ra sông Hàn và Cầu Rồng",
        location: "Bờ sông Hàn",
        price: 2800000,
        image: "https://cdn.pixabay.com/photo/2020/03/13/18/17/the-living-room-of-a-photographer-4928794_1280.jpg",
        amenities: ["Wifi miễn phí", "Breakfast", "Rooftop bar"],
        rating: 4.8
      },
      {
        id: 6,
        name: "Phòng View Đường Biển",
        view: "Nhìn ra đường Võ Nguyên Giáp",
        location: "Gần bãi biển",
        price: 2200000,
        image: "https://cdn.pixabay.com/photo/2018/03/29/17/00/bathroom-3272780_1280.jpg",
        amenities: ["Wifi miễn phí", "Breakfast", "Gym"],
        rating: 4.6
      }
    ]
  },
  {
    id: 3,
    name: "Ho Chi Minh",
    desc: "Thành phố sôi động, ẩm thực phong phú.",
    img: "https://cdn.thuvienphapluat.vn//uploads/tintuc/2024/05/01/vung-do-thi-thanh-pho-ho-chi-minh.jpg",
    rooms: [
      {
        id: 7,
        name: "Phòng View Sông Sài Gòn",
        view: "Nhìn ra sông Sài Gòn",
        location: "Quận 2 - Thảo Điền",
        price: 2700000,
        image: "https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839184_1280.jpg",
        amenities: ["Wifi miễn phí", "Breakfast", "Hồ bơi", "Sky bar"],
        rating: 4.9
      },
      {
        id: 8,
        name: "Phòng View Trung Tâm",
        view: "Nhìn ra Quận 1",
        location: "Trung tâm Quận 1",
        price: 2500000,
        image: "https://cdn.pixabay.com/photo/2020/03/13/18/17/the-living-room-of-a-photographer-4928794_1280.jpg",
        amenities: ["Wifi miễn phí", "Breakfast", "Rooftop pool"],
        rating: 4.7
      },
      {
        id: 9,
        name: "Phòng View Đại Lộ",
        view: "Nhìn ra đại lộ Nguyễn Văn Linh",
        location: "Quận 7",
        price: 2000000,
        image: "https://cdn.pixabay.com/photo/2018/03/29/17/00/bathroom-3272780_1280.jpg",
        amenities: ["Wifi miễn phí", "Breakfast", "Bãi đỗ xe"],
        rating: 4.5
      }
    ]
  },
];

export default function Locations() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCity, setSelectedCity] = useState<typeof places[0] | null>(null);
  const [showRoomModal, setShowRoomModal] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? locations.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === locations.length - 1 ? 0 : prev + 1));
  };

  const handleViewDetails = (city: typeof places[0]) => {
    setSelectedCity(city);
    setShowRoomModal(true);
  };

  const handleBookNow = () => {
    window.dispatchEvent(new Event("openBooking"));
  };

  return (
    <>
      {/* ==================== SLIDER ĐẦU TRANG ==================== */}
      <div className="relative w-full h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{ backgroundImage: `url(${locations[currentIndex].image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-12 text-center drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] leading-tight">
            Khám phá điều mới lạ
            <br />
            tại M Village
          </h1>

          <div className="flex items-center gap-6 w-full max-w-6xl">
            <Button
              onClick={handlePrev}
              variant="outline"
              size="icon"
              className="text-white bg-white/20 hover:bg-white/40 border-2 border-white/50 backdrop-blur-md shrink-0 h-14 w-14 rounded-full shadow-xl hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <div className="flex-1 overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {locations.map((location) => (
                  <div key={location.id} className="min-w-full flex flex-col items-center px-4">
                    <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 max-w-3xl border border-white/20 shadow-2xl flex flex-col items-center">
                      <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold tracking-wider mb-4 border border-white/30">
                        {location.label}
                      </span>
                      <h2 className="text-4xl font-bold mb-6 drop-shadow-lg text-center">
                        {location.title}
                      </h2>
                      <p className="text-center text-base leading-relaxed mb-8 drop-shadow-md font-medium">
                        {location.description}
                      </p>
                      <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 border-2 border-white/20">
                        Khám phá ngay
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button
              onClick={handleNext}
              variant="outline"
              size="icon"
              className="text-white bg-white/20 hover:bg-white/40 border-2 border-white/50 backdrop-blur-md shrink-0 h-14 w-14 rounded-full shadow-xl hover:scale-110 transition-all duration-300"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>

          <div className="flex gap-3 mt-12 bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            {locations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white w-12 shadow-lg shadow-white/50"
                    : "bg-white/40 w-3 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-2 bg-gradient-to-r from-teal-500 via-green-500 to-emerald-500"></div>

      {/* ==================== ĐIỂM ĐẾN PHỔ BIẾN ==================== */}
      <div className="relative bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block bg-teal-100 px-6 py-2 rounded-full mb-6 border border-teal-200">
              <span className="text-teal-700 font-bold text-sm tracking-widest">ĐIỂM ĐẾN</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Điểm đến phổ biến</h2>
            <p className="text-gray-600 text-xl font-medium">
              Khám phá những thành phố hấp dẫn nhất Việt Nam
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {places.map((p, index) => (
              <div
                key={p.id}
                className="group relative bg-white rounded-3xl overflow-hidden border-2 border-gray-200 hover:border-teal-500 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden h-80">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-4xl font-bold text-white drop-shadow-2xl">{p.name}</h3>
                    <p className="text-white/90 mt-2 text-lg font-medium">{p.desc}</p>
                  </div>
                </div>

                <div className="p-8 bg-white">
                  <button
                    onClick={() => handleViewDetails(p)}
                    className="w-full flex items-center justify-center gap-3 font-bold py-5 px-6 rounded-xl text-white bg-gradient-to-r from-teal-500 to-green-500 hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    Xem chi tiết
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ==================== MODAL CHI TIẾT PHÒNG - SCROLLBAR ĐẸP ==================== */}
      {showRoomModal && selectedCity && (
        <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-md flex items-center justify-center p-4">
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] relative overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header cố định */}
            <div className="bg-gradient-to-r from-teal-600 to-green-600 px-8 py-10 sticky top-0 z-20 flex-shrink-0">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-4xl font-bold text-white">
                    Khách sạn tại {selectedCity.name}
                  </h2>
                  <p className="text-white/90 mt-2 text-lg">
                    {selectedCity.rooms.length} loại phòng cao cấp đang chờ bạn
                  </p>
                </div>
                <button
                  onClick={() => setShowRoomModal(false)}
                  className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all hover:rotate-90"
                >
                  <X className="w-7 h-7" />
                </button>
              </div>
            </div>

            {/* Nội dung cuộn - có scrollbar đẹp */}
            <div className="flex-1 overflow-y-auto px-8 py-10 custom-scrollbar">
              <div className="space-y-10 pb-8">
                {selectedCity.rooms.map((room) => (
                  <div
                    key={room.id}
                    className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="grid lg:grid-cols-3 gap-0">
                      {/* Ảnh */}
                      <div className="relative h-80 lg:h-auto overflow-hidden">
                        <img
                          src={room.image}
                          alt={room.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-teal-600 px-4 py-2 rounded-full flex items-center gap-2 font-bold shadow-lg">
                          <Star className="w-5 h-5 fill-teal-600" />
                          {room.rating}
                        </div>
                      </div>

                      {/* Nội dung */}
                      <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-between">
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900 mb-4">{room.name}</h3>
                          <div className="flex flex-wrap items-center gap-6 text-gray-700 mb-6">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-5 h-5 text-teal-600" />
                              <span className="font-medium">{room.location}</span>
                            </div>
                            <span className="hidden lg:block text-gray-400">•</span>
                            <span className="font-medium">{room.view}</span>
                          </div>

                          <div className="flex flex-wrap gap-3 mb-8">
                            {room.amenities.map((a, i) => (
                              <span
                                key={i}
                                className="bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2"
                              >
                                {a === "Wifi miễn phí" && <Wifi className="w-4 h-4" />}
                                {a === "Breakfast" && <Coffee className="w-4 h-4" />}
                                {a === "Bãi đỗ xe" && <Car className="w-4 h-4" />}
                                {a}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-end justify-between gap-6">
                          <div>
                            <p className="text-gray-600 text-sm">Giá mỗi đêm từ</p>
                            <p className="text-4xl font-bold text-teal-600">
                              {room.price.toLocaleString("vi-VN")} ₫
                            </p>
                          </div>
                          <button
                            onClick={handleBookNow}
                            className="flex items-center justify-center gap-3 font-bold text-white bg-gradient-to-r from-teal-500 to-green-500 hover:shadow-2xl hover:scale-105 transition-all duration-300 py-5 px-10 rounded-xl shadow-xl"
                          >
                            <Check className="w-6 h-6" />
                            Đặt phòng ngay
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =============== STYLE SCROLLBAR ĐẸP (tự động áp dụng toàn cục) =============== */}
      <style jsx global>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #94a3b8 #f1f5f9;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #94a3b8, #64748b);
          border-radius: 10px;
          border: 2px solid #f1f5f9;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #64748b, #475569);
        }
      `}</style>
    </>
  );
}