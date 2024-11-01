import { Col, Row } from "reactstrap";
import ProjectTables from "../components/dashboard/ProjectTable";

const Divisi = () => {
  return (
    <div>
      <Row>
        <Col lg="12">
          <ProjectTables />
        </Col>
      </Row>
    </div>
  );
};

export default Divisi;
