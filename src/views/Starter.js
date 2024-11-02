import { useEffect } from "react";
import { Button, Card, CardText, Col, Row } from "reactstrap";

const dataKaryawan = [
  {
    name: "Wahyu Rifia Rizki",
    email: "wahyu@gmail.com",
    alamat: "Jln. Poris Indah, Tangerang, Banten",
    jabatan: "Manager",
  },
];
const dataJabatan = [
  {
    jabatan: "Manager",
  },
];
const dataDivisi = [
  {
    divisi: "Umum",
  },
];
const Starter = () => {
  const jumlahKaryawan = JSON.parse(
    localStorage.getItem("users") || "[]"
  ).length;

  const karyawan = localStorage.getItem("users");
  const jabatan = localStorage.getItem("jabatans");
  const divisi = localStorage.getItem("divisis");
  useEffect(() => {
    if (!karyawan) {
      localStorage.setItem("users", JSON.stringify(dataKaryawan));
    }
    if (!jabatan) {
      localStorage.setItem("jabatans", JSON.stringify(dataJabatan));
    }

    if (!divisi) {
      localStorage.setItem("divisis", JSON.stringify(dataDivisi));
    }
  }, []);
  return (
    <Row>
      <h5 className="mb-3 mt-3">Dashboard</h5>
      <Col md="6" lg="3">
        <Card body color="dark" inverse className="">
          <div className="">
            <Button color="primary block px-5 py-3" size="lg">
              <i className="bi bi-people text-lg"></i>
            </Button>
          </div>
          <div className="d-flex flex-column">
            <CardText className="my-3">Data Pegawai</CardText>
            <Button color="info" className="my-3">
              {jumlahKaryawan}
            </Button>
          </div>
        </Card>
      </Col>
      <Col md="6" lg="3">
        <Card body color="dark" inverse className="">
          <div className="">
            <Button color="primary block px-5 py-3" size="lg">
              <i className="bi bi-people text-lg"></i>
            </Button>
          </div>
          <div className="d-flex flex-column">
            <CardText className="my-3">Absensi Hari ini</CardText>
            <Button color="info" className="my-3">
              10
            </Button>
          </div>
        </Card>
      </Col>
      <Col md="6" lg="3">
        <Card body color="dark" inverse className="">
          <div className="">
            <Button color="primary block px-5 py-3" size="lg">
              <i className="bi bi-people text-lg"></i>
            </Button>
          </div>
          <div className="d-flex flex-column">
            <CardText className="my-3">Izin menunggu Konfirmasi</CardText>
            <Button color="info" className="my-3">
              5
            </Button>
          </div>
        </Card>
      </Col>
      <Col md="6" lg="3">
        <Card body color="dark" inverse className="">
          <div className="">
            <Button color="primary block px-5 py-3" size="lg">
              <i className="bi bi-people text-lg"></i>
            </Button>
          </div>
          <div className="d-flex flex-column">
            <CardText className="my-3">Lembur menunggu Konfirmasi</CardText>
            <Button color="info" className="my-3">
              6
            </Button>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default Starter;
