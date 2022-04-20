import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import ParallaxImage from "./ParallaxImage";
import techImage from "./developerDesk.jpg";
import techDeskImage from "./appleDesk.jpg";

const Home = () => {
  return (
    <div>
      <ParallaxProvider>
        <ParallaxImage
          imgsrc={techImage}
          height="500px"
          opacity="0.7"
          speed={-20}
        >
          <Parallax scaleX={[1, 1.2, "easeInCubic"]}>
            <div>
              <h1
                style={{
                  position: "absolute",
                  color: "white",
                  width: "300px",
                }}
              >
                Welcome From{" "}
                <span style={{ color: "cyan", backgroundColor: "white" }}>
                  <a href="https://www.linkedin.com/in/md-shafiqur-rahman-493272184/">
                    Shafiq Refat
                  </a>
                </span>
              </h1>
            </div>
          </Parallax>
        </ParallaxImage>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse sit
          ipsa modi nihil quisquam mollitia delectus enim amet iste odio eius a
          ea, quas hic velit quod similique dignissimos! At incidunt dicta
          beatae. Placeat aperiam eveniet ullam natus soluta voluptatum animi
          sint laborum? Soluta ex et earum recusandae amet quia, dolores
          exercitationem iure eum officiis hic sequi id itaque nam nesciunt
          aliquam deleniti, voluptatum incidunt eligendi fugit? Nostrum dolores
          ipsam iste consectetur, debitis facilis, blanditiis nam voluptates
          perspiciatis, exercitationem esse eos modi atque possimus suscipit.
          Laudantium, dolorem eveniet! Necessitatibus ipsum, beatae ea eius
          numquam non commodi in veritatis obcaecati dolorum! Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Iure voluptates quidem saepe
          eveniet incidunt facere tempore aperiam dolorem reprehenderit
          provident nostrum voluptate, atque repellendus pariatur exercitationem
          id qui consequatur. Quam corporis reprehenderit dolore maiores ea
          tempora laudantium ad. Nostrum, eaque!
        </p>
        <ParallaxImage imgsrc={techDeskImage} height="500px" opacity="0.7">
          <h2 style={{ position: "absolute" }}>
            <Parallax rotateY={[-180, 0, "easeOutQuad"]}>
              <h3>Now you can use React Parallax.</h3>
            </Parallax>
          </h2>
        </ParallaxImage>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse sit
          ipsa modi nihil quisquam mollitia delectus enim amet iste odio eius a
          ea, quas hic velit quod similique dignissimos! At incidunt dicta
          beatae. Placeat aperiam eveniet ullam natus soluta voluptatum animi
          sint laborum? Soluta ex et earum recusandae amet quia, dolores
          exercitationem iure eum officiis hic sequi id itaque nam nesciunt
          aliquam deleniti, voluptatum incidunt eligendi fugit? Nostrum dolores
          ipsam iste consectetur, debitis facilis, blanditiis nam voluptates
          perspiciatis, exercitationem esse eos modi atque possimus suscipit.
          Laudantium, dolorem eveniet! Necessitatibus ipsum, beatae ea eius
          numquam non commodi in veritatis obcaecati dolorum! Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Corrupti eos, veritatis
          architecto amet saepe, hic maiores soluta nihil, distinctio sequi
          dolorem natus? Ipsum doloremque dolorem aut maxime consequatur, totam
          voluptas impedit pariatur possimus sunt laboriosam error eum neque,
          dolorum vel qui alias vitae? Quas id assumenda quo aut ab velit? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quaerat, distinctio
          architecto, veniam obcaecati ut eius sapiente rerum dolore, inventore
          sint magni tenetur! A, libero distinctio? Necessitatibus perspiciatis
          corporis a labore? Vero, doloribus velit maxime eligendi debitis
          expedita! Corporis officia vero molestias sed optio, eum recusandae,
          aperiam deserunt inventore, dolores praesentium.
        </p>
      </ParallaxProvider>
    </div>
  );
};

export default Home;
