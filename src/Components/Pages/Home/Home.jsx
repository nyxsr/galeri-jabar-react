import CardItems from "../../Partials/Card/CardItems";
import Header from "../../Partials/Header/Header";
import { Button, EventsSection } from "./style";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import Copywriting from "./Copywriting/Copywriting";
import Footer from "../../Partials/Footer/Footer";

export default function Home() {
  const { ref, inView } = useInView({
    threshold: "0.2",
  });

  const cardAnimate = useAnimation();

  useEffect(() => {
    if (inView) {
      cardAnimate.start({
        x:0,
        transition: {
          type: "spring",
          duration: "1.5",
          bounce: "0.4",
          ease: [0, 0.71, 0.2, 1.01],
          delay: 0.2,
        },
      });
    }
    if (!inView) {
      cardAnimate.start({
       x:'-100vw',
        transition: {
          type: "spring",
          duration: "1.5",
          bounce: "0.4",
          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
  }, [inView]);
  
  return (
    <>
      <Header />
      <EventsSection>
        <h3>Events Saat Ini</h3>
        <hr className="border border-warning" />
        <div ref={ref} className="row justify-content-between">
          <motion.div className="col-sm-1 col-md-4 my-4" animate={cardAnimate}>
            <CardItems
              id="1"
              eventTitle="KolaborAksi"
              eventDesc="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney ..."
              eventPrice="30.000"
            />
          </motion.div>
          <motion.div className="col-sm-1 col-md-4 my-4" animate={cardAnimate}>
            <CardItems
              id="2"
              eventTitle="Jawara Subang"
              eventDesc="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney ..."
              eventPrice="30.000"
            />
          </motion.div>
          <motion.div className="col-sm-1 col-md-4 my-4" animate={cardAnimate}>
            <CardItems
              id="3"
              eventTitle="Citayem Fashion Week"
              eventDesc="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney ..."
              eventPrice="30.000"
            />
          </motion.div>
        </div>
        <div className="row">
          <Button className="rounded-4">Events Selengkapnya</Button>
        </div>
      </EventsSection>
      <Copywriting/>
      <Footer/>
    </>
  );
}
