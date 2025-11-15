import React from "react";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Giặt ủi",
      desc: "Dịch vụ giặt ủi nhanh, sạch sẽ.",
      img: "https://cdn.pixabay.com/photo/2021/02/02/12/38/iron-5973837_1280.jpg",
    },
    {
      id: 2,
      title: "Đưa đón sân bay",
      desc: "Xe đưa đón tiện lợi, an toàn.",
      img: "https://cdn.pixabay.com/photo/2018/02/14/15/50/lufthansa-regional-3153209_1280.jpg",
    },
    {
      id: 3,
      title: "Ăn sáng",
      desc: "Buffet sáng phong phú, dinh dưỡng.",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Dịch vụ</h1>
      <p className="mb-6 text-gray-600">
        Các dịch vụ tiện ích mà chúng tôi cung cấp để làm cho kỳ nghỉ của bạn
        thoải mái hơn.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.id}
            className="border rounded-lg overflow-hidden shadow-sm bg-white"
          >
            <img
              src={s.img}
              alt={s.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{s.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
