import './index.scss';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Loader from 'react-loaders';


const Project = (props) => {
   
return(
    <>
    <Card className="project-card-view">
  <Card.Img variant="top" src={props.imgPath} alt="card-img" />
  <Card.Body>
    <Card.Title style={{ textAlign: "center", fontSize: "2em", fontWeight: "bold" }}>
      {props.title}
    </Card.Title>
    <Card.Text style={{ textAlign: "center",fontSize: "1.5em" }}>
      {props.description}
    </Card.Text>
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Button variant="primary" href={props.ghLink} target="_blank">
        <BsGithub /> &nbsp;
        {props.isBlog ? "Blog" : "GitHub"}
      </Button>
      {!props.isBlog && props.demoLink && (
        <Button
          variant="primary"
          href={props.demoLink}
          target="_blank"
          style={{ marginLeft: "10px" }}
        >
          <CgWebsite /> &nbsp;
          {"Demo"}
        </Button>
      )}
    </div>
  </Card.Body>
</Card>


    <Loader type="pacman" />
    </>
)

}
export default Project