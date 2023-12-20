import {Component} from "react";
import budget1 from "../images/budget1.jpg";
import budget2 from "../images/budget2.jpg";
import budget3 from "../images/budget3.jpg";
import budget4 from "../images/budget4.jpg";
import budget5 from "../images/budget5.jpg";
import budget6 from "../images/budget6.webp";
import budget7 from "../images/budget7.png";
import budget8 from "../images/budget8.jpg";
import My_page from "../my_page";

class Budget extends Component {
  render()
  {
    return (
        <div className='cards'>
          <My_page
            image={budget1}
            name="Acer Extensa 15"
            message="V15 Athlon Gold 3150U / 16ГБ / 128SSD / 15 / Win10 / (82C6S03900)"
            price="180 000KZT"
          />

          <My_page
            image={budget2}
            name="HP 14s"
            message="AMD Athlon Gold 3150U / 8ГБ / 256SSD / 15 / Win11 / (3B3M2EA)"
            price="200 000KZT"
          />

          <My_page
            image={budget3}
            name="Lenovo IdeaPad 3"
            message="Intel Pentium Quad Core N5030 / 8ГБ / 1HDD / 13 / Win7 / (81WH0033RU)"
            price="218 000KZT"
          />

          <My_page
            image={budget4}
            name="ASUS X409-EK58T"
            message="Intel Core i3 10110U / 8ГБ / 256SSD / 16 / Win10 / (90NB0MS2-M08830)"
            price="287 000KZT"
          />

          <My_page
            image={budget5}
            name="ASUS 15 X513-BQ"
            message="Intel Core i3 1115G4 / 8ГБ / 256SSD / 16 / Win10 / (90NB0SG4-M53110)"
            price="330 000KZT"
          />

          <My_page
            image={budget6}
            name="HP Pavilion dv4"
            message="Intel Core i3 / 8ГБ / 256SSD / 16 / Win10 / (90NB0SG4-M53110)"
            price="261 000KZT"
          />

          <My_page
            image={budget7}
            name="HONOR MagicBook"
            message="Intel Core i3 / 8ГБ / 256SSD / 13 / Win10 / (NB0SG4-M53110)"
            price="340 000KZT"
          />

          <My_page
            image={budget8}
            name="Lenovo IdeaPad 3"
            message="Intel Core i3 / 8ГБ / 256SSD / 13 / Win11 / (90NB0SG4-M5)"
            price="286 000KZT"
          />
        </div>
    );
  };
};

export default Budget;