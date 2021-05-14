import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

// ES7 snippets to do 'rfce'

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Online Tecrübe"
          description="Ev sahipleri dünyası tarafından yönetilen birlikte yapabileceğimiz benzersiz aktiviteler."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Benzersiz konaklamalar"
          description="Uyumak için bir yerden daha fazlası olan alanlar."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Tüm ev"
          description="Arkadaşlarınız veya aileniz için rahat özel odalar"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          title="Bournemouth'ta 3 Yatak Odalı Daire"
          description="Sunny Bournemouth'ta muhteşem sahil manzarasına sahip superhost"
          price="£160/gecelik"
        />
        <Card
          src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          title="Londra'da Çatı Katı"
          description="Bu çarpıcı çatı katı ile Londra'nın muhteşem manzaralarının tadını çıkarın"
          price="£350/gecelik"
        />
        <Card
          src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="1 Yataklı daire"
          description="Harika olanaklara ve yakın alışveriş yerlerine sahip bir mekan"
          price="£70/gecelik"
        />
      </div>
    </div>
  );
}

export default Home;
