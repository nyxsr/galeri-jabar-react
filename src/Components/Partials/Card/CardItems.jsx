import { Action, Card } from "../../Pages/Home/style";
export default function CardItems(props) {
    return(      
        <Card>
             <img
                src={`https://source.unsplash.com/238x32${props.id}?events`}
                alt="card-images"
              />
              <a href="/"><h5>{props.eventTitle}</h5></a>
              <p>
                {props.eventDesc}
              </p>
              <Action eventsHomepage>
                <h4>Rp.{props.eventPrice}</h4>
                <a href="/">Lihat Selengkapnya</a>
              </Action>

        </Card>
    );
}