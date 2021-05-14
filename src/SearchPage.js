import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>Kalan 62 kişi · 26 ağustos - 30 ağustos · 2 misafir</p>
        <h1>Yakınlarındaki yerler </h1>
        <Button variant="outlined">Hızlı İptal</Button>
        <Button variant="outlined">Yerin Tipi</Button>
        <Button variant="outlined">Ücreti</Button>
        <Button variant="outlined">Odalar ve yataklar</Button>
        <Button variant="outlined">Daha filtre</Button>
      </div>
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Londra merkezinde özel oda"
        title="bu geniş Edward evinde kalın"
        description="1 Misafir · 1 yatak odası · 1 yatak · 1.5 paylaşımlı banyo · Wifi · mutfak · ücretsiz park alanı · Çamaşır Makinesi"
        star={4.73}
        price="£30 / gecelik"
        total="£117 toplam"
      />

      <SearchResult
        img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
        location="Londra merkezinde özel oda"
        title="lüks apartman dairesi"
        description="2 misafir · 3 yatak odası · 1 yatak · 1.5 paylaşımlı banyo · Wifi · mutfak"
        star={4.3}
        price="£40 / gecelik"
        total="£157 toplam"
      />

      <SearchResult
        img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
        location="Private room in center of London"
        title="londro stüdyo apartman dairesi"
        description="4 misafir · 4 yatak odası · 4 yatak · 2 banyo · ücretsiz park alanı · çamaşır makinesi"
        star={3.8}
        price="£35 / gecelik"
        total="£207 toplam"
      />
      <SearchResult
        img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
        location="Londra merkezinde özel oda"
        title="Oxford sokağına 30 dakika"
        description="1 misafir · 1 yatak odası · 1 yatak · 1.5 paylaşımlı banyo · Wifi · Mutfak · Ücretsiz Park Alanı · Çamaşır Makinesi"
        star={4.1}
        price="£55 / gecelik"
        total="£320 toplam"
      />
      <SearchResult
        img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg"
        location="Londra merkezinde özel oda"
        title="Moder Huzurlu ozel yatak odası"
        description="3 misafir · 1 yatak odası · 1 yatak · 1.5 paylaşımlı banyo · Wifi · Ücretsiz park alanı · Kuru Temizleme"
        star={5.0}
        price="£60 / gecelik"
        total="£450 toplam"
      />
      <SearchResult
        img="https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937"
        location="Londra merkezinde özel oda"
        title="Londra'da Mavi Oda"
        description="2 misafir · 1 yatak odası · 1 yatak · 1.5 paylaşımlı banyo · Wifi · Çamaşır makinesi"
        star={4.23}
        price="£65 / gecelik"
        total="£480 toplam"
      />
      <SearchResult
        img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
        location="Londra merkezinde özel oda"
        title="5 yıldızlı lüx daire"
        description="3 misafir · 1 yatak odası · 1 yatak · 1.5 paylaşımlı banyo · Wifi · Mutfak · Ücretsiz Park Alanı · Çamaşır Makinesi"
        star={3.85}
        price="£90 / gecelik"
        total="£650 toplam"
      />
    </div>
  );
}

export default SearchPage;
