import React from "react";
import "../CSS/App.css";

function Mobile() {
  var flag = 0;

  function mob_size_menu() {
    if (flag == 0) {
      document.getElementById("mob_menu_nav").style.display = "block";
      // document.getElementById("mob_menu_nav").style.opacity = "1";
      // document.getElementById("mob_menu_nav").style.visibility = "1";
      flag = 1;
    } else {
      document.getElementById("mob_menu_nav").style.display = "none";
      // document.getElementById("mob_menu_nav").style.opacity = "0";
      // document.getElementById("mob_menu_nav").style.visibility = "0";
      flag = 0;
    }
  }

  return (
    <div>
      <header id="head_top" className="header_top_area">
        <div className="header_top_bottom_holder">
          <div className="header_bottom">
            <div className="header_inner_left">
              <div className="logo_wrapper">
                <div id="head_logo_top" className="q_logo">
                  <a itemProp="url" href="https://www.google.com/">
                    <img
                      id="header_logo"
                      itemProp="image"
                      className="normal"
                      src="logo.png"
                      alt="logo"
                    ></img>
                  </a>
                </div>
              </div>
            </div>
            <div className="header_inner_right">
              <div className="side_menu_wrapper">
                <div className="header_bottom_right_widget_holder">
                  <span className="social_icon_holder">
                    <span id="soc_icons_header_ig" className="fa-stack">
                      <span aria-hidden="true" className="icon_font_elegant">
                        <a
                          itemProp="url"
                          href="https://www.instagram.com/"
                          target={"_blank"}
                        >
                          <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                      </span>
                    </span>
                  </span>
                  <span className="social_icon_holder">
                    <span id="soc_icons_header_fb" className="fa-stack">
                      <span aria-hidden="true" className="icon_font_elegant">
                        <a
                          itemProp="url"
                          href="https://www.facebook.com/"
                          target={"_blank"}
                        >
                          <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                      </span>
                    </span>
                  </span>

                  <span className="social_icon_holder">
                    <span id="soc_icons_header_tw" className="fa-stack">
                      <span aria-hidden="true" className="icon_font_elegant">
                        <a
                          itemProp="url"
                          href="https://www.twitter.com/"
                          target={"_blank"}
                        >
                          <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="but_mob_style">
              <button
                onClick={mob_size_menu}
                id="mob_but"
                className="but_for_mobile"
              >
                <img className="mob_but_icon" src="hamb_icon.png"></img>
              </button>
            </div>
            <nav className="menu_nav">
              <ul id="main_menu">
                <li id="nav_menu_home" className="main_menu_home">
                  <a href="https://www.google.com/" className="current">
                    <i className="menu_icon_blank"></i>
                    <span className="menu_border_home">Home</span>
                  </a>
                </li>
                <li id="nav_menu_about_us" className="main_menu_about_us">
                  <a href="https://www.google.com/" className="current">
                    <i className="menu_icon_blank"></i>
                    <span className="menu_border_about_us">About Us</span>
                    <span className="plus"></span>
                  </a>
                </li>
                <li id="nav_menu_contact" className="main_menu_contact">
                  <a href="https://www.google.com/" className="current">
                    <i className="menu_icon_blank"></i>
                    <span className="menu_border_contact">Contacts</span>
                    <span className="plus"></span>
                  </a>
                </li>
              </ul>
            </nav>
            <nav id="mob_menu_nav" className="mobile_menu">
              <ul>
                <li>
                  <a href="https://www.google.com/" className="current_mobile">
                    <span className="home">Home</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/"
                    className="current_mobile"
                  >
                    <span className="ab_us">About Us</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    className="current_mobile"
                  >
                    <span className="cont">Contacts</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div className="grid-container">
        {/* post 1 */}
        <article
          id="post_1"
          className="post_1_1"
          style={{ position: "relative" }}
        >
          <div className="post_overlay"></div>
          <div className="post_image">
            <img
              src="img-technology.jpg"
              alt="a"
              width="645"
              height="800"
              draggable="false"
            />
          </div>
          <div className="post_text">
            <span className="post_category">
              <a href="https://www.technology.dandg.bg" rel="category tag">
                TECHNOLOGY
              </a>
            </span>
            <h5 itemProp="headings" className="title">
              <a
                itemProp="url"
                href="https://www.technology.dandg.bg"
                title="D&G Technology"
              >
                D&G Technology
              </a>
            </h5>
            <div className="post_hidden_text">
              <p itemProp="description" className="post_hidden_text">
                Go to D&G Technology
              </p>
            </div>
            <div className="post_info">
              <span className="date">january 19, 2022 | by admin</span>
            </div>
          </div>
        </article>

        {/* post 2 */}
        <article
          id="post_2"
          className="post_2_2"
          style={{ position: "relative" }}
        >
          <div className="post_overlay"></div>
          <div className="post_image">
            <img
              src="img-property.jpg"
              alt="a"
              width="645"
              height="800"
              draggable="false"
            />
          </div>
          <div className="post_text">
            <span className="post_category">
              <a href="https://www.property.dandg.bg" rel="category tag">
                PROPERTY
              </a>
            </span>
            <h5 itemProp="headings" className="title">
              <a
                itemProp="url"
                href="https://www.property.dandg.bg"
                title="D&G Property"
              >
                D&G Property
              </a>
            </h5>
            <div className="post_hidden_text">
              <p itemProp="description" className="post_hidden_text">
                Go to D&G Property
              </p>
            </div>
            <div className="post_info">
              <span className="date">january 19, 2022 | by admin</span>
            </div>
          </div>
        </article>

        {/* post 3 */}
        <article
          id="post_3"
          className="post_3_3"
          style={{ position: "relative" }}
        >
          <div className="post_overlay"></div>
          <div className="post_image">
            <img
              src="img-smarthome.jpg"
              alt="a"
              width="645"
              height="800"
              draggable="false"
            />
          </div>
          <div className="post_text">
            <span className="post_category">
              <a href="https://www.smart.dandg.bg" rel="category tag">
                SMART HOME
              </a>
            </span>
            <h5 itemProp="headings" className="title">
              <a
                itemProp="url"
                href="https://www.smart.dandg.bg"
                title="D&G Smart Home"
              >
                D&G Smart Home
              </a>
            </h5>
            <div className="post_hidden_text">
              <p itemProp="description" className="post_hidden_text">
                Go to D&G Smart Home
              </p>
            </div>
            <div className="post_info">
              <span className="date">january 19, 2022 | by admin</span>
            </div>
          </div>
        </article>

        {/* post 4 */}
        <article
          id="post_4"
          className="post_4_4"
          style={{ position: "relative" }}
        >
          <div className="post_overlay"></div>
          <div className="post_image">
            <img
              src="img-technology.jpg"
              alt="a"
              width="645"
              height="800"
              draggable="false"
            />
          </div>
          <div className="post_text">
            <span className="post_category">
              <a href="https://www.technology.dandg.bg" rel="category tag">
                TECHNOLOGY
              </a>
            </span>
            <h5 itemProp="headings" className="title">
              <a
                itemProp="url"
                href="https://www.technology.dandg.bg"
                title="D&G Technology"
              >
                D&G Technology
              </a>
            </h5>
            <div className="post_hidden_text">
              <p itemProp="description" className="post_hidden_text">
                Go to D&G Technology
              </p>
            </div>
            <div className="post_info">
              <span className="date">january 19, 2022 | by admin</span>
            </div>
          </div>
        </article>

        {/* post 5 */}
        <article
          id="post_5"
          className="post_5_5"
          style={{ position: "relative" }}
        >
          <div className="post_overlay"></div>
          <div className="post_image">
            <img
              src="img-property.jpg"
              alt="a"
              width="645"
              height="800"
              draggable="false"
            />
          </div>
          <div className="post_text">
            <span className="post_category">
              <a href="https://www.property.dandg.bg" rel="category tag">
                PROPERTY
              </a>
            </span>
            <h5 itemProp="headings" className="title">
              <a
                itemProp="url"
                href="https://www.property.dandg.bg"
                title="D&G Property"
              >
                D&G Property
              </a>
            </h5>
            <div className="post_hidden_text">
              <p itemProp="description" className="post_hidden_text">
                Go to D&G Property
              </p>
            </div>
            <div className="post_info">
              <span className="date">january 19, 2022 | by admin</span>
            </div>
          </div>
        </article>

        {/* post 6 */}
        <article
          id="post_6"
          className="post_6_6"
          style={{ position: "relative" }}
        >
          <div className="post_overlay"></div>
          <div className="post_image">
            <img
              src="img-smarthome.jpg"
              alt="a"
              width="645"
              height="800"
              draggable="false"
            />
          </div>
          <div className="post_text">
            <span className="post_category">
              <a href="https://www.smart.dandg.bg" rel="category tag">
                SMART HOME
              </a>
            </span>
            <h5 itemProp="headings" className="title">
              <a
                itemProp="url"
                href="https://www.smart.dandg.bg"
                title="D&G Smart Home"
              >
                D&G Smart Home
              </a>
            </h5>
            <div className="post_hidden_text">
              <p itemProp="description" className="post_hidden_text">
                Go to D&G Smart Home
              </p>
            </div>
            <div className="post_info">
              <span className="date">january 19, 2022 | by admin</span>
            </div>
          </div>
        </article>

        {/* post 7 */}
        <article
          id="post_7"
          className="post_7_7"
          style={{ position: "relative" }}
        >
          <div className="post_overlay"></div>
          <div className="post_image">
            <img
              src="img-technology.jpg"
              alt="a"
              width="645"
              height="800"
              draggable="false"
            />
          </div>
          <div className="post_text">
            <span className="post_category">
              <a href="https://www.technology.dandg.bg" rel="category tag">
                TECHNOLOGY
              </a>
            </span>
            <h5 itemProp="headings" className="title">
              <a
                itemProp="url"
                href="https://www.technology.dandg.bg"
                title="D&G Technology"
              >
                D&G Technology
              </a>
            </h5>
            <div className="post_hidden_text">
              <p itemProp="description" className="post_hidden_text">
                Go to D&G Technology
              </p>
            </div>
            <div className="post_info">
              <span className="date">january 19, 2022 | by admin</span>
            </div>
          </div>
        </article>

        {/* post 8 */}
        <article
          id="post_8"
          className="post_8_8"
          style={{ position: "relative" }}
        >
          <div className="post_overlay"></div>
          <div className="post_image">
            <img
              src="img-property.jpg"
              alt="a"
              width="645"
              height="800"
              draggable="false"
            />
          </div>
          <div className="post_text">
            <span className="post_category">
              <a href="https://www.property.dandg.bg" rel="category tag">
                PROPERTY
              </a>
            </span>
            <h5 itemProp="headings" className="title">
              <a
                itemProp="url"
                href="https://www.property.dandg.bg"
                title="D&G Property"
              >
                D&G Property
              </a>
            </h5>
            <div className="post_hidden_text">
              <p itemProp="description" className="post_hidden_text">
                Go to D&G Property
              </p>
            </div>
            <div className="post_info">
              <span className="date">january 19, 2022 | by admin</span>
            </div>
          </div>
        </article>

        {/* post 9 */}
        <article
          id="post_9"
          className="post_9_9"
          style={{ position: "relative" }}
        >
          <div className="post_overlay"></div>
          <div className="post_image">
            <img
              src="img-smarthome.jpg"
              alt="a"
              width="645"
              height="800"
              draggable="false"
            />
          </div>
          <div className="post_text">
            <span className="post_category">
              <a href="https://www.smart.dandg.bg" rel="category tag">
                SMART HOME
              </a>
            </span>
            <h5 itemProp="headings" className="title">
              <a
                itemProp="url"
                href="https://www.smart.dandg.bg"
                title="D&G Smart Home"
              >
                D&G Smart Home
              </a>
            </h5>
            <div className="post_hidden_text">
              <p itemProp="description" className="post_hidden_text">
                Go to D&G Smart Home
              </p>
            </div>
            <div className="post_info">
              <span className="date">january 19, 2022 | by admin</span>
            </div>
          </div>
        </article>
      </div>

      <footer>
        <div className="footer_holder">
          <div className="container">
            <div className="container_inner">
              <div id="text-2" className="widget_text">
                <div className="textwidget">
                  <img src="footer-logo.png" alt="logo"></img>
                  <div className="separator"></div>
                </div>
              </div>
              <span className="social_icon_holder">
                <span className="fa-stack">
                  <span className="icon_font_elegant">
                    <a
                      itemProp="url"
                      href="https://www.instagram.com/"
                      target={"_blank"}
                    >
                      <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                  </span>
                </span>
              </span>
              <span className="social_icon_holder">
                <span className="fa-stack">
                  <span aria-hidden="true" className="icon_font_elegant">
                    <a
                      itemProp="url"
                      href="https://www.facebook.com/"
                      target={"_blank"}
                    >
                      <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                  </span>
                </span>
              </span>
              <span className="social_icon_holder">
                <span className="fa-stack">
                  <span aria-hidden="true" className="icon_font_elegant">
                    <a
                      itemProp="url"
                      href="https://www.twitter.com/"
                      target={"_blank"}
                      title="twi"
                    >
                      <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                  </span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Mobile;
