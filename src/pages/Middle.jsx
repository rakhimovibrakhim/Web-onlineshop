import {Component} from "react";
import My_page from "../my_page";
import middle1 from "../images/middle1.jpg";
import middle2 from "../images/middle2.jpg";
import middle3 from "../images/middle3.jpg";
import middle4 from "../images/middle4.jpg";
import middle5 from "../images/middle5.jpg";
import middle6 from "../images/middle6.jpg";
import middle7 from "../images/middle7.jpg";
import middle8 from "../images/middle8.jpg";

class Middle extends Component {
  render()
  {
    return (
      <div className='cards'>
        <My_page
          image={middle1}
          name="Acer Swift 3 SF3"
          message="AMD Ryzen 3 4300U / 8ГБ / 128SSD / 17 / Win10 / (82C6S03900)"
          price="220 000KZT"
        />

        <My_page
          image={middle2}
          name="HP ProBook 440 G7"
          message="Intel Core i5 1021G1 / 8ГБ / 256SSD / 15 / Win11 / (82C6S03900)"
          price="330 000KZT"
        />

        <My_page
          image={middle3}
          name="Lenovo IdeaPad 5"
          message="Intel Core i3 1005G1 / 8ГБ / 256SSD / 15 / Win10 / (82C6S03900)"
          price="250 000KZT"
        />

        <My_page
          image={middle4}
          name="Huawei MateBook"
          message="AMD Ryzen 5 3500U / 8ГБ / 256SSD / 15 / Win10 / (82C6S03900)"
          price="286 000KZT"
        />

        <My_page
          image={middle5}
          name="Lenovo ThinkBook"
          message="Intel Core i3 1005G1 / 8ГБ / 256SSD / 15 / Win10 / (82C6S03900)"
          price="259 000KZT"
        />

        <My_page
          image={middle6}
          name="ASUS VivoBook 15"
          message="AMD Ryzen 3 3200U / 8ГБ / 256SSD / 15 / Win10 / (82C6S03900)"
          price="247 000KZT"
        />

        <My_page
          image={middle7}
          name="ASUS X509JA"
          message="Intel Core i5 1035G1 / 8ГБ / 256SSD / 15 / Win10 / (82C6S03900)"
          price="314 000KZT"
        />

        <My_page
          image={middle8}
          name="Acer Aspire 3"
          message="AMD Athlon 300U / 8ГБ / 1000HDD / 15 / Win10 / (82C6S03900)"
          price="300 000KZT"
        />

      </div>
    );
  };
};


export default Middle;