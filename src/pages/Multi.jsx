import {Component} from "react";
import My_page from "../my_page";
import multi1 from "../images/multi1.jpg";
import multi2 from "../images/multi2.jpg";
import multi3 from "../images/multi3.jpg";
import multi4 from "../images/multi4.jpg";
import multi5 from "../images/multi5.webp";

class Multi extends Component {
  render()
  {
    return (
      <div className='cards'>
        <My_page
          image={multi1}
          name="Asus Vivobook Pro"
          message="AMD Ryzen™ 7 / 16ГБ / 128SSD / 21 / Win11 / (82C6S03900)"
          price="410 000KZT"
        />

        <My_page
          image={multi2}
          name="Acer Swift 3 SF316"
          message="Intel Core i7-11370H / 8ГБ / 128SSD / 15 / Win10 / (82C6S03900)"
          price="320 000KZT"
        />

        <My_page
          image={multi3}
          name="IdeaPad 5 Pro"
          message="AMD Ryzen 5000 / 16ГБ / 256SSD / 18 / Win10 / (82C6S03900)"
          price="350 000KZT"
        />

        <My_page
          image={multi4}
          name="Honor MagicBook"
          message="AMD Ryzen 5000 / 8ГБ / 256SSD / 14 / Win10 / (82C6S03900)"
          price="290 000KZT"
        />

        <My_page
          image={multi5}
          name="Lenovo Yoga Slim 7"
          message="Intel Core i7-1065G7 / 16ГБ / 512SSD / 14 / Win11 / (82C6S03900)"
          price="440 000KZT"
        />
      </div>
    );
  };
};


export default Multi;