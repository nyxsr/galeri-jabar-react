import Footer from "../../Partials/Footer/Footer";
import { InputLogin, SectionLogin } from "./style"
export default function Login() {
  return (
    <>
      <SectionLogin className="container-fluid">
        <div className="row" style={{height:'80vh'}}>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <img className="mx-auto" src="https://source.unsplash.com/500x500?painting" alt="" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <form className="d-flex flex-column gap-3">
                <h1>Login Page</h1>
                <InputLogin type="text" placeholder="Username" />
                <InputLogin type="text" placeholder="Password" />
            </form>
          </div>
        </div>
      </SectionLogin>
      <Footer/>
    </>
  );
}
