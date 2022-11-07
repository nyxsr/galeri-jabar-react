import { Button, CopywritingWrapper, Image } from "../style";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";

export default function Copywriting() {
  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  const copyAnimate = useAnimation();

  useEffect(() => {
    if (inView) {
      copyAnimate.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
    if (!inView) {
      copyAnimate.start({
        x: "-100vw",
        opacity: 0,
        transition: {
          duration: 1,
        },
      });
    }
  });
  return (
    <div className="container-fluid p-0" ref={ref}>
      <Image
        batik
        src="https://raw.githubusercontent.com/nyxsr/galeri-jabar-bootstrap/master/assets/img/batik.png"
        className="w-100"
      />
      <CopywritingWrapper className="row">
        <ItemCopywriting
          image="https://raw.githubusercontent.com/nyxsr/galeri-jabar-bootstrap/master/assets/img/hipwee-857753f5617242879a9ab5a924a70859-960x640%201.png"
          title="Kisah Indah Yang Tertulis"
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            placeat necessitatibus? Quas laborum blanditiis debitis vel ab velit
            quos consequatur tenetur sapiente ad quo vitae, quam voluptas sint
            repellat quasi."
          button="Cari Tahu Selengkapnya!"
          animate={copyAnimate}
        />
      </CopywritingWrapper>
      <CopywritingWrapper second="true" className="row">
        <ItemCopywritingSecond
          image="https://raw.githubusercontent.com/nyxsr/galeri-jabar-bootstrap/master/assets/img/TTP-01-Raden-Saleh%201.png"
          title="Kisah Indah Yang Tertulis"
          desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            placeat necessitatibus? Quas laborum blanditiis debitis vel ab velit
            quos consequatur tenetur sapiente ad quo vitae, quam voluptas sint
            repellat quasi."
          button="Cari Tahu Selengkapnya!"
        />
      </CopywritingWrapper>
    </div>
  );
}

export function ItemCopywriting(props) {
  return (
    <>
      <motion.div
        className="col-md-6 text-white d-flex justify-content-center flex-column"
        animate={props.animate}
      >
        <h1>{props.title}</h1>
        <p className="w-75 mx-auto">{props.desc}</p>
        <Button findout>{props.button}</Button>
      </motion.div>
      <motion.div className="col-md-5" animate={props.animate}>
        <Image src={props.image} className="p-5 w-100 h-100" />
      </motion.div>
    </>
  );
}

export function ItemCopywritingSecond(props) {
  return (
    <>
      <motion.div className="col-md-6 text-white d-flex justify-content-center flex-column"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: '10vw' }
        }}>
      <h1>{props.title}</h1>
      <p className="w-75 mx-auto">{props.desc}</p>
      <Button findout>{props.button}</Button>
      </motion.div>
      <motion.div className="col-md-5" 
        initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: '10vw' }
      }}>
        <Image src={props.image} className="p-5 w-100 h-100" />
      </motion.div>
    </>
  );
}