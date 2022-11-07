import { EventsHead, EventsHeader } from "../../Pages/Events/style";
import { GaleriHead, GaleriHeader } from "../../Pages/Galeri/style";
import { WrapperHeader, Head } from "../../Pages/Home/style";
import { KaryaHead, KaryaHeader } from "../../Pages/Karya/style";

export default function Header() {
  return (
    <>
     <WrapperHeader>
      <Head initial={{opacity:0, scale:0.5}} animate={{ opacity:1, scale:1}} transition={{
        duration:1.5,
        delay:0.8,
        ease: [0, 0.71, 0.2, 1.01]
      }}>
        <h4>Selamat Datang di</h4>
        <h1>Galeri Lukis Jawa Barat</h1>
        <a href="/">Ayo Jelajahi</a>
      </Head>
    </WrapperHeader>
    </>
  );
}

export function VariantGaleriHeader(){
  return (
    <GaleriHeader>
    <GaleriHead initial={{opacity:0, scale:0.5}} animate={{ opacity:1, scale:1}} transition={{
      duration:1.5,
      delay:0.8,
      ease: [0, 0.71, 0.2, 1.01]
    }}>
      <h1>Galeri</h1>
      <h4>Galeri Lukis Jabar</h4>
      <blockquote>
        <q>
          Seperti lukisan yang sangat indah, namun tak terjelaskan. Seperti
          rasa perih dan kehilangan yang tersamarkan oleh cinta yang sebentar.
        </q>
        <br />
        <cite>Bernard Batubara 1989</cite>
      </blockquote>
    </GaleriHead>
    </GaleriHeader>
  )
}

export function VariantEventsHeader(){
  return(
    <EventsHeader>
      <EventsHead initial={{opacity:0, scale:0.5}} animate={{ opacity:1, scale:1}} transition={{
      duration:1.5,
      delay:0.8,
      ease: [0, 0.71, 0.2, 1.01]
    }}>
      <h1>Events</h1>
      <h4>Galeri Lukis Jabar</h4>
      <blockquote>
        <q>
          Seperti lukisan yang sangat indah, namun tak terjelaskan. Seperti
          rasa perih dan kehilangan yang tersamarkan oleh cinta yang sebentar.
        </q>
        <br />
        <cite>Bernard Batubara 1989</cite>
      </blockquote>
      </EventsHead>
    </EventsHeader>
  )
}

export function VariantKaryaHeader(){
  return(
    <KaryaHeader>
        <KaryaHead initial={{opacity:0, scale:0.5}} animate={{ opacity:1, scale:1}} transition={{
      duration:1.5,
      delay:0.8,
      ease: [0, 0.71, 0.2, 1.01]
    }}>
        <h1>Karya Seni</h1>
      <h4>Galeri Lukis Jabar</h4>
      <blockquote>
        <q>
          Seperti lukisan yang sangat indah, namun tak terjelaskan. Seperti
          rasa perih dan kehilangan yang tersamarkan oleh cinta yang sebentar.
        </q>
        <br />
        <cite>Bernard Batubara 1989</cite>
      </blockquote>
        </KaryaHead>
       </KaryaHeader>
  )
}
