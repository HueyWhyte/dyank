import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

import "./style.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/m0DF5PF/alex-iby-La-Ho9-Set3b-I-unsplash.jpg"
              alt="First slide"
              style={{ height: "100vh" }}
            />

            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/sjNvhZk/796854.jpg"
              alt="Third slide"
              style={{ height: "100vh" }}
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/qDD94jB/anas-alshanti-fe-Xpd-V001o4-unsplash.jpg"
              alt="Third slide"
              style={{ height: "100vh" }}
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <section
          style={{
            display: "flex",
            minHeight: "calc(100vh - 100px)",
            width: "100%",
            marginTop: 30,
            flexWrap: "wrap",
          }}
        >
          <div className="wlkm_small_img">
            <h1 style={{ color: "white", fontSize: 80 }}>Welcome</h1>
          </div>

          <div
            style={{
              width: "40%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p style={{ margin: 20 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              adipisci facilis rerum numquam corporis inventore, praesentium
              incidunt minus eligendi possimus perferendis magni quaerat fugiat
              rem beatae repellat ratione cumque ut.
            </p>
          </div>
        </section>

        <section
          style={{
            display: "flex",
            height: "calc((100vh - 45px) / 1.1)",
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 30,
            flexWrap: "wrap",
          }}
        >
          <div style={{ width: "50%" }}>
            <div
              style={{ display: "flex", flexDirection: "row", height: "63%" }}
            >
              <div
                style={{
                  backgroundColor: "blueviolet",
                  borderRadius: 15,
                  flex: 1,
                  margin: 4,
                  display: "flex",
                }}
              >
                <h1
                  style={{
                    margin: "auto 20px 20px auto",
                    color: "white",
                    fontSize: 45,
                  }}
                >
                  About Us
                </h1>
              </div>

              <img
                style={{ flex: 1, borderRadius: 15, margin: 4, width: "50%" }}
                src="https://i.ibb.co/m0DF5PF/alex-iby-La-Ho9-Set3b-I-unsplash.jpg"
                alt=""
              />
            </div>

            <img
              style={{
                width: "100%",
                height: "35%",
                borderRadius: 15,
                margin: "4px 10px 4px 4px",
              }}
              src="https://i.ibb.co/sjNvhZk/796854.jpg"
              alt=""
            />
          </div>

          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1 style={{ margin: 20 }}>
              some title asouhasf asf agsf agfugaufugasf gasf a
            </h1>
            <p style={{ margin: "20px 20px 0 50px" }}>
              asofuhga fagf s Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Corporis fugiat eveniet aliquid quasi, commodi
              qui odit ipsa quo adipisci sequi harum distinctio ad ab tempora ut
              consequatur impedit odio repellendus?
            </p>

            <p
              style={{
                backgroundColor: "blueviolet",
                borderRadius: 20,
                padding: "5px 10px",
                cursor: "pointer",
                fontWeight: "bold",
                marginLeft: "auto",
                color: "white",
                marginRight: 20,
              }}
            >
              Read More
            </p>
          </div>
        </section>

        <div
          style={{
            width: "100%",
            backgroundColor: "blueviolet",
            marginTop: 50,
          }}
        >
          <section
            style={{
              display: "flex",
              height: "calc((100vh - 45px) / 1.1)",
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                width: "50%",
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h1 style={{ margin: 20 }}>Services</h1>

              <p style={{ margin: "20px 20px 0 50px" }}>
                as hasufa ousfhoia sfhasf oiahsfa sifhais fioahs Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Sapiente sit rerum
                laudantium possimus voluptates eos earum hic quod autem rem,
                quae eveniet? Eaque labore at sint dolorum sequi dolore qui.
              </p>

              <Link
                exact="true"
                to="/services"
                style={{
                  backgroundColor: "white",
                  borderRadius: 20,
                  padding: "5px 10px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  marginLeft: "auto",
                  marginRight: 20,
                  color: "blueviolet",
                }}
              >
                Read More
              </Link>
            </div>

            <img
              style={{
                width: "50%",
                height: "90%",
                marginTop: "auto",
                marginBottom: "auto",
              }}
              src="https://i.ibb.co/sjNvhZk/796854.jpg"
              alt=""
            />
          </section>
        </div>
      </div>
    );
  }
}
