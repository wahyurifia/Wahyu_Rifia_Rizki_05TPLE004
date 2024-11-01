import { Col, Row } from "reactstrap";
import ProjectTables from "../components/dashboard/ProjectTable";

const Lembur = () => {
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

export default Lembur;
